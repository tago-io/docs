---
title: "Custom Widget"
description: "This article explains what Custom Widgets are in TagoIO, the web technologies you can use to build them, and shows example outputs. It also lists related documentation for further configuration and parameters."
tags: ["tagoio", "widgets"]
---

## Overview

Custom Widgets are flexible components that let you build any interface or visualization needed for your application. They can be created with plain web technologies (HTML, CSS, and JavaScript) or with client-side frameworks, provided the final build outputs HTML, CSS, and JavaScript.

The widget must include at least some JavaScript functionality provided via our library ([our library](link-to-our-library)).

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

## On this page

- Creating your own
- Data Sources
- Main Configuration
- Parameters
- User Control

## Related articles

- ECharts Custom Widget Tutorial (link-to-echarts-custom-widget-tutorial)
- Map Widget (link-to-map-widget)
- Image Marker Widget (link-to-image-marker-widget)
- Compose Widget (link-to-compose-widget)
- Analysis Overview (link-to-analysis-overview)