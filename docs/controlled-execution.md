---
title: Controlled Execution
sidebar_position: 4
---


# Controlled Execution

Controlled execution is used in **integration tests** when you want to run a real class but disable or replace specific side effects.

The class executes normally.
Only the methods you explicitly override behave differently.

#### Example: integration test with a disabled side effect

```php
group("Test payment transaction", function (TestCase $case) {

    // Wrap the real service
    $service = $case->wrap(App\Service\PaymentService::class);

    // Replace the method that performs the external request
    $service->override('sendRequest', function (array $payload) {
        return [
            'status' => 200,
            'transactionId' => 'test-id',
        ];
    });

    // Run the real integration flow
    $result = $service->processPayment(100);

    // Validate the result
    $case->expect($result['status'])
        ->isEqualTo('confirmed')
        ->validate();
});
```

This test executes the real `processPayment()` logic, including validation rules and internal state changes.
Only the outbound request is replaced.

## What `wrap()` does

`$case->wrap()` creates a real instance of the class and allows individual methods to be controlled during the test.

* All methods behave exactly as in production by default
* Only overridden methods are affected
* The instance can be used like a normal object

Wrapping does not simulate behavior. It runs real code.

## Overriding methods

An override replaces the body of a single method for the duration of the test.

```php
$service->override('sendRequest', function (array $payload) {
    return ['status' => 200];
});
```

Inside the override, `$this` refers to the **real class instance**. You can call other original methods if needed.

Only that method is replaced. Everything else remains unchanged.

## Adding test-only methods

You can add helper methods that exist only during the test.

```php
$service->add('processWithoutRetry', function (int $amount) {
    return $this->processPayment($amount);
});
```

These methods are useful for orchestration or inspection and are never part of production code.

## Calling methods dynamically

If you need to call a method by name, use:

```php
$service->this('processPayment', 100);
```

This simply calls the method on the wrapped instance and respects overrides.

## When to use controlled execution

Use controlled execution when:

* You are writing **integration tests**
* You want real behavior, not a fake implementation
* One or two methods cause unwanted side effects
* You want to avoid refactoring production code just to satisfy a test

If you need to replace many methods or assert interactions, use the mocker instead.

