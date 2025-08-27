---
title: "Device Emulator Functions"
description: "This article explains how to use built-in functions in the Device Emulator payloads, shows JSON and CSV examples, and lists the available emulator functions and their behavior."
tags: ["tagoio", "devices"]
---
Functions are helper variables you can add to your payload when using the [Device Emulator](../../simulator-data-stream). Each function serves a specific purpose. To insert a function into your payload, click the `Functions` button and select the desired function.

You can use functions in both JSON and Raw (CSV) payload types.

## Examples

JSON example using a function:
```json
[
  {
    "variable": "temperature",
    "unit": "F",
    "value": $random$
  }
]
```

CSV example using a function:
```csv
variable,value,time,serie
temperature,$random$,2019-09-19,1568913302243
```

(See also: [View Formatted Payload](../../simulator-data-stream#viewing-formatted-payload).)

## List of functions

- $random$: This function will be replaced by a random number that ranges from 0 to 100 whenever you send your payload.
- $randomBoolean$: This function will be replaced by a random boolean (true or false) whenever you send your payload.
- $busRoute$: This function will be replaced by a sequential bus route through Chicago. The location will change to a new one every time you send your payload. You should only use this function in the `location` field of a JSON payload.
- $sequential$: This function will be replaced by a number that is increased by 1 every time you send your payload.
- $sequentialHex$: This function will be replaced by a hexadecimal value that is increased by 1 every time you send your payload. If you are using this function in a JSON payload, wrap it around quotes (`"$sequentialHex$"`).
- $timestamp$: This function will be replaced by the current date and time as a Unix epoch timestamp.
- $date$: This function will be replaced by the current date in the format `YYYY-MM-DD`. If you are using this function in a JSON payload, wrap it around quotes (`"$date$"`).

If you need more functions or details, refer to the Device Emulator documentation and the Device Emulator functions reference within the TagoIO knowledge base.