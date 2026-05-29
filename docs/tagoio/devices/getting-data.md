---
title: "Getting Data"
description: "How to read device data through the REST API and the Node.js SDK, including filters, date ranges, pagination, query types, and aggregations."
tags: ["tagoio"]
keywords: [tagoio, iot, devices, API, get data, query parameters, node.js, sdk, filter, pagination]
---

:::info

When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://api.docs.tago.io/).

:::

## REST API

### Headers

Include your [device token](/docs/tagoio/devices/device-token.md) in the Authorization header.

```http
Authorization: Your-Device-Token
```

### Endpoint

```http
GET https://api.<region>.tago.io/data
```

### Query parameters

| Key          | Type             | Description                              |
| ------------ | ---------------- | ---------------------------------------- |
| `variable`   | string or array  | Filter by variable name                  |
| `query`      | string           | Predefined query type                    |
| `qty`        | number           | Maximum records to return (default 15)   |
| `skip`       | number           | Records to skip, used for pagination     |
| `start_date` | string           | Start of the date window                 |
| `end_date`   | string           | End of the date window                   |
| `value`      | string or number | Filter by exact value                    |
| `group`      | string           | Filter by group label                    |
| `id`         | string           | Filter by data record ID                 |
| `details`    | bool             | Include internal metadata on each record |

### Response

```json
{
  "status": true,
  "result": [
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

---

## Node.js SDK

:::info

The examples below require the `@tago-io/sdk` package:

```bash
npm install @tago-io/sdk
```

:::

The SDK uses plural field names (`variables`, `groups`, `ids`, `values`). The REST API uses singular forms.

Two access patterns are available:

- **[Device token](/docs/tagoio/devices/device-token.md)** (`Device` class): read data as the device itself. Use this in analyses or scripts scoped to a single device.
- **[Profile](/docs/tagoio/profiles/account-token.md)/Analysis token** (`Resources` class): read data from any device in your account. Use this in server-side applications that manage multiple devices.

### Filtering

#### By variable

```js
const { Device } = require("@tago-io/sdk");
const device = new Device({ token: "YOUR_DEVICE_TOKEN" });

// Single variable
const data = await device.getData({ variables: "temperature" });

// Multiple variables
const data = await device.getData({ variables: ["temperature", "humidity"] });
```

#### By value

Return only records where the value matches exactly. Accepts a single value or an array.

```js
const data = await device.getData({ variables: "status", values: "alarm" });

const data = await device.getData({ variables: "status", values: ["alarm", "warning"] });
```

#### By group

[`groups`](/docs/tagoio/devices/grouping-variables.md) is a free-form label attached to data records at write time. Use it to tag related records and retrieve them as a set.

```js
const data = await device.getData({ variables: "temperature", groups: "lab-room-3" });

const data = await device.getData({ variables: "temperature", groups: ["lab-room-3", "lab-room-4"] });
```

#### By data ID

Retrieve one or more specific records by their unique IDs.

```js
const data = await device.getData({ ids: "547e353d7dbf3af122c0257d" });

const data = await device.getData({ ids: ["547e353d7dbf3af122c0257d", "547e42847dbf3af122c02582"] });
```

#### By date range

Use `start_date` and `end_date` to limit results to a specific time window.

```js
const data = await device.getData({
  variables: "temperature",
  start_date: "2026-05-19T00:00:00.000-04:00",
  end_date: "2026-05-20T23:59:59.000-04:00",
});
```

Accepted date formats:

| Format                 | Example                         |
| ---------------------- | ------------------------------- |
| ISO 8601 with timezone | `2026-05-19T00:00:00.000-04:00` |
| ISO 8601 UTC           | `2026-05-19T04:00:00.000Z`      |
| Human-readable         | `2026-05-19 00:00:00`           |
| Relative               | `1 day`, `1 month`, `1 year`    |

:::tip

When the date window holds more than 15 records, set `qty` to retrieve them all. See [Pagination and ordering](#pagination-and-ordering) below.

:::

### Pagination and ordering

The API returns 15 records by default, ordered newest-first. Use `qty` and `skip` to control the page size and offset.

```js
// Page 1
const page1 = await device.getData({ variables: "temperature", qty: 50, skip: 0 });

// Page 2
const page2 = await device.getData({ variables: "temperature", qty: 50, skip: 50 });
```

Use `ordination` to control sort order (`descending` is the default):

```js
const data = await device.getData({
  variables: "temperature",
  qty: 100,
  ordination: "ascending",
});
```

### Query types

#### First and last

The `query` parameter retrieves a single record matching a specific condition. Only one `query` value is accepted per request.

| Query            | Returns                                        |
| ---------------- | ---------------------------------------------- |
| `last_item`      | Most recent record by time                     |
| `last_value`     | Most recent record that has a `value` field    |
| `last_location`  | Most recent record that has a `location` field |
| `first_item`     | Oldest record by time                          |
| `first_value`    | Oldest record that has a `value` field         |
| `first_location` | Oldest record that has a `location` field      |

```js
const latest = await device.getData({
  variables: "temperature",
  query: "last_value",
});
```

:::note

These queries return at most one record. Do not combine them with `qty > 1`.

:::

#### Summary

Use `query` with `min`, `max`, or `count` to get a single summary value. Use `avg` or `sum` to compute the average or total over a date window.

| Query   | Returns                                | `start_date` required |
| ------- | -------------------------------------- | --------------------- |
| `min`   | Lowest value in the result set         | No                    |
| `max`   | Highest value in the result set        | No                    |
| `count` | Number of records matching the filters | No                    |
| `avg`   | Average of all values in the window    | Yes                   |
| `sum`   | Sum of all values in the window        | Yes                   |

```js
// Peak temperature for the day
const peak = await device.getData({
  variables: "temperature",
  query: "max",
  start_date: "2026-05-20T00:00:00.000Z",
  end_date: "2026-05-20T23:59:59.000Z",
});

// Total energy consumed this month
const total = await device.getData({
  variables: "energy_kwh",
  query: "sum",
  start_date: "2026-05-01T00:00:00.000Z",
  end_date: "2026-05-31T23:59:59.000Z",
});
```

#### Aggregate

Aggregate queries bucket records by a time interval and apply a function to each bucket. Use them to downsample high-frequency data or build time-series charts.

Set `query: "aggregate"` and provide:

- `function`: `avg`, `sum`, `min`, or `max`
- `interval`: `minute`, `hour`, `day`, `month`, `quarter`, or `year`

```js
const hourlyAvg = await device.getData({
  variables: "temperature",
  query: "aggregate",
  function: "avg",
  interval: "hour",
  start_date: "2026-05-19T00:00:00.000Z",
  end_date: "2026-05-20T23:59:59.000Z",
});
```

#### Conditional

Conditional queries return records where the numeric value meets a comparison condition. `start_date` is required.

| Function | Condition             |
| -------- | --------------------- |
| `gt`     | value &gt; threshold  |
| `gte`    | value &gt;= threshold |
| `lt`     | value &lt; threshold  |
| `lte`    | value &lt;= threshold |
| `eq`     | value == threshold    |
| `ne`     | value != threshold    |

```js
const hot = await device.getData({
  variables: "temperature",
  query: "conditional",
  function: "gt",
  value: 30,
  start_date: "2026-05-20T00:00:00.000Z",
});
```

### Combining filters

All parameters work together in a single request.

```js
const data = await device.getData({
  variables: ["temperature", "humidity"],
  start_date: "2026-05-19T00:00:00.000-04:00",
  end_date: "2026-05-20T23:59:59.000-04:00",
  qty: 50,
  groups: "lab-room-3",
  details: true,
});
```

### Profile-level queries

The `Resources` class lets you query data from any device in your account. There are two ways to use it.

**With a profile token:** use this in external applications or scripts running outside TagoIO:

```js
const { Resources } = require("@tago-io/sdk");
const resources = new Resources({ token: "YOUR_PROFILE_TOKEN" });

const data = await resources.devices.getDeviceData("DEVICE_ID", {
  variables: ["temperature", "humidity"],
  start_date: "2026-05-19T00:00:00.000-04:00",
  end_date: "2026-05-20T23:59:59.000-04:00",
  qty: 50,
});
```

**Without a token, using an [Analysis](/docs/tagoio/analysis/index.md):** `Resources` automatically picks up the Analysis token at runtime. No token setup needed:

```js
const { Resources } = require("@tago-io/sdk");

const data = await Resources.devices.getDeviceData("DEVICE_ID", {
  variables: ["temperature", "humidity"],
  start_date: "2026-05-19T00:00:00.000-04:00",
  end_date: "2026-05-20T23:59:59.000-04:00",
  qty: 50,
});
```

For the tokenless approach, the Analysis must have the right [Access Management](/docs/tagoio/tagorun/access-management/index.md) permissions for the methods it calls. See [Defining permissions](/docs/tagoio/tagorun/access-management/defining-permissions.md) and [Creating a policy](/docs/tagoio/tagorun/access-management/creating-a-policy.md) for setup instructions.

### Common pitfalls

- **Default qty is 15.** If your window holds more records, set `qty` explicitly or the response will be silently truncated.
- **First/last queries and `qty > 1` do not mix.** `last_item`, `last_value`, `first_item`, etc. each return one record at most.
- **Only one `query` per request.** You cannot combine `last_value` and `first_item` in a single call.

## Rate limits

When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits.md).
