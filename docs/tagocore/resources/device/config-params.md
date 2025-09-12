---
sidebar_position: 5
title: Configuration Parameters
slug: /tagocore/device/configuration-parameter
---

# Configuration Parameters

Configuration Parameters are settings you can send to your devices to control how they behave. Think of them as remote controls for your IoT hardware - you can change device settings from TagoCore without physically accessing the equipment.

These parameters work as simple key-value pairs, like:
- `update_interval: 30` (how often to send data, in seconds)
- `sensor_threshold: 75` (when to trigger an alert)
- `wifi_ssid: MyNetwork` (which network to connect to)

When your device requests its configuration from TagoCore, it receives these settings and can adjust its behavior accordingly.

## Managing Parameters

You can mark parameters as `read` to organize them and filter which ones are shown when your device retrieves its configuration. This helps keep the configuration clean and only shows relevant settings to your device.
