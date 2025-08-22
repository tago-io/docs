---
title: "Live Inspector"
description: "The Live Inspector is a developer tool in TagoIO used to debug parser scripts and monitor device traffic; this article explains how to open and use the Live Inspector from a device page."
tags: ["tagoio"]
---
The live inspector is a tool for developers to debug [parser scripts](payload-parser/payload-parser) and monitor traffic to and from [devices](/tagoio/devices/devices).

To access the live inspector, go to the Device section (see [Device](/tagoio/devices/devices) documentation), select the device, and click the Live Inspector tab.

![Device page showing the Live Inspector tab highlighted](/docs_imagem/tagoio/live-inspector-2.png)

Start the live inspector by clicking the green arrow on the right of the Live Inspector panel.

![Live Inspector panel with search, page-size controls, and green start arrow](/docs_imagem/tagoio/live-inspector-2.png)

## Live Inspector overview

- With Live Inspector, you can view all active connections for the selected device with TagoIO.
- The inspector is only visible while you are visiting the device's Live Inspector page.
- Typical UI elements in the Live Inspector:
  - A search field to filter incoming messages.
  - Page-size controls (e.g., 25, 50, 100, 500) to adjust how many items are shown per page.
  - A green start/stop arrow to begin or pause live monitoring.
  - Log/list area showing incoming device traffic and connection details.
- All traffic to and from the device is monitored in real time; each package sent is recorded and displayed in the Live Inspector.
- The inspector stops automatically when you leave the page or close the browser; it does not run in the background after the window has been closed.

Refer to the Parser Scripts and Devices documentation for further details on debugging and message parsing.