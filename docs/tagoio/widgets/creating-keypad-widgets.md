---
title: "Creating Keypad Widgets"
description: "This article demonstrates how to create a Keypad Widget in TagoIO and shows the JSON structure you must send to the account.dashboards.widgets.create method. It includes an example payload and references to related documentation."
tags: ["tagoio", "widgets"]
---
## Overview

This article demonstrates how to create a Keypad Widget using the TagoIO Node.js SDK. See [Keypad Widget](../widgets/keypad-widget) and [TagoIO Node.js SDK](../sdk/nodejs-sdk) for more information.

In order to create keypad widgets, send the following structure to the `account.dashboards.widgets.create` method.

## Example widget structure

```json
{
  "analysis_run": "",
  "data": [
    {
      "bucket": "5d8d06027fe011b001b8d236b",
      "origin": "5d8d06027fe011b001b8d236a",
      "timezone": "Your/Timezone",
      "variables": [
        "my_keypad_variable"
      ]
    }
  ],
  "display": {
    "buttons": [
      {
        "color": "",
        "disabled": false,
        "icon": "",
        "text": "",
        "type": "text",
        "value": ""
      }
    ],
    "bypass_bucket": false,
    "click_color": "#337ab7",
    "help": "",
    "main_color": "white",
    "send_run_user": false,
    "show_asterisk": true,
    "show_digits_bar": true,
    "show_last_column": true,
    "show_last_row": false,
    "show_number_sign": true
  },
  "label": "Keypad #1",
  "type": "keypad"
}
```

Notes:
- **analysis_run**: This field should contain an ID indicating which analysis to run when a user submits the widget.
- **data**: This field should contain an array of variables used in the keypad widget. By default, the widget only uses the first variable, so this array should typically contain a single object.
- **display.buttons**: This field is required and defines all custom buttons inside the keypad widget. Each button’s position corresponds to its index in the array (0‑based). For example, the image below shows how each index maps to a physical key on the keypad:
  ![Image 1](/docs_imagem/tagoio/1571244512451-CBw.png)
- **display.bypass_bucket**: If set to `true`, the data sent by this widget will never reach the bucket. It will still be available inside the analysis scope.
- **display.click_color**: The color shown for each digit when a user clicks on it. Accepts any browser‑recognizable color format (name, hex, rgb, hsl, etc.).
- **display.help**: Usual help text for the widget.
- **display.main_color**: Main color for the digits inside of the keypad.
- **display.send_run_user**: Indicates if a new variable called `run_user` should be sent along with the usual data from this widget. Read more about data manipulation at the bottom of the page.
- **display.show_asterisk**: Indicates if the asterisk digit should appear inside of the keypad. If set to `false`, a new slot for custom buttons will appear.
- **display.show_number_sign**: Indicates if the number sign digit should appear inside of the keypad. If set to `false`, a new slot for custom buttons will appear.
- **display.show_digits_bar**: Indicates if a digits bar should appear above the widget, showing asterisks representing the amount of digits typed by the user.
- **display.show_last_column**: Indicates if the last column of the buttons should appear or not.
- **display.show_last_row**: Indicates if the bottom row containing buttons should appear or not.
- **label**: The title of the widget inside the dashboard.
- **type**: Must be set to `"keypad"`.

Send this payload via the `account.dashboards.widgets.create` method using the TagoIO Node.js SDK.