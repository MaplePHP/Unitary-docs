---
title: Introduction to Mocker
sidebar_position: 1
---

# Mocking is Purely Magical

Mocking in Unitary is built for real-world testing. It’s fast to write, clear to read, and powerful. Mocking in PHP has never felt this smooth. With Unitary, you can mock classes in a single line, control methods with fluent syntax, and get intelligent defaults that just work. No boilerplate. No config hell. Just clean, expressive and powerful testing.

```php
group("Mocking example", function(TestCase $case) {
    // That is it, the Mailer class has been mocked!
    $mailer = $case->mock(Mailer::class);
    
    // So do not worry, it will "not" send anything! :)
    $mailer->addFromAddress("john.doe@gmail.com");
    $mailer->addToAddress("jane.doe@hotmail.com");
    $mailer->send();
});
```


> **Every method expectation is expressive:** call counts, parameter types, return values, exceptions, even dynamic logic based on arguments and all handled with consistent syntax designed to mirror how you think about behavior.  You can keep original methods. You can throw once, then return. You can match by argument. You can validate return types. And you do it without breaking flow.

That’s what makes Unitary’s mocking different. It was designed to belong in your test, not beside it.

---

## Why Use Unitary for Mocking?

* **One-liner mock creation**: Quickly mock any class without setup or external configuration.
* **Fluent configuration**: Control method visibility, call expectations, parameter types, and return values using a fluid, readable syntax.
* **Type-aware defaults**: Automatically returns default values based on expected types, or configure them as needed.
* **Test-local state**: Each mock is isolated within its test context.
* **No dependencies or config files**: Everything is handled in plain PHP.
* **IDE autocompletion**: If you use a great IDE like JetBrains PHPStorm autocompletion will work event for mocked classes. 

Unitary makes mocking feel like a natural extension of writing tests, and not a separate task.
