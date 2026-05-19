---
title: "Pie Widget"
description: "A brief guide to the Pie widget for TagoIO, describing how it uses variable data to produce pie charts and how to add and customize the widget on a dashboard."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, pie chart, data visualization]
---

Using data from multiple variables, the Pie widget automatically produces a pie chart where each slice represents a variable's data.

![Pie widget examples](/docs_imagem/tagoio/rounded-image-1773259794288.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata.md) that can be set in your variable data.

## Creating your own

To add the Pie widget to your dashboard, choose the Pie widget from the widget list and customize it to your preference. You can edit it using the options located on the right side of the widget.

### Data Sources Field

This field allows you to set the device and variable that will be used in this widget.
Click on the settings icon to edit specific options for this variable, such as formulas or color. Click on the close icon to remove this variable from the widget's data.

#### Normal Dashboards

From the option **Data Sources** on the right menu, select one device from your list of devices and the variable that contains the data.

#### Blueprint Dashboards

From the option **Data Sources** on the right menu, add the _Blueprint device_ and input the name of the variable that contains the information.
When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard.md), the field **Variable** will list variables to be picked using the currently selected blueprint device.
