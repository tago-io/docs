---
title: "MQTT Retain on TagoIO Broker"
description: "This article explains how to implement an MQTT \"retain\"-like behavior on the TagoIO MQTT broker using Actions or Analysis to store and resend the last message when a new client subscribes."
tags: ["tagoio"]
---
> **Note:** TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. Free accounts and accounts in the European database region may use third‑party MQTT services with TagoIO via the MQTT Relay feature (see the [MQTT Relay documentation](mqtt)).

TagoIO's MQTT broker does not natively support the standard MQTT **retain** feature. However, you can implement an equivalent workaround by using TagoIO Analysis and Actions to store the last message published to a topic and resend it when a new client subscribes.

This approach involves using the [Analysis](../../../analysis/index) and [Actions](../../../actions/index) features to store the last message published to a topic and then resend it when a new client subscribes.

## Setting Up Message on Subscribing

To build an MQTT **retain** workaround with TagoIO, you can either publish directly to a topic with an Action or use an Analysis script for more complex scenarios.

## Using Actions to Publish a Message to a Subscriber

1. **Create an Action**  
   - Navigate to the Actions section in your TagoIO dashboard and create a new action.  
   - Choose the event that will trigger this action. It could be a variable update, a scheduled time, or another custom trigger.

2. **Configure MQTT Publish**  
   - In the action configuration, select **"MQTT Publish"** as the action type.  
   - Specify the topic you wish to publish to and the message payload.

![Image 2](/docs_imagem/tagoio/external-41c105e7.png)

## Using Analysis for Advanced Scenarios

For scenarios where you need to publish for a large number of devices/topics and also require more control over the publishing process, you can use an Analysis script.

### 1. Create an Analysis
- Go to the **Analysis** section and create a new analysis.  
- Choose **Node.js** as the environment.

### 2. Implement MQTT Publish Script

```js
const { Analysis, Services } = require("@tago-io/sdk");

async function mqttPushExample(context, scope) {
  // Create your data object to push to MQTT
  const myDataObject = {
    variable: "temperature_celsius",
    value: (myData.value - 32) * (5 / 9),
    unit: "C",
  };

  // Options for the publish
  const options = { qos: 0 };

  // Publishing to MQTT
  const MQTT = new Services({ token: context.token }).MQTT;
  await MQTT.publish({
    bucket: myData.device,          // for immutable/mutable devices
    message: JSON.stringify(myDataObject),
    topic: "tago/my_topic",
    options,
  });
}

module.exports = new Analysis(mqttPushExample);
```

### 3. Trigger Analysis
- Configure an Action or another event to trigger the execution of your Analysis (e.g., a device update, a scheduled time, or any other event in your TagoIO application).

Refer to the [Analysis documentation](../../../analysis/index) for details on creating scripts and integrating them with Actions and MQTT.

Additional references:
- Actions documentation: [Actions](../../../actions/index)
- MQTT Relay feature documentation: [MQTT Relay](mqtt)