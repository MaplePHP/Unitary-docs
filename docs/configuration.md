---
title: Configuration
sidebar_position: 6
---
import ConfigTable from './_includes/config-table.mdx';

## Configuration

Unitary automatically loads defaults from either `unitary.config.php` or `unitary.json` located next to your `composer.json`.
Both formats are equivalent — PHP for flexibility, JSON for portability.

```php
<?php

return [

    /*
     |--------------------------------------------------------------------------
     | Test discovery
     |--------------------------------------------------------------------------
     */

    /**
     * Where Unitary should start discovering tests.
     *
     * Accepted values:
     *  - false            Use default discovery root
     *  - string           Single path (absolute or relative)
     */
    'path' => false,

    /**
     * Files or directories to exclude during discovery.
     *
     * Accepted values:
     *  - false            No exclusions
     *  - string           Comma-separated list
     */
    'exclude' => false,

    /**
     * Override default discovery behavior.
     *
     * Default behavior:
     *  - `tests/` directories
     *  - `unitary-*.php` files
     *
     * Accepted values:
     *  - false            Use defaults
     *  - string           Directory name or filename pattern
     */
    'discover-pattern' => false,

    /**
     * Enable recursive search when no tests are found in a directory.
     *
     * Accepted values:
     *  - bool
     */
    'smart-search' => false,

    /**
     * Run a specific test or group by name or hash.
     *
     * Accepted values:
     *  - false
     *  - string           Test name or hash
     */
    'show' => false,


    /*
     |--------------------------------------------------------------------------
     | Output & reporting
     |--------------------------------------------------------------------------
     */

    /**
     * Show only failing or invalid tests.
     *
     * Accepted values:
     *  - bool
     */
    'errors-only' => false,

    /**
     * Display warnings and extended diagnostic output.
     *
     * Accepted values:
     *  - bool
     */
    'verbose' => false,

    /**
     * Always display full file paths, even for passing tests.
     *
     * Accepted values:
     *  - bool
     */
    'always-show-files' => false,

    /**
     * Stop execution immediately on first error or unexpected exception.
     *
     * Accepted values:
     *  - bool
     */
    'fail-fast' => false,

    /**
     * Output format.
     *
     * Accepted values:
     *  - false            Default CLI output
     *  - 'cli'
     *  - 'junit'
     */
    'type' => false,


    /*
     |--------------------------------------------------------------------------
     | Environment
     |--------------------------------------------------------------------------
     */

    /**
     * Default timezone used during test execution.
     *
     * Accepted values:
     *  - string (valid PHP timezone)
     */
    'timezone' => 'UTC',

    /**
     * Locale used for formatted output (dates, times).
     *
     * Accepted values:
     *  - string (e.g. en_US, sv_SE)
     */
    'locale' => 'en_US',
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

