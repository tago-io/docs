---
title: "Icons Widget"
description: "This article explains the Icons widget for TagoIO, showing example styles, how many variables it supports, and how to add and customize the widget on a dashboard, including the \"Data From\" and \"Conditions\" configuration options."
tags: ["tagoio", "widgets"]
---
With icons, you can create highly personalized widgets for your applications. The examples below illustrate a few possible styles, but the customization options are extensive.

![Icon widget examples](/docs_imagem/tagoio/icons-widget-2.gif)

Users can add up to 9 variables to this widget. Each variable will display its latest value.

*This widget works for both Normal and Blueprint dashboards.*

## Creating your own

To add the Icons widget to your dashboard, choose the Icon widget from the list and customize it to your preference. Edit the widget using the options located on the right side of the widget editor.

![Icon widget editor](/docs_imagem/tagoio/icons-widget-2.gif)

### 1. 'Data From' Field

Use the "Data From" field to select which device and variable(s) will feed the Icon widget. This determines which variable values are displayed for each icon instance.

- **Normal Dashboards** – Select one device from your list of devices and choose the variable that contains the data.
- **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable that contains the information.  
  *When using a Blueprint dashboard, the Variable field will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.*

Click on the cog icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

![Data From example](/cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/e8-MfiCj5RwAfHTvlBRuj35BF4akrnZU7huPEjZZf_c/1623008017802-7Qs.png)

### 2. Conditions

The widget changes its content based on two types of conditions, **Icon conditions** and **Color conditions**, based on variable data. If it satisfies any condition set, then it will change the color of the content.

- The priority order between conditions is top to bottom; a condition in the top row always has priority over one below.
- It is possible to show your own images in the widget by adding their icon URL.

![Conditions example](/cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/6urQaiVLijluk8JJulhV5B4xTQgm9ZjdlYuJpFGanMg/editingConditions-vVQ.gif)

## Related Articles

- See [Map Widget](../widgets/map-widget)  
- See [Image Marker Widget](../widgets/image-marker-widget)  
- See [Compose Widget](../widgets/compose-widget)  
- See [Custom Widget](../widgets/custom-widget)  
- See [Formula](../formula)