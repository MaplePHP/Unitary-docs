---
title: Run & Configure
sidebar_position: 3
---
import ConfigTable from './_includes/config-table.mdx';



# Run & Configure

Running tests is the core of working with Unitary.
This chapter covers everything that happens when a test suite is executed — how Unitary discovers tests, how configuration layers interact, and how you can control execution through the command line, project files, or code-level settings.

---


## Show a single group

```bash
php vendor/bin/unitary --show=448b06d9127fbca608168e769acd3c7c1
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-show.png)

---

## Configure test groups
Every individual groups can define their own configuration using TestConfig. This allows naming, skipping, or scoping tests directly in code without affecting the rest of the suite.


```php
$config = TestConfig::make()->withName("unitary")->withSkip();

group($config->withSubject("Example API Request"), function(TestCase $case) {

});

group($config->withSubject("Test mocking library"), function(TestCase $case) {

});
```

#### Execute

```bash
php vendor/bin/unitary --show=unitary
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-grouped.png)

---

## Running tests (CLI)

The Unitary CLI is the fastest way to execute and inspect tests.
When launched without arguments, it automatically discovers all test groups in your project and runs them:

```bash
php vendor/bin/unitary
```
<p><small>_Same as `php vendor/bin/unitary run`_</small></p>

For help and a full list of available flags:

```bash
php vendor/bin/unitary --help
```

Create a boilerplate test file to get started quickly:

```bash
php vendor/bin/unitary template
```

Limit output to only failing validations:

```bash
php vendor/bin/unitary --errors-only
```

You can also rerun a specific test by **hash** or by the name:

```bash
php vendor/bin/unitary --show=b0620ca8ef6ea7598e5ed56a530b1983
php vendor/bin/unitary --show=checkout
```

Hashes appear after each run. Using `withName()` gives a readable and permanent reference for a test group.

---

## Targeting specific tests

Unitary is extremely fast and can execute more tests than you could ever write in under a second. You’ll rarely use `--path`, `--exclude`, or `--smart-search` for performance reasons — they’re mainly for convenience, such as IDE integrations or when you want to limit discovery to specific folders. During active development, the `--show` flag is often more practical for targeting individual tests by name or hash.


```bash
php vendor/bin/unitary --path="tests/integration"
php vendor/bin/unitary --exclude="tests/legacy/*"
php vendor/bin/unitary --smart-search
```

These flags are ideal for quick, local runs.
If you want the same behavior every time, define it in your configuration file instead.

---

## Configuration file

Unitary automatically loads defaults from either `unitary.config.php` or `unitary.json` located next to your `composer.json`.
Both formats are equivalent — PHP for flexibility, JSON for portability.

```php
<?php
return [
    'path'              => false,
    'smart-search'      => false,
    'errors-only'       => false,
    'verbose'           => false,
    'exclude'           => false,
    'discover-pattern'  => false,
    'show'              => false,
    'timezone'          => 'Europe/Stockholm',
    'locale'            => 'en_US',
    'always-show-files' => false,
    'fail-fast'         => false,
];
```

Values defined here apply to all runs unless explicitly overridden on the command line.
When both a file and a CLI flag specify the same setting, **the CLI takes precedence** for that run.

---

## Full option reference

Each option listed below can be used as a CLI flag or as a key in the configuration file.
They share the same names, accepted types, and default values.

<ConfigTable />

---

## Layer interaction

Unitary merges configuration from all sources in a fixed order:

1. **File** — base project defaults (`unitary.config.php` or `unitary.json`)
2. **Code** — per-group settings defined through `TestConfig`
3. **CLI** — temporary overrides applied last

This predictable precedence makes it easy to test locally with CLI flags while keeping stable project-wide defaults under version control.

