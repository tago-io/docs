---
title: "Semi Donut Widget"
description: "Explains how the Semi Donut widget displays variable data as a semi-donut chart and how to add and customize it in a TagoIO dashboard."
tags: ["tagoio", "widgets"]
---
Using data from multiple variables, the Semi Donut widget automatically produces a semi-donut chart in which each slice represents a variable's data.

![Three examples of semi-donut charts with different styles](/docs_imagem/tagoio/semi-donut-widget-2.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/data-management/metadata), which can be set in your variable data.

## Creating your own

To add the widget to your dashboard, select the Semi Donut widget from the widget list and customize it to your preference. You can edit it using the options located on the right side of the widget editor.

![Semi Donut widget shown in the dashboard editor with options on the right side](/docs_imagem/tagoio/semi-donut-widget-2.png)

> This widget works for both dashboards, Normal and [Blueprint](/docs/tagoio/dashboards/blueprint-dashboard).

### 1. 'Data From' Field

This field allows you to set the device and variable that will be used in this widget. It is dependent on the type of dashboard you are using; the difference is explained below.

> Click on the cog icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

##### 1.1 'Data From' for Normal Dashboards

From the option **Data From** on the right menu, select one device from your list of devices and the variable that contains the data.

##### 1.2 'Data From' for Blueprint Dashboards

From the option **Data From** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities) and input the name of the variable that contains the information.

> When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard), the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

## Related articles

- [Semi Pie Widget](../widgets/semi-pie-widget)  
- [Pie Widget](../Charts/pie-widget)  
- [Grain Bin Widget](../Gauge & Meter/grain-bin-widget)  
- [Cylinder Widget](../Gauge & Meter/cylinder-widget)  
- [Solid Widget](../Gauge & Meter/solid-widget)