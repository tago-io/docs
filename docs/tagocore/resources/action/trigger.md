---
sidebar_position: 2
title: Trigger
slug: /tagocore/action/trigger
---

# Action Trigger

Currently, there is only 1 type of trigger you can use:

- **Variable**: The Action will be triggered when one or more variables meet certain conditions. If your [Device](/docs/tagocore/device) has sent data and the variables are meeting those conditions, the Action will be triggered.

## Trigger by Variable

This type allows you to execute your [Actions](/docs/tagocore/action) when one or more variables meet certain conditions.

There are 2 categories inside of this trigger type:

- **Single device**: Allows you to watch a specific [Device](/docs/tagocore/device) in your list. Any data that is sent by that device will be tested against your conditions to decide if this action should be triggered or not.

- **Multiple devices**: Allows you to watch multiple [Devices](/docs/tagocore/device). Any data that is sent by those devices will be tested against your conditions to decide if this action should be triggered or not. For this type, you must supply the tag key and tag value of the devices you want to watch.

### Trigger Conditions
After setting up the [Device](/docs/tagocore/device), you should set a condition for your Action to be executed.

<img className="big-image" src="/docs_imagem/tagocore/action/action-conditions.png" height="100px" />

1. **Select a variable** to be tested. This will be one of the variables that will be compared against the data from the device.
2. **Define the type** of condition to test the variable. The available test conditions are:
  - **Less than**: matches when the value of the variable is less than the value defined;
  - **Greater than**: matches when the value of the variable is greater than the value defined;
  - **Equal to**: matches when the value of the variable is equal to the value defined;
  - **Different from**: matches when the value of the variable is different from the value defined;
  - **Any**: matches whenever a new value of the variable is sent to the device;
  - **Between**: matches when the new value is between a fixed value range.
3. **Set a value** to complement the condition. In the example above, the value for the condition is 15.

## Roadmap

Just like our [TagoIO Cloud](https://admin.tago.io) platform, we plan to implement new Action triggers in the future, such as Trigger by Resource, and Trigger by Schedule.
