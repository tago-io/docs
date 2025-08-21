---
title: "MQTT - Process data, Publish it and Subscribe to a topic"
description: "This article explains how to process data, publish it to a topic, and subscribe to that topic using MQTT (the tutorial uses the MQTTX client). It also shows how to connect a device to the TagoIO MQTT broker and retrieve the device token."
tags: ["tagoio"]
---

> Starting on June 1st, TagoIO will no longer provide an MQTT broker to Free accounts. Read more (announcement link)

In this tutorial, you will learn how to process data, publish to a topic, and subscribe to it. The tutorial uses the MQTTX client throughout.

## Connecting to TagoIO MQTT Broker

To publish a topic via TagoIO's MQTT, you must first add a device.

- Navigate to the "Devices" module in your Admin panel and create a new device. You may choose any connector you prefer; it will not make a difference.
- After creating the device, open the device's "General Information" tab and locate the tokens section.
- Copy your device token from the tokens section — this token is required to authenticate when publishing or subscribing via the TagoIO MQTT broker.

<!-- Image placeholder removed for build -->

(If the tutorial referenced the MQTTX client, that is a third-party MQTT client application commonly used to publish/subscribe for testing; search for "MQTTX" to download or learn more. The "Read more" link in the alert points to the announcement about changes to free account MQTT broker availability.)

## Subscribing to a topic

(Section header preserved from the original article; full step-by-step content for subscribing should appear here in the original documentation.)

## Processing the data

(Section header preserved from the original article; full step-by-step content for processing incoming MQTT data should appear here in the original documentation.)

References and related documentation:
- Devices module in Admin panel (see "Devices" in Admin)
- For internal TagoIO documentation links referenced elsewhere in the article, retain the link text as shown in the original article.