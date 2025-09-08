---
title: "Dial Widget"
description: "A brief guide to the Dial widget in TagoIO, explaining what dials are used for and how to add and customize a Dial widget on your dashboard."
tags: ["tagoio", "widgets"]
---
Dials are one of the simplest and most useful widgets. They make it easy to visualize values relative to a defined range (with maximum and minimum limits).

![Dial widget examples](/docs_imagem/tagoio/dial-widget-2.gif)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata), which can be set in your variable data.

## Creating your own

To add the Dial widget to your dashboard, choose the Dial widget from the list and customize it to your preference. You can edit it by using the options located on the right side of the widget.

### 'Data From' Field

This field allows you to set the device and variable that will be used in this widget.

> This field is dependent on the type of dashboard you are using; the difference is explained below.

#### 1.1 'Data From' for Normal Dashboards

From the option **'Data From'** on the right menu, select one device from your list of devices and the variable that contains the data.

#### 1.2 'Data From' for Blueprint Dashboards

From the option **'Data From'** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities) and input the name of the variable that contains the information.

:::info

When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard), the field Variable will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

:::