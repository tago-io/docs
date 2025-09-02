---
title: "Adeunis with Sigfox"
description: "This article explains how TagoIO integrates with Adeunis devices via the Sigfox backend, how incoming data is parsed and made available for Analysis, and how to add an Adeunis device in TagoIO."
tags: ["tagoio"]
---
## Overview
TagoIO supports most Adeunis devices by providing an integration with the Sigfox backend. Incoming messages from Adeunis devices are parsed in real time so measured variables are extracted and made available to TagoIO for display in widgets and for processing.

![Adeunis + Sigfox + TagoIO diagram](/docs_imagem/tagoio/adeunis-with-sigfox-2.png)

All data sent by your device will be readily available to be displayed in widgets and processed in your [Analysis](/docs/tagoio/analysis/).

> Note: You can check if a parser script was added to your device under the tab "Payload Parser".

## Adding a device
To add an Adeunis device in TagoIO:
1. Go to [Devices](https://tago.io/devices).
2. Click on "Add Devices".
3. Filter the list by network and select "Sigfox".
4. Pick your specific Adeunis device from the list.

![Select the device type screen in TagoIO](/docs_imagem/tagoio/adeunis-with-sigfox-2.png)

### Integrate your Adeunis with TagoIO
1. Turn on your Adeunis device and wait for the data to reach your bucket.  
2. Each time the device sends data, the parser will be executed automatically, extracting the measured variables and sending them to the bucket.  
3. The extracted data is then available in widgets, dashboards, and can be processed further.

You can start building **dashboards** immediately: [Dashboard Overview](/docs/tagoio/dashboards/).

Additionally, you can create **notifications** or write advanced **scripts** to process the data:
- Notifications: [Notifications](/docs/tagoio/actions/)  
- Scripts: [Creating Analysis Scripts](/docs/tagoio/analysis/creating-analysis)

If you have questions about configuring your account for Sigfox and TagoIO, read the article about [SigFox](/docs/tagoio/integrations/networks/sigfox/sigfox).