---
title: "Image Widget"
description: "This article explains how to use the Image widget in TagoIO dashboards to present custom images (such as logos) and describes the widget's behavior and image source types."
tags: ["tagoio", "widgets"]
---
The Image widget provides the ability to present custom images in your dashboard. You can use it to display a company or customer logo, or any image that helps users better visualize your application.

![Image widget example showing three image tiles](/docs_imagem/tagoio/image-widget-2.gif)


## 1. Image Behavior
Image behavior defines where the image URL comes from. There are three types of image behavior: static, conditional, and dynamic.

You can use TagoIO's file system to store the image and cache the public URL (TagoIO Admin: File System).

### 1.1 Static

It displays the image from a static URL.

### 1.2 Conditional
Creates conditions, where each condition will have an image URL associated with it, and if the variable linked in the **Data From** field satisfies this condition, this image will be displayed.

![Image 2](/docs_imagem/tagoio/Captura-20de-20tela-20de-202021-06-23-2019-51-03-Op0.png)

### 1.3 Dynamic
This image URL comes from the variable data.

## 2. 'Data From' Field
The conditional and dynamic behavior has a **Data From** field to set the device and variable that will be used.

![Image 3](/docs_imagem/tagoio/1623008017802-7Qs.png)

> This field is dependent on the type of dashboard you are using; the difference is explained below.

### 2.1 'Data From' for Normal Dashboards
From the option **Data From** on the right menu, select one device from your list of devices and the variable that contains the data.

### 2.2 'Data From' for Blueprint Dashboards
From the option **Data From** on the right menu, add the [Blueprint device](/docs/tagoio/devices/blueprint-devices-entities.md) and input the name of the variable that contains the information.

:::info

When using a [Blueprint dashboard](/docs/tagoio/dashboards/blueprint-dashboard.md), the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

:::