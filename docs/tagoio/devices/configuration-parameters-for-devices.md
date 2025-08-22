---
title: "Configuration Parameters for Devices"
description: "This article explains what Configuration Parameters are in TagoIO devices, where to find them, and the three configurable fields for each parameter (Key, Value, Read/Unread). It also shows how to access the Configuration Parameters tab on a device and how parameters can be set and retrieved."
tags: ["tagoio", "devices"]
---

Configuration Parameters are key-value pairs that enable you to customize the behavior of your [Devices](../devices/devices) in different scenarios. For example, you can use them to specify how to decode data or send downlink messages, filter your devices on [Widgets](../widgets/widgets-overview), or interact with [API & Analysis](../api/api-overview) scripts.

Configuration Parameters are stored on the configuration page of your device. You can access them by clicking on the Devices module in the left menu and selecting a device. You will see a tab called "Configuration Parameters", where you can add, edit, or delete parameters. You can set parameters and retrieve them later by making a request from the device.

<!-- Image placeholder removed for build -->

## How it works

Each Configuration Parameter has three configurable fields:

1. Key  
   - Name of the parameter that you can use to reference it in your code or widgets.

2. Value  
   - The value you want to assign to your device for that parameter.

3. Read & Unread  
   - A boolean value (true or false) that indicates whether the parameter has been sent to the device.

(The image above illustrates the fields: 1 = Key, 2 = Value, 3 = Read/Unread.)