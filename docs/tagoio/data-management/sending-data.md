---
title: "Sending Data"
description: "This article explains how devices send data to TagoIO using the POST endpoint, lists the available request fields and their requirements, and notes authentication and variable naming considerations."
tags: ["tagoio"]
---

> When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://docs.tago.io/api/)

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

You must include a Device-Token to authorize the operation. Learn more about the fields necessary to send data to TagoIO, including the Header and other formats: [fields necessary](../api/restful-api).

## Notes and restrictions

- Variable should NOT contain the characters listed in the documentation (see the Sending Data restrictions for the full list).