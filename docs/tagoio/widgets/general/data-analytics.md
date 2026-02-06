---
title: "Data Analytics"
description: "This article explains how Data Analytics transforms raw sensor data into actionable insights using visual calculations, lists the widgets that support Data Analytics, and provides a table of available analytic functions with their descriptions."
tags: ["tagoio"]
---
Transform your raw sensor data into actionable insights using visual calculations. Data Analytics enables operations such as averaging, summing, finding maximum and minimum values, and more, directly on your widget variables. This feature also lets you filter data, apply mathematical computations, visualize data as numbers, analyze trends, and perform other data transformations.

Data Analytics is currently available for the widgets listed below, with support for additional widgets to be added in the future:

- [Display](/docs/tagoio/widgets/displays/display-widget.md)
- [Line Chart](/docs/tagoio/widgets/charts/line-chart-widget.md)
- [Area Chart](/docs/tagoio/widgets/charts/area-chart-widget.md)
- [Horizontal Bar](/docs/tagoio/widgets/charts/horizontal-bar-widget.md)
- [Vertical Column](/docs/tagoio/widgets/charts/vertical-column-widget.md)
- [Multiple Charts](/docs/tagoio/widgets/charts/multiple-charts-widget.md)
- [Icon](/docs/tagoio/widgets/displays/icons-widget.md)

## Available Functions

The following table lists the calculations you can perform:

| Function      | Description                                                                 |
|---------------|-----------------------------------------------------------------------------|
| Last Value    | Default for widgets with a single value; represents the last value of the variable. |
| All Data      | Default for widgets with multiple values; shows all data of this variable or widget. |
| Last Location | Finds the last value with valid location data.                             |
| Count         | Counts the number of values for a variable over a selected period.          |
| Average       | Calculates the average value over a selected period.                        |
| Sum           | Computes the sum of values over a selected period.                          |
| Max           | Identifies the maximum value over a selected period.                         |
| Min           | Identifies the minimum value over a selected period.                         |
| Conditional   | Finds values that meet a specific condition (e.g., greater than, less than, not equal) over a selected period. |
| Aggregate     | Performs a calculation (e.g., average, max, min, sum) based on an interval (e.g., daily, weekly, monthly). |

### Types of Functions

#### Basic calculations
These functions perform fundamental mathematical operations on data within a specified period, up to one month. All functions are considered basic calculations except for the Aggregate function. When applied, these calculations process all data within the chosen timeframe. Note that these calculations are limited to data in a period of 1 month.

#### Data aggregation operations
This includes the **Aggregate** function, which aggregates data over an interval and applies mathematical operations. Unlike basic calculations, there is no period restriction; the calculation will be applied to all available data by default or to the period configured in the [Dashboard Period Preset](/docs/tagoio/dashboards/dashboard-global-time-filter-and-period-presets.md).

Available intervals:
- Per minute
- Per hour
- Daily
- Weekly
- Monthly
- Quarterly
- Yearly

When applying an interval, the system uses the first data point as a starting reference. For example, if your data starts on January 1st and the selected interval is *Weekly*, then the data between January 1st and January 7th will be aggregated.

### How to apply functions to your data
1. Open the widget in **Edit Mode**.
2. Select a variable in **Data From**.
3. Click the cog icon to access the **Data Analytics** tab.
4. Choose a function from the list above.
5. For basic calculations, define a period (up to one month).
   - The period can be set directly in the Data Analytics tab, on the X‑axis, or via global preset periods using the [Dashboard Period Presets](/docs/tagoio/dashboards/dashboard-global-time-filter-and-period-presets.md).
6. For aggregation functions, set a default interval or create a preset interval by navigating to the **Preset Interval** option after entering the widget in Edit Mode.
7. The system will prompt you to define **Cache settings**, which are mandatory for maintaining dashboard responsiveness and performance.
   - You can also set an expiration time to prevent rapid consumption of your [Dashboard Data Output](/docs/tagoio/dashboards/data-output-for-dashboards.md).
