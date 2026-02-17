---
sidebar_position: 2
title: Quick Start
---

# TagoTiP/S Quick Start

Send your first encrypted message using the TagoTiP SDK.

## Prerequisites

Same setup as plain TagoTiP:

1. **Device** with a serial number, using any TagoTiP network (UDP, TCP, or HTTP).
2. **Authorization** with token format **TagoTiP(s)**.

From your authorization you will use the **authorization token** (`ate2bd...c0d0`) -- needed for encryption key derivation.

See setup steps in [UDP Quick Start](/docs/tagotip/udp/quick-start), [TCP Quick Start](/docs/tagotip/tcp/quick-start), or [HTTP Quick Start](/docs/tagotip/http/quick-start).

## Install the SDK

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

## Send Encrypted Data

### Over UDP (port 5684)

<Tabs>
<TabItem value="node" label="TypeScript / Node.js">

```typescript
import { TagoTiPS, CipherSuite } from "@tagoio/tagotip";
import dgram from "node:dgram";

const tips = new TagoTiPS({
  token: "ate2bd319014b24e0a8aca9f00aea4c0d0",
  serial: "sensor-01",
  cipher: CipherSuite.AES_128_CCM,
});

const envelope = tips.push("[temperature:=25.5#C]");

const socket = dgram.createSocket("udp4");
socket.send(envelope, 5684, "tip.tago.io", () => socket.close());
```

</TabItem>
<TabItem value="python" label="Python">

```python
import socket
from tagotip import TagoTiPS, CipherSuite

tips = TagoTiPS(
    token="ate2bd319014b24e0a8aca9f00aea4c0d0",
    serial="sensor-01",
    cipher=CipherSuite.AES_128_CCM,
)

envelope = tips.push("[temperature:=25.5#C]")

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.sendto(envelope, ("tip.tago.io", 5684))
sock.close()
```

</TabItem>
</Tabs>

### Over TCP (port 5693 or 5694)

On TCP, TagoTiP/S envelopes are **length-prefixed** (2-byte big-endian length + message):

<Tabs>
<TabItem value="node" label="TypeScript / Node.js">

```typescript
import { TagoTiPS, CipherSuite } from "@tagoio/tagotip";
import net from "node:net";

const tips = new TagoTiPS({
  token: "ate2bd319014b24e0a8aca9f00aea4c0d0",
  serial: "sensor-01",
  cipher: CipherSuite.AES_128_CCM,
});

const envelope = tips.push("[temperature:=25.5#C]");

// Length-prefix for TCP
const lenBuf = Buffer.alloc(2);
lenBuf.writeUInt16BE(envelope.length);
const frame = Buffer.concat([lenBuf, envelope]);

const socket = net.connect(5693, "tip.tago.io", () => {
  socket.write(frame);
});
```

</TabItem>
</Tabs>

For TLS, use port `5694`:

```typescript
import tls from "node:tls";
const socket = tls.connect(5694, "tip.tago.io", () => {
  socket.write(frame);
});
```

### Over HTTP (`POST /v1/tips`)

<Tabs>
<TabItem value="curl" label="curl">

```bash
# Build the envelope with the SDK, then POST it:
curl -X POST https://tip.tago.io:5704/v1/tips \
  -H "Content-Type: application/octet-stream" \
  --data-binary @envelope.bin
```

</TabItem>
<TabItem value="node" label="TypeScript / Node.js">

```typescript
import { TagoTiPS, CipherSuite } from "@tagoio/tagotip";

const tips = new TagoTiPS({
  token: "ate2bd319014b24e0a8aca9f00aea4c0d0",
  serial: "sensor-01",
  cipher: CipherSuite.AES_128_CCM,
});

const envelope = tips.push("[temperature:=25.5#C]");

const response = await fetch("https://tip.tago.io:5704/v1/tips", {
  method: "POST",
  headers: { "Content-Type": "application/octet-stream" },
  body: envelope,
});
```

</TabItem>
</Tabs>

No `Authorization` header -- authentication is inside the encrypted envelope.

## TCP Mode Detection

The server detects the protocol **once per connection** by the first byte:

- `>= 0x41` (ASCII letter) -- **TagoTiP** (newline-delimited text)
- `< 0x41` -- **TagoTiP/S** (length-prefixed binary)

You cannot mix formats on a single TCP connection.

## Next

- [**TagoTiP/S Overview**](./overview) -- Cipher suites, key derivation, size comparison
- [**Specification**](/docs/tagotip/tagotips-specification) -- Envelope format, nonce construction, test vectors
- [**SDKs**](https://github.com/tago-io/tagotip-sdk) -- All language SDKs share a single Rust core
