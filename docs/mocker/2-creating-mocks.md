---
title: Creating mocks
---

# Creating mocks

Unitary's mocking engine is designed to make mocking in PHP simpler, more expressive, and better integrated into your test flow. Unlike many traditional tools, Unitary removes unnecessary boilerplate and lets you focus on the behavior you want to verify.

---

## Basic Example

```php
group("Mocking a PSR-7 Stream", function(TestCase $case) {
    // Create a mock of a PSR-7 StreamInterface
    $stream = $case->mock(StreamInterface::class);

    // Inject the mock into a Response object
    $response = new Response($stream);
    
    $case->validate($response->getBody(), function(Expect $expect) {
        $expect->isInstanceOf(StreamInterface::class);
    });
});
```
_This is actually all you need to do to mock a class._

## Validate Method Behaviors

You can configure and validate some method behaviors in Unitary mocker. This is done via a `MethodRegistry` callback passed as the second argument to `mock()`.

This is similar to exposing the mocked class, giving you full control to define expectations and behaviors for specific methods within it.

```php
group("Testing a User Registration Service", function(TestCase $case) {

    $mailer = $case->mock(Mailer::class, function(MethodRegistry $method) {

        // Specify "all" the methods from the Mailer class here that you want to
        // configure with custom expectations and return behaviors.
        $method->method("sendWelcomeEmail")
            ->called(1)
            ->willReturn(true);

        $method->method("getFromAddress")
            ->willReturn("user@example.com");
    });

    $service = new UserService($mailer);

    $case->validate($service->register("user@example.com"), function(Expect $expect) {
        $expect->isTrue();
    });
});
```

#### Sample Error Output

When a mock expectation fails, Unitary shows a detailed, test-aware error message:

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-mock-fail.png)

---

## Features Overview

| Feature                       | Description                                                              |
|-------------------------------|--------------------------------------------------------------------------|
| `called(timeCount)`           | Ensures the method is called exactly `timeCount` times                   |
| `hasBeenCalled()`             | Verifies that the method has been called at least once                   |
| `calledAtLeast(timeCount)`    | Ensures the method is called `timeCount` times or more                   |
| `calledAtMost(timeCount)`     | Ensures the method is called `timeCount` times or fewer                  |
| `withArguments(...args)`      | Validates arguments passed to the method in its first call               |
| `withArgumentsForCalls(...)`  | Validates arguments for multiple calls with distinct expected parameters |
| `withArgumentAt(pos, val)`    | Validates a specific argument position for a given call index            |
| `willReturn(val)`             | Defines return value(s) for the method                                   |
| `hasReturn()`                 | Checks if a return value has been set                                    |
| `willThrow(throwable)`        | Configures the method to throw an exception every time it's called       |
| `willThrowOnce(throwable)`    | Configures the method to throw an exception only once                    |
| `keepOriginal()`              | Executes the original method instead of mocking it                       |
| `hasClass(name)`              | Ensures that the method belongs to the specified class                   |
| `hasName(name)`               | Ensures that the method has the specified name                           |
| `isStatic()`                  | Ensures the method is static                                             |
| `isPublic()`                  | Ensures the method has public visibility                                 |
| `isPrivate()`                 | Ensures the method has private visibility                                |
| `isProtected()`               | Ensures the method has protected visibility                              |
| `isAbstract()`                | Ensures the method is abstract                                           |
| `isFinal()`                   | Ensures the method is final                                              |
| `returnsReference()`          | Checks if the method returns by reference                                |
| `hasReturnType()`             | Checks if the method declares a return type                              |
| `isReturnType(type)`          | Validates that the return type matches the expected type                 |
| `isConstructor()`             | Checks if the method is a constructor (`__construct`)                    |
| `isDestructor()`              | Checks if the method is a destructor (`__destruct`)                      |
| `hasParams()`                 | Ensures the method has at least one parameter                            |
| `hasNotParams()`              | Ensures the method has no parameters                                     |
| `hasParamsTypes()`            | Checks that all parameters have type declarations                        |
| `paramsHasCount(length)`      | Ensures the method has exactly `length` parameters                       |
| `paramIsType(index, type)`    | Ensures the parameter at index `index` has the specified data type       |
| `paramHasType(index)`         | Checks if parameter at index `index` has a type declared                 |
| `paramHasDefault(index, val)` | Checks if parameter at index `index` has the given default value         |
| `paramIsOptional(index)`      | Checks if parameter at index `index` is optional                         |
| `paramIsReference(index)`     | Checks if parameter at index `index` is passed by reference              |
| `paramIsVariadic(index)`      | Checks if parameter at index `index` is variadic (spread)                |
| `paramIsSpread(index)`        | Alias of `paramIsVariadic(index)`                                        |
| `hasDocComment()`             | Validates that the method has a docblock                                 |
| `hasFileName(name)`           | Ensures the method is defined in the given file name                     |
| `startLine(n)`                | Checks if the method starts on the specified line number                 |
| `endLine(n)`                  | Checks if the method ends on the specified line number                   |

---

## Should You Use It for Code Quality Checks?

Unitary's mocking API includes optional checks like `hasDocComment()` and `isPublic()`, which can help identify inconsistencies or incomplete interfaces. While helpful during development, these are not replacements for dedicated static analysis tools like PHPStan or Psalm. Think of them as guardrails — not primary validation sources.
