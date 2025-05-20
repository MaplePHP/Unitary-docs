---
title: How to Mock
sidebar_position: 1
---

# How to Mock

Unitary's mocking engine is designed to make mocking in PHP simpler, more expressive, and better integrated into your test flow. Unlike many traditional tools, Unitary removes unnecessary boilerplate and lets you focus on the behavior you want to verify.

## Why Use Unitary for Mocking?

* **One-liner mock creation**: Quickly mock any class without setup or external configuration.
* **Fluent configuration**: Control method visibility, call expectations, parameter types, and return values using a fluid, readable syntax.
* **Type-aware defaults**: Automatically returns default values based on expected types, or configure them as needed.
* **Test-local state**: Each mock is isolated within its test context.
* **No dependencies or config files**: Everything is handled in plain PHP.

Unitary makes mocking feel like a natural extension of writing tests — not a separate task.

---

## Basic Example

```php
$unit->group("Mocking a PSR-7 Stream", function(TestCase $case) {
    // Create a mock of a PSR-7 StreamInterface
    $stream = $case->mock(StreamInterface::class);

    // Inject the mock into a Response object
    $response = new Response($stream);
    
    $case->validate($response->getBody(), function(Expect $expect) {
        $expect->isInstanceOf(StreamInterface::class);
    });
});
```

## Customizing Method Behavior

Mock configuration is done via a `MethodRegistry` callback passed as the second argument to `mock()`.

```php
$unit->group("Testing a User Registration Service", function(TestCase $case) {

    $mailer = $case->mock(Mailer::class, function(MethodRegistry $method) {
        $method->method("sendWelcomeEmail")
            ->called(1)
            ->paramIsType(0, 'string')
            ->willReturn(true);

        $method->method("getFromAddress")
            ->willReturn("noreply@example.com");
    });

    $service = new UserService($mailer);

    $case->validate($service->register("user@example.com"), function(Expect $expect) {
        $expect->isTrue();
    });
});
```

## Features Overview

| Feature                   | Description                                                         |
| ------------------------- | ------------------------------------------------------------------- |
| `called(n)`               | Ensures a method is called `n` times                                |
| `willReturn(value)`       | Sets a return value                                                 |
| `paramIsType(i, type)`    | Asserts the parameter at index `i` is of the specified type         |
| `paramHasDefault(i, val)` | Asserts that the parameter at index `i` has the given default value |
| `paramIsOptional(i)`      | Checks if the parameter is optional                                 |
| `paramIsReference(i)`     | Ensures the parameter is passed by reference                        |
| `hasDocComment()`         | Validates that the method has a docblock                            |
| `isPublic()`              | Ensures the method has public visibility                            |

---

## Sample Error Output

When a mock expectation fails, Unitary shows a detailed, test-aware error message:

```text
 FAIL  ..tests/UserServiceTest.php - Testing a User Registration Service

Error: Mock method "sendWelcomeEmail" failed

Failed on line 31:
 → $mailer = $case->mock(Mailer::class, function (MethodRegistry $method) {
   called         → failed
                    Expected: "1" | Actual: "2"

Passed: 3/4 - 448b06d9127fbca608168e769acd3c7c2
Total: 3/4 • Peak memory usage: 5194.6 KB
```

---

## Should You Use It for Code Quality Checks?

Unitary's mocking API includes optional checks like `hasDocComment()` and `isPublic()`, which can help identify inconsistencies or incomplete interfaces. While helpful during development, these are not replacements for dedicated static analysis tools like PHPStan or Psalm. Think of them as guardrails — not primary validation sources.

---

## When to Use Unitary Mocking

Use Unitary's mocking engine when:

* You want fast, clean mocking integrated into test cases.
* You're testing services or controllers with dependencies.
* You want to verify method usage and enforce call expectations.

Avoid using mocks for code you don't control — prefer real instances when testing third-party libraries unless behavior isolation is required.

---

## Summary

Unitary's mocking makes test doubles simple, expressive, and PHP-native. It’s great for isolating behavior and controlling test flow without external dependencies. Whether you're mocking a mailer, API client, or repository class, the goal is the same: reduce friction and increase confidence in your tests.

For full flexibility and developer-friendly syntax — Unitary keeps you in control.
