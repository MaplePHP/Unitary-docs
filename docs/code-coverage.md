---
sidebar_position: 8
---

# Code Coverage

Code coverage helps you understand how much of your codebase is being executed by your tests.
It shows which parts of your project are **tested**, and which parts are **untested**, helping you focus your testing efforts where it matters most.

While 100% coverage is really not necessary, maintaining a reasonable level (e.g., 50-70%) ensures that most of your logic is verified.

---

## Running Coverage

To generate coverage results, run the following command:

```bash
php vendor/bin/unitary coverage
```

Example output:

```
Code coverage:
Total lines:               6828
Executed lines:            2959
Code coverage percent:     43.34%
```

This output summarizes:

* **Total lines** — the total number of executable lines in your project.
* **Executed lines** — how many of those lines were run during your tests.
* **Coverage percent** — the overall percentage of tested code.

---

## Missing Dependencies

Unitary relies on **Xdebug** to measure code coverage.
If Xdebug is not installed or enabled, the CLI will display an informative error message:

```bash
php vendor/bin/unitary coverage
```

Output:

```
Error: Code coverage is not reachable
Reason: Xdebug is not installed or enabled.
```

**To fix this, install and enable Xdebug in your PHP environment.**

---

## Coverage in Continuous Integration (CI)

You can integrate code coverage into your CI pipelines to track testing progress over time.
A simple example for GitHub Actions:

```yaml
- name: Run tests with coverage
  run: php vendor/bin/unitary coverage
```

This allows you to monitor how code coverage changes with each commit or pull request.

---

## Tips for Using Coverage Effectively

* **Focus on important logic**: Coverage is a guide, not a goal. Aim to test critical business logic first.
* **Avoid chasing 100%**: Perfect coverage doesn’t guarantee bug-free code. Quality of tests matters more than quantity.
* **Combine with validation results**: Use coverage alongside Unitary’s validation-based tests to ensure both breadth and accuracy.
