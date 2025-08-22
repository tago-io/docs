---
title: "MQTT with Sensor Tag"
description: "This article explains how to use the Texas Instruments SensorTag (CC2650) to send sensor data to TagoIO via MQTT, including connectivity flow and the sensors available on the device."
tags: ["tagoio"]
---

## Overview
This example shows how to use the SensorTag Bluetooth module (Texas Instruments CC2650) to send data to TagoIO. No code modification is required on the SensorTag itself; because the SensorTag is used with MQTT, only a configuration setup is necessary.

The SensorTag communicates with a mobile device over Bluetooth. Texas Instruments provides a mobile app that converts that Bluetooth communication into MQTT and forwards the data to the cloud over cellular or Wi‑Fi.

## Connectivity Diagram
![SensorTag to TagoIO flow diagram](/docs_imagem/tagoio/mqtt-with-sensor-tag-2.png)

## Learn more
Learn more about the SensorTag CC2650 and how to get started: [SensorTag CC2650 and how to get started](https://www.ti.com/tool/CC2650STK)

## What this example does
- All sensor data from the SensorTag will be posted to TagoIO.
- Sensor data can be visualized on a TagoIO dashboard in real time: [dashboard](../dashboards/creating-dashboard-tabs).
- This example uses the hardware version tested by the authors.

## Sensors included
The tested SensorTag hardware contains the following 10 sensors:
- Light
- Digital microphone
- Magnetic sensor
- Humidity
- Pressure
- Accelerometer
- Gyroscope
- Magnetometer
- Object temperature
- Ambient temperature

## Notes and limitations
- There is no native way to control the SensorTag's LED or buzzer using MQTT's subscribe method.
- Only configuration is required on the TagoIO side to receive and process MQTT messages from the SensorTag (via the mobile app).

## On this page
- Adding the Device
- Setup the SensorTag to send data to TagoIO
- Creating an MQTT Action to save data