---
sidebar_position: 2
---

# Create the tests
Here I am going to show you some different ways you can do some unit testings. 
Once you read this short page you will be able to start and understand unit testing in just under 3 min.

---

## Unit test with validation

A Unitary test is composed of one or more **groups**. Groups exist to **describe** a subject and **contain**
responsibilities. Each group contains one or more validations, wrapped in simple,
readable callback blocks.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$unit->group("Example API Request", function(TestCase $case) {
    
    $request = new Request("GET", "https://example.com/?page=1&slug=hello-world");

    $case->validate($request->getMethod(), function(Expect $expect) {
        $expect->isRequestMethod();
    });

    $case->validate($request->getUri()->getQuery(), function(Expect $expect) {
        $expect->hasQueryParam("page", 1);
        $expect->hasQueryParam("slug", "hello-world");
    });
});
```

#### Execute:
```bash
php vendor/bin/unitary
```

#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-pass.png)

That’s the format. Just your values, your expectations and readable code. There is a alot of validation that can make your life easier that you can use if you want, [Visit validation API](/Unitary/validation-api) to see of the available validations. 

---

## Skip a test

Sometime you want to skip the test in validation, if you are for example not finished writing the tests you want to finish them without stress and on your occur. 
Skipped test will be present on the test list but will not show any failed and not completed tests cluttering up the list with out reason.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$config = TestConfig::make("Testing mocking library")->withSkip();

$unit->group($config, function (TestCase $case) {
    // Your tests here ->
});
```

#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-skip.png)

---

## Show/open a test
What is cool in Unitary, every test group has a unique hash, you can use thisto show/open up any test group 
you wish (any group you want, passed, failed or skipped) and then get the complete validation information. 
This lets us filter away every other test and only show the test we are intrested in and also open it up 
for more information. 

#### Execute:
```bash
php vendor/bin/unitary --show=448b06d9127fbca608168e769acd3c7c1
```

#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-show.png)

> _**Notice:** That if it where a failed test, it would be open by default, the show argument will tho also 
> filter away all other tests except for the one you show._

---

## Name or/and group test

It is very easy to name and group test. You only pass the name with TestConfig instance to a 
group and the group is now named. To group multiple test accross you application you only 
need to give them the same name.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$config = TestConfig::make("Example API Request")
    ->withName("unitary");

$unit->group($config, function (TestCase $case) {
    // Your tests here ->
});

// Can use the configurations immutability to your advantage if you wish
$unit->group($config->withSubject("Testing mocking library"), function(TestCase $case) {
    // Your tests here ->
});
```

#### Execute:
```bash
php vendor/bin/unitary --show=unitary
```

#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-grouped.png)

---


## Debug with prints

Unitary is built to make life easier for you as a developer and tries to make it feel obvious.
Just like it should be obvious that you should be able to debug with regular **prints and dumps**.
That is why we have built in functionality to handle this properly.
You just need to dump something in a group or validation and let Unitary handle the rest.

```php
$unit->group("Example API Request", function(TestCase $case) {

  $shoppingList = ['milk', 'cheese', 'bread', 'soap'];
 
  print_r($shoppingList); // <-- Will be presented in the test
    
});
```
#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-note.png)

_**Note:** If you where tho to try to print something outside of group or validation method
then it will not be visible becouse it is outside of stream. You can tho still show this
print by simply adding die or exit after your print._

---


## Custom validation (assert)

One of the unique aspects of Unitary is how it integrates native PHP `assert()`. Assert can be used
for different reasons, every thing from giving you more information when a test failed or to
**strict stop conditions**, where further validations are meaningless unless a critical state is met.
It all depends on where the assert is used.

### Assert inside `validate()`:


#### 1. Custom validation
Assert inside validation can be used for multiple purposes, either by adding custom validations:

```php
$unit->group("Example assert", function(TestCase $case) {

  $case->validate(1, function(Expect $expect) {
      assert($expect->val() === 2, "This will fail");
  });
  
});
```

#### 2. Get more information
You can make `assert()` can work alongside Unitary’s validation system by e expressive validations,
then `assert($expect->isSomething()->isValid())` to trigger a failure with code context.
You can also add a second argument to `assert()` lets you set a custom failure message, which
Unitary will capture and display.

```php
$unit->group("Example API Response", function(TestCase $case) {

    $case->validate('{"response":{"status":200,"message":"ok"}}', function(Expect $expect) {

        $expect->isJson()->hasJsonValueAt("response.status", 404);
        
        assert($expect->isValid(), "Expected JSON structure did not match.");
        
    });

});
```
#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-assert-fail.png)

### Assert inside `group()`:
You can also use do a `assert()` directly inside of a `group()` (outside `validate()`) and can be used for
more critical conditions:

* A direct `assert()` here **halts execution** of the group on failure.
* Pass counting for the group is **disabled** on failed assertion.
* This is intended for **strict stop conditions**, where further validations are meaningless unless a critical state is met.

```php
$unit->group("Example of assert in group", function(TestCase $case) {
    assert(1 === 2, "This is a error message");
});
```

#### Response:
![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-assert-grp-fail.png)

_Using assert here is more useful when you are writing your test and to debug them_

This approach is deliberate: developers can combine soft validation with hard stops as needed — gaining control over test flow in a way that traditional frameworks often obscure.

---

**Congratulations!** With that you know how to write unit tests!