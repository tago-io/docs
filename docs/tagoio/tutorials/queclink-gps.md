---
title: "Queclink GPS"
description: "This article explains how to integrate Queclink GPS devices with TagoIO using a middleware that translates the device TCP/IP protocol and shows the required device configuration (protocol, host URL, and port)."
tags: ["tagoio"]
---
Queclink GPS can be integrated with TagoIO through middleware that translates the device's TCP/IP protocol. The middleware enables uplink communication between the device and TagoIO while parsing messages to extract commands and variables in real time.

![Queclink device, Cellular Network, and TagoIO flow diagram](/docs_imagem/tagoio/queclink-gps-2.png)

> Downlink messages must be accomplished using SMS messages or Queclink tools; they cannot be sent from TagoIO.

## Queclink Setup

Configure your GPS so it sends data to the TagoIO middleware. Follow the Queclink manual to set the protocol type, host URL, and port as shown below:

| Parameter  | Value                            |
|-----------:|----------------------------------|
| Protocol   | TCP/IP                           |
| Host URL   | queclink.middleware.tago.io      |
| Port       | 50005                            |

## TagoIO Setup

Add a device in your account at TagoIO. Go to [Devices](https://admin.tago.io/devices) and click on **'Add Devices'**, filter network by **'Cellular'** and pick your device from the list.

![Queclink TagoIO selection](/cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/B7vQ37OUrGVxDHxn7o8-4iLAA1vRqYixw0krDbTF4S0/Queclink%20TagoIO%20selecion-WtI.png)

### Devices currently integrated with TagoIO

- GL505
- GV300
- GV300 CAN
- GV75
- GV55*  
  *contact us for updates*

Once the device is created, you will receive a confirmation. Turn your GPS on and wait for data to arrive in your bucket: [Buckets](https://help.tago.io/portal/en/kb/articles/2-buckets). The data will be ready to display in dashboards.

### Building Dashboards

Create a dashboard by adding gauges, maps (add the variable **'location'**), tables, and more. For example:

![Map example](/cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/6LPZjX_2YWmgn4JzYDzS5zptzsjgMzKMYqaPmHmobi4/map%20truck%20queclink%20tagoio-M6o.png)

You can also set up notifications to send push notifications, SMS, or emails: [Notifications](https://help.tago.io/portal/en/kb/articles/11-notification). Advanced analysis scripts are available here: [Scripts](https://help.tago.io/portal/en/kb/articles/120-creating-analysis).

### GPS Configuration

For detailed GPS configuration settings, refer to the Queclink manual: [GPS configuration](http://www.queclink.com/product).