---
title: "Thinxtra Xkit for Sigfox"
description: "This article explains how to connect the Thinxtra Xkit Sigfox board to TagoIO and other platforms, and provides a diagram of the Xkit board pinout for reference."
tags: ["tagoio"]
---

This tutorial explains how to connect the Xkit from Thinxtra with TagoIO. The Sigfox board can be connected to a PC, Mac, Arduino, Raspberry Pi, and other platforms.

![Thinxtra Xkit board](/docs_imagem/tagoio/thinxtra-xkit-for-sigfox-2.png)

Here is a diagram of the Xkit board's pinout. For more details, click [here](https://www.thinxtra.com/xkit/).

## Pinout Diagram

![Thinxtra Xkit pin-out configuration](/docs_imagem/tagoio/thinxtra-xkit-for-sigfox-2.png)

(Note: The image above shows the Thinxtra Xkit pin‑out configuration including a color legend for pins linked to Power, Sensors, and Module.)

## Xkit Board

![Xkit board](/docs_imagem/tagoio/thinxtra-xkit-for-sigfox-2.png)


## Pinout Diagram (Alternate View)

![Xkit pin‑out diagram](/docs_imagem/tagoio/xkit_pinout-Sgw.png)


## Payload Example

Xkit can be programmed with a file that will send data from the sensors with a payload format as shown below. TagoIO is flexible enough to parse this payload in order to extract the variables – it is done through a script coded in the [Payload Parser](/docs/tagoio/devices/payload-parser/).

![Payload example](/docs_imagem/tagoio/paylot_xkit-i8s.png)

> Calculations to extract temperature, pressure, photo, acceleration are done by the parser script.


## Setup Steps

### 1. Xkit Setup

Follow the installation guide from [Thinxtra](https://www.thinxtra.com/xkit/) and prepare your Xkit to send data to the [Sigfox network](/docs/tagoio/integrations/networks/sigfox).

### 2. TagoIO and Sigfox Setup

Go to **[Devices](https://admin.tago.io/devices)**, click on *Add Devices*, and filter network by Sigfox to search for Thinxtra.

![Device selection](/docs_imagem/tagoio/thinxtra_selection_tagoio-PIU.png)

Then, just follow the directions to integrate your Xkit with TagoIO and start building your own application in minutes.

> If you have questions about how to configure your account for Sigfox and TagoIO, read the article [Sigfox](/docs/tagoio/integrations/networks/sigfox).

Now, click on the new dashboard created (left menu), and associate it with the device that you just added.

> Check with your Xkit distributor about how to register the Xkit in the Sigfox Portal.

Now, just turn your Xkit board on, and wait for the data to hit your data bucket. Every time the Xkit sends data, an action will be triggered and the script will parse the data sending it to the bucket, ready to be displayed by the widgets.

You can start editing your dashboard as needed.

![Dashboard](/docs_imagem/tagoio/thinxtra_Dash-7pM.png)

:::info

You can edit the [parse script](/docs/tagoio/devices/payload-parser/) created for your device that extracts variables from the payload.

:::

Also, you can create [notifications](/docs/tagoio/getting-started/notification) and more advanced [scripts](/docs/tagoio/analysis/creating-analysis) as needed.

Learn more about [Downlink for Sigfox](/docs/tagoio/integrations/networks/sigfox/-downlink).

Enjoy your Thinxtra Xkit with Tago!