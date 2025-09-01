---
title: "Deleting Data"
description: "This article explains how to delete data via the TagoIO API, including the endpoint, required headers, and optional query string parameters used to select which data to remove."
tags: ["tagoio"]
---
:::info

When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions: [API documentation](https://docs.tago.io/api/)

:::info

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

To delete data, TagoIO uses the same query string parameters used to get data; for more details about each query, see [here](/docs/tagoio/api/getting-data).

## Examples

- Delete the last 99 items from the variable **temperature**  
  `https://api.<region>.tago.io/data?variable=temperature&qty=99`

- Delete the last item from the variable **temperature**  
  `https://api.<region>.tago.io/data?variable=temperature&query=last_item`

- Delete the last value from the variable **temperature** (requires the `_value_` attribute on the variable object)  
  `https://api.<region>.tago.io/data?variable=temperature&query=last_value`

- Delete the last location from the variable **temperature** (requires `_location_` attribute on the variable object)  
  `https://api.<region>.tago.io/data?variable=temperature&query=last_location`

- Delete data by period  
  `https://api.<region>.tago.io/data?variable=temperature&start_date=2014-12-25&end_date=2014-12-26`

- Delete the last value from an array of variables  
  `https://api.<region>.tago.io/data?variable[]=temperature&variable[]=pressure&query=last_value`

:::tip

Make sure your request is `DELETE` and not `POST` when trying to delete items. Posting data is relatively instantaneous, while deleting data can take between 10 and 30 seconds to complete.

:::

## Rate Limits
When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](/docs/tagoio/api/rate-limits-hard-limits).