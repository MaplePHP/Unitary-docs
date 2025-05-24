---
sidebar_position: 5
---

# Configurations

Here are the available configurations and how to add them.

## How to configure tests
As for now most options/configurations is done directly in the CLI but 
there are some that help you configure each unique grouped test. 
More configuration will most certinaly come in future. 


```php
$config = TestConfig::make("This is a test subject") // This is the test subject
    ->withSkip()
    ->withName('unitary');
    
$unit->group($config, function (TestCase $case) {
    // ...
});
```

---

### withSkip
Will skip the test in validation, you can still se it in the test list but it will 
be tagged as skipped and if it contains error those errors will be hidden which 
great if you are not finished writing the tests. 

```php
TestConfig::make("Subject")->withSkip()
```
#### Run skipped test 
What is great is that even when working with test that is skipped that wont show error on the main test command 
you can still access it by using the CLI `--show=<hash|name>` command.

```bash
php vendor/bin/unitary --show=448b06d9127fbca608168e769acd3c7c0
```
_Note: The has will be visible under each executed test_

---

### withName
This allows you to selectively run or inspect specific tests via the CLI.

You can assign names to one or multiple test groups, even reuse the same name across different groups. This allows you to selectively run or inspect specific tests via the CLI.

#### Define the test name

By using a `TestConfig` with `withName()`, you can define a test group that is excluded from the default batch run:

```php
$config = TestConfig::make("This is a test message")->withName('unitary');

$unit->group($config, function (TestCase $case) {
    // Your test cases go here
});
```

#### Run the selected test

Use the `--show` flag with the name you set via `withName()`:

```bash
php vendor/bin/unitary --show=unitary
```

> **Note:** If the selected test was marked as skipped, running it with `--show` will **force it to execute and display** its validations.


