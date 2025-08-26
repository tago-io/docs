---
title: "Multiple Axes in Chart Widgets"
description: "This article explains how to configure chart-type widgets in TagoIO to display more than one Y-axis and lists which widgets support this feature, plus instructions for enabling multiple axes in a widget."
tags: ["tagoio", "widgets"]
sidebar_position: 9
---
All chart-type widgets in TagoIO can be configured to display more than one Y‑axis. The widgets that support this feature include:
- [Area Chart](../widgets/area-chart-widget)
- [Line Chart](../widgets/line-chart-widget)
- [Horizontal Bar](../widgets/horizontal-bar-widget)
- [Vertical Column](../widgets/vertical-column-widget)
- [Multiple Charts](../widgets/multiple-charts-widget)

<!-- Image placeholder removed for build -->

## Adding multiple axes to your chart

To add multiple axes to a chart widget:

1. Open the widget's edit page.
2. Under Options, open the Y‑axis subsection.
3. Click the Multiple Axes button to add and configure additional Y‑axes.

After clicking the Multiple Axes button you can associate one or more variables with each Y‑axis. By default all variables are automatically assigned to the **y1** axis unless you change it. Only variables that have been added in the widget’s **Data From** section can be selected here.

Once you have configured the axes, click **Confirm** to preview the changes and then **Save** to apply them.

Notes:
- After enabling multiple axes, you can assign different series to specific Y‑axes so each series scales appropriately.
- Use the Y‑axis settings to configure labels, units, and axis position (left/right) for each axis. You can also hide a label if desired.

References:
- See the individual widget documentation for specific examples and additional settings: [Area Chart](../widgets/area-chart-widget), [Line Chart](../widgets/line-chart-widget), [Horizontal Bar](../widgets/horizontal-bar-widget), [Vertical Column](../widgets/vertical-column-widget), [Multiple Charts](../widgets/multiple-charts-widget).