---
sidebar_position: 8
sidebar_label: Encryption
title: TagoTiP/S - Encrypted Communication
---

# TagoTiP/S - Encrypted Communication

**AEAD authenticated encryption** for your IoT data - without TLS. TagoTiP/S wraps frames in a compact binary envelope with built-in integrity verification and replay protection. As little as **29 bytes** of overhead.

## When to use TagoTiP/S

- **No TLS available** - UDP has no TLS support; TagoTiP/S is your only encryption option
- **Constrained links** - where TLS handshakes are too expensive
- **Defense in depth** - combine TagoTiP/S with TLS on TCP port `5694` or HTTPS port `443` for layered security

## TagoTiP/S supported ports

**US-East-1:**

| Transport | Host | Port | TLS | Notes |
|-----------|------|------|-----|-------|
| **UDP** | `udp.tip.us-e1.tago.io` | 5684 | No | Dedicated port |
| **TCP** | `tcp.tip.us-e1.tago.io` | 5693 | No | Auto-detected |
| **TCP** | `tcp.tip.us-e1.tago.io` | 5694 | Yes | Auto-detected |
| **HTTP** | `http.tip.us-e1.tago.io` | 80 | No | `POST /v1/tips` |
| **HTTP** | `http.tip.us-e1.tago.io` | 443 | Yes | `POST /v1/tips` |

See [Servers & Endpoints](./servers) for all regions.

## How it differs from TagoTiP

| | TagoTiP | TagoTiP/S |
|---|---|---|
| **Format** | Human-readable text | Binary envelope |
| **Auth credential** | Token hash (16 hex chars) | Authorization token (`at...`) |
| **Encryption** | None (rely on TLS) | AEAD at the application layer |
| **Replay protection** | Optional sequence counter | Built-in (counter is nonce component) |

### Credentials

TagoTiP and TagoTiP/S use **different credentials** from the same authorization:

| Protocol | Credential | Why |
|---|---|---|
| **TagoTiP** | Token hash (`4deedd7bab8817ec`) | Identifies your account. Safe on the wire. |
| **TagoTiP/S** | Authorization token (`ate2bd...c0d0`) | Derives the encryption key. Never sent on the wire. |

Both come from a single authorization with token format **TagoTiP(s)**. See the [Authorization guide](/docs/tagoio/integrations/general/authorization).

## How it works

TagoTiP/S strips the method and auth from a TagoTiP frame, encrypts the rest, and wraps it in a fixed-structure binary envelope:

```
[Flags 1B] [Counter 4B] [Auth Hash 8B] [Device Hash 8B] [Ciphertext + Tag]
 cipher      nonce        profile         device           encrypted payload
 method      component    identifier      identifier
 version
```

**Total overhead:** 29 bytes (AES-128-CCM) to 37 bytes (GCM / ChaCha20-Poly1305).

## Cipher suites

| ID | Cipher | Key | Tag | Overhead |
|----|--------|-----|-----|----------|
| 0 | **AES-128-CCM** | 128-bit | 8 B | 29 bytes |
| 1 | AES-128-GCM | 128-bit | 16 B | 37 bytes |
| 2 | AES-256-CCM | 256-bit | 8 B | 29 bytes |
| 3 | AES-256-GCM | 256-bit | 16 B | 37 bytes |
| 4 | ChaCha20-Poly1305 | 256-bit | 16 B | 37 bytes |

AES-128-CCM (ID 0) is required by all implementations.

## Key derivation

The encryption key is derived from your authorization token and device serial:

```
HMAC-SHA256(key = token_hex_without_at_prefix, msg = device_serial)
```

Truncated to the cipher's key size (16 bytes for AES-128, 32 bytes for AES-256 / ChaCha20).

## Size comparison

| Format | Size | vs. HTTP/JSON |
|---|---|---|
| HTTP + JSON | ~487 bytes | - |
| TagoTiP | ~112 bytes | 4.3x smaller |
| **TagoTiP/S** | **~119 bytes** | **4.1x smaller** |

## SDKs

Use the TagoTiP SDK to build and parse TagoTiP/S envelopes:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="node" label="TypeScript / Node.js">

```bash
npm install @tagoio/tagotip
```

</TabItem>
<TabItem value="python" label="Python">

```bash
pip install tagotip
```

</TabItem>
<TabItem value="go" label="Go">

```bash
go get github.com/tago-io/tagotip-sdk/tagotip-go
```

</TabItem>
<TabItem value="rust" label="Rust">

```bash
cargo add tagotip-codec
```

</TabItem>
<TabItem value="arduino" label="C / Arduino">

Search for **TagoTiP** in the Arduino Library Manager.

</TabItem>
</Tabs>

## Specification

For envelope parsing, nonce construction, ABNF grammar, and test vectors, see the [TagoTiP/S Specification](./specification).
