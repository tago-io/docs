---
sidebar_position: 4
sidebar_label: Rate Limits
title: Rate Limits
---

# Rate Limits

Limits are enforced at two levels: per [profile](/docs/tagoio/profiles/) and per device. Defaults vary by plan. Exceeding a limit returns `ACK|ERR|rate_limited` (or HTTP `429`).

RPM = requests per minute.

## Per profile

| Resource | Transports | Scale | Starter | Free |
|---|---|---|---|---|
| Uplink RPM (PUSH) | UDP, TCP, HTTP, MQTT | 1,000 | 500 | 60 |
| Downlink RPM (PULL) | UDP, TCP, HTTP, MQTT | 1,000 | 500 | 60 |
| Connections per IP | TCP, HTTP, MQTT | 100 | 20 | 5 |

## Per device

| Resource | Transports | Default |
|---|---|---|
| Max payload size | UDP, TCP, HTTP, MQTT | 100 KB |
| Connection TTL | TCP, MQTT | 60 s |
| Keep-alive idle timeout | TCP, MQTT | 20 s |

PING is exempt from rate limiting on TCP and UDP. On HTTP, `HEAD` counts toward the uplink RPM. On MQTT, keepalive is handled natively by PINGREQ/PINGRESP.

See each transport page for transport-specific limits.
