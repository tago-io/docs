---
sidebar_position: 1
title: Analysis Overview
slug: /tagocore/analysis
---

# Analysis

An Analysis is a custom script that processes your device data in real-time. Think of it as your personal data processor - when your devices send information to TagoCore, an Analysis can automatically transform that data, calculate new values, detect patterns, or trigger other actions based on what it finds.

## Creating an Analysis

To create a new Analysis, click the&nbsp; <img className="inline-image" src="/docs_imagem/tagocore/analysis/add-analysis-button.png" height="25px" /> &nbsp;button on the **Analyses** page. This opens the creation modal:

<img className="big-image" src="/docs_imagem/tagocore/analysis/add-analysis-modal.png" height="200px" />

Simply give your Analysis a descriptive name (like "Temperature Alert" or "Battery Monitor") to get started.

## Programming Language Support

TagoCore supports any programming language you want to use for your Analysis. This flexibility is made possible through two key settings:

### Binary Executable Path

This tells TagoCore which program should run your code. For example:
- **Node.js**: Point to your `node` executable to run JavaScript
- **Python**: Point to your `python` executable to run Python scripts  
- **Rust**: Point to your Rust compiler to run Rust programs
- **Any other language**: Point to the appropriate executable

### File Path

This is your actual script file that contains the Analysis logic:
- **Node.js**: Select your `.js` file
- **Python**: Select your `.py` file
- **Rust**: Select your `.rs` file
- **Compiled programs**: Leave this empty if you're running a standalone executable

### Example Setup

Here's how to set up a Node.js Analysis. If you have Node.js installed (perhaps through [nvm](https://github.com/nvm-sh/nvm)), you would configure it like this:

<img className="big-image" src="/docs_imagem/tagocore/analysis/code-section.png" width="70%" />

Behind the scenes, TagoCore runs your Analysis using a command like:

```shell
/Users/tagocore/.nvm/versions/node/v14.17.3/bin/node /Users/tagocore/project-code/index.js
```

## Running Your Analysis

You have three options for executing your Analysis:

1. **Automated**: Set up an [Action](/docs/tagocore/action) to run your Analysis automatically when specific events occur (like when new device data arrives)
2. **Manual**: Click the **Run** button on your Analysis page to test it immediately  
3. **API**: Trigger it programmatically by making a POST request to `/analysis/:id/run`

## Writing Analysis Code

You can write your Analysis code in any style or framework you prefer. TagoCore provides complete flexibility in how you structure and implement your data processing logic.

For detailed guidance on best practices, coding patterns, and how to access [Device data](/docs/tagocore/resources/device/data.md) within your Analysis, see the [Analysis Code](/docs/tagocore/resources/analysis/code.md) guide.
