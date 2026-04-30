---
title: "VU Meter Widget"
description: "This article explains the VU Meter widget for TagoIO, describing what it displays and how to add and customize it on a dashboard. It also notes that the widget supports metadata in variable data."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, vu meter, gauge]
---

VU Meter gauges display the variable in a velocimeter-style gauge.

![Three VU meters example](/docs_imagem/tagoio/rounded-image-1773085185777.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata.md) that can be set in your variable data.

## Creating your own

To add the VU Meter widget to your dashboard, choose the VU Meter widget from the widget list and customize it to your preference. You can edit the widget using the options located on the right side of the widget.

### 'Data Sources' Field

This field allows you to set the device and variable that will be used in this widget.

> This field is dependent on the type of dashboard you are using; the difference is explained below.

#### 1.1 'Data Sources' for Normal Dashboards

From the option **Data Sources** on the right menu, select one device from your list of devices and the variable that contains the data.

#### 1.2 'Data Sources' for Blueprint Dashboards

From the option **Data Sources** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.

:::info

When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard.md), the field **Variable** will list variables to be picked using the currently selected blueprint device.

:::
