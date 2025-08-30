---
title: "Card Widget"
description: "This article explains how the Card widget displays the latest value of a variable with its unit and a mini-chart, and how to add and customize the Card widget on a dashboard. It also notes that the widget supports variable metadata."
tags: ["tagoio", "widgets"]
---
Use Card to display the last value of a variable, its unit, and a mini‑chart. Card accepts links so that when users click on it, it can redirect them to another website, dashboard, or tab.

![Three Card widget examples showing value, unit, and mini-chart](/docs_imagem/tagoio/card-widget-2.gif)

This widget also accepts features like metadata (see the Metadata documentation), which can be set in your variable data.

## Creating your own

To add a Card to your dashboard, choose the Card widget from the widget list and customize it to your preference. Edit the widget using the options located on the right side of the widget.

![Card widget being placed on a dashboard for customization](/docs_imagem/tagoio/card-widget-2.gif)

### 1. Data From field

This field allows you to set the device and variable that will be used in this widget.  
For **Normal dashboards** you select one device from your list of devices and then pick the variable that contains the data.

For **Blueprint dashboards** you add a Blueprint device (see [Blueprint devices](/docs/tagoio/devices/blueprint-devices-entities)) and input the name of the variable.  
When using a Blueprint dashboard, the Variable field will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.


### 2. Color options

You can configure colors for the text, background, and mini‑chart based on conditions that use the value of the selected variable.  
The colors can be controlled by parameters defined in the widget configuration or by metadata stored within the variable.

![Color configuration example](/docs_imagem/tagoio/card-widget-2.gif)

### 3. Using colors from metadata

To let the Card use colors defined in the variable’s metadata, switch the option on the **Visualization** tab – _Override colors with the conditions defined here_ – to **False**.

Inside the metadata you can define the following fields:

| Field | Description |
|-------|-------------|
| `color` | Text color |
| `background_color` | Widget background color |
| `chart_color` | Mini‑chart color |

Example JSON:

```json
{
  "variable": "current",
  "value": 5.3,
  "unit": "A",
  "metadata": {
    "color": "white",
    "background_color": "blue",
    "chart_color": "green"
  }
}
```

> TIP: You can enter colors using `#HEX` or `RGB` values instead of a color name.

```json
{
  "variable": "current",
  "value": 5.3,
  "unit": "A",
  "metadata": {
    "color": "#FFFFFF",
    "background_color": "blue",
    "chart_color": "rgb(44, 144, 223)"
  }
}
```

### 4. Mini‑chart

A mini‑chart can be added at the bottom of the widget to display up to the last **30 points** (values).  
The chart is optional and its number of points is configurable. It does not show absolute values; it only depicts the trend of the variable.

### 5. Clickable link

If you want the user to be redirected to another website, dashboard, or tab, add a valid `https://` link in the field inside the **User Control** tab.