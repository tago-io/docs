---
title: "ABS Telemetry"
description: "This article explains how to integrate ABS Telemetry devices with TagoIO, covering the required ABS configurator download and the initial ABS device configuration steps."
tags: ["tagoio"]
---

Devices from ABS Telemetry can be easily integrated with TagoIO. The integration allows uplink communication between the device and TagoIO while parsing messages to extract commands and variables in real time.

![ABS Telemetry device integration diagram (device → cellular network → TagoIO)](/docs_imagem/tagoio/abs-telemetry-2.png)

You will need to set up your device using the ABS portal and your TagoIO account.

## ABS Setup

You need to download the ABS software configurator (available here: [ABS software configurator download](https://abs-telemetry.com/downloads/)).

Open the file Configurator_cel.exe and follow these steps.

The first step is to configure the basic working parameters. At the main configurator window, be sure to select:

| host type | 99 |