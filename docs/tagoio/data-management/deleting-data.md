---
title: "Deleting Data"
description: "This article explains how to delete data via the TagoIO API, including the endpoint, required headers, and optional query string parameters used to select which data to remove."
tags: ["tagoio"]
---

> Important: When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions: [API documentation](https://docs.tago.io/api/)

## Endpoint
```
DELETE https://api.<region>.tago.io/data
```

## Headers
- Authorization: Your device token

Example header format:
```http
Authorization: <DEVICE_TOKEN>
```

## Optional Query Strings
Use the same query strings you use to get data to select which data will be deleted. The available optional query string parameters are:

| KEY        | TYPE   | DESCRIPTION                         |
|------------|--------|-------------------------------------|
| query      | string | Pre-defined by Tago                 |
| qty        | string | Maximum number of data to be returned |
| start_date | string | Start date                          |
| end_date   | string | End date                            |
| variable   | string | Filter by variable                  |

To delete data, TagoIO uses the same query string parameters used to get data; for more details about each query, see [here](../api/restful-api).