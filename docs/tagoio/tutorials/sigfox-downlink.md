---
title: "Sigfox - Downlink"
description: "This article explains how to configure Sigfox downlinks in TagoIO, including preparatory steps and a two-part setup process (TagoIO and Sigfox Portal). It highlights important prerequisites and links to related documentation."
tags: ["tagoio"]
---

TagoIO is ready to receive data from and send data to Sigfox devices. The downlink is used to send data back to the device every time it checks in — the data to be sent should be prepared prior to that check-in. This article explains how to set up a downlink.

> ⚠️ It's essential to carefully follow all the steps outlined in the Sigfox network documentation in order to send downlinks. The completion of Step D is crucial so that TagoIO can accurately authenticate your downlink.  
> See [Sigfox network documentation](link-to-sigfox-network-documentation)

![Downlink diagram](/docs_imagem/tagoio/sigfox-downlink-2.png)

Downlink Diagram

Information about uplink can be found in this [tutorial](link-to-uplink-tutorial).

## Downlink Setup

The downlink sends responses from TagoIO to Sigfox, ensuring the data transition works correctly. The downlink configuration is separated into two parts:

1. TagoIO setup  
2. Sigfox setup using the Sigfox Portal

Further setup steps for each part are covered below.