---
title: "Sending Data to Device"
description: "This article explains the options available in TagoIO for sending data from your application to a device, covering MQTT, HTTP, Analysis scripts, and working with Support for custom middleware."
tags: ["tagoio", "devices"]
---
TagoIO supports two-way communication with devices so they can both send and receive data. Below are the primary options for sending data from your application to a device.

## Methods to send data
- [Publish to MQTT](../mqtt-publishing-and-subscribing)
- [Post data to an endpoint using HTTP](https://docs.tago.io/api/#operation/postDataHTTP)
- [Create a script](../analysis/creating-analysis) that runs in the Analysis to access an external API
- Work with our Support Team to build a middleware that will communicate directly with your device using its native protocol ([Support Team](https://help.tago.io/portal/en/newticket))

## Notes
- Use MQTT when you need lightweight, topic-based messaging and real-time updates.
- Use HTTP endpoints when the device or integration expects RESTful requests or webhooks.
- Use Analysis scripts when you need to transform, aggregate, or call external APIs before sending data to a device.
- Contact Support if your device requires a custom protocol or middleware integration that TagoIO does not natively provide.

## See also
- [Publish to MQTT](../mqtt-publishing-and-subscribing)
- [Post data to an endpoint using HTTP](https://docs.tago.io/api/#operation/postDataHTTP)
- [Create a script in Analysis](../analysis/creating-analysis)
- [Support Team / Custom integrations](https://help.tago.io/portal/en/newticket)

## Related articles
- [Device data management](/tagoio/device-data-management)
- [Sending Data](/tagoio/sending-data)
- [MQTT - Process data, Publish it and Subscribe to a topic](/tagoio/mqtt-process-data-publish-it-and-subscribe-to-a-topic)
- [Defining Actions](/tagoio/defining-actions)
- [Devices](/tagoio/devices)