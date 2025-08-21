---
title: "Trigger by MQTT Topic"
description: "This article explains how the \"Trigger by MQTT Topic\" trigger works in TagoIO, describes broker availability restrictions, and details the two trigger categories—Single device and Multiple devices—used to watch incoming MQTT data."
tags: ["tagoio"]
---

## Overview
The trigger type "Trigger by Variable" allows you to execute an [Action](link-to-action) when data is sent to an MQTT topic.

TagoIO provides its own MQTT broker that pushes data to clients when new messages are published to the topics they are subscribed to. To learn more about the MQTT infrastructure used by TagoIO, see [MQTT](link-to-mqtt).

> Note: The TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. Free accounts and accounts hosted in the European database region may use third-party MQTT services with TagoIO via the [MQTT Relay](link-to-mqtt-relay) feature.

## Trigger categories
There are 2 (two) categories for this trigger type:

1. Single device  
   Allows you to watch a specific device from your device list. Any data sent by that device will be tested against your topics to determine whether this action should be triggered.

   ![Single-device selection UI](/docs_imagem/tagoio/trigger-by-mqtt-topic-2.png)

2. Multiple devices  
   Allows you to watch multiple devices. Any data sent by those devices will be tested against your topics to determine whether the action should be triggered. For this type, you must supply the tag keys and tag values of the devices you want to watch.

   ![Multiple-devices tag selection UI](/docs_imagem/tagoio/trigger-by-mqtt-topic-2.png)