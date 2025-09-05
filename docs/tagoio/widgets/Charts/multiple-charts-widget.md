---
title: "Multiple Charts Widget"
description: "This article explains how to use the Multiple Charts widget in TagoIO, including how each variable can produce a different chart type, configurable options, and the Data From field used to select device and variable sources."
tags: ["tagoio", "widgets"]
---
Charts are a powerful way to visualize your data and find insights. The Multiple Charts widget lets you customize colors, apply Formula (/docs/tagoio/widgets/general/formula), change line shapes (step or smooth), choose whether series are stacked, and more.

When using multiple charts widget, each variable produces a different chart. In the same widget it is possible to have each chart as an [Area Chart](/docs/tagoio/widgets/charts/area-chart-widget), [Line Chart](/docs/tagoio/widgets/charts/line-chart-widget), [Horizontal Bar](/docs/tagoio/widgets/charts/horizontal-bar-widget), or [Vertical Column](/docs/tagoio/widgets/charts/vertical-column-widget).

![Multiple charts examples (area, line and column)](/docs_imagem/tagoio/multiple-charts-widget-2.png)

This widget also accepts features like [metadata](/docs/tagoio/devices/payload-parser/metadata) and [series](/docs/tagoio/devices/grouping-variables), which can be set in your variable data.

## 1. 'Data From' Field

This field allows you to set the device and variable that will be used in this widget.

Click on the **cog icon** to edit specific options for this variable, such as the chart type, formulas, and more. Click on the **close icon** to remove this variable from the widget's data.

### Normal Dashboards

From the option **'Data From'** on the right menu, select one device from your list of devices and the variable that contains the data.

### Blueprint Dashboards

From the option **'Data From'** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities) and input the name of the variable that contains the information.  
When using a blueprint dashboard, the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.


## 2. Composing X-axis and Y-axis

In the multiple charts widget, it is possible to customize how the data will be displayed in the horizontal and vertical axis.

### 2.1 X-axis

By default, the X‑axis of the chart will be the time of the values, and you can customize the range of time.  
If you need to group your data through the X‑axis, even if they don't have the same time, select a variable that contains the group; all data will then be grouped by **series**.

<!-- Info icon placeholder: X-axis grouping example -->

Data is ordered by time ascending, but it can also be sorted by series:

<!-- Image temporarily disabled: Series sorting example - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/c1IxSaBHG9OmIf4MOI9_tXqBo1IhruO5gcPnGdBbg5c/Captura%20de%20tela%20de%202021-06-22%2022-02-03-D7c.png -->

It is also possible to define the X‑axis time range dynamically, using another variable’s data. The variable payload should look like:

```json
{
  "variable": "time_range",
  "value": "Any value",
  "metadata": {
    "start_date": "2021-06-17T00:00:00.000Z",
    "end_date":   "2021-06-18T00:00:00.000Z"
  }
}
```

The `start_date` specifies the start of the range, and the `end_date` specifies the end of the range. The date must be in **ISO 8601** format.

### 2.2 Y-axis

In the vertical axis you can customize the scaling behavior: apply metric prefixes and abbreviations, change the step value (the difference between each tick), and more.  
The Y‑axis will automatically find the best scale for your data; it is not necessary to customize it unless you want a specific presentation.

<!-- Info icon placeholder: Y-axis configuration -->

## 3. Filtering data

It is possible to pre‑set date filters that will be displayed in the widget. These filters can be set in minutes, hours, days, weeks, months, or custom by choosing a date in the calendar.

<!-- Image temporarily disabled: Data filtering example - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/oYbfUz7PUkwgxMRjS1ipZ3kdvTDoia_GebSxU26rBZs/chartFilterMultipleAxis-Dds.gif -->

## 4. Increasing performance

When a chart has a large number of data points, you can increase the widget’s performance by enabling **Downsampling**. Downsampling makes the data easier to visualize and reduces rendering time.

<!-- Image temporarily disabled: Downsampling example - /cdn.elev.io/file/uploads/8Kr8tD8c3s2gigLME_FvaA_bT6A7DbPNHE1DBsJtJDw/VHfKpB1Yo4XLOL1nWhQ5Ts6GjSLkrr9pM1weL4n7njk/chartDownsampling-Ukg.gif -->

Downsampling has two concepts: **Threshold** and **Factor**.  
The Threshold limits the amount of data at which downsampling starts, and the Factor determines how many samples will be removed.

:::warining

The greater the factor, the higher the performance gain, but as the factor increases, the data becomes less recognizable.

:::