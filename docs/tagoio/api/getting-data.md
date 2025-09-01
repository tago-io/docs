---
title: "Getting Data"
description: "This article explains how to request data from the TagoIO API, including the required regional endpoint, authorization header, endpoint URL, and available query parameters with their types and descriptions."
tags: ["tagoio"]
---
:::info

When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: API documentation (link included in the original article).

:::

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


## Response Example
Below is a sample response when no query parameters are supplied:

```json
{
  "status": true,
  "result": [
    {
      "id": "547e42847dbf3af122c02582",
      "location": {
        "coordinates": [41.878876, -87.635915],
        "type": "Point"
      },
      "time": "2014-12-02T22:51:48.005Z",
      "variable": "location"
    },
    {
      "id": "547e353d7dbf3af122c0257d",
      "time": "2014-12-02T21:55:09.301Z",
      "unit": "%",
      "value": 32,
      "variable": "fuel_level"
    },
    {
      "id": "547e41f97dbf3af122c02580",
      "time": "2014-12-02T22:49:29.777Z",
      "unit": "psi",
      "value": 25,
      "variable": "oil_pressure"
    }
  ]
}
```

## Variables
The `variable` parameter specifies which variable(s) to return.  
Example for a single variable:

```
https://api.<region>.tago.io/data?variable=temperature
```

To request multiple variables, use an array syntax:

```
https://api.<region>.tago.io/data?variable[]=temperature&variable[]=pressure
```

## Query
The `query` parameter triggers predefined functions. Only one query can be used per request.

| Query | Description |
|-------|-------------|
| last_item | Returns the most recent data point based on `_time_`. |
| last_value | Returns the most recent data point that contains a `_value_` field. |
| last_location | Returns the most recent data point that contains a `_location_` field. |

Example:

```
https://api.<region>.tago.io/data?variable=temperature&query=last_item
```

## Quantity
The `qty` parameter limits how many results are returned (default 15).

Example to retrieve 99 records:

```
https://api.<region>.tago.io/data?variable=temperature&qty=99
```

## Start Date – End Date
Use `start_date` and `end_date` to filter data between two timestamps. They accept various formats, including relative time expressions.

Example:

```
https://api.<region>.tago.io/data?variable=temperature&start_date=2014-12-25&end_date=2014-12-26
```

If the interval contains more than 15 items, add `qty` to increase the limit.

### Date Formats
| Format | Example |
|--------|---------|
| ISO string | 2014-12-25T23:33:22.000Z |
| Human readable | 2014-12-25 23:33:22 |
| Relative | 1 day, 1 month, 1 year |

Relative dates are calculated from the current time.

## Rate Limits
When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](/docs/tagoio/api/rate-limits-hard-limits).