---
title: Method Expectations & Behaviors
---



# Method Expectations & Behaviors

Even though Unitary allows you to mock classes in a single line, there are times when you may want more control.

When mocking methods in Unitary, you can optionally define how they should behave and how they are expected to be used.  This guide explains how to configure method behaviors and expectations using the `mock()` and `method()` APIs when needed.

---

## Return Values

To specify a static return value:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('getCount')->willReturn(42);
});
```

Whenever `getCount()` is called on the mock, it returns `42`.

---

## Return Values by Call Order

You can define a sequence of return values for successive calls:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('getId')->willReturn(1001, 1002, 1003);
});
```

On the first call, it returns `1001`; on the second, `1002`; on the third, `1003`, and so on.

---

## Keeping original behavior

Use `keepOriginal()` when a mocked method should run **unchanged**.

```php
$method->method('getFromEmail')->keepOriginal();
```

The method executes exactly as it does on the real class. No interception, no modification, no simulation.

This is useful when a mock only needs control over specific methods and the remaining behavior should stay real. It allows a mocked instance to participate in an integration-oriented test without replacing logic that is not relevant to the validation.

`keepOriginal()` makes the intent explicit: the method exists on the mock, but its behavior is untouched.

---

## Wrapping behavior

Use `wrap()` when a method should run **custom test logic while still operating on the real class instance**.

```php
$method->method('sendEmail')->wrap(function (string $email) {
    if (!$this->isValidEmail($email)) {
        return 'FAILED';
    }

    return "email:{$email}";
});
```

The wrapped method executes with `$this` bound to the original class instance. This allows the wrapper to call real helper methods, rely on internal state, and reuse existing validation logic.

Wrapping neither replaces the method nor leaves it untouched. It modifies execution at a specific point while keeping the surrounding behavior real.

Use wrapping when you need control without losing access to the original implementation.

---

## Throwing Exceptions

To simulate errors, you can configure a method to throw:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('connect')->willThrow(new \RuntimeException('Connection failed'));
});
```

Whenever `connect()` is called, a `RuntimeException` is thrown.

---

## Mixing `throw` and `return`

You can combine `willThrowOnce()` and `willReturn()` to define behavior over time:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('fetch')
        ->willThrowOnce(new \Exception('Failed'))
        ->willReturn('Success');
});
```

The first call to `fetch()` throws an exception; the second returns `'Success'`.

---

## Argument Expectations

You can ensure the method receives exact arguments when called:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('addFromEmail')
        ->withArguments('john.doe@gmail.com', 'John Doe');
});
```

This verifies that the method is called with the given values in the correct order.

---

## Arguments per Call

If you expect different arguments on each call:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('addFromEmail')
        ->withArgumentsForCalls(
            ['john.doe@gmail.com', 'John Doe'],
            ['jane.doe@gmail.com', 'Jane Doe']
        );
});
```

The first call must match the first argument set, the second call the second set, and so on.

---

## Call Count Expectations

You can also enforce how many times a method must be called:

```php
$someClass = $case->mock(SomeClass::class, function (MethodRegistry $method) {
    $method->method('save')->called(1);
});
```

This ensures `save()` is called exactly once. If not, the test fails.

### Available call count methods:

| Method       | Description                              |
| ------------ | ---------------------------------------- |
| `called(1)`  | Must be called exactly once              |
| `called(0)`  | Must never be called                     |
| `atLeast(2)` | Must be called two or more times         |
| `atMost(3)`  | Must not be called more than three times |

---

## Additional Notes

* `willReturn(...)` sets fixed outputs.
* `wrap(...)` gives you dynamic behavior and full class context.
* `willThrow(...)` and `willThrowOnce(...)` simulate failure scenarios.
* `withArguments(...)` and `called(...)` help you assert correct usage.
* You can combine all of them for powerful test behavior simulation.

