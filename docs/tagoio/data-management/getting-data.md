---
title: "Getting Data"
description: "This article explains how to request data from the TagoIO API, including the required regional endpoint, authorization header, endpoint URL, and available query parameters with their types and descriptions."
tags: ["tagoio"]
---

> ⚠️ When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: API documentation (link included in the original article).

## Headers
Include your device token in the Authorization header.

```http
Authorization: Your-Device-Token
```

## Endpoint
Use the regional data endpoint:

```http
GET https://api.<region>.tago.io/data
```

## Query Parameters
The following querystring parameters are supported:

| Key         | Type            | Description |
|-------------|-----------------|-------------|
| variable    | string or array | Get variables |
| query       | string          | Pre-defined by Tago |
| qty         | string          | Maximum number of data points to be returned |
| start_date  | string          | Start date (e.g., "1 day" or ISO string) |
| end_date    | string          | End date (e.g., "1 day" or ISO string) |
| detail      | bool            | Include additional JSON fields in the returned results |

Notes:
- Replace `<region>` in the endpoint with the appropriate regional hostname as specified in the API documentation (see the linked "API documentation" in the original article).