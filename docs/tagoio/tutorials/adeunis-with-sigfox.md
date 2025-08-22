---
title: "Adeunis with Sigfox"
description: "This article explains how TagoIO integrates with Adeunis devices via the Sigfox backend, how incoming data is parsed and made available for Analysis, and how to add an Adeunis device in TagoIO."
tags: ["tagoio"]
---

## Overview
TagoIO supports most Adeunis devices by providing an integration with the Sigfox backend. Incoming messages from Adeunis devices are parsed in real time so measured variables are extracted and made available to TagoIO for display in widgets and for processing.

![Adeunis + Sigfox + TagoIO diagram](/docs_imagem/tagoio/adeunis-with-sigfox-2.png)

All data sent by your device will be readily available to be displayed in widgets and processed in your [Analysis](../analysis/analysis-overview).

> Note: You can check if a parser script was added to your device under the tab "Payload Parser".

## Adding a device
To add an Adeunis device in TagoIO:
1. Go to [Devices](../devices/devices).
2. Click on "Add Devices".
3. Filter the list by network and select "Sigfox".
4. Pick your specific Adeunis device from the list.

![Select the device type screen in TagoIO](/docs_imagem/tagoio/adeunis-with-sigfox-2.png)