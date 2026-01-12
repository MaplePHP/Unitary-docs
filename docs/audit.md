---
title: Audits
sidebar_position: 12
---

# Security and Dependency Audit

Unitary can inspect the Composer dependencies used by your project to surface security risks and clarify what is actually installed. The audit command supports two modes:

## Security audit

Runs a Composer vulnerability scan and prints any advisories that match the packages currently installed in your project.

```bash
php vendor/bin/unitary audit --type=security
```

For each match, Unitary shows the affected package and version, the severity level, and a reference (CVE/advisory + link) so you can verify the issue and update the dependency.

---
## Dependency audit

Prints a complete inventory of all Composer packages that are currently installed in your project.

```bash
php vendor/bin/unitary audit --type=dependencies
```

This gives you a clear, flattened view of what actually ends up in your runtime, including transitive dependencies and their resolved versions. It is especially useful for understanding your true dependency surface, spotting unexpected packages, and identifying potential supply-chain risks where vulnerable or abandoned libraries may be pulled in indirectly.

---
