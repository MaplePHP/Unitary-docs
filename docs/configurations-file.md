---
sidebar_position: 6
---
import ConfigTable from './_includes/config-table.mdx';


# Configurations

Unitary works **out of the box**, no setup or configuration file is required.
By default, it automatically discovers and runs your tests using sensible defaults.

However, if you want to **customize its behavior**, such as changing paths, enabling smart search by default, or adjusting output verbosity, you can create a `unitary.config.php` file in your project.
This file lets you define project-specific defaults that Unitary will automatically load on every run.

---

## Configuration File Location

Place your `unitary.config.php` file in the **project root directory**, the same location as your `composer.json`.
When Unitary runs, it automatically checks the current working directory for this file and loads it if present.

### Example project structure

```
my-project/
├── composer.json
├── unitary.config.php
├── src/
└── tests/
```

> **Tip:** You can include this file in version control if you want all developers to share the same defaults, or add it to `.gitignore` if it’s meant for personal preferences.

---

## Example Configuration File

```php
<?php

/**
 * Default configuration for MaplePHP Unitary
 */
return [
    'path' => false,
    'smartSearch' => false,
    'errorsOnly' => false,
    'verbose' => false,
    'exclude' => false,
    'discoverPattern' => false,
    'show' => false,
    'timezone' => 'Europe/Stockholm',
    'locale' => 'en_US',
    'alwaysShowFiles' => false,
    'failFast' => false,
];
```

Each option defines how Unitary discovers, runs, and reports tests.
You can modify these defaults to match your preferred workflow.

---

## Configuration Options

<ConfigTable />

> This table lists all available configuration options, their accepted values, and a short description of each.

---

## CLI and Configuration Relationship

Every CLI flag in Unitary has a corresponding key in `unitary.config.php`.
When a flag is provided via CLI, it **temporarily overrides** the configuration file for that specific test run.

### Example

Suppose your configuration file contains:

```php
'errorsOnly' => false,
```

Running the following command:

```bash
php vendor/bin/unitary --errorsOnly=true
```

will override the config and show only failing tests for that run.
The next time you execute Unitary without this flag, it will revert to the value defined in the configuration file.

