---
title: "Icons Widget"
description: 'This article explains the Icons widget for TagoIO, showing example styles, how many variables it supports, and how to add and customize the widget on a dashboard, including the "Data From" and "Conditions" configuration options.'
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, icons, display]
---

With icons, you can create highly personalized widgets for your applications. The examples below illustrate a few possible styles, but the customization options are extensive.

![Icon widget examples](/docs_imagem/tagoio/peek_126.gif)

Users can add up to 9 variables to this widget. Each variable will display its latest value.

## Creating your own

To add the Icons widget to your dashboard, choose the Icon widget from the list and customize it to your preference. Edit the widget using the options located on the right side of the widget editor.

### 1. 'Data Sources' Field

Use the "Data Sources" field to select which device and variable(s) will feed the Icon widget. This determines which variable values are displayed for each icon instance.

- **Normal Dashboards** – Select one device from your list of devices and choose the variable that contains the data.
- **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable that contains the information.  
  When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard.md), the field **Variable** will list variables to be picked using the currently selected blueprint device.

Click on the settings icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

### 2. Conditions

The widget changes its content based on two types of conditions, **Icon conditions** and **Color conditions**, based on variable data. If it satisfies any condition set, then it will change the color of the content.

- The priority order between conditions is top to bottom; a condition in the top row always has priority over one below.
- It is possible to show your own images in the widget by adding their icon URL.
