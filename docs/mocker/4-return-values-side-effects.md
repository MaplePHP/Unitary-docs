---
title: Return Values & Side Effects
---


## Return Values & Side Effects

When mocking methods in Unitary, you often need to define **what they return** and optionally **simulate side effects** such as exceptions, delayed responses, or dynamic output based on input arguments.

This guide explains how to configure return values and side effects using the built-in `mocker()` syntax.

---

### Return Values

To specify a return value for a mocked method:

```php
$mocker = $unit->mocker(SomeClass::class)
    ->method('getCount')
    ->willReturn(42);
```

> Whenever `getCount()` is called on the mock, it will return `42`.

---

### Return Values by Call Order

You can also define different return values for each subsequent call:

```php
$m = $unit->mocker(SomeClass::class)
    ->method('getId')
    ->willReturn(1001, 1002, 1003);
```

> On the first call, `getId()` returns `1001`, on the second `1002`, and so on.

---

### Dynamic Return Values (Closures)

Use a closure to return a value based on the method arguments:

```php
$m = $unit->mocker(SomeClass::class)
    ->method('calculate')
    ->wrap(function ($a, $b) {
        return $a + $b;
    });
```

> This makes the mock behave dynamically, like a real method.

---

### Side Effects (Exceptions)

You can simulate exceptions to test error-handling logic:

```php
$m = $unit->mocker(SomeClass::class)
    ->method('connect')
    ->willThrow(new \RuntimeException("Connection failed"));
```

> When `connect()` is called, a `RuntimeException` is thrown.

---

### Mixing Return & Throw

If you want the first call to throw and the second to return a value:

```php
$m = $unit->mocker(SomeClass::class)
    ->method('fetch')
    ->willThrowOnce(new \Exception("Failed"))
    ->willReturn("Success");
```

> `willThrowOnce()` only throws on the first call. `willReturn()` applies to the rest.

---

###Tips

* Use `willReturn(...)` for predictable results.
* Use closures for dynamic behavior or conditional logic.
* Use `willThrow(...)` or `willThrowOnce(...)` to test error handling.
* Chain these configurations to simulate realistic usage patterns.
