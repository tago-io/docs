---
title: "Metadata"
description: "This article explains what metadata is in TagoIO, how it can be used inside variable payloads to change widget behavior and appearance, and provides a JSON example illustrating metadata fields."
tags: ["tagoio"]
---

## Overview

Metadata is one of the most important concepts when creating [dashboards](../dashboards/creating-dashboard-tabs) and [widgets](../widgets/widgets-overview). Metadata is a piece of information that you can store in the variable payload.

> With metadata, it is possible to dynamically change the behavior of the widget and how it displays the variable data. For example, it can change a [map](../widgets/map-widget) pin color or place a [heat map](../widgets/heatmap-widget) bubble in another position, and more.

## JSON example

```json
{
  "variable": "current",
  "value": 5.3,
  "unit": "A",
  "metadata": {
    "color": "red",
    "my_application_id": "378392922",
  }
}
```

## Using custom metadata fields

You can define your own metadata fields and use them in your [Analysis](../analysis/analysis-overview) or [Application](../../tagorun/tagorun-mobile-app). Some metadata fields trigger specific widget behaviors or change how the widget displays the data.

> Note: Metadata has priority over customizations set in the widget edit screen. Some widgets provide an option to change this behavior.

For example, this article uses the `color` and `icon` metadata fields in the following JSON payload: