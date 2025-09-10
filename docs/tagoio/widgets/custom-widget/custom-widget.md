---
title: "Custom Widget Overview"
description: "This article explains what Custom Widgets are in TagoIO, the web technologies you can use to build them, and shows example outputs. It also lists related documentation for further configuration and parameters."
tags: ["tagoio", "widgets"]
"sidebar_position": 1
---
Custom Widgets are flexible components that let you build any interface or visualization needed for your application. They can be created with plain web technologies (HTML, CSS, and JavaScript) or with client-side frameworks, provided the final build outputs HTML, CSS, and JavaScript.

The widget must include at least some JavaScript functionality provided via our library ([our library](https://github.com/tago-io/custom-widget)).

## Supported technologies

- HTML, CSS, JavaScript (minimum requirement: include JavaScript from our library)
- Client-side frameworks (e.g., React, Vue, Angular) are supported as long as the framework outputs HTML, CSS, and JavaScript in the build process

## Examples

Below are example outputs from Custom Widgets (charts and a map) to illustrate what you can build:

![Hexbin chart example](/docs_imagem/tagoio/custom-widget-2.gif)

![Polar / flower chart example](/docs_imagem/tagoio/custom_widget_3.gif)

![Map with markers and popups example](/docs_imagem/tagoio/custom_widget_4.gif)

![Custom widget example 5](/docs_imagem/tagoio/custom-widget-5.png)

![Custom widget example 6](/docs_imagem/tagoio/custom_widget_6.png)

## Notes

- Ensure your widget bundle includes any required JavaScript and CSS files so the widget works when embedded.
- If you use a framework, configure the build process to produce static HTML/CSS/JS assets that the TagoIO widget loader can consume.

## Creating your own

The sky's the limit when using this widget. You can build your widget using Angular, React, Vue.js, or even plain old JavaScript.
To understand how to write the code for your Custom Widget, click [here](https://community.tago.io/t/custom-widget-iframe/842).

## Data Sources

Due to their versatility, Custom Widgets allow you to use data from different sources in TagoIO.

You can use data stored in your **device’s variables** by configuring your devices and the variables in the **Data from** section of the widget’s configuration.

You can also use data from **resources** such as devices and users – just like on the [Device List](/docs/tagoio/widgets/tables/device-list-widget.md) and [User List](/docs/tagoio/widgets/tables/user-list-widget.md) widgets – by configuring the tag filters in the **Device Filters** and/or **User Filters** sections of the widget’s configuration. It’s possible to build your custom logic by mixing data from different data sources, such as getting data from variables and combining them with Devices/User.

## Main Configuration

After you've coded your Custom Widget, you need to host it and provide a link to the location where you've hosted it.

Tip: You can use our Files to host your custom Widget.

![Hosting example](/docs_imagem/tagoio/1588017173880-8JY.png)

## Parameters

Parameters allow you to send a list of keys and values to your Custom widget.

One use of these parameters is to change the way your code behaves. You can have two widgets pointing to the same link, but exhibiting different behaviors.

![Parameter example](/docs_imagem/tagoio/custom-widget-parameters-2.png)

Read more about [Custom Widget Paramenter](/docs/tagoio/widgets/custom-widget/custom-widget-parameters.md).

## User Control

You may choose to run an Analysis once you send data from your widget. To do so, inform the desired Analysis in the Run analysis when sending data field.

![User control example](/docs_imagem/tagoio/1587659332760-NCM.png)
