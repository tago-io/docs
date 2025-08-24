---
sidebar_position: 2
title: Console
slug: /tagocore/analysis/console
---

# Analysis Console

The Analysis Console shows the output of your Analysis's code, as well as any validation errors that happened before your Analysis executed.

The latest logs from your code will always be on top of the Console, and each log will have a timestamp that indicates when the log was outputted.

There are no log limits.

## Adding logs

The Analysis system automatically picks up anything that your code outputs to the [stdout](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) or [stderr](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)) streams and adds it to the logs.

- To output normal logs to the Console, use the [stdout](https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)) stream inside of your code (e.g. `console.log` in Node.js)
- To output error logs to the Console, use the [stderr](https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)) stream inside of your code (e.g. `console.error` in Node.js).

## Validation errors

Before your code can be executed via the Analysis system, TagoCore validates the **Binary executable path** and the **File path** to make sure that the files exist and that there is permission in the filesystem to use them.

If something goes wrong during this validation process, an error will be logged to the Console with details about the error. Your code will not be executed if a validation error happens.

## Clearing logs

If you ever feel like there is too much information in your Console, feel free to click the &nbsp;<img src="/docs_imagem/tagocore/icons/ban.svg" width="15px"/> &nbsp;button to hide all the logs and make room for new ones.

Clearing logs is a temporary measure, all the logs will be back if you leave the Analysis' page and come back.


## Downloading logs

TagoCore offers the possibility to download the logs of your Analysis by clicking the &nbsp;<img src="/docs_imagem/tagocore/icons/download.svg" width="15px" /> &nbsp;button located in the Console header. The logs will be downloaded as a **.txt** file.

:::info
Only the logs currently visible on the screen will be downloaded. If you clear the logs before downloading, the log file will be empty.
:::
