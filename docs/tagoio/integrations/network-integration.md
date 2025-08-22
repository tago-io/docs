---
title: "Network Integration"
description: "This article explains how devices can connect to TagoIO using HTTPS/MQTT or other network integrations, and introduces options for creating scripts, using prepared network integrations, or building a custom integration. It also begins details on selecting the correct network endpoint by region."
tags: ["tagoio", "integration"]
---
Your devices can always connect directly to the TagoIO API using HTTPS or MQTT. You can also connect devices to databases and web services, or translate data from other protocols, by using one of the following methods:

1. Create a script that initiates access to external services using [Analysis](../analysis/analysis-overview). For example: get a weather forecast or read/write data in a Google Sheet.
2. Use our [Network Integration](../integrations/connector-overview) prepared to connect and translate data from devices connected to providers such as LoRaWAN, Sigfox, or satellite, or that use different protocols such as TCP/IP or UDP.
3. Create your own [Network Integration](../integrations/connector-overview) that can push data to TagoIO into the correct device based on its serial number, using your own protocol.

## Device data flow

![Device data flow diagram](/docs_imagem/tagoio/network-integration-2.png)

Caption: Device data flow showing Devices → Network → Connector → Buckets (payload parsing and storage).

## Network Endpoints by Region

TagoIO provides network integrations fully hosted in different regions. Based on your account's region, ensure you use the correct endpoint:

| Region | Network Endpoint |
|--------|------------------|
| Europe* | middleware.eu-w1.tago.io |
| USA* | middleware.us-e1.tago.io |

**For example, use everynet.middleware.us-e1.tago.io for Everynet network in the USA.**

**Network usage is free for all users.** When receiving data from a network, costs are only incurred for [Data Input](https://help.tago.io/portal/en/kb/articles/192-data-input-service) operations. Network operations themselves do not generate any charges.

## Available Network Integrations

For the second method above, here is a list of some Network Integrations ready to be used:

- [Sigfox](https://help.tago.io/portal/en/kb/articles/33-sigfox)
- [MQTT](https://help.tago.io/portal/en/kb/articles/32-mqtt)
- [Actility LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-actility-ns)
- [Everynet LoRaWAN](https://help.tago.io/portal/en/kb/articles/129-everynet-lorawan)
- Kore Brazil LoRaWaN (select[Everynet](https://help.tago.io/portal/en/kb/articles/129-everynet-lorawan))
- [Kerlink LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-kerlink-lorawan)
- [Loriot LoRaWAN](https://help.tago.io/portal/en/kb/articles/137-loriot-lorawan)
- [machineQ LoRAWAN](https://help.tago.io/portal/en/kb/articles/159)
- [Orbiwise LoRaWAN](https://help.tago.io/portal/en/kb/articles/160-orbiwise-lorawan)
- [Senet LoRaWAN](https://help.tago.io/portal/en/kb/articles/109-senet-network)
- [Swisscom LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-swisscom-lorawan-ns)
- [Tektelic LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tektelic-network-server-with-tagoio)
- [TTI/TTN V3 LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-ttn-v3)
- [TTN LoRaWAN](https://help.tago.io/portal/en/kb/articles/102-the-things-network-lorawan)
- [Chirpstack LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-chirpstack-lorawan)
- [Helium LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-helium)
- [CityKinect LoRaWAN](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-citykinect-lorawan-21-1-2022)
- [Myriota](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-myriota-satellite-connectivity)
- [AWS IoT Core](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-aws-iot-core)
- [Kinéis](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-kineis)
- [Generic HTTPS Endpoint](https://help.tago.io/portal/en/community/topic/how-to-integrate-tagoio-with-a-generic-https-endpoint)
- [KPN Things](https://help.tago.io/portal/en/community/topic/how-to-integrate-with-kpn-things)
- [WiTTRA](https://help.tago.io/portal/en/community/topic/how-to-integrate-with-wittra)