---
sidebar_position: 2
sidebar_label: Servers & Endpoints
title: Servers & Endpoints
---

# Servers & Endpoints

All TagoTiP servers are region-specific. Each transport protocol has its own dedicated hostname and static IP address.

## Production Endpoints (US-East-1)

| Transport | Hostname | Static IP | Port | Protocol | Security |
|-----------|----------|-----------|------|----------|----------|
| UDP | `udp.tip.us-e1.tago.io` | `166.117.99.158` | 5683 | TagoTiP | None |
| UDP | `udp.tip.us-e1.tago.io` | `166.117.99.158` | 5684 | TagoTiP/S | Encrypted (AEAD) |
| TCP | `tcp.tip.us-e1.tago.io` | `166.117.12.171` | 5693 | TagoTiP + TagoTiP/S | None |
| TCP | `tcp.tip.us-e1.tago.io` | `166.117.12.171` | 5694 | TagoTiP + TagoTiP/S | TLS |
| HTTP | `http.tip.us-e1.tago.io` | `166.117.109.176` | 5703 | TagoTiP + TagoTiP/S | None |
| HTTP | `http.tip.us-e1.tago.io` | `166.117.109.176` | 5704 | TagoTiP + TagoTiP/S | TLS |

## Choosing a transport

### UDP -- fire-and-forget telemetry

Best for battery-powered devices that send periodic sensor readings. No connection setup, no handshake -- a single datagram carries your data. Use port `5683` for plaintext or port `5684` for [TagoTiP/S encryption](./encryption).

[UDP guide](./udp)

### TCP -- reliable delivery and real-time commands

Best for devices that need guaranteed delivery, persistent connections, and server-pushed commands. The connection stays open so TagoIO can push `CMD` frames to your device instantly. Use port `5694` for TLS.

[TCP guide](./tcp)

### HTTP -- simplicity and standard tooling

Best for devices with an HTTP stack, or when you need to go through firewalls and proxies. Standard `POST`/`GET`/`HEAD` methods map to TagoTiP `PUSH`/`PULL`/`PING`. Use port `5704` for HTTPS.

[HTTP guide](./http)
