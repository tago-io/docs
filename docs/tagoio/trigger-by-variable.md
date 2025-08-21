---
title: "Trigger by Variable"
description: "This article explains the \"Trigger by Variable\" action type in TagoIO, describing its two categories (Single device and Multiple devices), how each works, and a note about Trigger Unlock availability."
tags: ["tagoio"]
---

The trigger type, [Actions](link-to-actions), Trigger by Variable, allows you to execute an action when a variable meets specified conditions. If a device sends data and the variables meet those conditions, the action will be triggered.

There are 2 (two) categories inside this trigger type:

## 1. Single device
Allows you to watch a specific device from your device list. Any data sent by that device will be tested against your conditions to determine whether the action should be triggered.

![Single device vs Multiple devices selection](/docs_imagem/tagoio/trigger-by-variable-2.png)

## 2. Multiple devices
Allows you to watch multiple devices. Any data sent by those devices will be tested against your conditions to determine whether the action should be triggered. For this type, you must supply the tag key and tag value of the devices you want to watch.

![Selecting tags for multiple devices (tag_key / tag_value)](/docs_imagem/tagoio/trigger-by-variable-2.png)

It's important to note that only the Single device category allows you to set Trigger Unlock conditions. To learn more, see [Trigger Unlock](link-to-trigger-unlock).