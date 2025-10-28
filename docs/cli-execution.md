---
title: CLI & Execution
sidebar_position: 3
---
import ConfigTable from './_includes/config-table.mdx';


# CLI & Execution

Unitary includes a flexible, developer-friendly CLI for running, inspecting, and managing your tests.
This page documents all available commands, options, and examples.

---

## Run All Tests

Runs every test Unitary can discover in the default test path.

```bash
php vendor/bin/unitary
```

or explicitly:

```bash
php vendor/bin/unitary run
```

---

## Show Help

Displays the built-in help menu, listing all supported commands, flags, and descriptions.

```bash
php vendor/bin/unitary --help
```

---

## Generate a Test Template

Creates a ready-to-use boilerplate test you can copy into your test files.

```bash
php vendor/bin/unitary template
```

---

## Show Only Errors

Limits CLI output to tests that failed or produced validation errors.
Ideal when you want a concise summary of what went wrong.

```bash
php vendor/bin/unitary --errorsOnly
```

---

## Run a Test by Hash

Each executed test group is assigned a unique hash ID.
You can re-run a specific test by providing its hash:

```bash
php vendor/bin/unitary --show=b0620ca8ef6ea7598e5ed56a530b1983
```

> **Tip:** Hashes are displayed in the CLI output after each test run.

---

## Run a Named Test Group

You can name your test groups and run them directly by name.
Names are defined via a `TestConfig` and can be reused across files.

### Define a Named Group

```php
$config = TestConfig::make("This is a test message")
    ->withName('unitary');

group($config, function (TestCase $case) {
    // Your test cases go here
});
```

### Run by Name

```bash
php vendor/bin/unitary --show=unitary
```

> **Note:**
>
> * Named groups can be reused across multiple test files.
> * If a test group was marked as *skipped*, running it by name will **force it to execute** and display its validations.

---

## Configuration options

<ConfigTable showArrayTypes={false} />


### Change the Test Path

Specify a custom directory (absolute or relative) where Unitary should search for tests.

```bash
php vendor/bin/unitary --path="tests/"
```

---

### Exclude Files or Directories

Exclude specific files or folders (comma-separated, relative to the `--path` value):

```bash
php vendor/bin/unitary --exclude="tests/legacy/*, */extras/*"
```

> **Note:**
> The `vendor` directory is *not* excluded automatically — add it manually if needed.

---

### Smart Search

Enables recursive test discovery.
If no tests are found in the provided path, Unitary will automatically move upward through parent directories until a valid test suite is located.

```bash
php vendor/bin/unitary --path="app/Http" --smartSearch
```

> **Tip:**
> Smart Search is perfect for monorepos, submodules, or projects with tests in non-standard locations.

---


## Summary

The Unitary CLI is designed for flexibility, from full test runs to precise, targeted executions using names, hashes, or paths.
Combine options like `--smartSearch`, `--errorsOnly`, and `--failFast` to fine-tune your testing workflow and focus on what matters most.