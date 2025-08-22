---
title: "Connecting ZEN15 Power using SmartThings Hub"
description: "This article shows how to connect the Zooz ZEN15 power switch to a TagoIO account using a Samsung SmartThings hub, enabling real-time power and energy monitoring and control."
tags: ["tagoio"]
---
This tutorial shows how to bring electric power and energy measurements from the Zen15 sensor into your TagoIO account using a Samsung SmartThings hub.

![SmartThings Hub from Samsung](/docs_imagem/tagoio/connecting-zen15-power-using-smartthings-hub-2.png)

The Zooz [Zen15](https://www.getzooz.com/zen15-power-switch/) Power Switch connects to the SmartThings hub using Z‑Wave wireless technology. The Zen15 can control loads and measure power and energy in real time so data can be displayed and processed by TagoIO.

![Zen connecting with Samsung Hub](/docs_imagem/tagoio/connecting-zen15-power-using-smartthings-hub-2.png)

## On this page
1. SmartThings Setup  
2. TagoIO Setup

## SmartThings Setup
Assume that you already have your devices, hubs, and locations registered in the SmartThings portal.

* Make sure your ZooZ device is registered at the [SmartThings portal](https://support.smartthings.com/hc/en-gb/articles/360052390111-Devices-in-SmartThings).
* If you don't have the locations and hubs registered, access this [tutorial](https://support.smartthings.com/hc/en-us/articles/360052390151-SmartThings-Enabled-Hubs).

> SmartThings Hub demands a manual installation of a handler when using Zooz sensors.  
> Click here for the [tutorial](https://www.thesmartesthouse.com/blogs/the-smartest-blog/how-to-install-a-custom-device-handler-in-smartthings). The code to be inserted in the handler to enable the Hub to find the Zen15 sensor can be found [here](https://github.com/krlaframboise/SmartThings/blob/master/devicetypes/krlaframboise/zooz-power-switch.src/zooz-power-switch.groovy).

### Configuring SmartThings to send data to TagoIO
1. Sign in to the SmartThings portal.
2. Click on **My Device Handlers** and create a new Device Handler.
3. Set up your Device Handler:
   * **Name:** insert a name for your device handler  
   * **Namespace:** insert the preferred namespace  
   * **Capabilities:** select _Power Meter_ and _Energy Meter_  
   * Click **Create**.
4. After the Device Handler is created, a code is automatically generated. Remove all the generated code and replace it with our TagoIO handler. [Copy the code](https://github.com/tago-io/zooz-zen15/blob/master/smart_things_conf.rb) and paste it into your device handler.
5. Click **Save** and then click **Publish > For Me**.
6. Install the Device Handler on your devices:
   * Click the **Simulator** button.
   * Select your location and click **Set Location**.
   * In the section “Choose a device to test with”, select the device you want to install the handler (you can only install the handler on one device at a time).
   * Click **Install**.

## TagoIO Setup
In your TagoIO account, go to [Device](https://admin.tago.io/devices) and click **Add Device**.  
Select the Zen15 device type and fill in the required fields.

> The **Device ID** is obtained by following these steps:
> * In the SmartThings portal, select the **My devices** tab and find the device you just installed.  
>   To get the Device ID, go to the URL of the browser and copy the text as shown below.
> 
> ```
> https://graph.api.smartthings.com/api/smartapps/installations/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
> ```
> * Paste it into the **Device ID** field.

Your Zen15 is now ready to send data to TagoIO. To visualize the incoming data, create a [dashboard](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview).