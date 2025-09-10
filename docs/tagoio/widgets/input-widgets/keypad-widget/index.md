---
title: "Keypad Widget"
description: "A brief guide to the Keypad widget for TagoIO, explaining what it does and how to add and customize it on a dashboard, with links to related documentation."
tags: ["tagoio", "widgets"]
---
Keypad allows the user to submit a PIN code along with an optional action string. This widget is ideal to represent an alarm or to request a PIN code to unlock a resource.

![Keypad layout showing numbers 1–9, *, 0, #](/docs_imagem/tagoio/keypad-widget-2.png)

## Creating your own

To add the Keypad to your dashboard, choose the Keypad widget from the widget list and customize it to your preference. You can edit its settings using the options located on the right side of the widget.


## 1. 'Data From' Field

This field allows you to set the device and variable that will be used in this widget.

### 1.1 'Data From' for Normal Dashboards

From the option **‘Data From’** on the right menu, select one device from your list of devices and the variable that contains the data.

### 1.2 'Data From' for Blueprint Dashboards

From the option **‘Data From’** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.

:::info

When using a Blueprint dashboard, the field *Variable* will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

:::

## 2. Visualization

By default, the numeric keypad contains 10 digits that range from 0‑9, and it also contains an asterisk (*) and a number sign (#).  
You have the option to customize the content of the keypad by creating buttons that will appear along with the digits.

Learn more about the [customization options of your keypad](/tagoio/widgets/input-widgets/keypad-widget/keypad-visualization.md).

## 3. Data manipulation

The keypad will send the data immediately after pressing a custom button, or just by inputting a combination of numeric digits and waiting 3 seconds.

Whenever a PIN code is submitted, the structure sent to the variable will be:

```
DIGITS,ACTION
```

For instance, if the user has clicked the sequence **1234** and then **DISARM**, the output would be:

```
1234,disarm
```

Learn more about how to [manipulate the keypad's data](/tagoio/widgets/input-widgets/keypad-widget/keypad-data-manipulation.md).
