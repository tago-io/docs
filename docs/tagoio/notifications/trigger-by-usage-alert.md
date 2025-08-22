---
title: "Trigger by Usage Alert"
description: "This article explains how the \"Trigger by Usage Alert\" feature works, lists which TagoIO resources and services can fire usage alerts, and describes how to define the conditions that trigger an action."
tags: ["tagoio"]
---
The “Trigger by Usage Alert” feature lets you execute an Action when a specific service or resource meets predefined usage conditions. Below is a list of Resources and Services that can be used to trigger an Action.

## Resources and Services

| Resources | Services |
|---|---|
| [Access Management](../security/access-management) | [Input](../services/data-input-service) |
| [Actions](../actions/actions) | [Output](../services/data-output-service) |
| [TCore](../services/tagocore-service) | [Analysis](../analysis/analysis-overview) |
| [Device](../devices/devices) | [Data Records](../services/data-records-service) |
| [Team Members](../account/profiles#team-members) | [SMS](../services/sms-service) |
| [Dashboards](../dashboards/creating-dashboard-tabs) | [Emails](../services/e-mail-service) |
| [Analysis](../analysis/analysis-overview) | [Run Users](../services/end-users-service) |
|  | [Push Notifications](../services/notification-service) |
|  | [File Storage](../services/file-storage-service) |

For example, you can configure an Action to trigger when Analysis usage reaches a specified threshold. Once that threshold is met, a notification can be sent to the profile administrator.

## Setting the Trigger Conditions

To set up an alert, define the conditions that will trigger the Action. You can specify multiple conditions; the Action will be executed if any one of them is met.

![Image 1](https://help.tago.io/galleryDocuments/edbsn214ff24ccfc196cb8e0cdca72300607313968f2aa62e30f90e1b7aa90a427c86a73da953243e156dc9197df04ea71d49?inline=true)

1. **Select a Resource or Service:** Choose the specific resource or service you want to monitor as a trigger.
2. **Define Condition and Percentage:** Specify the condition that needs to be met for the action to be triggered, and determine the usage percentage that will activate the trigger.
3. **Add or Remove Conditions:** You can add or remove conditions as needed, with a maximum of 10 conditions. Remember, the action will be executed if at least one of the specified conditions is satisfied.