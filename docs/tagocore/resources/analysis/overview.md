---
sidebar_position: 1
title: Overview
slug: /tagocore/analysis
---

# Analysis

Analysis is a powerful feature that experts and developers can use to implement scripts to analyze and manipulate data from any device in real-time.


## Adding an Analysis

To add a new Analysis, press the&nbsp; <img className="inline-image" src="/docs_imagem/tagocore/analysis/add-analysis-button.png" height="25px" /> &nbsp;button on the **Analyses** page. Once you press the button, the **Add Analysis** modal will appear for you to insert a new Analysis:

<img className="big-image" src="/docs_imagem/tagocore/analysis/add-analysis-modal.png" height="200px" />

In this modal, you must define a name for your Analysis in order to continue.

## Supported Languages

Within an Analysis, you are able to execute **any type of code** in **any language** you desire. The way this is achieved is through the `Binary Executable path` and the `File path` fields.

### Binary executable path

The **Binary executable path** field allows you to select a binary that will execute a file.

- If you wish to run a Node.js analysis, select the Node.js executable and a file to be executed
- If you wish to run a Python analysis, select the Python executable and a file to be interpreted
- If you wish to run a Rust analysis, select the Rust executable and a file to be compiled
- So on and so forth...

### File path

The File path field allows you to select a file that will be passed as a command line parameter to the **Binary executable**. This parameter is optional, which means you can run a **Binary executable** without a file path argument.

- If you wish to run a Node.js analysis, select a .js file
- If you wish to run a Python analysis, select a .py file
- If you wish to run a Rust analysis, select a .rs file
- If you wish to run a Standalone binary, do not select a file path
- So on and so forth...

### Example

Let's pretend you want to run code in Node.js. To achieve this, you could install [nvm](https://github.com/nvm-sh/nvm) in your local machine and then use the `node` executable provided by nvm in the **Binary executable path** field. After this, you may select a file in the **File path** field, like so:

<img className="big-image" src="/docs_imagem/tagocore/analysis/code-section.png" width="70%" />

Under the hood, TagoCore would use the following terminal command to run your analysis:

```shell
/Users/tagocore/.nvm/versions/node/v14.17.3/bin/node /Users/tagocore/project-code/.js
```

## Executing your Analysis

There are 3 ways to execute your Analysis:

1. You can set up an [Action](/docs/tagocore/action) that triggers your Analysis when certain events happen;
2. You can manually execute your Analysis by clicking the **Run** button at the bottom of the page;
3. You can manually execute your Analysis by making a POST request to `/analysis/:id/run`.

## Writing code

You may write your Analysis's code in whatever way you prefer. However, we do have some coding guidelines and best practices
that may help you in your quest to create powerful Analyses.

To learn more about best practices, coding guidelines, and how to retrieve [Device](/docs/tagocore/resources/device/data.md) data inside of your Analysis, check out the [Analysis Code](/docs/tagocore/resources/analysis/code.md) article.
