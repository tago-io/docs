---
title: "Multiple Charts Widget"
description: "This article explains how to use the Multiple Charts widget in TagoIO, including how each variable can produce a different chart type, configurable options, and the Data From field used to select device and variable sources."
tags: ["tagoio", "widgets"]
keywords: [tagoio, iot, widget, multiple charts, data visualization]
---

Charts are a powerful way to visualize your data and find insights. The Multiple
Charts widget lets you customize colors, apply Formula
(/docs/tagoio/widgets/general/formula), change line shapes (step or smooth),
choose whether series are stacked, and more.

When using multiple charts widget, each variable produces a different chart. In
the same widget it is possible to have each chart as an
[Area Chart](/docs/tagoio/widgets/charts/area-chart-widget.md),
[Line Chart](/docs/tagoio/widgets/charts/line-chart-widget.md),
[Horizontal Bar](/docs/tagoio/widgets/charts/horizontal-bar-widget.md), or
[Vertical Column](/docs/tagoio/widgets/charts/vertical-column-widget.md).

![Multiple charts examples (area, line and column)](/docs_imagem/tagoio/rounded-image-1775670661226.png)

This widget also accepts features like
[metadata](/docs/tagoio/devices/payload-parser/metadata.md) and
[series](/docs/tagoio/devices/grouping-variables.md), which can be set in your
variable data.

## 1. 'Data Sources' Field

This field allows you to set the device and variable that will be used in this
widget.

Click on the **settings icon** to edit specific options for this variable, such as
the chart type, formulas, and more. Click on the **close icon** to remove this
variable from the widget's data.

### Normal Dashboards

From the option **'Data Sources'** on the right menu, select one device from your
list of devices and the variable that contains the data.

### Blueprint Dashboards

From the option **'Data Sources'** on the right menu, add the
[Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the
name of the variable that contains the information.\
When using a blueprint dashboard, the field **Variable** will list variables to be picked using the currently selected blueprint device.

## 2. Composing X-axis and Y-axis

In the multiple charts widget, it is possible to customize how the data will be
displayed in the horizontal and vertical axis.

### 2.1 X-axis

By default, the X‑axis of the chart will be the time of the values, and you can
customize the range of time.\
If you need to group your data through the X‑axis, even if they don't have the
same time, select a variable that contains the group; all data will then be
grouped by **series**. Data is ordered by time ascending, but it can also be sorted by series.

It is also possible to define the X‑axis time range dynamically, using another
variable’s data. The variable payload should look like:

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

The `start_date` specifies the start of the range, and the `end_date` specifies
the end of the range. The date must be in **ISO 8601** format.

### 2.2 Y-axis

In the vertical axis you can customize the scaling behavior: apply metric
prefixes and abbreviations, change the step value (the difference between each
tick), and more.\
The Y‑axis will automatically find the best scale for your data; it is not
necessary to customize it unless you want a specific presentation.

## 3. Filtering data

It is possible to pre‑set date filters that will be displayed in the widget.
These filters can be set in minutes, hours, days, weeks, months, or custom by
choosing a date in the calendar.

## 4. Increasing performance

For charts with a large number of data points, enable the **Aggregate** feature to improve widget performance and make the data easier to visualize. Learn more about the [Aggregate feature](/docs/tagoio/widgets/general/data-analytics.md).

:::warning

The greater the factor, the higher the performance gain, but as the factor
increases, the data becomes less recognizable.

:::
