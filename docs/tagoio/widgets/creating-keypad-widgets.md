---
title: "Creating Keypad Widgets"
description: "This article demonstrates how to create a Keypad Widget in TagoIO and shows the JSON structure you must send to the account.dashboards.widgets.create method. It includes an example payload and references to related documentation."
tags: ["tagoio", "widgets"]
---

## Overview

This article demonstrates how to create a Keypad Widget using the TagoIO Node.js SDK. See [Keypad Widget](../widgets/keypad-widget) and [TagoIO Node.js SDK](../sdk/nodejs-sdk) for more information.

In order to create keypad widgets, send the following structure to the account.dashboards.widgets.create method.

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
```

Notes:
- Replace "Your/Timezone" with the desired timezone string.
- Set the "bucket", "origin", and "variables" fields to match your data source.
- Define as many button objects inside "buttons" as needed. Each button may include properties such as "color", "disabled", "icon", "text", "type", and "value".
- Send this payload via the account.dashboards.widgets.create method using the TagoIO Node.js SDK.