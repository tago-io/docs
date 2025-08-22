---
title: "Blueprint Devices & Entities"
description: "This article explains how Blueprint Devices and Entities function as dynamic data sources for Blueprint Dashboards, how they appear for selection, and important usage notes for widgets that support entities."
tags: ["tagoio", "devices"]
---

Blueprint Devices and [Entities](../entities/entities) serve as dynamic data sources for [Blueprint Dashboards](../dashboards/blueprint-dashboard). These dashboards let you change data sources dynamically while keeping the same widgets and configurations. By creating blueprint devices or entities, you define which data sources can be dynamically altered. The selected data sources appear in a dropdown menu at the top of a Blueprint Dashboard.

<!-- Image placeholder removed for build -->

> **Note:** Blueprint Entities can only be utilized by widgets that support them. If a widget does not display the entity in its data-source selection, that widget does not support entities yet.

## How it works
Blueprint devices or entities are crucial for leveraging Blueprint Dashboards. The system works by associating devices or entities with specific tag keys and values. Devices or entities that match those tags become available for selection in the dashboard dropdown menu.

For instructions on creating and configuring blueprints or adjusting visualization options, see [Creating a blueprint](../dashboards/blueprint-dashboard) and [Visualization Settings](../widgets/widgets-overview).