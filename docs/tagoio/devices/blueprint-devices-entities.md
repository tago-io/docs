---
title: "Blueprint Devices & Entities"
description: "This article explains how Blueprint Devices and Entities function as dynamic data sources for Blueprint Dashboards, how they appear for selection, and important usage notes for widgets that support entities."
tags: ["tagoio", "devices"]
sidebar_position: 3
---
Blueprint Devices and [Entities](/docs/tagoio/getting-started/entities.md) serve as dynamic data sources for [Blueprint Dashboards](/docs/tagoio/dashboards/blueprint-dashboard.md). These dashboards let you change data sources dynamically while keeping the same widgets and configurations. By creating blueprint devices or entities, you define which data sources can be dynamically altered. The selected data sources appear in a dropdown menu at the top of a Blueprint Dashboard.

<!-- Image placeholder removed for build -->

:::note

Blueprint Entities can only be utilized by widgets that support them. If a widget does not display the entity in its data-source selection, that widget does not support entities yet.

:::

## How it works
Blueprint devices or entities are crucial for leveraging Blueprint Dashboards. The system works by associating devices or entities with specific tag keys and values. Devices or entities that match those tags become available for selection in the dashboard dropdown menu.

This feature is particularly beneficial when you want a single dashboard to be used by different end-users without exposing each other's data. It allows you to focus on one centralized dashboard, eliminating the need to maintain multiple dashboards for each type of end-user.

![Image 1](/docs_imagem/tagoio/external-82f6c83e.png)

To create blueprint devices or entities, it is essential to first assign tags to them. For more information, please refer to the [Tags System documentation](/docs/tagoio/getting-started/tags-system.md).

### Creating a blueprint
You can create blueprints during the creation of a blueprint dashboard or by accessing the Blueprint Settings on the edit page of your blueprint dashboard.

![Image 4](/docs_imagem/tagoio/external-e4b19db0.png)

**Key concepts for each field:**

1. **Type:** Choose between Blueprint Device or Entity.
2. **Identifier:** This will be the name of your blueprint, appearing in the data source selection menu when creating widgets.
3. **Tag Key:** This is the tag key used to filter the devices.
4. **Tag Value:** This is the tag value used to filter the devices.

You can add up to 20 blueprints in a single dashboard.

### Visualization Settings
You can easily modify the appearance of your Blueprint and the behavior of the blueprint selector.

![Image 5](/docs_imagem/tagoio/external-c405fa26.png)

For instructions on creating and configuring blueprints or adjusting visualization options, see [Creating a blueprint](/docs/tagoio/dashboards/blueprint-dashboard.md) and [Visualization Settings](/docs/tagoio/widgets/).