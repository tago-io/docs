---
sidebar_position: 2
title: Console
slug: /tagocore/analysis/console
---

# Analysis Console

The Analysis Console is your window into what your Analysis is doing. It displays all output from your code, including debug messages, results, and any errors that occur during execution. Think of it as a real-time log of your Analysis activity.

The console shows the most recent messages at the top, with each entry timestamped so you know exactly when something happened. There's no limit to how many log entries you can have.

## How to Add Log Messages

TagoCore automatically captures anything your code prints out and displays it in the console. This works with standard output methods in any programming language:

**For normal messages** (information, debug output):
- **Node.js**: Use `console.log("Your message")`
- **Python**: Use `print("Your message")`
- **Any language**: Write to standard output (stdout)

**For error messages** (warnings, errors):
- **Node.js**: Use `console.error("Error message")`
- **Python**: Use `print("Error message", file=sys.stderr)`
- **Any language**: Write to standard error (stderr)

## Understanding Validation Errors

Before your Analysis runs, TagoCore checks that everything is set up correctly:
- Does the executable file exist and can it be run?
- Does your script file exist and can it be accessed?
- Are the file permissions correct?

If any of these checks fail, you'll see a validation error in the console explaining what went wrong. Your Analysis won't run until these issues are fixed.

## Managing Console Output

**Clear the Console**: When the console gets too cluttered, click the &nbsp;<img src="/docs_imagem/tagocore/icons/ban.svg" width="15px"/> &nbsp;button to hide current messages and start fresh.

Note that clearing is temporary - if you navigate away and come back to your Analysis page, all the original log messages will reappear.

**Download Logs**: Save your console output as a text file by clicking the &nbsp;<img src="/docs_imagem/tagocore/icons/download.svg" width="15px" /> &nbsp;button in the console header.

:::info Download Behavior
Only currently visible messages are included in the download. If you've cleared the console, the downloaded file will be empty.
:::
