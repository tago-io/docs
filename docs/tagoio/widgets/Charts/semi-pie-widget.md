---
title: "Semi Pie Widget"
description: "This article explains the Semi Pie widget, which generates a semi-circle pie chart from multiple variables, and shows how to add and customize it on your dashboard."
tags: ["tagoio", "widgets"]
---
## Overview

Using data from multiple variables, the Semi Pie widget automatically produces a Semi Pie chart where each slice represents a variable's value.

![Example Semi Pie charts showing three styling variants](/docs_imagem/tagoio/semi-pie-widget-2.png)

This widget also accepts features like [metadata](/docs/tagoio/payload-parser/metadata), which can be set in your variable data.  
It works for both Normal and Blueprint dashboards.

## Creating your own

To add the Semi Pie widget to your dashboard, choose the Semi Pie widget from the widget list and customize it to your preference. You can edit it using the options located on the right side of the widget.

![Dashboard editing view showing the Semi Pie widget and its options on the right side](/docs_imagem/tagoio/semi-pie-widget-2.png)

### Data From Field

This field allows you to set the device and variable that will be used in this widget. Click on the cog icon to edit specific options for this variable, such as formulas, color, and more. Click on the close icon to remove this variable from the widget's data.

<!-- Image temporarily disabled: Data From field example - /cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/e8-MfiCj5RwAfHTvlBRuj35BF4akrnZU7huPEjZZf_c/1623008017802-7Qs.png -->

#### For Normal Dashboards

From the option 'Data From' on the right menu, select one device from your list of devices and the variable that contains the data.

#### For Blueprint Dashboards

From the option 'Data From' on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities) and input the name of the variable that contains the information.  
When using a Blueprint dashboard, the field Variable will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

<!-- Image temporarily disabled: Creating Semi Pie widget GIF - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/rtbtbysxI4zx8hoRmN7YBBG2t4QiUo0GiSLYJmV9Mys/creatingsemipie-_UQ.gif -->