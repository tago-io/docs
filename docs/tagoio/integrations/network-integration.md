---
title: "Network Integration"
description: "This article explains how devices can connect to TagoIO using HTTPS/MQTT or other network integrations, and introduces options for creating scripts, using prepared network integrations, or building a custom integration. It also begins details on selecting the correct network endpoint by region."
tags: ["tagoio", "integration"]
---

Your devices can always connect directly to the TagoIO API using HTTPS or MQTT. You can also connect devices to databases and web services, or translate data from other protocols, by using one of the following methods:

1. Create a script that initiates access to external services using [Analysis](link-to-analysis). For example: get a weather forecast or read/write data in a Google Sheet.
2. Use our [Network Integration](link-to-network-integration) prepared to connect and translate data from devices connected to providers such as LoRaWAN, Sigfox, or satellite, or that use different protocols such as TCP/IP or UDP.
3. Create your own [Network Integration](link-to-creating-network-integration) that can push data to TagoIO into the correct device based on its serial number, using your own protocol.

## Device data flow

![Device data flow diagram](/docs_imagem/tagoio/network-integration-2.png)

Caption: Device data flow showing Devices → Network → Connector → Buckets (payload parsing and storage).

## Network Endpoints by Region

TagoIO provides network integrations fully hosted in different regions. Based on your account's region, ensure you use the correct endpoint: