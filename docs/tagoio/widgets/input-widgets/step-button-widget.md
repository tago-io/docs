---
title: "Step Button Widget"
description: "This article explains how the Step Button widget lets users increment or decrement numeric or clock values using (-) and (+) controls, and how to add and customize the widget on a dashboard."
tags: ["tagoio", "widgets"]
---
Step button allows users to increase and decrease values of a number or clock by using the (-) and (+) buttons.

![Step Button examples showing time and temperature controls with labels "Button #1", "10:15 AM", "End of cycle", "-5 °C", "Set-point"](/docs_imagem/tagoio/step-button-widget-2.png)

You can also define the incremental step value and the allowed limits.  


## Creating your own

To add the Step Button widget to your dashboard, choose the Step Button widget from the widget list and customize it to your preference. You can edit it using the options located on the right side of the widget.

### Data From Field

This field allows you to set the device and variable that will be used in this widget.

* **Normal Dashboards** – Select one device from your list of devices and choose the variable that contains the data.
* **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable.  
  When using a Blueprint dashboard, the Variable field will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

### Step Button Types

The widget can control either a numeric value or a clock (time).

#### Number

When **Number** is selected:

- A unit can be added to the variable.
- The step, minimum, and maximum limits should be defined in the *Data Range & Format* tab.
- In the *User Control* tab you can define how many times the value will blink before posting the data to the variable.

The widget will POST using this format:

```json
{
  "variable": "set_point",
  "value": 2.5,
  "unit": "°C"
}
```

#### Clock

When **Clock** is selected:

- Choose the visualization format (24‑Hour or 12‑Hour AM/PM), the time step, and set the lower and upper limits in the *Data Range & Format* tab.
- The output of the variable will always be in 24‑Hour format, even if you display it as 12‑Hour for the user.

For example, if the user selects **2:15 pm** for the variable `timer_off`, the widget will POST this:

```json
{
  "variable": "timer_off",
  "value": "14:15"
}
```

- Input the time in the format `HH:MM` (24‑Hour).
- You can customize colors for the button and text based on conditions defined in the *Visualization* tab.  
  Example of a condition that changes the text color around **10:30 am**:

![Example of conditions set to change the color of the text around 10:30am](/docs_imagem/tagoio/condition_clock-Iqk.png)

- In the *User Control* tab you can define how many times the value will blink before posting the data to the device’s data storage. The blinking starts after the user releases the button.

### Color from Metadata

You can control the colors of the Step Button widget by using information stored in the metadata of the variable.

1. In the *Visualization* tab, set **Override colors with the conditions defined here** to `False`.
2. Inside the metadata, include the following fields:

   ```json
   {
     "text_color": "white",
     "button_color": "blue"
   }
   ```

3. Example using HEX or RGB values instead of color names:

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

:::tip

You can always enter colors using `#HEX` or `RGB` values instead of a color name.

:::