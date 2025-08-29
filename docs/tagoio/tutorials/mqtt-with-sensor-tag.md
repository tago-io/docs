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
- Sensor data can be visualized on a TagoIO dashboard in real time: [dashboard](/docs/tagoio/dashboards/creating-dashboard-tabs).
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

### Adding the Device
1. Go to **Devices** in your TagoIO account and click on the **Add Device** button.
2. Select the connector type **MQTT** and look for the *SensorTag* device.
3. When the device is created, open its details page and copy the generated token.

### Setup the SensorTag to send data to TagoIO
1. Download the official *SensorTag* app for Android or iOS (make sure it matches your CC2650 model).
2. Open the app, press the power button on the SensorTag so that it starts communicating with your mobile device.
3. In the app, tap **Cloud configuration** and ensure the Bluetooth module is enabled; then select your device from the list.
4. Tap **All** (or the “+” icon at the top right if you have multiple tags) and choose **Advanced Configuration**.
5. In the *Advanced cloud config* section:
   - **Broker Address:** `mqtt.tago.io` (without `https://`)
   - **Broker Port:** `1883`
   - **Username:** `tagoio`
   - **Password:** `<device token>` (the token you copied earlier)
   - **Publish Topic:** `data`
   - **Subscribe Topic:** leave as is (not used)
   - **Publish rate:** `5000` (you may adjust later)
6. Turn the switch on to start pushing data to TagoIO.
7. If the configuration is correct and you have a network connection, sensor data will begin arriving in your account. You can view it in the Live Inspector tab of the device details. Note that this data is not yet stored in a bucket; you need to create an MQTT Action to save it.

### Creating an MQTT Action to save data
1. Go to **Actions** and click **Create new**.
2. Set the trigger type to **MQTT Topic**.
3. Choose the action type **Insert data to device bucket**.
4. Select your SensorTag device, set the topic to `data`, and save the action.

Once the action is in place, all incoming MQTT messages on the `data` topic will be stored in the device’s bucket for further analysis or visualization.