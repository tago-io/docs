---
sidebar_position: 4
sidebar_label: UDP
title: TagoTiP over UDP
---

# TagoTiP over UDP

The **fastest path** from sensor to cloud. No connection setup, no handshake - a single datagram carries your data to TagoIO in as few as 60 bytes.

## Endpoint

| Host | IP | Ports |
|---|---|---|
| `udp.tip.us-e1.tago.io` | `166.117.107.129` | `5683` (plaintext) / `5684` (TagoTiP/S) |

See [Servers & Endpoints](./servers) for all regions.

## Why UDP?

- **Zero connection overhead** - no handshake, no teardown
- **Minimal power consumption** - ideal for battery-powered devices
- **Fire-and-forget** - send and move on
- **Tiny footprint** - a single `sprintf` builds your frame

## How it works

```
Device                                      TagoIO
  |                                           |
  |── PUSH|hash|serial|[temp:=25] ────────>   |
  |<──────── ACK|OK|1 ───────────────────── ──|
```

One datagram in, one datagram out. Each datagram carries exactly **one** frame. Trailing `\n` is optional.

## Arduino example (ESP32)

```cpp
#include <WiFi.h>
#include <WiFiUdp.h>

const char* SSID       = "your-wifi";
const char* PASSWORD   = "your-password";
const char* TIP_HOST   = "udp.tip.us-e1.tago.io";
const int   TIP_PORT   = 5683;
const char* TOKEN_HASH = "4deedd7bab8817ec";  // replace with yours
const char* SERIAL_N     = "sensor-01";          // replace with yours

WiFiUDP udp;

void setup() {
  Serial.begin(115200);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("WiFi connected");
}

void loop() {
  float temperature = analogRead(34) * 0.1;  // example reading

  char frame[256];
  snprintf(frame, sizeof(frame),
    "PUSH|%s|%s|[temperature:=%.1f#C]",
    TOKEN_HASH, SERIAL_N, temperature);

  udp.beginPacket(TIP_HOST, TIP_PORT);
  udp.print(frame);
  udp.endPacket();

  // read response (optional for fire-and-forget)
  delay(100);
  int len = udp.parsePacket();
  if (len > 0) {
    char buf[128];
    udp.read(buf, sizeof(buf) - 1);
    buf[len] = '\0';
    Serial.println(buf);  // ACK|OK|1
  }

  delay(10000);  // send every 10 seconds
}
```

## Quick test with netcat

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

### Push a temperature reading

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

```
ACK|OK|1
```

### Push multiple variables

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C;humidity:=60#%;active?=true]' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

```
ACK|OK|3
```

### Push location data

```bash
echo -n 'PUSH|4deedd7bab8817ec|tracker-01|[position@=39.74,-104.99,1609;speed:=45.2#km/h]' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

### Push raw payload (passthrough)

```bash
echo -n 'PUSH|4deedd7bab8817ec|sensor-01|>xDEADBEEF01020304' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored value

```bash
echo -n 'PULL|4deedd7bab8817ec|sensor-01|[temperature]' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

```
ACK|OK|[temperature:=25.5#C@1694567890000]
```

### Ping (connectivity check + command polling)

```bash
echo -n 'PING|4deedd7bab8817ec|sensor-01' \
  | nc -u -w1 udp.tip.us-e1.tago.io 5683
```

```
ACK|PONG
```

When a command is pending:

```
ACK|CMD|reboot
```

## Operators

| Operator | Type | Example |
|---|---|---|
| `:=` | Number | `temperature:=25.5` |
| `=` | String | `status=online` |
| `?=` | Boolean | `active?=true` |
| `@=` | Location (lat,lng or lat,lng,alt) | `position@=39.74,-104.99` |

## Suffixes

Append after the value, in this order:

| Suffix | Prefix | Example |
|---|---|---|
| Unit | `#` | `temperature:=25.5#C` |
| Timestamp | `@` | `temperature:=25.5@1694567890000` |
| Group | `^` | `temperature:=25.5^batch_01` |
| Metadata | `{}` | `temperature:=25.5{source=dht22}` |

All combined: `temperature:=25.5#C@1694567890000^batch_01{source=dht22,quality=high}`

## Response codes

| Response | Meaning |
|---|---|
| `ACK\|OK\|N` | `N` data points stored |
| `ACK\|OK\|[...]` | PULL response with variable data |
| `ACK\|PONG` | Keepalive acknowledged |
| `ACK\|CMD\|<command>` | Server command (via PING response) |
| `ACK\|ERR\|invalid_token` | Invalid or expired token hash |
| `ACK\|ERR\|device_not_found` | Serial not found under your account |
| `ACK\|ERR\|invalid_payload` | Malformed frame or body |
| `ACK\|ERR\|invalid_seq` | Counter not greater than last accepted |
| `ACK\|ERR\|rate_limited` | Back off and retry |
| `ACK\|ERR\|payload_too_large` | Frame exceeds max payload size |
| `ACK\|ERR\|server_error` | Retry after a delay |

## Limits

### Protocol limits

| Limit | Value |
|---|---|
| Max frame size (wire) | 16,384 bytes |
| Max variables per frame | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |

:::tip
Keep datagrams under ~1,400 bytes to avoid IP fragmentation.
:::

RPM = requests per minute.

### Per-profile rate limits

| Resource | Scale | Starter | Free |
|---|---|---|---|
| Uplink RPM (PUSH) | 1,000 | 500 | 60 |
| Downlink RPM (PULL) | 1,000 | 500 | 60 |

### Per-device limits

| Resource | Default |
|---|---|
| Max payload size | 100 KB |

PING is exempt from rate limiting on UDP.

## Specification

For the complete protocol grammar, parsing rules, and ABNF, see the [TagoTiP Specification](./specification).
