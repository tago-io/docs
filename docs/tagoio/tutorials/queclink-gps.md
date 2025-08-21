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