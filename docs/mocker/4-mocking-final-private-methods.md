---
title: Mocking Final & Private Methods
---

## Mocking Final & Private Methods

> **Unitary doesn’t support mocking final or private methods — by design.**

This isn’t a technical limitation, it’s an intentional choice. Mocking in Unitary is meant to reflect how your system is structured, not bypass it.

---

## Focus on Testable Design

Unitary encourages testing *behavior*, not internal implementation details. That means relying on public methods and substitutable dependencies.

If you find yourself needing to mock a private or final method, it's often a sign the design could be improved.

---

## Use Interfaces Instead of Final Classes or Methods

Final classes and methods can’t be mocked in PHP, not in Unitary or any other framework. But if you rely on an interface instead of the concrete class, mocking becomes straightforward.

### Why Interfaces Help

Interfaces describe behavior without tying you to an implementation. If your class depends on an interface, you can easily replace it in tests, no matter how the real class is built.

### Example

```php
interface MailerInterface {
    public function send(string $to, string $subject, string $body): bool;
}
```

#### Even if the real mailer is final:

```php
final class Mailer implements MailerInterface {
    public function send(string $to, string $subject, string $body): bool
    {
        // Implementation details
    }
}
```

#### Your application can remain flexible:

```php
class NotificationService {
    public function __construct(private MailerInterface $mailer) {}

    public function sendWelcome(string $email): bool {
        return $this->mailer->send($email, 'Welcome', 'Thanks for signing up.');
    }
}
```

#### Then in you test, just mock the interface:

```php
$unit->group('Sends welcome email', function ($test) {
    $mailer = $test->mock(MailerInterface::class, function ($mock) {
        $mock->method('send')->willReturn(true)->called(1);
    });

    $service = new NotificationService($mailer);
    $result = $service->sendWelcome('john@example.com');

    $test->validate($result, fn($v) => $v->isTrue());
});
```

You’re testing behavior, not implementation. That’s the goal.

---

## Why You Shouldn't Mock Private Methods

Private methods are internal details. They aren't meant to be called directly, and they aren’t meant to be mocked.

If a private method contains logic important enough to test, consider:

* Moving it to its own class
* Making it public or protected in a dedicated helper
* Rethinking its role in the design

The aim is to keep logic visible and testable.

---

**If mocking feels difficult, the code may need a small design adjustment.**
Unitary supports clear, testable architecture, use interfaces, inject dependencies, and focus on behavior.
