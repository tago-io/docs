---
sidebar_position: 2
title: Data
slug: /tagocore/device/data
---

# Device Data

Device data represents the information your IoT devices send to TagoCore. Each
piece of information is called a "data point" and follows a specific JSON
structure that TagoCore can understand and process.

When your device sends data to TagoCore, the platform automatically validates
each data point to ensure it follows the correct format. This validation helps
prevent errors and ensures your data is properly stored.

All data points use the same JSON structure as the
[TagoIO Cloud](/docs/api/send-data.api) platform:

```json
{
  "origin": "61be276db205c10019e6a218",
  "variable": "temperature",
  "value": 100,
  "time": "2022-01-01T12:00:00Z",
  "unit": "F",
  "group": "123456",
  "metadata": {}
}
```

**Key fields explained:**

- `variable`: What type of data this is (e.g., "temperature", "humidity")
- `value`: The actual measurement or reading
- `time`: When this data was recorded
- `unit`: The measurement unit (e.g., "°C", "%", "ppm")

For detailed specifications, see the
[API Overview](https://help.tago.io/portal/en/kb/articles/31-api-overview#Security).

## Sending Data

TagoCore uses the same communication standards as
[TagoIO Cloud](https://admin.tago.io), making it easy to migrate or integrate
existing solutions.

To send data from your device to TagoCore:

1. Make an HTTP `POST` request to the `/data` endpoint
2. Include your [Device Token](/docs/tagocore/device#token--serial-number) in
   the `token` header for authentication
3. Send your data in the JSON format shown above

For complete parameter details and examples, check the
[API documentation](/docs/api/send-data).

## Retrieving Data

You can access your device data in two ways:

**Programmatic Access**: Send a `GET` request to the `/data` endpoint using your
[Device Token](/docs/tagocore/device#token--serial-number) in the header. This
method gives you complete access to all data points with their full details.

**Visual Overview**: Visit the `Data` tab on your device's page in the TagoCore
interface. This provides a quick overview of all variables and their current
values without needing to make API calls.
