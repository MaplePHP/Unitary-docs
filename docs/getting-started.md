---
title: Getting Started
sidebar_position: 2
---

# Getting Started in under a minute

Welcome to **Unitary**, a expressive unit testing framework built for modern PHP projects. Follow this guide to get up and running with Unitary in just a few steps.

---

## 1. Installation

To install Unitary as a development dependency, run:

```bash
composer require --dev maplephp/unitary
```

---

## 2. Create a Test File

By default, Unitary will scan for all files prefixed with `unitary-` recursively from your project's root directory (where your `composer.json` file is located). The `vendor` directory is excluded automatically.

**Example:**

Create a file named:

```
tests/unitary-request.php
```

> **Note:** All your PHP classes will be autoloaded through Composer, so you can use them directly in your test file.

### Example Test Case
You can copy and paste the boilerplate test code below to your test file. 
You can also get a boilerplate code with the command `php vendor/bin/unitary --template`.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$unit = new Unit();
$unit->group("Your test subject", function (TestCase $case) {

    $case->validate("Your test value", function(Expect $valid) {
        $valid->isString();
    });
    
});
```

---

## 3. Run the Tests

Once your test files are ready, run the following command from your project root (where `composer.json` exists):

```bash
php vendor/bin/unitary
```

_Help is one short command away `php vendor/bin/unitary --help`._


---

## 4. Optional: Add a Composer Script

For convenience, add a custom script to your `composer.json` file:

```json
"scripts": {
    "test": "php vendor/bin/unitary"
}
```

Now you can run your tests with:

```bash
composer test
```

To pass arguments to Unitary you will need to separate the runed script and the first arguments with `--`; 

```bash
composer test -- --help
```