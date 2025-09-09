---
title: "Solid Widget"
description: "This article explains how to use the Solid widget in TagoIO to display variables as solid gauge meters and how to add and customize the widget on a dashboard."
tags: ["tagoio", "widgets"]
---
Solid gauges allow you to display a variable in a solid gauge meter.

![Examples of Solid Widget styles (three gauges shown)](/docs_imagem/tagoio/solid-widget-2.gif)

This widget also accepts features like [metadata](/tagoio/devices/payload-parser/metadata.md), which can be set in your variable data.

## Creating your own

To add the Solid widget to your dashboard, choose the Solid widget from the widget list and customize it to your preference. Edit the widget using the options located on the right side of the widget.

This widget works for both Normal and Blueprint dashboards. The **Data From** field allows you to specify the device and variable that will be used in this widget.  
* For Normal dashboards, select a device from your list of devices and then choose the variable containing the data.  
* For Blueprint dashboards, add the Blueprint device and input the name of the variable; note that the variable selector may not list variables because it does not know which devices are linked to your Blueprint Device.