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

## Info

Retrieve information for a device using its ID.

GET - `https://api.<region>.tago.io/device/:id`

### Response

```json
{
  "status": true,
  "result": {
    "created_at": "2016-11-03T23:24:19.787Z",
    "updated_at": "2016-11-03T23:24:19.787Z",
    "last_access": "2016-11-03T23:24:19.787Z",
    "visible": true,
    "active": true,
    "tags": [
      { "key": "client", "value": "John" }
    ],
    "name": "My Device",
    "id": "581bc7233148f62587e2d507",
    "configuration_params": [
      { "sent": false, "key": "check_rate", "value": "600" },
      { "sent": false, "key": "measure_time", "value": "" }
    ],
    "bucket": {
      "name": "My Bucket",
      "id": "577bdd94567190920cfe9cfd"
    }
  }
}
```

## List

Retrieve a list of all devices in the account.

GET - `https://api.<region>.tago.io/device`

## Delete

Delete the device by its ID.

DELETE - `https://api.<region>.tago.io/device/:id`

### Response

```json
{
  "status": true,
  "result": "Successfully Removed"
}
```

## Generate Token

Generate a new token for the device and return it.

POST - `https://api.<region>.tago.io/device/token`

### Response

```json
{
  "status": true,
  "result": {
    "token": "8be70d95-0dbc-4e16-89b6-b23b077d05e5"
  }
}
```

## Delete Token

Delete device token by its token.

DELETE - `https://api.<region>.tago.io/device/token/:token`

### Response

```json
{
  "status": true,
  "result": "Successfully Removed"
}
```

> **Note:** When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](../rate-limits-hard-limits).