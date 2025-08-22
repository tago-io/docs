---
title: "Angular Widget"
description: "This article explains how to use the Angular widget to display a variable in an angular gauge and how to add and customize it on your dashboard."
tags: ["tagoio", "widgets"]
---
Angular gauges allow you to display your variable in an angular gauge meter.

![Three example Angular gauges showing temperature readings](/docs_imagem/tagoio/angular-widget-2.gif)

This widget also accepts features like [metadata](../data-management/metadata), which can be set in your variable data.

## Creating your own

To add the Angular widget to your dashboard, choose the Angular widget from the widget list and customize it to your preference. You can edit the widget using the options located on the right side of the widget.

![Angular widget configuration area](/docs_imagem/tagoio/angular-widget-2.gif)

### Data From Field

The **Data From** field lets you specify which device and variable will feed data into the gauge.

- **Normal Dashboards** – Select a device from your list, then choose the variable that contains the data.
- **Blueprint Dashboards** – Add the [Blueprint device](https://help.tago.io/portal/en/kb/articles/455-blueprint-devices) and type the name of the variable. Because the dashboard does not know which devices are linked to the Blueprint Device, the Variable selector will not list available variables.

> This widget works for both **Normal** and **Blueprint** dashboards.

The field is dependent on the type of dashboard you are using; the differences are explained above.