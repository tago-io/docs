---
title: "Semi Pie Widget"
description: "This article explains the Semi Pie widget, which generates a semi-circle pie chart from multiple variables, and shows how to add and customize it on your dashboard."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, semi pie chart, data visualization]
---

Using data from multiple variables, the Semi Pie widget automatically produces a Semi Pie chart where each slice represents a variable's value.

![Example Semi Pie charts showing three styling variants](/docs_imagem/tagoio/rounded-image-1773855308566.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata.md), which can be set in your variable data.
It works for both Normal and Blueprint dashboards.

## Creating your own

To add the Semi Pie widget to your dashboard, choose the Semi Pie widget from the widget list and customize it to your preference. You can edit it using the options located on the right side of the widget.

### Data Sources Field

This field allows you to set the device and variable that will be used in this widget. Click on the settings icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

#### For Normal Dashboards

From the option 'Data Sources' on the right menu, select one device from your list of devices and the variable that contains the data.

#### For Blueprint Dashboards

From the option **'Data Sources'** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.
When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard.md), the field **Variable** will list variables to be picked using the currently selected blueprint device.
