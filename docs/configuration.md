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

