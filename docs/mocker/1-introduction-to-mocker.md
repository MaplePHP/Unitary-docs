---
title: Introduction to Mocker
sidebar_position: 1
---

# Mocking is Purely Magical

Mocking in Unitary is built for real-world testing. It’s fast to write, clear to read, and powerful when you need precision. You define the mock in one line. You describe its behavior with fluent, readable syntax. And that’s it — your test remains focused, without boilerplate or side setup.

> **You don’t need extra tools. You don’t need config files. Mocks live where your test lives — defined inline, scoped to the case, and tailored to exactly what the test verifies.**

Every method expectation is expressive: call counts, parameter types, return values, exceptions, even dynamic logic based on arguments and all handled with consistent syntax designed to mirror how you think about behavior.  You can keep original methods. You can throw once, then return. You can match by argument. You can validate return types. And you do it without breaking flow.

That’s what makes Unitary’s mocking different. It was designed to belong in your test, not beside it.

---

## Why Use Unitary for Mocking?

* **One-liner mock creation**: Quickly mock any class without setup or external configuration.
* **Fluent configuration**: Control method visibility, call expectations, parameter types, and return values using a fluid, readable syntax.
* **Type-aware defaults**: Automatically returns default values based on expected types, or configure them as needed.
* **Test-local state**: Each mock is isolated within its test context.
* **No dependencies or config files**: Everything is handled in plain PHP.

Unitary makes mocking feel like a natural extension of writing tests, and not a separate task.
