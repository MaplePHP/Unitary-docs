---
sidebar_position: 2
---

# Create Tests

Unitary makes writing unit tests simple and intuitive.
This short guide will show you the different ways you can write and organize tests, you’ll be ready to start testing in **under three minutes**.

---

# GLÖM INTE LÄGG TILL ->describe("www")

## Unit Test with Validation

A Unitary test is composed of one or more **groups**.
Groups exist to **describe a subject** and **contain its responsibilities**.
Each group includes one or more validations, wrapped in clear and readable callback blocks.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

group("Example API Request", function(TestCase $case) {
    
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

#### Execute

```bash
php vendor/bin/unitary
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-pass.png)

That’s the structure: your values, your expectations, and readable code.
Unitary includes a wide range of built-in validations — [visit the Validation API](/Unitary/validation-api) to explore them all.

---

## Skip a Test

Sometimes you may want to skip a test, for example, when it’s still being written or temporarily blocked.
Skipped tests remain visible in the list but won’t clutter it with incomplete or failed entries.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$config = TestConfig::make("Testing mocking library")->withSkip();

group($config, function (TestCase $case) {
    // Your tests here ->
});
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-skip.png)

---

## Show or Open a Test

Every test group in Unitary has a unique **hash**.
You can use this to open or re-run any test group — passed, failed, or skipped and see all its validation details.
This filters out all other tests so you can focus on a single group.

#### Execute

```bash
php vendor/bin/unitary --show=448b06d9127fbca608168e769acd3c7c1
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-show.png)

> **Note:** If a test failed, it’s automatically shown in expanded form.
> Using `--show` also filters away every other test, showing only the one you selected.

---

## Name and Group Tests

Naming and grouping tests makes it easy to organize them across your application.
You simply provide a name through a `TestConfig` instance, and any groups sharing that name will be grouped together.

```php
use MaplePHP\Unitary\{Unit, TestCase, TestConfig, Expect};

$config = TestConfig::make("Example API Request")
    ->withName("unitary");

group($config, function (TestCase $case) {
    // Your tests here ->
});

// Reuse configuration immutably for related groups
group($config->withSubject("Testing mocking library"), function(TestCase $case) {
    // Your tests here ->
});
```

#### Execute

```bash
php vendor/bin/unitary --show=unitary
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-state-grouped.png)

---

## Debug with Prints

Unitary is built to make testing feel natural.
That means you can debug with normal `print_r()`, `var_dump()`, or `echo` and Unitary will capture and display the output neatly in the CLI.

```php
group("Example API Request", function(TestCase $case) {

  $shoppingList = ['milk', 'cheese', 'bread', 'soap'];
 
  print_r($shoppingList); // <-- Will be shown in the CLI output
    
});
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-note.png)

> **Note:**
> Prints made *outside* of a `group()` or `validate()` block will not appear in the CLI stream.
> If you need to see such output anyway, simply call `die()` or `exit` after printing.

---

## Custom Validation (Using `assert()`)

One of Unitary’s unique features is how it integrates native PHP `assert()`.
Assertions can be used for:

* Adding **custom validation logic**
* Providing **additional context** when a test fails
* Defining **strict stop conditions** when execution should halt immediately

It all depends on where you place them.

---

### Assert Inside `validate()`

#### 1. Custom Validation

Use `assert()` to create your own ad-hoc validations:

```php
group("Example assert", function(TestCase $case) {

  $case->validate(1, function(Expect $expect) {
      assert($expect->val() === 2, "This will fail");
  });
  
});
```

#### 2. Get More Information

Combine `assert()` with Unitary’s expressive validation system for more detailed output:

```php
group("Example API Response", function(TestCase $case) {

    $case->validate('{"response":{"status":200,"message":"ok"}}', function(Expect $expect) {

        $expect->isJson()->hasJsonValueAt("response.status", 404);
        
        assert($expect->isValid(), "Expected JSON structure did not match.");
        
    });

});
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-assert-fail.png)

---

### Assert Inside `group()`

You can also use `assert()` directly inside a group (outside of `validate()`).

* A failed `assert()` here **halts execution** of the entire group.
* Pass counting is **disabled** for that group.
* This is meant for **strict stop conditions** where continuing would be meaningless.

```php
group("Example of assert in group", function(TestCase $case) {
    assert(1 === 2, "This is an error message");
});
```

#### Response

![Unitary CLI response](https://wazabii.se/github-assets/unitary/unitary-cli-assert-grp-fail.png)

*Using assertions this way is especially helpful when writing or debugging complex tests.*

This approach gives you fine-grained control, combining soft validations with hard stops, in a way that most traditional frameworks don’t allow.

---

_You now know how to create and structure Unitary tests from simple validations to advanced grouped assertions.
For a complete list of validation methods that make your testing even easier, see the [Validation API](/Unitary/validation-api)._

