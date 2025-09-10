---
title: "Area Chart Widget"
description: "This article explains how to use the Area Chart widget in TagoIO, including customization options, supported variable features, and how to configure the data source for the widget."
tags: ["tagoio", "widgets"]
---
Charts are a powerful way to visualize your data and discover insights. The Area Chart widget supports color customization, applying [Formula](/docs/tagoio/widgets/general/formula.md), and customizing the line shape (step or smooth), among other options.

![Example area charts illustrating different styles and color schemes](/docs_imagem/tagoio/area-chart-widget-2.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata.md) and [series](/docs/tagoio/devices/grouping-variables.md), which can be set in your variable data.

## 1. 'Data From' Field

This field allows you to set the device and variable that will be used by this widget.

### 1.1 'Data From' for Normal Dashboards
From the option **'Data From'** on the right menu, select one device from your list of devices and the variable that contains the data.

![Image 2](/docs_imagem/tagoio/1623008017802-7Qs.png)

Click on the **cog icon** to edit specific options for this variable, such as formulas, color, and more. Click on the **close icon** to remove this variable from the widget's data.

### 1.2 'Data From' for Blueprint Dashboards
From the option **'Data From'** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.


When using a **Blueprint dashboard** (/docs/tagoio/blueprint-dashboard), the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

## 2. Composing X-axis and Y-axis

In the area chart widget, it is possible to customize how the data will be displayed in the horizontal and vertical axis.

![Image 5](/docs_imagem/tagoio/areaChartaxis-W_0.gif)

### 2.1 X-axis
By default, the X‑axis of the chart will be the time of the values, and you can customize the range of time.
If you need to group your data through the X‑axis even if they don't have the same time, select a variable that contains the group; all data will then be grouped by **series**.


Data is ordered by time ascending, but it is possible to change it to series:

![Image 7](/docs_imagem/tagoio/Captura-20de-20tela-20de-202021-06-17-2018-25-18-hFU.png)

It is also possible to define the X‑axis time range dynamically, using another variable data. The variable payload should look like this:

```json
{
  "variable": "time_range",
  "value": "Any value",
  "metadata": {
    "start_date": "2021-06-17T00:00:00.000Z",
    "end_date": "2021-06-18T00:00:00.000Z"
  }
}
```

The `start_date` specifies the start of the range, and the `end_date` specifies the end of the range. In this case, the date and format should be in ISO 8601.

### 2.2 Y-axis
In the vertical axis, you can customize the scaling behavior: apply metric prefixes and abbreviations, change the step value (the difference between each tick), and more.


The Y‑axis will automatically find the best scale for your data; it is not necessary to customize it unless you want to do so.

## 3. Filtering data
It is possible to pre‑set some date filters to be displayed, and these filters can be in minutes, hours, days, weeks, months, or custom by choosing a date in the calendar.

![Image 11](/docs_imagem/tagoio/filteringDataArea.gif-AUM.gif)

## 4. Increasing performance
When a chart has a large number of data points, you can increase the widget performance by enabling the **Downsampling** feature. Downsampling also makes the data easier to visualize.

![Image 12](/docs_imagem/tagoio/areaDownsampling-cyw.gif)

Downsampling has two concepts: **Threshold** and **Factor**.
The Threshold limits the amount of data to start the downsampling, and the factor determines how many samples will be cut.

The greater the factor, the greater the performance improvement, but as the factor increases, the data also becomes less recognizable.
