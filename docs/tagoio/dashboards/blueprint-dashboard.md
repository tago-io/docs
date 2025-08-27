---
title: "Blueprint Dashboard"
description: "This article explains the Blueprint Dashboard in TagoIO, describing how it links widgets to multiple devices for scalable applications and introduces the core concept of Blueprint Devices."
tags: ["tagoio", "dashboards"]
sidebar_position: 1
---
Blueprint is a type of [Dashboard](../dashboards/creating-dashboard-tabs) that allows users to dynamically link [widgets](../widgets/index) to multiple devices. This type of dashboard is especially useful when scaling applications.

![Illustration of a Blueprint Dashboard linking widgets to multiple devices](/docs_imagem/tagoio/blueprint-dashboard-2.gif)

This type of dashboard is extremely useful when scaling up applications.

## Concepts

Blueprint works by allowing users to change the devices associated with widgets in real time inside the Dashboard. These dynamic devices are called Blueprint Devices; you can learn more about them in the following sections of this article (see [Blueprint Devices & Entities](../devices/blueprint-devices-entities)).

This means that you can distribute the same Dashboard to hundreds of different TagoRun Users and each one would see their own data inside of the Dashboard.

### Blueprint Devices

[Blueprint Devices](../devices/blueprint-devices-entities) are dynamic devices that can be changed by the User while viewing the Dashboard. Changing these devices will reload the data for the Widgets that use them.

![Image 5](/docs_imagem/tagoio/1592330671692-dtA.png)