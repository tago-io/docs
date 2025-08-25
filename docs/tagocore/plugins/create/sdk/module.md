---
sidebar_position: 1
title: Module
slug: /tagocore/plugins/create/module
---

import Mermaid from '@theme/Mermaid';

# Module

Modules are JavaScript classes that allow you to add a specific functionality for your Plugin.
Your **Plugin should have at least one module**.

We currently offer these types of Modules for you to use in your Plugin:

- [Payload Encoder Module](/tagocore/plugins/create/encoder) - To encode data before reaching a Bucket;
- [Service Module](/tagocore/plugins/create/service) - To create a service that runs code;
- [Action Trigger Module](/tagocore/plugins/create/action-trigger) - To create a new trigger for Actions;
- Action Type Module - To create a new type for Actions;
- Database Module - To create a database that will save TagoCore data.

## Setup

Setup is the name of object passed to the constructor of each Module class.

The setup object **must have** an `id` and a `name` property. The setup object may also contain a `configs`
property to request configuration parameters to the user.

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");

const setup = {
  id: "my-service",
  name: "Pretty name of service",
};

new ServiceModule(setup);
```

## Payload Encoder Module

This Module allows you to encode data before it reaches a bucket. Learn more about it [here](/tagocore/plugins/create/encoder).

<Mermaid chart={`
graph LR
    A[Device sends data] --> B[Payload Encoder]
    B[Payload Encoder] --> C[Payload Parser]
    C[Payload Parser] --> D[Data added to Bucket]
`}/>
