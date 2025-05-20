---
title: Partial Mocks & Wrapping
sidebar_position: 2
---

# Partial Mocks & Wrapping

Unitary gives you powerful control over how methods are mocked — not just whether they're mocked. With **partial mocking** and **method wrapping**, you can combine real behavior with custom test logic, resulting in more focused and realistic tests.

---

## Partial Mocking

Partial mocking allows you to selectively keep the original implementation of some methods while mocking others. 
This is ideal when preserving trusted logic or bypassing side effects like logging or email sending.

**Use Case:** mock `writeToDisk()` to skip file writes, but keep `formatMessage()` for real formatting.

### Example

```php
$logger = $case->mock(Logger::class, function(MethodRegistry $mock) {
    $mock->method("formatMessage")->keepOriginal();
    $mock->method("writeToDisk")->willReturn(true);
});

$logger->log("Notice", "Something happened");
```

---

## Method Wrapping

Method wrapping gives you the ability to override a method’s behavior while still having access 
to the original instance and logic. Use it when you want to alter behavior while still reusing 
internal logic or dependencies.

**Use Case:** wrap `save()` to prevent real writes but still call `validateData()`. Also might 
be useful when input arguments also matter.

### Example

```php
$repository = $case->mock(UserRepository::class, function(MethodRegistry $mock) {
    $mock->method("save")->wrap(function($data) {
        $this->validateData($data);
        return true; // pretend the save worked
    });
});

$repository->save(['name' => 'Alice']);
```

---

## Combined Example

This example brings together both partial mocking and method wrapping. Here, we:

* Keep the real behavior of `formatMessage()` (partial mocking)
* Wrap the `log()` method to change its behavior but still use the formatter
* Stub the `writeToDisk()` method to prevent real I/O

```php
use MaplePHP\Unitary\{Unit, TestCase, MethodRegistry, Expect};

$unit->group("Logging flow with custom override", function (TestCase $case) {

    $logger = $case->mock(Logger::class, function (MethodRegistry $mock) {

        // Keep the original formatter logic
        $mock->method("formatMessage")->keepOriginal();

        // Override log() to inspect inputs and use formatter
        $mock->method("log")->wrap(function($level, $message) {
            $formatted = $this->formatMessage($level, $message);
            $this->writeToDisk($formatted);
            return $formatted;
        });

        // Stub the writeToDisk() method
        $mock->method("writeToDisk")
            ->willReturn(true)
            ->called(1);
    });

    $output = $logger->log("INFO", "System initialized");

    $case->validate($output, function (Expect $expect) {
        $expect->contains("[INFO]");
        $expect->contains("System initialized");
    });
});
```

---

## Summary

Unitary supports realistic, expressive testing by letting you mock only what you need. Instead of fully mocking a class and losing valuable internal logic, partial mocking and wrapping give you precise control with minimal effort.

With Unitary:

* You can **trust what works**
* **Mock what doesn’t**
* And **override what’s needed** — all while writing clear, maintainable tests
