---
title: "Line Chart Widget"
description: "This article explains how to use the Line Chart widget to visualize data in TagoIO, including customization options and how to configure the widget's data source. It also lists the main sections covered and related articles."
tags: ["tagoio", "widgets"]
---
Charts are a powerful way to visualize your data and discover insights. The Line Chart widget supports color customization, applying Formula, and changing the line shape (step or smooth), among other options.

![Line chart examples](/docs_imagem/tagoio/line-chart-widget-2.png)

This widget also accepts features like [metadata](../data-management/metadata) and [series](../data-management/data-records), which can be set in your variable data.

## On this page
1. 'Data From' Field  
2. Composing X-axis and Y-axis  
3. Filtering data

## 1. 'Data From' Field
This field allows you to set the device and variable that will be used by the widget.

![Device and Variable selector](/docs_imagem/tagoio/line-chart-widget-2.png)

### 1.1 'Data From' for Normal Dashboards
From the option **Data From** on the right menu, select one device from your list of devices and the variable that contains the data.

### 1.2 'Data From' for Blueprint Dashboards
From the option **Data From** on the right menu, add the [Blueprint device](/tagoio/blueprint-devices-entities) and input the name of the variable that contains the information.  
When using a Blueprint dashboard, the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

![Image 3: Info](https://img.zohostatic.com/zde/static/images/info.png)

## 2. Composing X-axis and Y-axis
In the line chart widget, it is possible to customize how the data will be displayed in the horizontal and vertical axis.

### 2.1 X-axis
By default, the X‑axis of the chart will be the time of the values, and you can customize the range of time.  
If you need to group your data through the X‑axis even if they don't have the same time, select a variable that contains the group; all data will then be grouped by **series**.

Data is ordered by time ascending, but it is possible to change it to series.

![Image 5](https://cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/VrFUSjX0hljRiqj1VqXlLPhcjkrJlH2tbKswLKEGAq4/Captura%20de%20tela%20de%202021-06-17%2016-32-49-2mY.png)

It is also possible to define the X‑axis time range dynamically, using another variable data. The variable data should look like the following payload:

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

![Image 6: Alert](https://img.zohostatic.com/zde/static/images/exclamation.png)  
The `start_date` specifies the start of the range, and the `end_date` specifies the end of the range. In this case, the date and format should be in the ISO 8601 format.

### 2.2 Y-axis
In the vertical axis, it is possible to customize the scaling behavior: apply metric prefixes and abbreviations, change the step value (represents the difference between each tick), and more.  
The Y‑axis will automatically find the best scale for your data; it is not necessary to customize it unless you want to do so.

## 3. Filtering data
It is possible to pre‑set some date filters to be displayed, and these filters can be in minutes, hours, days, weeks, months, or custom by choosing a date in the calendar.

![Image 7](https://cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/rQSiau6lv8hUktcLV--czbby174BcSz7vwHKBAXf6QI/filteringData-e2c.gif)

## Related articles
- [Area Chart Widget](../widgets/area-chart-widget)  
- [Multiple Charts Widget](../widgets/multiple-charts-widget)  
- [Horizontal Bar Widget](../widgets/horizontal-bar-widget)  
- [Vertical Column Widget](../widgets/vertical-column-widget)  
- [Map Widget](../widgets/map-widget)