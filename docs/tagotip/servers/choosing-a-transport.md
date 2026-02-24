---
sidebar_position: 3
sidebar_label: Choosing a Transport
title: Choosing a Transport
---

# Choosing a Transport

## UDP - fire-and-forget telemetry

Best for battery-powered devices that send periodic sensor readings. No connection setup, no handshake - a single datagram carries your data. Use port `5683` for plaintext or port `5684` for [TagoTiP/S encryption](../specification/encryption).

[UDP guide](../transports/udp)

## TCP - reliable delivery and real-time commands

Best for devices that need guaranteed delivery, persistent connections, and server-pushed commands. The connection stays open so TagoIO can push `CMD` frames to your device instantly. Use port `5694` for TLS.

[TCP guide](../transports/tcp)

## HTTP - simplicity and standard tooling

Best for devices with an HTTP stack, or when you need to go through firewalls and proxies. Standard `POST`/`GET`/`HEAD` methods map to TagoTiP `PUSH`/`PULL`/`PING`. Use port `443` for HTTPS.

[HTTP guide](../transports/http)

## MQTT - pub/sub and intermittent connectivity

Best for devices that need publish/subscribe patterns, QoS delivery guarantees, and native topic-based routing. The server pushes commands to the device's `ack` topic in real time. Use port `8883` for TLS.

[MQTT guide](../transports/mqtt)
