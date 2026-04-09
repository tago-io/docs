---
title: "Angular Widget"
description: "This article explains how to use the Angular widget to display a variable in an angular gauge and how to add and customize it on your dashboard."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, angular gauge, meter]
---

Angular gauges allow you to display your variable in an angular gauge meter.

![Angular gauge example showing a variable in an angular gauge meter](/docs_imagem/tagoio/rounded-image-1773064828901.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata.md), which can be set in your variable data.

## Creating your own

To add the Angular widget to your dashboard, choose the Angular widget from the widget list and customize it to your preference. You can edit the widget using the options located on the right side of the widget.

### Data Sources Field

The **Data Sources** field lets you specify which device and variable will feed data into the gauge.

- **Normal Dashboards** – Select a device from your list, then choose the variable that contains the data.
- **Blueprint Dashboards** – Add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information. The field will suggest a list of variables to be picked using the currently selected blueprint device.

> The field is dependent on the type of dashboard you are using; the differences are explained above.
