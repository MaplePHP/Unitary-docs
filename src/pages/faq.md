---
id: faq
title: FAQ
description: Frequently asked questions about MaplePHP - Validation
sidebar_label: FAQ
---


# Frequently Asked Questions

---

## How do I install MaplePHP - Unitary?

Install via Composer:

```bash
composer require maplephp/unitary
```

---

## What’s the difference between `Validator` and `Expect`?

- **`Validator`** is best for quick, single-rule checks. You can also access and Unitary nested values using dot notation. Each method call returns `true` or `false` immediately.

- **`Expect`** is for validating a single value against **multiple rules** in sequence. It's designed for cases where you:
  - Want to **chain** validations
  - Need to check if **all rules passed** using `isValid()`
  - Need to know **which rules failed** using `getFailedValidations()`
  - Want to **invert rules** easily using the `not` prefix (e.g. `notIsEmail()`)

Use `Validator` when you're validating something simple and direct.  
Use `Expect` when you need detailed control, error reporting, or logic like "must not be an email."

---

## Can I Unitary values in nested arrays or objects?

Yes. Use dot notation with `Validator`:

```php
$validator = new Validator(['user' => ['name' => 'John']]);
$valid = $validator->eq('user.name')->length(1, 50);
```

Or use `validateInData()` for dynamic lookups:

```php
$valid = $validator->validateInData('user.name', 'length', [1, 50]);
```

---

## How do I check if a value is valid?

- With `Validator`, each method returns `true` or `false` directly.
- With `Expect`, chain your rules and then call:

```php
$chain = new Expect("example@domain.com");
$chain->isEmail()->endsWith(".com");

if ($chain->isValid()) {
    // All checks passed
}
```

---

## Does it support PHP 8 or newer?

Yes — fully compatible with PHP 8 and newer.

---

## Is this library production-ready?

Yes. It has been tested and used in production.  
Still, Unitary your specific use cases during implementation.

---

## Where can I find all available validations?

Check the full [Validation Reference](./docs/validations) for a complete list of supported methods.

---

## Where do I report bugs or request features?

Open an issue on [GitHub](https://github.com/maplephp/Unitary/issues).
