---
title: "Trigger by Variable"
description: "This article explains the \"Trigger by Variable\" action type in TagoIO, describing its two categories (Single device and Multiple devices), how each works, and a note about Trigger Unlock availability."
tags: ["tagoio"]
---
The trigger type, [Actions](/docs/tagoio/actions/), Trigger by Variable, allows you to execute an action when a variable meets specified conditions. If a device sends data and the variables meet those conditions, the action will be triggered.

There are 2 categories inside this trigger type:

## 1. Single device
Allows you to watch a specific device from your device list. Any data sent by that device will be tested against your conditions to determine whether the action should be triggered.

![Single-device selection UI](/docs_imagem/tagoio/rounded-image-1767016336359.png)

## 2. Multiple devices
Allows you to watch multiple devices. Any data sent by those devices will be tested against your conditions to determine whether the action should be triggered. For this type, you must supply the tag key and tag value of the devices you want to watch.

 ![Multiple-devices tag selection UI](/docs_imagem/tagoio/rounded-image-1767016364577.png)

:::warning
Note that only the **Single device** category allows you to set **Trigger Unlock** conditions. To learn more, see [Trigger Unlock](/docs/tagoio/actions/trigger-unlock.md).
:::

## Trigger Conditions

After setting up the device, you should set a condition for your action to be executed. To do so, head over to the **Trigger** section.

You can set multiple conditions in an action; if at least one of them results in a match, the action will be executed.

:::info
When you set up multiple conditions, the action will execute only once per data
message, even if that message matches multiple conditions. For example, if you
have two conditions:

- Condition 1: Variable `temperature` is greater than `25`
- Condition 2: Variable `temperature` is greater than `20`

And you receive a message with `temperature` set to `30`, it matches both
conditions, but the action will trigger only once for that single message.
:::

1. **Select a variable**: Choose a variable to be tested. This will be one of the variables that will be compared against the data from the device.
2. **Condition**: The type of condition to test the variable. The available test conditions are:
   1. **Less than** – true when the value of the variable is less than the defined value;
   2. **Greater than** – true when the value of the variable is greater than the defined value;
   3. **Equal to** – true when the value of the variable equals the defined value;
   4. **Different from** – true when the value of the variable differs from the defined value;
   5. **Any** – true whenever a new value of the variable is sent to the device;
   6. **Between** – true when the new value falls between a fixed range.
3. **Value**: The value that complements the condition. In the example above, the value for the condition is `15`.
4. **Field type**: The field type used in the comparison. The system will enforce this field type when comparing the device’s data with the defined value (`15`). For instance, you could set the value to `0x1` and set this field to `string` to compare the number as a string.

The example above means that the action will be triggered when **my_variable is less than 15**.

:::tip

Looking to create more complex logic statements? You can use the [Action](/docs/tagoio/actions/) to trigger an [Analysis](/docs/tagoio/analysis/), and then manually create custom logic inside of the code.

:::

### Preventing the action from running every time the conditions are met

To prevent your action from activating every time the conditions are met, you can lock it by defining **Trigger Unlock** conditions. Note that only the **Single device** type allows you to set Trigger Unlock conditions.
