---
title: Partial mock (proxy)
sidebar_position: 2
---

### Partial mock (proxy)

## What Is a Partial Mock and Why Is It Powerful?

In real-world testing, you often want to test how your classes behave together — without completely replacing them with fake objects. That’s where **partial mocks** come in.

A **partial mock** lets you selectively override certain methods on a class, while leaving the rest of the class fully functional. This means you can:

* Let some methods run as they normally would (keepOriginal)
* Inject your own behavior where needed (wrap)
* Stub out specific actions (willReturn)

In Unitary, partial mocking is first-class — not an afterthought. It gives you **surgical precision** to test just what you want, without breaking the rest of your object’s internal behavior.

### Why is this so useful?

Let’s say you’re testing a service that sends emails. You want to:

* Use the real logic to build and render the email
* But you **don’t want to actually send** the email
* And maybe you want to **observe or enhance** how the message body is constructed

With a full mock, you'd lose the real logic entirely. With a partial mock, you keep the parts that matter — and skip the parts that don't.

## Example 
```php
$unit->group("Send welcome email (with partial Mailer mock)", function ($case) {

    // Create a mock of the Mailer class
    $mailer = $case->mock(Mailer::class, function (MethodPool $mock) {
        
        // Keep the real implementation of renderTemplate() — we want to use actual template rendering
        $mock->method("renderTemplate")->keepOriginal();

        // Wrap buildBody() to customize how the email body is built, but still use renderTemplate() internally
        $mock->method("buildBody")->wrap(function() {
            return $this->renderTemplate("HelloWorld", "Lorem ipsum dolor sit amet.");
        });
        
        // Stub the send() method to prevent real email sending — simulate success instead
        // Also validate that it must be called exactly once
        $mock->method("send")->willReturn(true)->called(1);
    });

    // Pass the partially mocked Mailer into the real EmailService
    $service = new EmailService($mailer);

    // Call the method we want to test — which internally calls buildBody() and send()
    $result = $service->sendWelcomeEmail("john@example.com");

    // Validate that the email sending process completed successfully (send() returned true)
    $case->validate($result, function (Expect $valid) {
        $valid->isTrue();
    });

    // Validate the final email body that was "built" during the test
    $case->validate($mailer->getBody(), function (Expect $valid) {
        $valid->isFullHtml();
        $valid->contains("HelloWorld");
        $valid->contains("Lorem ipsum dolor sit amet.");
    });
});
```

### How Unitary Makes This Easy

* **keepOriginal**
  Tells Unitary to use the real method from the original class. Perfect when you trust a method’s logic and want to keep using it during the test.

* **wrap**
  Lets you redefine a method using your own function. You can add extra logic, conditionally call the real method, or return a custom result.

* **willReturn**
  Stubs a method to return a fixed value. This is ideal for isolating side effects like external API calls, database writes, or email sends.

Combined, these give you the best of both worlds: **real behavior where it matters**, and **full control where it doesn’t**.


With Unitary, partial mocks aren’t just a workaround — they’re a core feature designed to help you test smarter, not harder.