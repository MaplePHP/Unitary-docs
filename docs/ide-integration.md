---
sidebar_position: 6
---

# IDE Integration

Unitary integrates seamlessly with modern IDEs through its smart test discovery system.
In **PhpStorm**, you can run tests directly from the editor. Unitary automatically detects and executes the most relevant tests based on the file you're working on.

---

## PhpStorm Setup

Follow these steps to configure PhpStorm for running Unitary tests directly from the editor:

1. Open **Run › Edit Configurations**
   *(or press <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>R</kbd> / <kbd>Ctrl</kbd> + <kbd>⌥</kbd> + <kbd>R</kbd> on macOS).*

2. Click **+ Add New Configuration** and select **PHP Script**.

3. Under the **Configuration** section:

    * **File:** set this to

      ```
      vendor/bin/unitary
      ```
    * **Arguments:** set this to

      ```
      test --path="$FilePath$" --smart-search
      ```

4. Click **OK** to save the configuration.

5. You can now run Unitary directly using:

    * The **green play icon** in the toolbar, or
    * **Right-clicking** inside any test file and selecting **Run ‘Unitary’**.

---

## How It Works

When using the `--smart-search` flag, Unitary automatically locates and runs the tests that are **closest** to the file you’re editing.
This means you don’t need to manually specify test directories — ideal for rapid development, debugging, or working in large projects with many test suites.

---

## Tips

* You can create **multiple configurations** for different test paths or options (e.g., `--errors-only` or `--fail-fast`).
* Use **Run › Run with Coverage** if you want to see Unitary’s coverage report directly in the IDE (with Xdebug enabled).
* For quicker access, assign a **custom keyboard shortcut** to your Unitary configuration under *Preferences › Keymap › Run Configurations*.
