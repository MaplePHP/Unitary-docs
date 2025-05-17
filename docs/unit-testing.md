---
sidebar_position: 2
---

# Unit testing
Here I am going to show you some different ways you can do some unit testings. 
Once you read this short page you will be able to start and understand unit testing in just under 3 min.

---

### Validation-First

A Unitary test is composed of one or more **groups**. Groups exist to **describe** a subject and **contain**
responsibilities. Each group contains one or more validations, wrapped in simple,
readable callback blocks.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$unit->group("Example API Request", function(TestCase $case) {
    $request = new Request("GET", "https://example.com/?page=1");

    $case->validate($request->getMethod(), function(Expect $expect) {
        $expect->isRequestMethod();
        $expect->isEqualTo("POST"); // Fails intentionally
    });

    $case->validate($request->getUri()->getQuery(), function(Expect $expect) {
        $expect->hasQueryParam("page", 1);
    });
});
```

That’s the format. No magic methods. No annotations. Just your values, your expectations, and readable code.

---

## Assertions, on Your Terms

One of the unique aspects of Unitary is how it integrates native PHP `assert()`. Assert can be used 
for different reasons, every thing from giving you more information when a test failed or to 
**strict stop conditions**, where further validations are meaningless unless a critical state is met. 
It all depends on where the assert is used.

### Assert inside `validate()`:


#### 1. Custom validation
Assert inside validation can be used for multiple purposes, either by adding custom validations:

```php
$unit->group("Example API Request", function(TestCase $case) {

  $case->validate($value, function(Expect $expect) {
      assert(1 === 2, "This will fail");
  });
  
});
```

#### 2. Add more validation information
You can make `assert()` work alongside Unitary’s validation system by e expressive validations, 
then `assert($expect->isSomething()->isValid())` to trigger a failure with code context. 
You can also add a second argument to `assert()` lets you set a custom failure message, which 
Unitary will capture and display.

```php
$unit->group("Example API Request", function(TestCase $case) {

  $case->validate($value, function(Expect $expect) {
      assert($expect->isJson()->isEqualTo('{"ok":true}')->isValid(), "Expected JSON structure did not match.");
  });
  
});
```

### Assert inside `group()`:
You can also use the assert inside of a `group()` (outside `validate()`) and can be used for 
more critical conditions:

* A direct `assert()` here **halts execution** of the group on failure.
* Pass counting for the group is **disabled** on failed assertion.
* This is intended for **strict stop conditions**, where further validations are meaningless unless a critical state is met.

```php
$unit->group("Example of assert in group", function(TestCase $case) {
    assert(1 === 2, "This is a error message");
});
```
_Using assert here is more useful when you are writing your test and to debug them_

This approach is deliberate: developers can combine soft validation with hard stops as needed — gaining control over test flow in a way that traditional frameworks often obscure.

---

## Messages (echo, print, print_r, var_dump)
Unitary is built to make life easier for you as a developer and tries to make it feel obvious. 
Just like it should be obvious that you should be able to debug with regular echo, prints and dumps. 
That is why we have built in functionality to handle this properly. 
You just need to dump something in a group or validation and let Unitary handle the rest.

```php
$unit->group("Example API Request", function(TestCase $case) {

  $shoppingList = ['milk', 'cheese', 'bread', 'soap'];
 
  print_r($shoppingList); // <-- Will be presented in the test
    
});
```

_**Note:** If you where tho to try to print something outside of group or validation method 
then it will not be visible becouse it is outside of stream. You can tho still show this 
print by simply adding die or exit after your print._

**Congratulations!** You are now ready to write your test!