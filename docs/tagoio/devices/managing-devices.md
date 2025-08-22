---
title: "Managing Devices"
description: "This article explains how to manage devices via the TagoIO API using an account token, including creating a device with a POST request and the required request payload. It also highlights the need to use the appropriate regional API endpoint."
tags: ["tagoio", "devices"]
---

Using the account token, you can manage your devices through API requests. You can create, edit, delete, and retrieve information about devices.

> **Note:** When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://docs.tago.io/api/)

## Create

Create a device using the POST method.

POST - `https://api.<region>.tago.io/device`

### Request

```json
{
  "name": "My first device",
  "description": "Creating my first device",
  "active": true,
  "visible": true,
  "tags": [
    {
      "key": "client",
      "value": "John"
    }
  ],
  "configuration_params": [
    {
      "sent": false,
      "key": "check_rate",
      "value": 600
    },
    {
      "sent": false,
      "key": "measure_time",
      "value": 0
    }
  ]
}
```