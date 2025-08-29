---
title: "Configuration Parameters for Devices"
description: "This article explains what Configuration Parameters are in TagoIO devices, where to find them, and the three configurable fields for each parameter (Key, Value, Read/Unread). It also shows how to access the Configuration Parameters tab on a device and how parameters can be set and retrieved."
tags: ["tagoio", "devices"]
---
Configuration Parameters are key-value pairs that enable you to customize the behavior of your [Devices](../devices/) in different scenarios. For example, you can use them to specify how to decode data or send downlink messages, filter your devices on [Widgets](../widgets/), or interact with [API & Analysis](../api/) scripts.

Configuration Parameters are stored on the configuration page of your device. You can access them by clicking on the Devices module in the left menu and selecting a device. You will see a tab called "Configuration Parameters", where you can add, edit, or delete parameters. You can set parameters and retrieve them later by making a request from the device.

<!-- Image placeholder removed for build -->

## How it works

Each Configuration Parameter has three configurable fields:

1. **Key**  
   - Name of the parameter that you can use to reference it in your code or widgets.

2. **Value**  
   - The value you want to assign to your device for that parameter.

3. **Read & Unread**  
   - A boolean value (true or false) that indicates whether the parameter has been sent to the device.

(The image above illustrates the fields: 1 = Key, 2 = Value, 3 = Read/Unread.)

> **Maximum limit:** The maximum number of parameters per Device is **60**. If you attempt to add additional items beyond this limit, a notification will appear indicating that the maximum capacity has been reached.

## Managing Configuration Parameters

You can manage your device’s configuration parameters through several methods:

- **Manually** – Add, edit, or delete parameters directly from the device page on TagoIO using its user interface.
- **Analysis SDK** – Use JavaScript code in an analysis script to create, update, or remove parameters with functions such as `paramList`, `paramSet`, and `paramRemove`.
- **API endpoint** – Send HTTP requests (GET, POST, PUT, DELETE) with JSON payloads to TagoIO’s API for programmatic parameter management.
- **Widgets** – Some widgets allow you to edit device configuration parameters natively, such as the [Device List Widget](../widgets/Tables/device-list-widget).

## Common Use Cases

- **Payload Parser** – Dynamically change parsing logic based on a parameter value (e.g., `mode` set to `normal` or `debug`).
- **Widget Display** – Show additional device details like firmware version or battery level, and filter or sort devices by parameters.
- **API & Analysis** – Send commands or queries to devices using their Device‑Token; for example, a `downlink` parameter can carry payloads that are sent as instructions.

---