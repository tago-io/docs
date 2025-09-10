---
title: "Actions"
description: "This article explains the Actions feature in TagoIO, what you can do with Actions, and how to create a new Action. It also provides links to related documentation sections such as Defining Actions, trigger types, and action types."
tags: ["tagoio", "actions"]
---
Actions is a powerful feature that gives you total control over your devices by executing operations based on events you define.

With Actions you can:
- Send an SMS based on certain conditions.
- Send an email based on certain conditions.
- Run scripts using [Analysis](/docs/tagoio/analysis/).
- Make HTTP POST requests.
- Send notifications to your account or to the account of your [RunUsers](/docs/tagoio/tagorun/).
- Publish to an MQTT topic based on certain conditions.

Learn about [Defining Actions](/docs/tagoio/actions/defining-actions.md).

## Creating Actions

To create a new Action, click the "Action" button in the sidebar, then click the + button in the top right.

![Actions screen showing the Add Action button and Actions list](/docs_imagem/tagoio/actions-2.png)

### Type of trigger

There are 5 types of triggers you can use:

* **Variable** – The action will be triggered when one variable meets certain conditions. If your device has sent data and the variables are meeting those conditions, this action will be triggered. Learn more about [Trigger by Variable](/docs/tagoio/actions/trigger-by-variable.md).

* **Resource** – This action will be triggered when the selected resources, for example, analysis or devices, have been modified, deleted, or created. This type keeps _watching_ resources and triggers the action when the resources have met certain conditions. Learn more about [Trigger by Resource](/docs/tagoio/actions/trigger-by-resource.md).

* **Schedule** – This action will be triggered automatically from time to time. You can specify a custom range (every second Wednesday of September), or you can specify a fixed time range (every 2 hours). Learn more about [Trigger by Schedule](/docs/tagoio/actions/trigger-by-schedule.md).

* **Usage Alert** – This action will be triggered upon a Services and/or Resources usage percentage set by the user. This type keeps watching Services and Resources and triggers the Action when the conditions are met. Learn more about [Trigger by Usage Alert](/docs/tagoio/actions/trigger-by-usage-alert.md).

* **Geofence** – This action will be triggered whenever a variable containing location data meets specific geofence conditions—either inside or outside a predefined area. Learn more about [Trigger by Geofence](/docs/tagoio/actions/trigger-by-geofence.md).

To prevent your action from continuously activating when a trigger condition is met, it is advisable to define a reset trigger condition. Ensure you check the “[Trigger Unlock]” option to avoid potential issues with your logic and account:
[Trigger Unlock](/docs/tagoio/actions/trigger-unlock.md).
