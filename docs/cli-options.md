---
title: CLI Options
sidebar_position: 3
---


## CLI Options

### Run the Tests

```bash
php vendor/bin/unitary
```

Here are the available CLI commands for common use cases:

### Show Help

```bash
php vendor/bin/unitary --help
```

### Get boilerplate code

Will give you a boilerplate test code

```bash
php vendor/bin/unitary --template
```

### Show Only Errors

```bash
php vendor/bin/unitary --errors-only
```

### Run Specific Test by Hash

After running a test, a hash key is displayed. Use it to re-run that specific test:

```bash
php vendor/bin/unitary --show=b0620ca8ef6ea7598eaed56a530b1983
```


### Naming and Running Specific Test Groups

You can assign names to one or multiple test groups, even reuse the same name across different groups. This allows you to selectively run or inspect specific tests via the CLI.

#### 1. Define a Named (Manual) Test Group

By using a `TestConfig` with `setName()`, you can define a test group that is excluded from the default batch run:

```php
$config = TestConfig::make("This is a test message")->setName('unitary');

$unit->group($config, function (TestCase $case) {
    // Your test cases go here
});
```

#### 2. Run Only That Test Group via CLI

Use the `--show` flag with the name you set via `setName()`:

```bash
php vendor/bin/unitary --show=unitary
```

> **Note:** If the selected test was marked as skipped, running it with `--show` will **force it to execute and display** its validations.


### Change Test Path

Run all tests under a custom directory (absolute or relative):

```bash
php vendor/bin/unitary --path="/tests/"
```

> **Note:** If you change the path, you must manually exclude the `vendor` directory if needed.

### Exclude Files or Directories

Use the `--exclude` flag to ignore specific files or directories (relative to `--path`):

```bash
php vendor/bin/unitary --exclude="./tests/unitary-query-php, tests/otherTests/*, */extras/*"
```
