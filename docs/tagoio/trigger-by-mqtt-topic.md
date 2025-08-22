---
title: "Trigger by MQTT Topic"
description: "This article explains how the \"Trigger by MQTT Topic\" trigger works in TagoIO, describes broker availability restrictions, and details the two trigger categories—Single device and Multiple devices—used to watch incoming MQTT data."
tags: ["tagoio"]
---
## Overview
The trigger type **"Trigger by Variable"** allows you to execute an [Action](actions/actions) when data is sent to an MQTT topic.

TagoIO provides its own MQTT broker that pushes data to clients when new messages are published to the topics they are subscribed to. To learn more about the MQTT infrastructure used by TagoIO, see [MQTT](mqtt).

> Note: The TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. Free accounts and accounts hosted in the European database region may use third-party MQTT services with TagoIO via the [MQTT Relay](integrations/mqtt-relay) feature.

## Trigger categories
There are 2 (two) categories for this trigger type:

1. **Single device**  
   Allows you to watch a specific device from your device list. Any data sent by that device will be tested against your topics to determine whether this action should be triggered.

   ![Single-device selection UI](/docs_imagem/tagoio/trigger-by-mqtt-topic-2.png)

2. **Multiple devices**  
   Allows you to watch multiple devices. Any data sent by those devices will be tested against your topics to determine whether the action should be triggered. For this type, you must supply the tag keys and tag values of the devices you want to watch.

   ![Multiple-devices tag selection UI](/docs_imagem/tagoio/trigger-by-mqtt-topic-2.png)

## Trigger Conditions
After setting up the device, you should set a condition for your action to be executed. To do so, you must head over to the **Trigger** section.

![Image 4](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/JuEYsjOQvx52UaN1JedjJgnWI4MbL0utUznW5gltJpg/1588075755429-J4Y.png)

For each row, you need to set the topic that will be listened to. You may use MQTT [wildcards](/tagoio/mqtt) for the topic if you prefer.

![Image 5: Info](https://static.zohocdn.com/zoho-desk-editor/static/images/info.png)

You can set multiple conditions in an action; if at least one of them results in a match, the action will be executed.

![Image 6: Notes](https://static.zohocdn.com/zoho-desk-editor/static/images/file.png)

> Note that setting up multiple conditions will execute the action only once if any of the conditions are matched. This means that if you send two variables that would trigger the action at the same time, it will only trigger one action.