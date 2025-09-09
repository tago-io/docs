---
title: "Sending Data"
description: "This article explains how devices send data to TagoIO using the POST endpoint, lists the available request fields and their requirements, and notes authentication and variable naming considerations."
tags: ["tagoio"]
---
:::info

When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://api.docs.tago.io/)

:::

A device can send data to TagoIO by using the POST method.

```
POST https://api.<region>.tago.io/data
```

## Request fields

| Key       | Type                           | Required    |
|-----------|--------------------------------|-------------|
| variable  | string (max 100 characters)    | yes         |
| unit      | string (max 25 characters)     | no          |
| value     | string / number / boolean (max 6kB) | no    |
| time      | string                         | no          |
| group     | string (max 100 characters)    | no / auto   |
| location  | object \| geoJSON              | no          |
| metadata  | object (max 10kB)              | no          |

You must include a [Device-Token](/docs/tagoio/devices/device-token.md) to authorize the operation. Learn more about the fields necessary to send data to TagoIO, including the Header and other formats: [fields necessary](/docs/tagoio/getting-started/restful-api.md).

## Notes and restrictions

- Variables are always converted to lowercase.
- Variable names may not include special characters such as `*?!<>.-=$` or spaces.
- You can send multiple registers in a single POST by sending an array of objects. The maximum payload size is 200 kB (approximately 8,000 registers).
- [Metadata](/docs/tagoio/devices/payload-parser/metadata.md) can be attached to variables to influence widget behavior and store additional information. For example:
  
  ```json
  {
    "variable": "temperature",
    "unit": "F",
    "value": 55,
    "metadata": { "color": "red", "icon": "car" },
    "location": {"lat": 42.2974279, "lng": -85.628292}
  }
  ```
  
  When displayed in a table, the row will be red; when displayed on a map widget, the pin will be red with a car icon.
- Rate limits apply to API requests. Read more about them here: [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits.md).
- For testing, try our Device Emulator to post data and learn the JSON structure: [Device Emulator](/docs/tagoio/devices/device-emulator.md).

## Example payload:

```json
{
  "variable": "temperature",
  "unit"    : "F",
  "value"   : 55,
  "time"    : "2015-11-03 13:44:33",
  "location": {"lat": 42.2974279, "lng": -85.628292}
}
```
