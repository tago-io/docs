---
title: "Grain Bin Widget"
description: "This article explains the Grain Bin widget for TagoIO, its purpose, and how to add and customize it on your dashboard. It also notes that the widget accepts metadata set in your variable data."
tags: ["tagoio", "widgets"]
---
The Grain Bin widget produces a grain-bin illustration so you can easily track variable information.

![Grain bin illustration](/docs_imagem/tagoio/grain-bin-widget-2.png)

This widget also accepts features like [metadata](../../data-management/metadata) that can be set in your variable data.

## Creating your own

To add the Grain Bin widget to your dashboard, choose the Grain Bin widget from the widget list and customize it to your preference. Edit the widget using the options located on the right side of the widget configuration panel.

![Widget configuration options](/docs_imagem/tagoio/grain-bin-widget-2.png)

Here is an animated preview of the Grain Bin widget in action:
![Animated grain bin](/docs_imagem/tagoio/grainbin-Ya8.gif)

### Data From Field

This field allows you to set the device and variable that will be used in this widget.

![Data From field example](/docs_imagem/tagoio/1623008017802-7Qs.png)

Click on the cog icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

> This field is dependent on the type of dashboard you are using; the difference is explained below.

#### 1.1 Normal Dashboards

From the option 'Data From' on the right menu, select one device from your list of devices and the variable that contains the data.

#### 1.2 Blueprint Dashboards

From the option 'Data From' on the right menu, add the [Blueprint device](../../devices/blueprint-devices-entities) and input the name of the variable that contains the information.

> When using a [Blueprint dashboard](../../dashboards/blueprint-dashboard), the field Variable will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

### Compatibility

This widget works for both dashboards, Normal and [Blueprint](../../dashboards/blueprint-dashboard).