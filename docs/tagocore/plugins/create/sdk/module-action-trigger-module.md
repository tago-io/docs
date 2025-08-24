---
sidebar_position: 4
title: Module - Action Trigger
slug: /tagocore/plugins/create/action-trigger
---

# Action Trigger Module

This Module allows you to create a custom Action trigger. You decide when the action must be triggered.

An `ActionTriggerModule` will never be triggered by an external event, you must manually analyze the configuration and
trigger the action. You are responsible for watching external events and triggering events.

For instance, if you were to develop an MQTT Plugin, you would need to manually watch all topics in your
`ActionTriggerModule` configuration and decide if your action should be triggered or not.

## Sample code

```js
const { ActionTriggerModule } = require("@tago-io/tcore-sdk");

const plugin = new ActionTriggerModule({
  id: "value-list",
  name: "Value list Plugin",
  option: {
    description: "Triggers the action if value matches a string",
    name: "Value list Trigger",
    configs: [
      {
        description: "Triggers the action when the value of the device matches any value in the list.",
        field: "list",
        icon: "hashtag",
        name: "Value list",
        placeholder: "You may use wildcards (**_temperature)",
        required: true,
        title: "Value Subscription",
        type: "string-list",
      },
    ],
  },
});

// You should validate if your action should be triggered here.
plugin.onCall = async (actionID, actionValues, deviceData) => {
  // ...
};
```
