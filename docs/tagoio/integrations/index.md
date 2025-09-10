---
title: "Network Integration"
description: "This article explains how devices can connect to TagoIO using HTTPS/MQTT or other network integrations, and introduces options for creating scripts, using prepared network integrations, or building a custom integration. It also begins details on selecting the correct network endpoint by region."
tags: ["tagoio", "integration"]
---

Your devices can always connect directly to the TagoIO API using HTTPS or MQTT.
You can also connect devices to databases and web services, or translate data
from other protocols, by using one of the following methods:

1. Create a script that initiates access to external services using
   [Analysis](/docs/tagoio/analysis/). For example: get a weather forecast or
   read/write data in a Google Sheet.
2. Use our [Network Integration](/docs/tagodeploy/project/configuration/integrations.md) prepared to
   connect and translate data from devices connected to providers such as
   LoRaWAN, Sigfox, or satellite, or that use different protocols such as TCP/IP
   or UDP.
3. Create your own [Network Integration](/docs/tagodeploy/project/configuration/integrations.md) that can
   push data to TagoIO into the correct device based on its serial number, using
   your own protocol.

## Device data flow

![Device data flow diagram](/docs_imagem/tagoio/connector-overview-2.png)

## Network Endpoints by Region

TagoIO provides network integrations fully hosted in different regions. Based on
your account's region, ensure you use the correct endpoint:

| Region  | Network Endpoint         |
| ------- | ------------------------ |
| Europe* | middleware.eu-w1.tago.io |
| USA*    | middleware.us-e1.tago.io |

**For example, use everynet.middleware.us-e1.tago.io for Everynet network in the
USA.**

**Network usage is free for all users.** When receiving data from a network,
costs are only incurred for
[Data Input](/docs/tagoio/profiles/services/data-input-service.md) operations.
Network operations themselves do not generate any charges.

## Available Network Integrations

For the second method above, here is a list of some Network Integrations ready
to be used:

- [Sigfox](/docs/tagoio/integrations/networks/sigfox/sigfox.md)
- [MQTT](/docs/tagoio/integrations/networks/mqtt/mqtt.md)
- [Actility LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-actility-ns/611)
- [Everynet LoRaWAN](/docs/tagoio/integrations/networks/everynet-lorawan.md)
- Kore Brazil LoRaWaN (select
  [Everynet](/docs/tagoio/integrations/networks/everynet-lorawan.md))
- [Kerlink LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-kerlink-lorawan/668)
- [Loriot LoRaWAN](/docs/tagoio/integrations/networks/loriot-lorawan.md)
- [machineQ LoRAWAN](/docs/tagoio/integrations/networks/machineq-lorawan.md)
- [Orbiwise LoRaWAN](/docs/tagoio/integrations/networks/orbiwise-lorawan.md)
- [Senet LoRaWAN](/docs/tagoio/integrations/networks/senet-network.md)
- [Swisscom LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-swisscom-lorawan-ns/1016)
- [Tektelic LoRaWAN](https://community.tago.io/t/how-to-integrate-tektelic-network-server-with-tagoio/847)
- [TTI/TTN V3 LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-ttn-v3/1026)
- [TTN LoRaWAN](/docs/tagoio/integrations/networks/the-things-network-lorawan.md)
- [Chirpstack LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-chirpstack-lorawan/1017)
- [Helium LoRaWAN](https://community.tago.io/t/how-to-integrate-tagoio-with-helium/992)

- [Myriota](https://community.tago.io/t/how-to-integrate-tagoio-with-myriota-satellite-connectivity/451)
- [AWS IoT Core](https://community.tago.io/t/how-to-integrate-tagoio-with-aws-iot-core/669)
- [Kinéis](https://community.tago.io/t/how-to-integrate-tagoio-with-kineis/1491)
- [Generic HTTPS Endpoint](https://community.tago.io/t/how-to-integrate-tagoio-with-a-generic-https-endpoint/486)
- [KPN Things](https://community.tago.io/t/how-to-integrate-with-kpn-things-network/1571)
- [WiTTRA](https://community.tago.io/t/how-to-integrate-with-wittra/1593)
