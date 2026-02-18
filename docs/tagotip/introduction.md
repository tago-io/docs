---
sidebar_position: 1
sidebar_label: Introduction
title: TagoTiP -- Transport IoT Protocol
slug: /tagotip/
---

# TagoTiP -- Transport IoT Protocol

Send IoT data to TagoIO in **130 bytes** instead of 487. No JSON, no HTTP headers -- just a single human-readable line your microcontroller can build with `sprintf`.

```
PUSH|4deedd7bab8817ec|sensor-01|[temperature:=32.5#C;humidity:=65#%]
```

## Why TagoTiP?

| | HTTP/JSON | TagoTiP | TagoTiP/S (encrypted) |
|---|---|---|---|
| **Payload size** | ~487 bytes | ~130 bytes | ~119 bytes |
| **vs. HTTP/JSON** | -- | 3.7x smaller | 4.1x smaller |
| **TLS required?** | Yes | Recommended | No -- AEAD encryption built-in |
| **Parse complexity** | JSON parser | Linear scan, no backtracking | Envelope + linear scan |

### Built for constrained devices

- **Human-readable** -- debug frames in a terminal, compose them by hand
- **Type-safe** -- explicit operators for numbers (`:=`), strings (`=`), booleans (`?=`), and locations (`@=`)
- **C-friendly** -- predictable buffer sizes, no dynamic allocation, linear parsing
- **Compact** -- variable, value, unit, timestamp, group, location, and metadata in a single frame
- **Transport-agnostic** -- works over UDP, TCP, HTTP(S), MQTT, or any byte-capable channel

## Pick your transport

| Transport | Best for | Guide |
|-----------|----------|-------|
| **[UDP](./udp)** | High-frequency telemetry, fire-and-forget | Lowest overhead, no connection setup |
| **[TCP](./tcp)** | Reliable delivery, bidirectional commands | Persistent connections, server-pushed CMDs |
| **[HTTP](./http)** | Simple integrations, request/response | Works through firewalls and proxies |
| **[MQTT](./mqtt)** | Pub/sub patterns, intermittent connectivity | Native topic-based routing (coming soon) |

## Encryption without TLS

Need security on raw UDP or constrained links where TLS is too expensive? **TagoTiP/S** wraps frames in an AEAD authenticated encryption envelope -- as little as **29 bytes** of overhead, with built-in replay protection and integrity verification.

| Cipher Suite | Key | Tag | Envelope Overhead |
|---|---|---|---|
| **AES-128-CCM** | 128-bit | 8 B | 29 bytes |
| AES-128-GCM | 128-bit | 16 B | 37 bytes |
| AES-256-CCM | 256-bit | 8 B | 29 bytes |
| AES-256-GCM | 256-bit | 16 B | 37 bytes |
| ChaCha20-Poly1305 | 256-bit | 16 B | 37 bytes |

Learn more in the [Encryption](./encryption) guide.

## How it compares

### TagoTiP vs. other IoT data formats

| | TagoTiP | HTTP + JSON | MQTT + JSON | Protobuf |
|---|---|---|---|---|
| **Typical payload** | ~130 bytes | ~487 bytes | ~210 bytes | ~80 bytes |
| **Human-readable** | Yes | Partially | Partially | No |
| **Schema required** | No | No | No | Yes |
| **Debug in a terminal** | Yes | Verbose | Binary framing | No |
| **Build with `sprintf`** | Yes | Complex | Needs MQTT library | Needs code generator |
| **IoT type system** | Built-in (number, string, bool, location) | Application-defined | Application-defined | Schema-defined |
| **Metadata, unit, group, timestamp** | Native syntax | Application-defined | Application-defined | Schema-defined |

### TagoTiP/S vs. other IoT security

| | TagoTiP/S | TLS 1.3 | DTLS 1.2 |
|---|---|---|---|
| **Handshake** | None -- 0 bytes | ~2-4 KB | ~2-5 KB |
| **Round trips before first data** | 0 | 1-2 | 2-3 |
| **Per-message overhead** | 29-37 bytes | ~29 bytes + TCP | ~29 bytes |
| **Session state** | Stateless | Per-connection | Per-connection |
| **Certificate management** | None | Required | Required or PSK |
| **Works over raw UDP** | Yes | No | UDP only |
| **Works without TCP** | Yes | No | UDP only |

## Quick example

Push a temperature reading with unit, timestamp, and metadata -- all in one frame:

```
PUSH|4deedd7bab8817ec|sensor-01|^batch_42@1694567890000{firmware=2.1}[temperature:=32.5#C;position@=39.74,-104.99]
```

Pull the last value back:

```
PULL|4deedd7bab8817ec|sensor-01|[temperature]
<- ACK|OK|[temperature:=32.5#C@1694567890000]
```

## SDKs

All language SDKs share a single Rust core (`tagotip-codec`, `no_std`), so parsing and frame building behave identically everywhere.

| Package | Language | Install |
|---------|----------|---------|
| [`@tagoio/tagotip`](https://github.com/tago-io/tagotip-sdk/tree/main/tagotip-node) | TypeScript / Node.js | `npm install @tagoio/tagotip` |
| [`tagotip`](https://github.com/tago-io/tagotip-sdk/tree/main/tagotip-go) | Go | `go get github.com/tago-io/tagotip-sdk/tagotip-go` |
| [`tagotip`](https://github.com/tago-io/tagotip-sdk/tree/main/tagotip-python) | Python | `pip install tagotip` |
| [`TagoTiP`](https://github.com/tago-io/tagotip-sdk/tree/main/tagotip-arduino) | C / Arduino | Arduino Library Manager |
| [`tagotip-codec`](https://github.com/tago-io/tagotip-sdk/tree/main/tagotip-codec) | Rust | `cargo add tagotip-codec` |

Browse the full SDK source at [github.com/tago-io/tagotip-sdk](https://github.com/tago-io/tagotip-sdk).

## Open source

TagoTiP is open source under the [Apache License 2.0](https://github.com/tago-io/tagotip). Implement clients, servers, libraries, or gateways -- for any purpose, including commercial use.
