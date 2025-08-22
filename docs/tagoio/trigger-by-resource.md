---
title: "Trigger by Resource"
description: "Explains how the \"Trigger by Resource\" trigger works in TagoIO and how to configure trigger conditions so an Action runs when a resource meets specified criteria."
tags: ["tagoio"]
---

The trigger type "Trigger by Resource" allows you to execute an Action when a resource meets certain conditions. A resource can be one of the following:

- [Access Management](../security/access-management)
- [Actions](../actions/actions)
- [Analysis](../analysis/analysis-overview)
- [Device](../devices/devices)
- [RunUser](../../tagorun/)

For example, you can trigger an Action when a new user signs up in your RUN or when a new Device is added. That Action could, for example, push a notification to yourself.

## Trigger Conditions

After setting up the device, you should set a condition that causes your Action to be executed. To do this, open the Trigger section of the Action (see [Defining Actions](../actions/actions) / Trigger).

> Note: You can set multiple conditions in an Action. If at least one condition matches, the Action will be executed.

![Trigger panel — "If one of the conditions match, the action will be triggered."](/docs_imagem/tagoio/trigger-by-resource-2.png)