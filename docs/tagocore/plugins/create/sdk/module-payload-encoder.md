---
sidebar_position: 3
title: Module - Payload Encoder
slug: /tagocore/plugins/create/encoder
---

import Mermaid from '@theme/Mermaid';

# Payload Encoder Module

This Module allows you to encode data before it reaches a bucket.

<Mermaid chart={`
graph LR
    A[Device sends data] --> B[Payload Encoder]
    B[Payload Encoder] --> C[Payload Parser]
    C[Payload Parser] --> D[Data added to Bucket]
    
    classDef default fill:#333,stroke:#333,stroke-width:2px,color:#fff,font-weight:bold
`}/>

Once a Device sends data, the data is immediately forwarded to the first `PayloadEncoderModule` found. The Payload
Encoder order is defined by the `encoder_stack` field of the Device.

After the first `PayloadEncoderModule` resolves a value it is passed sequentially through all the remaining
`PayloadEncoderModule` modules.

:::tip Keep in Mind
The value received in your `PayloadEncoderModule` class may have already been parsed by another `PayloadEncoderModule`
from a different Plugin.
:::

## Encoding the value

To encode the value, you should override the Module's `onCall` function. This function receives a single value, which
is the data sent by a Device or parsed by other encoders.

You should **always** return a value from the `onCall` function.


## Sample code

```js
const { PayloadEncoderModule } = require("@tago-io/tcore-sdk");

const encoder = new PayloadEncoderModule({
  id: "number-to-hex-encoder",
  name: "Number to Hex encoder",
});

// You should encode your data here.
// This example encodes number values into a hex format.
encoder.onCall = async (data) => {
  if (data) {
    const isNumber = !isNaN(data.value);
    if (isNumber) {
      // encodes data.value to a hex format
      data.value = data.value.toString(16);
    }
  }
  return data;
};
```
