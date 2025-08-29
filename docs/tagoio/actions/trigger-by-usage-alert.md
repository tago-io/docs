---
title: "Trigger by Usage Alert"
description: "This article explains how the \"Trigger by Usage Alert\" feature works, lists which TagoIO resources and services can fire usage alerts, and describes how to define the conditions that trigger an action."
tags: ["tagoio"]
---
The “Trigger by Usage Alert” feature lets you execute an Action when a specific service or resource meets predefined usage conditions. Below is a list of Resources and Services that can be used to trigger an Action.

## Resources and Services

| Resources | Services |
|---|---|
| [Access Management](/docs/tagoio/tagorun/access-management/) | [Input](../services/data-input-service) |
| [Actions](../actions/) | [Output](../services/data-output-service) |
| [TCore](/tagocore/integration) | [Analysis](/docs/tagoio/analysis/) |
| [Device](/docs/tagoio/devices/) | [Data Records](/docs/tagoio/devices/data-management/data-records) |
| [Team Members](../account/profiles) | [SMS](../services/sms-service) |
| [Dashboards](/docs/tagoio/dashboards/creating-dashboard-tabs) | [Emails](../services/e-mail-service) |
| [Analysis](/docs/tagoio/analysis/) | [Run Users](../services/end-users-service) |
|  | [Push Notifications](../services/notification-service) |
|  | [File Storage](../services/file-storage-service) |

For example, you can configure an Action to trigger when Analysis usage reaches a specified threshold. Once that threshold is met, a notification can be sent to the profile administrator.

## Setting the Trigger Conditions

To set up an alert, define the conditions that will trigger the Action. You can specify multiple conditions; the Action will be executed if any one of them is met.

![Image 1](/docs_imagem/tagoio/external-17f4f80c.png)

1. **Select a Resource or Service:** Choose the specific resource or service you want to monitor as a trigger.
2. **Define Condition and Percentage:** Specify the condition that needs to be met for the action to be triggered, and determine the usage percentage that will activate the trigger.
3. **Add or Remove Conditions:** You can add or remove conditions as needed, with a maximum of 10 conditions. Remember, the action will be executed if at least one of the specified conditions is satisfied.