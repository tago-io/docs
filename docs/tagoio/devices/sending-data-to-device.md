---
title: "Sending Data to Device"
description: "How to send data to a device via MQTT, HTTP, Analysis, or custom middleware."
tags: ["tagoio", "devices"]
---

TagoIO supports two-way communication with devices. Below are the main options
for sending data from your application to a device.

## Methods to send data

- [Publish to MQTT](/docs/tagoio/integrations/networks/mqtt/mqtt-publishing-and-subscribing.md)
- [Send data over HTTP](/docs/api/send-data)
- [Run an Analysis script](/docs/tagoio/analysis/creating-analysis.md) that
  calls an external API
- [Integrate through Network Services](/docs/tagoio/integrations/index.md)
- Work with Support to build middleware that speaks your device's native
  protocol (support@tago.io).

## Reading data from TagoIO

Devices can also retrieve data from TagoIO using different endpoints depending
on the type of data needed:

- [Configuration parameters](/docs/api/get-configuration-parameters) to read
  device settings (e.g., thresholds, behavior)
- [Data endpoint](/docs/api/get-data) to read device data (e.g., sensor values,
  locations, history)

**Best Practice**: Use configuration parameters for device settings; use the
data endpoint for measurements.
