---
title: "Custom Widget Overview"
description: "This article explains what Custom Widgets are in TagoIO, the web technologies you can use to build them, and shows example outputs. It also lists related documentation for further configuration and parameters."
tags: ["tagoio", "widgets"]
"sidebar_position": 1
---
## Overview

Custom Widgets are flexible components that let you build any interface or visualization needed for your application. They can be created with plain web technologies (HTML, CSS, and JavaScript) or with client-side frameworks, provided the final build outputs HTML, CSS, and JavaScript.

The widget must include at least some JavaScript functionality provided via our library ([our library](https://docs.tago.io/sdk/custom-widgets)).

## Supported technologies

- HTML, CSS, JavaScript (minimum requirement: include JavaScript from our library)
- Client-side frameworks (e.g., React, Vue, Angular) are supported as long as the framework outputs HTML, CSS, and JavaScript in the build process

## Examples

Below are example outputs from Custom Widgets (charts and a map) to illustrate what you can build:

![Hexbin chart example](/docs_imagem/tagoio/custom-widget-2.gif)

![Polar / flower chart example](/docs_imagem/tagoio/custom-widget-2.gif)

![Map with markers and popups example](/docs_imagem/tagoio/custom-widget-2.gif)

## Notes

- Ensure your widget bundle includes any required JavaScript and CSS files so the widget works when embedded.
- If you use a framework, configure the build process to produce static HTML/CSS/JS assets that the TagoIO widget loader can consume.

## Creating your own

The sky's the limit when using this widget. You can build your widget using Angular, React, Vue.js, or even plain old JavaScript.  
To understand how to write the code for your Custom Widget, click [here](https://community.tago.io/t/custom-widget-iframe/279).

## Data Sources

Due to their versatility, Custom Widgets allow you to use data from different sources in TagoIO.

You can use data stored in your **device’s variables** by configuring your devices and the variables in the **Data from** section of the widget’s configuration.

You can also use data from **resources** such as devices and users – just like on the [Device List](/docs/tagoio/widgets/Tables/device-list-widget) and [User List](/docs/tagoio/widgets/user-list-widget-) widgets – by configuring the tag filters in the **Device Filters** and/or **User Filters** sections of the widget’s configuration. It’s possible to build your custom logic by mixing data from different data sources, such as getting data from variables and combining them with Devices/User.

![Data source example](/docs_imagem/tagoio/external-6c842fb5.png)

## Main Configuration

After you've coded your Custom Widget, you need to host it and provide a link to the location where you've hosted it.

Tip: You can use our Files to host your custom Widget.

![Hosting example](/docs_imagem/tagoio/1588017173880-8JY.png)

## Parameters

Parameters allow you to send a list of keys and values to your Custom widget.

One use of these parameters is to change the way your code behaves. You can have two widgets pointing to the same link, but exhibiting different behaviors.

![Parameter example](/docs_imagem/tagoio/custom-widget-parameters-2.png)

Read more about [Custom Widget Parameters](/docs/tagoio/widgets/Custom Widget/custom-widget-parameters).

## User Control

You may choose to run an Analysis once you send data from your widget. To do so, inform the desired Analysis in the Run analysis when sending data field.

![User control example](/docs_imagem/tagoio/1587659332760-NCM.png)

## On this page

- Creating your own
- Data Sources
- Main Configuration
- Parameters
- User Control

## Related articles

- ECharts Custom Widget Tutorial [ECharts Custom Widget Tutorial](/docs/tagoio/widgets/echarts-custom-widget-tutorial-)
- Map Widget (../Map & Location/Map Widget/map-widget)
- Image Marker Widget [Image Marker Widget](../Map & Location/image-marker-widget)
- Compose Widget (../Media Widgets/compose-widget)
- Analysis Overview (/docs/tagoio/analysis/)