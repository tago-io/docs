---
sidebar_position: 5
sidebar_label: TCP
title: TagoTiP over TCP
---

# TagoTiP over TCP

**Guaranteed delivery** and **real-time commands**. TagoTiP over TCP ensures every data point arrives in order - and the server can push commands to your device the moment they are ready.

## Endpoint

**Host:** `tcp.tip.us-e1.tago.io` - **IP:** `75.2.126.170` - **Ports:** `5693` (plaintext) / `5694` (TLS)

Both ports accept TagoTiP and TagoTiP/S. The server detects the mode **once per connection** by inspecting the first byte. See [Servers & Endpoints](./servers) for all regions.

## Why TCP?

- **Reliable delivery** - every frame is acknowledged
- **Persistent connections** - one connect, many frames
- **Real-time commands** - server pushes `CMD` frames instantly
- **Ordered data** - frames arrive in sequence

## How it works

```
Device                                        TagoIO
  |                                             |
  |── PUSH|hash|serial|[temp:=25]\n ──────────> |
  |<──────── ACK|OK|1\n ─────────────────────── |
  |                                             |
  |<──────── ACK|CMD|reboot\n ───────────────── |  (server push)
```

The connection stays open. The server can push `CMD` frames at any time - no polling needed. Each frame **must** end with `\n` (byte `0x0A`).

## Arduino example (ESP32)

```cpp
#include <WiFi.h>
#include <WiFiClient.h>

const char* SSID       = "your-wifi";
const char* PASSWORD   = "your-password";
const char* TIP_HOST   = "tcp.tip.us-e1.tago.io";
const int   TIP_PORT   = 5693;
const char* TOKEN_HASH = "4deedd7bab8817ec";  // replace with yours
const char* SERIAL     = "sensor-01";          // replace with yours

WiFiClient client;

void setup() {
  Serial.begin(115200);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("WiFi connected");

  if (!client.connect(TIP_HOST, TIP_PORT)) {
    Serial.println("Connection failed");
    return;
  }
  Serial.println("Connected to TagoTiP TCP");
}

void loop() {
  // reconnect if needed
  if (!client.connected()) {
    client.connect(TIP_HOST, TIP_PORT);
    return;
  }

  float temperature = analogRead(34) * 0.1;  // example reading

  char frame[256];
  snprintf(frame, sizeof(frame),
    "PUSH|%s|%s|[temperature:=%.1f#C]\n",
    TOKEN_HASH, SERIAL, temperature);

  client.print(frame);

  // read response
  unsigned long timeout = millis() + 5000;
  while (!client.available() && millis() < timeout) delay(10);

  if (client.available()) {
    String response = client.readStringUntil('\n');
    Serial.println(response);  // ACK|OK|1

    // check for server-pushed commands
    if (response.startsWith("ACK|CMD|")) {
      String cmd = response.substring(8);
      Serial.print("Command received: ");
      Serial.println(cmd);
    }
  }

  delay(10000);  // send every 10 seconds
}
```

## Quick test with netcat

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

### Push a temperature reading

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' \
  | nc tcp.tip.us-e1.tago.io 5693
```

```
ACK|OK|1
```

### Interactive session

Open a persistent connection:

```bash
nc tcp.tip.us-e1.tago.io 5693
```

Type frames and see responses in real time:

```
PING|4deedd7bab8817ec|sensor-01
ACK|PONG
PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C;humidity:=60#%]
ACK|OK|2
PULL|4deedd7bab8817ec|sensor-01|[temperature]
ACK|OK|[temperature:=25.5#C@1694567890000]
```

### Push a batch with timestamps (datalogger)

```bash
echo 'PUSH|4deedd7bab8817ec|logger-01|[temp:=25.5@1694567890000;temp:=26.1@1694567900000;temp:=25.8@1694567910000]' \
  | nc tcp.tip.us-e1.tago.io 5693
```

```
ACK|OK|3
```

### Push raw payload (passthrough)

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|>xDEADBEEF01020304' \
  | nc tcp.tip.us-e1.tago.io 5693
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored values

```bash
echo 'PULL|4deedd7bab8817ec|sensor-01|[temperature;humidity]' \
  | nc tcp.tip.us-e1.tago.io 5693
```

```
ACK|OK|[temperature:=25.5#C@1694567890000;humidity:=60#%@1694567890000]
```

## Receiving commands

On a persistent connection, the server pushes commands instantly:

```
ACK|CMD|reboot
ACK|CMD|ota=https://example.com/v2.1.bin
```

No polling needed - just keep the connection open.

## Using TLS (port 5694)

```bash
echo 'PUSH|4deedd7bab8817ec|sensor-01|[temperature:=25.5#C]' \
  | openssl s_client -connect tcp.tip.us-e1.tago.io:5694 -quiet
```

Same protocol, same frames - TLS is handled by the load balancer.

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
| `ACK\|CMD\|<command>` | Server command (pushed at any time) |
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

RPM = requests per minute.

### Per-profile rate limits

| Resource | Scale | Starter | Free |
|---|---|---|---|
| Uplink RPM (PUSH) | 1,000 | 500 | 60 |
| Downlink RPM (PULL) | 1,000 | 500 | 60 |
| Connections per IP | 100 | 20 | 5 |

### Per-device limits

| Resource | Default |
|---|---|
| Max payload size | 100 KB |
| Connection TTL | 60 s |
| Keep-alive idle timeout | 20 s |

PING is exempt from rate limiting on TCP.

:::warning
Send a `PING` before the keep-alive idle timeout (default 20 seconds) to keep the connection alive. The connection is closed after the TTL (default 60 seconds) regardless of activity.
:::

## Specification

For the complete protocol grammar, parsing rules, and ABNF, see the [TagoTiP Specification](./specification).
