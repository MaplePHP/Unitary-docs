---
title: Return Values & Side Effects
---

# Return Values & Side Effects

When mocking methods in Unitary, you often need to define **what they return** and optionally **simulate side effects** such as exceptions, delayed responses, or dynamic output based on input arguments.

This guide explains how to configure return values and side effects using the built-in `mocker()` syntax.

---

### Return Values

To specify a return value for a mocked method:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method('getCount')->willReturn(42);
        
});
```

> Whenever `getCount()` is called on the mock, it will return `42`.

---

### Return Values by Call Order

You can also define different return values for each subsequent call:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method('getId')->willReturn(1001, 1002, 1003);
    
});
```

> On the first call, `getId()` returns `1001`, on the second `1002`, and so on.

---

### With Arguments

Will pass custom arguments to method.

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method("addFromEmail")
        ->withArguments("john.doe@gmail.com", "John Doe");
        
});
```

> Whenever `addFromEmail()` is called on the mock, it will pass `john.doe@gmail.com` as first and `John Doe` as second argument.

---

### Return Values by Call Order

You can also define different custom arguments for each subsequent call:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method("addFromEmail")
        ->withArgumentsForCalls(
            ["john.doe@gmail.com", "John Doe"], 
            ["jane.doe@gmail.com", "Jane Doe"]
        );
        
});
```

> On the first call, it will pass the arguments `addFromEmail("john.doe@gmail.com", "John Doe")` and on the second `addFromEmail("jane.doe@gmail.com", "Jane Doe")`, and so on.

---

### Dynamic Return Values (Closures)

Use a closure to return a value based on the method arguments:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method('calculate')->wrap(function ($a, $b) {
        return $a + $b;
    });
    
});
```

> This makes the mock behave dynamically, like a real method.

---

### Side Effects (Exceptions)

You can simulate exceptions to test error-handling logic:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method('connect')->willThrow(new \RuntimeException("Connection failed"));
    
});
```

> When `connect()` is called, a `RuntimeException` is thrown.

---

### Mixing Return & Throw

If you want the first call to throw and the second to return a value:

```php
$someClass = $case->mock(SomeClass::class, function(MethodRegistry $method) {

    $method->method('fetch')
        ->willThrowOnce(new \Exception("Failed"))
        ->willReturn("Success");
        
});
```

> `willThrowOnce()` only throws on the first call. `willReturn()` applies to the rest.

---

### Tips

* Use `willReturn(...)` for predictable results.
* Use closures for dynamic behavior or conditional logic.
* Use `willThrow(...)` or `willThrowOnce(...)` to test error handling.
* Chain these configurations to simulate realistic usage patterns.
