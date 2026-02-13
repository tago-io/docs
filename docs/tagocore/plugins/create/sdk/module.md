---
sidebar_position: 1
title: Module
slug: /tagocore/plugins/create/module
---

# Module

Modules are JavaScript classes that allow you to add a specific functionality for your Plugin.
Your **Plugin should have at least one module**.

We currently offer these types of Modules for you to use in your Plugin:

- [Payload Encoder Module](/docs/tagocore/plugins/create/encoder) - To encode data before reaching a Device;
- [Service Module](/docs/tagocore/plugins/create/service) - To create a service that runs code;
- [Action Trigger Module](/docs/tagocore/plugins/create/action-trigger) - To create a new trigger for Actions;
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

This Module allows you to encode data before it reaches a device. Learn more about it [here](/docs/tagocore/plugins/create/encoder).

```mermaid
graph LR
    A[Device sends data] --> B[Payload Encoder]
    B[Payload Encoder] --> C[Payload Parser]
    C[Payload Parser] --> D[Data added to Device]

    classDef default fill:#333,stroke:#333,stroke-width:2px,color:#fff,font-weight:bold
```

## Service Module

This Module allows you to create a service that will run in your Plugin. Learn more about it [here](/docs/tagocore/plugins/create/service).

## Action Trigger Module

This Module allows you to create a new trigger for Actions. Learn more about it [here](/docs/tagocore/plugins/create/action-trigger).

## The `configs` property

If your Module has a `configs` property in the `setup` object, you can access the current values of those configurations
using the `.configs` getter.

The `.configs` getter retrieves the latest configuration values from TagoCore, so you should have the latest values
every time. Below is a sample code of how to use it:

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");

const service = new ServiceModule({
  id: "my-service",
  name: "Service",
  configs: [
    {
      name: "Token",
      field: "token",
      type: "string",
      required: true,
    },
  ],
});

service.onLoad = async () => {
  // Retrieves the latest config values from TagoCore
  const configs = await service.configs;
  const token = configs.token;
};
```
