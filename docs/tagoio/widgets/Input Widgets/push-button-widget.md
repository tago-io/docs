---
title: "Push Button Widget"
description: "A brief guide to the Push Button widget in TagoIO, explaining its purpose, configurable features (states, icons/text, colors), and how to add and customize it on your dashboard."
tags: ["tagoio", "widgets"]
---
Push button allows users to select options for different states, similar to a mechanical switch. Developers can configure text or an icon for each state and associate colors with each option.  
This widget works on both Normal and Blueprint dashboards.

![Push Button examples](/docs_imagem/tagoio/push-button-widget-2.png)

You can also define an Analysis (script) to run when users change each state — see [Analysis](../../analysis/index).  
This widget also accepts features like [metadata](../../data-management/metadata), which can be set in your variable data.

## Creating your own

To add the Push Button widget to your dashboard:
- Choose the Push Button widget from the widget list.
- Customize it to your preference.
- Edit its properties using the options located on the right side of the widget.

![Push Button editor options](/docs_imagem/tagoio/push-button-widget-2.png)

**Data From field**  
This field allows you to set the device and variable that will be used in this widget.  
For Normal dashboards, select a device and its variable from the list.  
For Blueprint dashboards, add the Blueprint device and input the variable name; the variable selector may not show variables until the device is linked.

**Push Button type**  
The button can operate in two modes:

- **Mono‑Stable** – The button stays in its default state unless clicked. A click temporarily changes it for a few seconds before returning to default. You can set colors, text, icons and optionally run an analysis during this temporary state.
- **Bi‑Stable** – The button keeps the user’s selected state indefinitely. Colors, texts or icons can be configured, and an optional analysis can run in each state.

### Color from Metadata

You can control the colors of the Button widget by using information stored in the metadata of the variable.  
Set the option _Override colors with the conditions defined here_ to **False** on the Visualization tab.  
The following metadata fields can be used:

- `text_color` – color for the text (value)
- `button_color` – color for the button

```json
{
  "variable": "set_point",
  "value": 5.3,
  "unit": "°C",
  "metadata": {
    "text_color": "white",
    "button_color": "blue"
  }
}
```

> TIP: You can always enter colors using #HEX or RGB values instead of a color name.

```json
{
  "variable": "set_point",
  "value": 5.3,
  "unit": "°C",
  "metadata": {
    "text_color": "#FFFFFF",
    "button_color": "rgb(44, 144, 223)"
  }
}
```
