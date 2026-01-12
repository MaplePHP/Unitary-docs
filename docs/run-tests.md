---
title: Run tests
sidebar_position: 3
---
import ConfigTable from './_includes/config-table.mdx';



# Run tests

This page describes how to run tests.

---

## Running tests (CLI)

The Unitary CLI is the fastest way to execute and inspect tests.
When launched without arguments, it automatically discovers all test groups in your project and runs them:

```bash
php vendor/bin/unitary
```
<p class="offset-top"><small>_Same as `php vendor/bin/unitary run` or `php vendor/bin/unitary test`_</small></p>

For help and a full list of available flags:

```bash
php vendor/bin/unitary --help
```

Create a boilerplate code to get started quickly:

```bash
php vendor/bin/unitary template
```

Limit output to only failing validations:

```bash
php vendor/bin/unitary --errors-only
```

You can also rerun a specific test by **hash**:

```bash
php vendor/bin/unitary --show=12e65ed93cd2ac5de824254d2c69dc5d0
```

##### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-pass.png)


You can also rerun a specific test by a specified **name**:
```bash
php vendor/bin/unitary --show=unitary
```

##### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-named-group.png)

> Se [Configure test groups](#configure-test-groups) for more information on how this actually works below.


<h2 class="headline-5">Targeting specific tests</h2>

Unitary is extremely fast and can execute more tests than you could ever write in under a second. You’ll rarely use `--path`, `--exclude`, or `--smart-search` for performance reasons — they’re mainly for convenience, such as IDE integrations or when you want to limit discovery to specific folders. 

During active development, the `--show` flag is often the more practical choice. It lets you target individual tests by name or hash while still surfacing fatal errors from unrelated test files, errors that would otherwise remain hidden if discovery were narrowly filtered.


```bash
php vendor/bin/unitary --path="tests/integration"
php vendor/bin/unitary --exclude="tests/legacy/*"
php vendor/bin/unitary --smart-search
```

These flags are ideal for quick, local runs.
If you want the same behavior every time, define it in your configuration file instead.

---


## Configure test groups
Every individual groups can define their own configuration using TestConfig. This allows naming, skipping, or scoping tests directly in code without affecting the rest of the suite.


```php
$config = TestConfig::make()->withName("unitary")->withSkip();

group($config->withSubject("HTTP Request"), function(TestCase $case) {

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

## JUnit XML Output (CI-Friendly)

For CI systems and test aggregators, Unitary can emit results as JUnit XML.

##### Run tests with:

```bash
php vendor/bin/unitary --type=junit
```

_This switches the output format from human-readable CLI output to machine-readable XML._

---

## Full option reference

Each option listed below can be used as a CLI flag or as a key in the configuration file.
They share the same names, accepted types, and default values.

<ConfigTable />

---

## Layer interaction

Unitary merges configuration from all sources in a fixed order:

1. **File** — base project defaults (`unitary.config.php`)
2. **Code** — per-group settings defined through `TestConfig`
3. **CLI** — temporary overrides applied last

This predictable precedence makes it easy to test locally with CLI flags while keeping stable project-wide defaults under version control.

