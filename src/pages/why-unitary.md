---
title: Why Unitary
sidebar_position: 1
---


# Unitary - A Pragmatic Testing Framework for PHP

Unitary is a modern PHP testing framework that focuses on clarity, precision, and developer control. 
It supports both unit and integration testing, with built-in support for mocking and structured validation.

Rather than following the conventional approach of relying on exceptions and rigid test structures, Unitary 
offers a validation-first philosophy. Tests are grouped, scoped, and executed with expressive callbacks that 
center the developer’s intent. Failures are surfaced with detailed context, not stack traces alone. The focus 
is on helping you understand *why* something failed, not just *that* it did. Clear exceptions messages and stack tree with 
can be thrown but then it means you have code something wrong and not a test that has been failed. 

---

## Easy to use

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$unit->group("Has a about page", function(TestCase $case) {

    $response = $this->get("/about");
    $stausCode = $response->getStatusCode();
    
    $case->validate($stausCode, function(Expect $valid) {
        $valid->isHttpSuccess();
    });
});
```

### Minimal CLI, Maximum Insight

When run via CLI, Unitary outputs validation feedback in a structured and human-readable way. The report includes line numbers, failed expressions, custom messages, and the exact input that failed.

```
php vendor/bin/unitary
```

#### Response


![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli.png)


---

## User-friendly

The goal of Unitary is not to offer “yet another” testing syntax. The goal is to give developers the structure and feedback they need to **understand and control** their code under test, without the friction of abstract base classes, unnecessary annotations, or opinionated rules.

### Zero Configuration
Unitary works out of the box. It uses Composer’s autoloading and runs via a single CLI command. Test files follow a simple naming pattern (unitary-*.php) and can live anywhere in your project directory. And all of this happens in plain PHP—no DSL, no YAML config, no extensions.

---

## Unitary is a framework

Unitary does not just support **unit** and **integration** testing but also includes a native **mocking engine**. You can mock classes in one line, define method behavior explicitly, and even partially override behavior by keeping original methods while wrapping or stubbing others. This allows realistic testing of side effects, while retaining internal logic where trust exists.
