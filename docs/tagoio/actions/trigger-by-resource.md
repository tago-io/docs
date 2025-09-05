---
title: "Trigger by Resource"
description: "Explains how the \"Trigger by Resource\" trigger works in TagoIO and how to configure trigger conditions so an Action runs when a resource meets specified criteria."
tags: ["tagoio"]
---
The trigger type "Trigger by Resource" allows you to execute an Action when a resource meets certain conditions. A resource can be one of the following:

- [Access Management](/docs/tagoio/tagorun/access-management/)
- [Actions](/docs/tagoio/actions/)
- [Analysis](/docs/tagoio/analysis/)
- [Device](/docs/tagoio/devices/)
- [RunUser](/docs/tagoio/tagorun/)

For example, you can trigger an Action when a new user signs up in your RUN or when a new Device is added. That Action could, for example, push a notification to yourself.

## Trigger Conditions

After setting up the device, you should set a condition that causes your Action to be executed. To do this, open the Trigger section of the Action.

:::tip

You can set multiple conditions in an Action. If at least one condition matches, the Action will be executed.

:::

![Trigger panel — "If one of the conditions match, the action will be triggered."](/docs_imagem/tagoio/trigger-by-resource-2.png)

1. **Resource** – Select a resource to be tested.  
2. **Tag key** – The tag key of the resource to be tested.  
3. **Tag value** – The tag value of the resource to be tested.  
4. **Condition** – The condition to be watched.

The example above means that the action will be triggered when a Device with a tag key of `tag_key` and a tag value of `tag_value` is created.