---
title: "Video Widget"
description: "This article explains how to use the Video widget to present custom videos in TagoIO dashboards and summarizes the widget’s behavior and related references."
tags: ["tagoio", "widgets"]
---
The Video widget provides the ability to present custom videos in your dashboard. Use it to show a company or customer video, product demos, or any visual content that helps users better understand your application.

![Video widget example](/docs_imagem/tagoio/video-widget-2.gif)

> Note: This widget works for both dashboard types: Normal and [Blueprint](/docs/tagoio/dashboards/blueprint-dashboard).

## On this page
- [1. Video Behavior](#1-video-behavior)  
- [2. 'Data From' Field](/docs/tagoio/devices/data-management/data-records)

## 1. Video Behavior
Video behavior defines how the widget obtains the video URL. It can be one of three types: static, conditional, or dynamic.

### Static
It displays the video from a static URL.  
You can store the video in TagoIO’s file system and use the public URL that is cached for faster loading.

### Conditional
Create conditions where each condition has an associated video URL. If the variable linked in the **Data From** field satisfies this condition, the corresponding video will be displayed. This allows you to show different videos based on device data or other criteria.

### Dynamic
The video URL comes from a variable’s value. The widget reads the current value of the selected variable and uses it as the source for the video.

## 2. 'Data From' Field
See ['Data From' Field](/docs/tagoio/devices/data-management/data-records) for details on selecting the source of the video URL within the widget configuration.

- **Normal Dashboards** – Select one device from your list of devices and choose the variable that contains the data.
- **Blueprint Dashboards** – Add the Blueprint device and input the name of the variable that holds the information.  
  When using a Blueprint dashboard, the field may not list variables to pick because it doesn’t know the devices linked to your Blueprint Device.

## Related Articles
- [Image Widget](../Media Widgets/image-widget)  
- [Compose Widget](../Media Widgets/compose-widget)  
- [Map Widget](../Map & Location/Map Widget/map-widget)  
- [Custom Widget](../Custom Widget/custom-widget)  
- [Image Marker Widget](../Map & Location/image-marker-widget)