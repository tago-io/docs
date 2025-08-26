---
sidebar_position: 2
title: Data
slug: /tagocore/device/data
---

# Device Data

Device data are resources that store data points, and these data points have a specific JSON structure.

Every time new data points are sent to the Device, TagoCore validates the data point to make sure it has the correct JSON structure.

The JSON of a data point has the same structure as defined in our [TagoIO Cloud](https://api.docs.tago.io/#41e953a9-8b0c-4166-aa0f-1db3596b02f7) platform, which is as follows:

```json
{
  "origin": "61be276db205c10019e6a218",
  "variable": "temperature",
  "value": 100,
  "time": "2022-01-01T12:00:00Z",
  "unit": "F",
  "serie": "123456",
  "metadata": {},
}
```

For more information on other common specifications, check out our [API Overview](https://help.tago.io/portal/en/kb/articles/31-api-overview#Security).

## Sending data

TagoCore uses the same standard as [TagoIO Cloud](https://admin.tago.io) when it comes to endpoints and HTTP requests.

To send data to a Device, you must send an HTTP `POST` request to the `/data` endpoint of TagoCore and use a [Device Token](/docs/tagocore/device#token--serial-number) as the `token` header. 

To understand all the parameters and required fields, check out our [API](https://api.docs.tago.io/#41e953a9-8b0c-4166-aa0f-1db3596b02f7).

## Retrieving data

There are two ways to visualize the data in your Device.

If you want to view all the details of the data points in your Device, you should send a `GET` request to the `/data` endpoint by using a [Device Token](/docs/tagocore/device#token--serial-number) in the header.

However, if you only want to get an overview of all the variables in your Device, you can go to the `Data` tab of your Device page.
