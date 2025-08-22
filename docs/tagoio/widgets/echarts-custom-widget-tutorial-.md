---
title: "ECharts Custom Widget Tutorial "
description: "This article explains how to create a Ring Gauge custom widget for TagoIO using the ECharts library, and outlines the three main steps: setting up your development environment, implementing the widget components, and deploying the widget to TagoIO Files."
tags: ["tagoio", "widgets", "tutorial"]
---

In this tutorial, we will guide you through creating a Ring Gauge custom widget that displays multiple variables simultaneously in an interesting format.

To achieve this, we leverage the [ECharts library](https://echarts.apache.org/), a robust and highly customizable charting library that simplifies the development of interactive and visually appealing data visualizations. Using ECharts can significantly speed up development and help ensure the custom widget is both efficient and aesthetically pleasing.

<!-- Image placeholder removed for build -->

This tutorial is structured into three comprehensive sections to facilitate a smooth learning experience:

1. Installing Dependencies and Setting Up Your Development Environment: Walk through the initial setup, including installing necessary dependencies and configuring your environment so you have everything needed to get started.

2. Key Components of Your Custom Widget: Explanation and examples of the main building blocks of the widget, including `widget.tsx` and `widget.view.tsx`, to implement core functionality and visual layout.

3. Deploying your Custom Widget Code to TagoIO Files: Steps to deploy your widget code to the TagoIO Files section so it can be used within the platform.

## Installing Dependencies and Setting Up Your Development Environment
We will walk you through the initial setup, including installation of required dependencies and configuration of your development environment. This ensures you have the tools and libraries needed for building and testing the Ring Gauge widget.

## Key Components of Your Custom Widget
This section covers the main components required to build the widget and how they interact:
- `widget.tsx` — contains the widget logic, data handling, and integration points with TagoIO.
- `widget.view.tsx` — contains the UI rendering using ECharts (or other front-end code) and handles the visual layout.

Refer to the in-article examples and code snippets (when available) to implement these files within your project structure.

## Deploying your Custom Widget Code to TagoIO Files
Once your widget is ready and tested locally, this section explains how to upload and deploy the widget files to the TagoIO Files area so your custom widget becomes available in the platform.

Additional references
- See [Ring Gauge](ring-gauge-widget) for more on this widget type.
- See [ECharts library](https://echarts.apache.org/) for ECharts documentation and examples.