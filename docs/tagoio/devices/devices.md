---
title: "Devices"
description: "This article explains what a Device is in TagoIO, how devices communicate with the platform, where they are managed, and how to add devices and choose their data storage type."
tags: ["tagoio", "devices"]
---

Device is the link between your external things and the data in your account. To allow anything to send or receive data from TagoIO, you need to create a device. The communication between external devices and TagoIO is done via HTTP or MQTT using JSON format. To enable this communication, a device must be created within the platform; this involves specifying the device type and configuring it to send and receive data correctly.

Devices are managed through your [Admin](https://admin.tago.io/) interface, where users can access detailed information about each device, including its ID and other settings.

> ℹ️ Our [TagoIO API documentation](link-to-tagoio-api-documentation) offers comprehensive instructions on how to interface with devices, ensuring developers can effectively integrate their hardware with the platform.

## Adding devices

Devices are connected to TagoIO using [Connectors](link-to-connectors), which act as a bridge between TagoIO and external networks to transmit and receive data. To follow a step-by-step tutorial on how to add a device, see the [Getting Started](link-to-getting-started) article.

> ℹ️ Learn more about [Connectors](link-to-connectors) here.

## Device type and data storage

Once you create a device, it will store all the data sent by your sensors. During the creation process, you will be prompted to select the type of data storage to be used. There are two types of data storage you can choose from.