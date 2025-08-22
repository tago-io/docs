---
title: "Trigger Unlock"
description: "This article explains the Trigger Unlock feature in TagoIO, how it prevents repeated action executions by locking triggers, and when a locked trigger is allowed to execute again. It also notes that the feature is available only for Trigger by Variable."
tags: ["tagoio"]
---
Trigger Unlock is a feature that allows users to define specific conditions under which an action, once locked, can be unlocked and allowed to execute again. This locking mechanism safeguards against repetitive or unwanted triggers, ensuring that actions occur only when truly necessary. Before using Trigger Unlock, familiarize yourself with [Trigger Conditions](actions/actions#trigger-conditions).

This feature is available exclusively for the trigger type: [Trigger by Variable](trigger-by-variable).

## How It Works

By default, when a Trigger Condition is met, the corresponding action typically executes immediately. However, if Trigger Unlock conditions are also defined, the action first enters a "locked" state upon meeting the initial Trigger Condition. This lock prevents the action from being triggered again until the specified unlock conditions are met. This mechanism is particularly useful when an action should only occur once under certain circumstances and be allowed to trigger again after other conditions are satisfied.

Thus, each time a Trigger Condition is met, the trigger is locked if there is at least one Trigger Unlock condition defined. If Trigger Conditions are met but there are no Trigger Unlock conditions, the action will not get locked.

### Locked Switch

You can check if your action is locked by looking at the **Locked** switch, as shown in the screenshot below.  
- If the Locked switch is gray, it means your action is unlocked;  
- If it's red, it means your action is locked.  

The lock button will only appear once you add at least one condition.

![Image 1](https://help.tago.io/galleryDocuments/edbsndc2406bf2cd3cd61aa1f461cc2d1f203548db3124e424cd8bb3a7bdfd1393f8a64142422313dab0897a94f428a9ffc80?inline=true)

### Manual Locking

You can also set this Locked parameter manually; all you have to do is click it to toggle between Locked or not, and then hit **Save**.

### Unlock Condition Example

Additionally, you can run the action again when an unlock condition is met. For example, if you are triggering an [Analysis](https://help.tago.io/portal/en/kb/articles/120-creating-analysis)​ to set a device in alert mode due to high-temperature readings, you can also switch to safe mode upon meeting an unlock condition.

![Image 2](https://help.tago.io/galleryDocuments/edbsn83f7f9c4d0ea858d2e944796341d591da55a470efb13228166766d02b73b76188e26b933d9404aba747ea3e7f323ef66?inline=true)

### Duplicate Trigger Warning

Enabling a trigger when unlocked can lead to a duplicate triggered action.

### Why Does This Exist?

One example of an undesirable situation could occur when you want to receive only one SMS when the temperature crosses above 95 °C, but instead, you receive one SMS for each time a new value of temperature above 95 °C is sent (95 °C, 96 °C, 97 °C).

You may want to implement a hysteresis using a Trigger Unlock condition. If you define the condition to reset when the temperature is less than 90 °C, for example, it would prevent this issue.

Only one SMS would be sent, and the system would remain locked until the temperature goes below 90 °C, which seems much more reasonable in this example.