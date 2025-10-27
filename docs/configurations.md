---
sidebar_position: 5
---



# Configurations

Unitary allows limited but powerful configuration options for your test groups. These configurations are applied using the `TestConfig` class.

> The `TestConfig` is immutable, meaning each change returns a new config instance.
> Most configuration options are handled via the CLI, but these settings help you define behavior per test group.

---

## How to Configure Tests

```php
$config = TestConfig::make("This is a test subject") // Defines the test subject
    ->withSkip()
    ->withName('unitary');

group($config, function (TestCase $case) {
    // ...
});
```

---

### withSubject

You can change the subject using `withSubject()`. Since `TestConfig` is immutable, you can use that to your advantage by defining a base config once and then overriding specific properties as needed:

```php
$config = TestConfig::make("Subject 1")->withName("unitary");

group($config, function (TestCase $case) {
    // Group with "Subject 1"
});

group($config->withSubject("Subject 2"), function (TestCase $case) {
    // Group with "Subject 2"
});
```

---

### withSkip

Marks a test group as skipped. It will appear in the test list as *skipped*, and its validations will not be executed or shown — useful for tests that are incomplete or temporarily disabled.

```php
TestConfig::make("Subject")->withSkip()
```

#### Run Skipped Tests Manually

Even if a test is marked as skipped, you can still run it directly using the `--show=<hash|name>` CLI option:

```bash
php vendor/bin/unitary --show=448b06d9127fbca608168e769acd3c7c0
```

> **Note:** The hash will be displayed in the CLI output after a test run.

---

### withName

You can assign names to one or multiple test groups, even reuse the same name across different groups and test files. This allows you to selectively run or inspect specific tests via the CLI.

#### Define the Test Name

```php
$config = TestConfig::make("This is a test message")->withName('unitary');

group($config, function (TestCase $case) {
    // Your test cases go here
});
```

#### Run the Selected Test

Use the `--show` flag with the name you assigned:

```bash
php vendor/bin/unitary --show=unitary
```

> **Note:** If the selected test was marked as skipped, running it with `--show` will **force it to execute and display** its validations.

