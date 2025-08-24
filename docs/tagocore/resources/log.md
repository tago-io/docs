---
sidebar_position: 6
title: Logs
slug: /tagocore/log
---

# Application Logs

Application Logs allow you to visualize the logs of the application and plugins.

To access this page, click on the &nbsp;<img src="/docs_imagem/tagocore/icons/scroll.svg" width="15px"/>&nbsp; button located on the upper right-hand corner of the screen.


## Channel

You can select which log channel to view. By default, this option is set to `Application`, which means that only the native TagoCore application logs are shown on the screen.

Each plugin has its own log channel, so if you want to see the logs for a specific plugin, just select its channel.

## Type

There are 2 types of logs:

- Error
- Verbose

Error logs are error messages that TagoCore or a plugin can generate in order to warn you that something is not right. These types of logs appear with a red color and the [Stack Trace](https://en.wikipedia.org/wiki/Stack_trace) may or may not appear for each log, depending if a plugin wants to use them.

Verbose logs are default messages that indicate that something is happening. These types of logs are more common and do not symbolize any type of errors.
