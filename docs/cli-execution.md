---
title: CLI & Execution
sidebar_position: 3
---

# CLI & Execution

Unitary provides a powerful CLI to run and manage tests efficiently. Below is a complete guide to all supported command-line options and their usage.

---

## Run All Tests

Runs all available tests from the default path.

```bash
php vendor/bin/unitary
```

---

## Show Help

Displays the help menu with all available flags and options.

```bash
php vendor/bin/unitary --help
```

---

## Get Boilerplate Code

Returns boilerplate test code that you can copy and paste into your test files.

```bash
php vendor/bin/unitary --template
```

---

## Show Only Errors

Displays only the tests that failed or produced validation errors.

```bash
php vendor/bin/unitary --errors-only
```

---

## Run Specific Test by Hash

After running a test, a hash key is displayed. The `--show` option accepts this hash. It will run **only the validations** for the specific test group identified by that hash:

```bash
php vendor/bin/unitary --show=b0620ca8ef6ea7598eaed56a530b1983
```

---

## Naming and Running Specific Test Groups

You can assign names to one or multiple test groups, even reuse the same name across different test files and groups. This allows you to selectively run or inspect specific tests via the CLI.

### 1. Define a Named (Manual) Test Group

By using a `TestConfig` with `withName()`, you can define a test group that is excluded from the default batch run:

```php
$config = TestConfig::make("This is a test message")->withName('unitary');

group($config, function (TestCase $case) {
    // Your test cases go here
});
```

### 2. Run Only That Test Group via CLI

Use the `--show` flag with the name you set via `withName()`:

```bash
php vendor/bin/unitary --show=unitary
```

> **Note:** If the selected test was marked as skipped, running it with `--show` will **force it to execute and display** its validations.

---

## Change Test Path

Run all tests under a custom directory (absolute or relative):

```bash
php vendor/bin/unitary --path="/tests/"
```

---

## Exclude Files or Directories

Use the `--exclude` flag to ignore specific files or directories (relative to `--path`):

```bash
php vendor/bin/unitary --exclude="./tests/unitary-query-php, tests/otherTests/*, */extras/*"
```

> **Note:** If you add the exclude argument, you must manually exclude the `vendor` directory if needed.

---

## Smart Search

Smart Search will always locate the closest `tests` directory from the path it is executed from. It works by attempting to find tests in the specified path, and if no tests are found, it moves up one parent directory and tries again. This continues until test files are found or the root is reached.

```bash
php vendor/bin/unitary --path="app/Http" --smart-search
```

> **Note:** Smart Search can be useful in setups where tests exist in different locations, such as submodules or non-standard directory structures.
