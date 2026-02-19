---
sidebar_position: 2
sidebar_label: Servers & Endpoints
title: Servers & Endpoints
---

# Servers & Endpoints

TagoTiP servers are region-specific. Each transport protocol has its own dedicated hostname and static IP address. Connect to the region closest to your devices for the lowest latency.

## US-East-1

| Transport | Hostname | Port | Protocol | Security |
|-----------|----------|------|----------|----------|
| UDP | `udp.tip.us-e1.tago.io`<br/><span class="ip-addr">166.117.107.129</span> | 5683 | TagoTiP | None |
| UDP | `udp.tip.us-e1.tago.io`<br/><span class="ip-addr">166.117.107.129</span> | 5684 | TagoTiP(s) | Encrypted (AEAD) |
| TCP | `tcp.tip.us-e1.tago.io`<br/><span class="ip-addr">75.2.126.170</span> | 5693 | TagoTiP(s) | None |
| TCP | `tcp.tip.us-e1.tago.io`<br/><span class="ip-addr">75.2.126.170</span> | 5694 | TagoTiP(s) | TLS |
| HTTP | `http.tip.us-e1.tago.io`<br/><span class="ip-addr">52.223.14.189</span> | 80 | TagoTiP(s) | None (HTTP) |
| HTTP | `http.tip.us-e1.tago.io`<br/><span class="ip-addr">52.223.14.189</span> | 443 | TagoTiP(s) | TLS (HTTPS) |
| MQTT | `mqtt.tip.us-e1.tago.io`<br/><span class="ip-addr">15.197.247.146</span> | 1883 | TagoTiP | None (MQTT) |
| MQTT | `mqtts.tip.us-e1.tago.io`<br/><span class="ip-addr">15.197.247.146</span> | 8883 | TagoTiP | TLS (MQTTS) |

## EU-West-1

| Transport | Hostname | Port | Protocol | Security |
|-----------|----------|------|----------|----------|
| UDP | `udp.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 5683 | TagoTiP | None |
| UDP | `udp.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 5684 | TagoTiP(s) | Encrypted (AEAD) |
| TCP | `tcp.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 5693 | TagoTiP(s) | None |
| TCP | `tcp.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 5694 | TagoTiP(s) | TLS |
| HTTP | `http.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 80 | TagoTiP(s) | None (HTTP) |
| HTTP | `http.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 443 | TagoTiP(s) | TLS (HTTPS) |
| MQTT | `mqtt.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 1883 | TagoTiP | None (MQTT) |
| MQTT | `mqtts.tip.eu-w1.tago.io`<br/><span class="ip-addr">TBD</span> | 8883 | TagoTiP | TLS (MQTTS) |

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

### MQTT -- pub/sub and intermittent connectivity

Best for devices that need publish/subscribe patterns, QoS delivery guarantees, and native topic-based routing. The server pushes commands to the device's `ack` topic in real time. Use port `8883` for TLS.

[MQTT guide](./mqtt)

## Rate limits

Limits are enforced at two levels: per [profile](/docs/tagoio/profiles/) and per device. Defaults vary by plan. Exceeding a limit returns `ACK|ERR|rate_limited` (or HTTP `429`).

RPM = requests per minute.

### Per profile

| Resource | Transports | Scale | Starter | Free |
|---|---|---|---|---|
| Uplink RPM (PUSH) | UDP, TCP, HTTP, MQTT | 1,000 | 500 | 60 |
| Downlink RPM (PULL) | UDP, TCP, HTTP, MQTT | 1,000 | 500 | 60 |
| Connections per IP | TCP, HTTP, MQTT | 100 | 20 | 5 |

### Per device

| Resource | Transports | Default |
|---|---|---|
| Max payload size | UDP, TCP, HTTP, MQTT | 100 KB |
| Connection TTL | TCP, MQTT | 60 s |
| Keep-alive idle timeout | TCP, MQTT | 20 s |

PING is exempt from rate limiting on TCP and UDP. On HTTP, `HEAD` counts toward the uplink RPM. On MQTT, keepalive is handled natively by PINGREQ/PINGRESP.

See each transport page for transport-specific limits.
