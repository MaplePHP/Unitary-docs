---
title: Mocker introduction
sidebar_position: 1
---

### Mocking is Purely Magical

Mocking has traditionally been one of the more tedious parts of writing tests in PHP. Boilerplate code, rigid syntax, and endless configuration have turned what should be a lightweight task into a chore. But with **Unitary**, mocking becomes something else entirely: *effortless, expressive, and dare we say, magical.*

**Unitary's mocking engine redefines the developer experience.**

With a single line, you can mock entire classes — and not just with static defaults. Unitary gives you fluent control over methods, parameters, return types, and even default values tied to data types or specific methods. It's all baked into a system that feels dynamic and intuitive, not constrained and mechanical.

Want to mock a class and configure it inline? Go ahead.
Need to control what a method returns, based on its argument or expected return type? No problem.
Want a mock to honor PHP’s type system, return meaningful defaults, or even reference parameters? It just works.

Unitary isn't just about mocking faster — it's about mocking smarter. Here's what sets it apart:

* **Mock any class in one line**: Pass a class name and get a fully functioning mock out-of-the-box — ready to use in a real constructor or interface without boilerplate or stubs.
* **Fluent method control**: Easily define return values, parameter constraints, references, counts, and optional arguments — all with an elegant, fluid syntax.
* **Type-aware defaults**: Unitary automatically mocks return values based on expected types — but if you want control, override defaults globally or per method.
* **Immutable mock contexts**: Mock configurations are tied immutably to the `TestCase`, ensuring test isolation and making mocking state explicit and predictable.
* **No mocking hell**: No XML config, no extra setup files, no fragile introspection — just pure PHP logic inside your tests.

The power lies not just in what you can do — but in **how little effort it takes** to do it. Unitary doesn’t interrupt your flow with unnecessary ceremony. It embraces PHP’s capabilities and extends them into a mocking experience that feels native, expressive, and fun.

Whether you're testing a simple mailer or complex object chains involving nested dependencies, Unitary is built to stay out of your way and help you get there faster — with fewer lines, clearer intent, and a sense of control that traditional mocking tools rarely offer.

Mocking should never feel like a necessary evil. With Unitary, it doesn’t.
It feels like a superpower.

```php
$unit->group("Mocking is now fun", function($case) {

    // Mocked!
    $stream = $case->mock(Stream::class);
    
    // Works! (Passed a valid mocked instance of Stream)
    $response = new Response($stream);
    $content = $response->getBody()->getContents();    

    $case->validate($content, function(Expect $inst) {
        $inst->hasResponse();
    });
});
```