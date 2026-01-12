---
id: faq
title: FAQ
description: Frequently asked questions about MaplePHP - Validation
sidebar_label: FAQ
---


# Frequently Asked Questions

### What is Unitary?

Unitary is a modern PHP testing framework built around **evidence-driven testing**, deterministic execution, and extreme performance.
It is designed to make tests fast, explicit, and trustworthy without configuration or plugins.

---

### Is Unitary based on PHPUnit?

**No.**

Unitary is a standalone framework built from the ground up.
It does not wrap, extend, or depend on PHPUnit or any other legacy testing tool.

---

### What does “Evidence-Driven Testing” mean?

It means tests produce **concrete, inspectable evidence**:

* The exact input that was tested
* The validation that failed
* Why it failed
* Where it failed

Failures are reported with full context, not abstract assertion messages.

---

### Does Unitary replace assertions?

**No.** It **reframes how they are used**.

* Validations are used to verify behavior and continue execution
* Native `assert()` is supported as a **strict halt** when a condition must not be violated

This gives you control over when tests should stop and when they should continue collecting evidence.

---

### Can I still write unit tests?

**Yes.**

Unitary supports:

* Unit tests
* Integration tests
* Controlled execution with real classes
* Mocked and wrapped dependencies

The framework does not force a testing style. It enforces clarity.

---

### How does mocking work?

Mocking is built in.

**You can:**

* Mock or wrap real classes
* Override specific methods
* Keep original behavior where needed
* Define expectations, return values, and call counts

Mocks are isolated per test group and never leak state.

---

### Is Unitary fast enough for large test suites?

**Yes.**

Unitary routinely executes **100,000+ validations per second** with low memory usage.
Performance comes from a minimal core and deterministic execution, not concurrency tricks.

---

### Does Unitary support CI?

**Yes.**

Features include:

* JUnit XML output
* Deterministic execution
* Stable failure reporting
* Low memory footprint

CI behavior matches local execution.

---

### Do I need configuration files?

**No.**

Unitary works out of the box:

* Automatic test discovery
* Sensible defaults
* Optional central config if needed

Configuration is supported, not required.

---

### Can I run individual tests?

**Yes.**

You can:

* Run specific files or directories
* Target tests by hash
* Use debug mode for detailed output

---

### Is Unitary production-safe?

**Yes.**

Unitary:

* Runs tests in full isolation
* Does not modify application state outside test scope
* Includes dependency and vulnerability inspection tools

It is safe to use in local development and CI pipelines.

---

### Is Unitary opinionated?

**Yes — deliberately.**

Unitary prioritizes:

* Determinism over magic
* Evidence over abstraction
* Speed over compatibility
* Clarity over flexibility

If those align with how you work, Unitary fits well.
