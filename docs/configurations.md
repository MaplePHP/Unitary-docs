---
sidebar_position: 5
---

# Configurations

Here are the available configurations and CLI commands for common use cases.

### Configure test groups
```php
$config = TestConfig::make("This is a test message")
    ->setSkip()
    ->setName('unitary');
    
$unit->group($config, function (TestCase $case) {
    // ...
});
```

* **setSkip:** Will skip the test in validation (great if you are not finished with the test)
* **setName:** This allows you to selectively run or inspect specific tests via the CLI. [Read more →](#naming-and-running-specific-test-groups)


