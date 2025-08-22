---
title: "Reference Lines"
description: "This article explains how to configure reference lines on TagoIO chart-type widgets and lists which widgets support this feature."
tags: ["tagoio"]
---
All chart-type widgets in TagoIO can be configured to display reference lines within the graph. These lines can serve as thresholds, upper and lower bounds, medians, or any other value that enhances the data visualization experience.

<!-- Image placeholder removed for build -->

## Supported widgets

The widgets that support this feature include the [Area Chart](../widgets/area-chart-widget), [Line Chart](../widgets/line-chart-widget), [Horizontal Bar](../widgets/horizontal-bar-widget), [Vertical Column](../widgets/vertical-column-widget), and [Multiple Charts](../widgets/multiple-charts-widget).

## Adding reference lines to your chart

You can set reference lines by navigating to your widget's edit page and accessing the `Reference Lines` option.  
Up to **5** reference lines per widget are allowed.

### Defining a new line

1. Click **Add Reference Line** (or the equivalent button in the UI).  
2. Choose the *source* of the value:
   - **Fixed** – Enter a static numeric value that will be displayed as a horizontal or vertical line.
   - **Variable** – Select one of your device’s variables; the line’s value will update dynamically based on that variable.

### Fixed vs Variable source

- When using a **fixed** source, you can manually set a *Label* and *Color* for the line.  
- If the source is a **variable**, the label and color are automatically taken from the variable’s metadata. For more information about how to configure metadata, see the [Metadata](https://help.tago.io/portal/en/kb/articles/503-metadata) article.

### Multiple axes

If your chart uses multiple Y‑axes, you can associate a reference line with a specific axis by clicking the **axis icon** inside the reference line options and selecting the desired axis. This ensures the line aligns correctly with the chosen scale.

### Applying formulas

You can apply a formula to the reference line’s value. This is especially useful when:
- The dataset variables already have a [Formula](https://help.tago.io/portal/en/kb/articles/225-formula) applied, or
- You want to use a **Dynamic Formula** for custom unit conversions.

The formula will be evaluated each time the chart refreshes, keeping the reference line in sync with your data.