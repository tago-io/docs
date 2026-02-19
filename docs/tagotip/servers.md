---
sidebar_position: 2
sidebar_label: Servers & Endpoints
title: Servers & Endpoints
---

# Servers & Endpoints

TagoTiP servers are region-specific. Each transport protocol has its own dedicated hostname and static IP address. Connect to the region closest to your devices for the lowest latency.

## US-East-1

| Transport | Hostname | Static IP | Port | Protocol | Security |
|-----------|----------|-----------|------|----------|----------|
| UDP | `udp.tip.us-e1.tago.io` | `166.117.99.158` | 5683 | TagoTiP | None |
| UDP | `udp.tip.us-e1.tago.io` | `166.117.99.158` | 5684 | TagoTiP/S | Encrypted (AEAD) |
| TCP | `tcp.tip.us-e1.tago.io` | `166.117.12.171` | 5693 | TagoTiP + TagoTiP/S | None |
| TCP | `tcp.tip.us-e1.tago.io` | `166.117.12.171` | 5694 | TagoTiP + TagoTiP/S | TLS |
| HTTP | `http.tip.us-e1.tago.io` | `166.117.109.176` | 80 | TagoTiP + TagoTiP/S | None (HTTP) |
| HTTP | `http.tip.us-e1.tago.io` | `166.117.109.176` | 443 | TagoTiP + TagoTiP/S | TLS (HTTPS) |

## EU-West-1

| Transport | Hostname | Static IP | Port | Protocol | Security |
|-----------|----------|-----------|------|----------|----------|
| UDP | `udp.tip.eu-w1.tago.io` | TBD | 5683 | TagoTiP | None |
| UDP | `udp.tip.eu-w1.tago.io` | TBD | 5684 | TagoTiP/S | Encrypted (AEAD) |
| TCP | `tcp.tip.eu-w1.tago.io` | TBD | 5693 | TagoTiP + TagoTiP/S | None |
| TCP | `tcp.tip.eu-w1.tago.io` | TBD | 5694 | TagoTiP + TagoTiP/S | TLS |
| HTTP | `http.tip.eu-w1.tago.io` | TBD | 80 | TagoTiP + TagoTiP/S | None (HTTP) |
| HTTP | `http.tip.eu-w1.tago.io` | TBD | 443 | TagoTiP + TagoTiP/S | TLS (HTTPS) |

## Choosing a transport

### UDP -- fire-and-forget telemetry

Best for battery-powered devices that send periodic sensor readings. No connection setup, no handshake -- a single datagram carries your data. Use port `5683` for plaintext or port `5684` for [TagoTiP/S encryption](./encryption).

[UDP guide](./udp)

### TCP -- reliable delivery and real-time commands

Best for devices that need guaranteed delivery, persistent connections, and server-pushed commands. The connection stays open so TagoIO can push `CMD` frames to your device instantly. Use port `5694` for TLS.

[TCP guide](./tcp)

### HTTP -- simplicity and standard tooling

Best for devices with an HTTP stack, or when you need to go through firewalls and proxies. Standard `POST`/`GET`/`HEAD` methods map to TagoTiP `PUSH`/`PULL`/`PING`. Use port `443` for HTTPS.

[HTTP guide](./http)

## Rate limits

Limits are enforced at two levels: per [profile](/docs/tagoio/profiles/) and per device. Defaults vary by plan. Exceeding a limit returns `ACK|ERR|rate_limited` (or HTTP `429`).

### Per profile

| Resource | Transports | Scale | Starter | Free |
|---|---|---|---|---|
| Uplink requests/min (PUSH) | UDP, TCP, HTTP | 1,000 | 500 | 60 |
| Downlink requests/min (PULL) | UDP, TCP, HTTP | 1,000 | 500 | 60 |
| Connections per IP | TCP, HTTP | 100 | 20 | 5 |

### Per device

| Resource | Transports | Default |
|---|---|---|
| Max payload size | UDP, TCP, HTTP | 100 KB |
| Connection TTL | TCP | 60 s |
| Keep-alive idle timeout | TCP | 20 s |

PING is exempt from rate limiting on TCP and UDP. On HTTP, `HEAD` counts toward the uplink RPM.

See each transport page for transport-specific limits.
