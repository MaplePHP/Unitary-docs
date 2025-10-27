---
sidebar_position: 6
---

# IDE Integration

Unitary works seamlessly with IDEs thanks to its smart test discovery. With PHPStorm, you can run tests directly from the editor—Unitary will automatically detect the most relevant tests based on the file you're working on.

### ⚙️ PHPStorm Setup

1. Open **"Run/Debug Configurations"** in PHPStorm (`Run > Edit Configurations`).
2. Click the **➕ Add New Configuration** button and select **PHP Script**.
3. Under the **Configuration** section:

  * Set the **File** to `vendor/bin/unitary`.
  * In the **Arguments** field, enter:

    ```
    test --path="$FilePath$" --smart-search
    ```
4. Click **OK** to save the configuration.
5. You can now run tests using the green play icon in the top bar or right from the editor.

> When using `--smart-search`, Unitary automatically runs the tests *closest* to the file you're currently editing—perfect for rapid development and debugging.
