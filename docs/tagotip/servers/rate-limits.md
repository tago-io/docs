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
| Connections per IP | TCP, HTTP, MQTT | 20 | 10 | 3 |

## Per device

| Resource | Transports | Scale | Starter | Free |
|---|---|---|---|---|
| Max payload size | UDP, TCP, HTTP, MQTT | 100 KB | 100 KB | 100 KB |
| Connection TTL | TCP, MQTT | 15 s | 10 s | 10 s |
| Keep-alive idle timeout | TCP, MQTT | 5 s | 5 s | 5 s |

:::info Connection TTL vs Keep-alive idle timeout

These two TCP limits serve different purposes:

- **Connection TTL** is a hard cap on total connection duration. No matter how active the device is, the server closes the connection after this period and sends `ACK|ERR|ttl_expired`. The device should reconnect.
- **Keep-alive idle timeout** is the maximum silence between frames. If the device stops sending data for this long, the server closes the connection with `ACK|ERR|keep_alive_timeout`. Sending any frame (including `PING`) resets the timer.

Both timers start when the connection is accepted. TTL counts total elapsed time; keep-alive resets on every received frame.

:::

## Error and close responses

| Condition | Raw ACK | HTTP Status |
|---|---|---|
| RPM exceeded | `ACK\|ERR\|rate_limited` | 429 |
| Payload too large | `ACK\|ERR\|payload_too_large` | 413 |
| Per-IP connections exceeded | `ACK\|ERR\|rate_limited` (then close) | 429 (then close) |
| Connection TTL exceeded | `ACK\|ERR\|ttl_expired` (then close) | N/A |
| Keep-alive idle timeout | `ACK\|ERR\|keep_alive_timeout` (then close) | N/A |

PING is exempt from rate limiting on TCP and UDP. On HTTP, `HEAD` counts toward the uplink RPM. On MQTT, keepalive is handled natively by PINGREQ/PINGRESP.

See each transport page for transport-specific limits.
