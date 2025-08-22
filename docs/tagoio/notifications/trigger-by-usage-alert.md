---
title: "Trigger by Usage Alert"
description: "This article explains how the \"Trigger by Usage Alert\" feature works, lists which TagoIO resources and services can fire usage alerts, and describes how to define the conditions that trigger an action."
tags: ["tagoio"]
---

The "Trigger by Usage Alert" feature lets you execute an Action when a specific service or resource meets predefined usage conditions. Below is a list of Resources and Services that can be used to trigger an Action.

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