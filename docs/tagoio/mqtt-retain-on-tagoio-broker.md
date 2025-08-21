---
title: "MQTT Retain on TagoIO Broker"
description: "This article explains how to implement an MQTT \"retain\"-like behavior on the TagoIO MQTT broker using Actions or Analysis to store and resend the last message when a new client subscribes."
tags: ["tagoio"]
---

> Note: TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. Free accounts and accounts in the European database region may use third-party MQTT services with TagoIO via the MQTT Relay feature (see the MQTT Relay documentation).

TagoIO's MQTT broker does not natively support the standard MQTT "retain" feature. However, you can implement an equivalent workaround by using TagoIO Analysis and Actions to store the last message published to a topic and resend it when a new client subscribes.

This approach involves using the [Analysis](link-to-analysis) and [Actions](link-to-actions) features to store the last message published to a topic and then resend it when a new client subscribes.

## Setting Up Message on Subscribing

To build an MQTT "retain" workaround with TagoIO, you can either publish directly to a topic with an Action or use an Analysis script for more complex scenarios.

## Using Actions to Publish a Message to a Subscriber

1. Create an Action  
   - Navigate to the Actions section in your TagoIO dashboard and create a new action.  
   - Choose the event that will trigger this action. It could be a variable update, a scheduled time, or another custom trigger.

2. Configure MQTT Publish  
   - In the action configuration, select "MQTT Publish" as the action type.  
   - Specify the topic you wish to publish to and the message payload.

<!-- Image placeholder removed for build -->

## Using Analysis for Advanced Scenarios

For more advanced or customized retain-like behavior (for example, complex payload processing, conditional logic, or storing multiple retained messages by topic), implement an Analysis script that:
- Receives or reads the message you want to retain,
- Stores the last message for a topic (for example, in a TagoIO bucket or variable), and
- Publishes the stored message to the topic when a subscription event is detected.

Refer to the Analysis documentation for details on creating scripts and integrating them with Actions and MQTT: see [Analysis](link-to-analysis).

Additional references:
- Actions documentation: [Actions](link-to-actions)
- MQTT Relay feature documentation: [MQTT Relay](link-to-mqtt-relay)