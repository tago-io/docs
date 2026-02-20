---
sidebar_position: 7
sidebar_label: MQTT
title: TagoTiP over MQTT
---

# TagoTiP over MQTT

**Publish/subscribe messaging** with QoS delivery guarantees. TagoTiP over MQTT maps the protocol to standard MQTT topics - the server pushes commands to your device in real time, and QoS levels handle delivery reliability at the transport layer.

## Endpoint

| Host | IP | Ports |
|---|---|---|
| `mqtt.tip.us-e1.tago.io` | `15.197.247.146` | `1883` (MQTT) / `8883` (MQTTS) |

See [Servers & Endpoints](./servers) for all regions.

:::info Use TLS in production
Port `8883` (MQTTS) for production. Port `1883` (MQTT) for development or when TLS is handled externally.
:::

## Why MQTT?

- **Pub/sub patterns** - topic-based routing with flexible subscriptions
- **QoS delivery** - at-most-once (0), at-least-once (1), or exactly-once (2)
- **Real-time commands** - server pushes `CMD` to the device's `ack` topic instantly
- **Intermittent connectivity** - designed for unreliable networks

## Authentication

The Authorization Hash (16 hex chars) is split across the MQTT CONNECT credentials:

| Field | Value | Example |
|---|---|---|
| Username | First 8 hex chars of Authorization Hash | `4deedd7b` |
| Password | Last 8 hex chars of Authorization Hash | `ab8817ec` |

The server reconstructs the full hash by concatenating username + password, then resolves the Account/Profile.

### Context isolation

All MQTT connections sharing the same credentials (derived from the same Authorization Token) belong to the same context. Any device in that context can publish or subscribe to any `$tip/{serial}/...` topic within it, enabling inter-device communication. If devices require isolation, use separate Authorization Tokens so each device operates in its own context.

## Topic structure

TagoTiP uses the `$tip/` prefix for all protocol traffic:

| Topic | Direction | Purpose |
|---|---|---|
| `$tip/{serial}/push` | Device -> Server | Publish data |
| `$tip/{serial}/pull` | Device -> Server | Request last values |
| `$tip/{serial}/ack` | Server -> Device | Responses and commands |

The device serial is embedded in the topic path, so it does not appear in the payload.

The device **must subscribe** to `$tip/{serial}/ack` at connect time to receive responses and commands.

## Payload format

The MQTT payload carries only the TagoTiP body, with an optional sequence counter prefix (`!N|`).

### PUSH (publish to `$tip/{serial}/push`)

Structured variables or passthrough:

```
[temp:=32#C;humidity:=65#%]
^batch_42@1694567890000[temp:=32#C]
>xDEADBEEF01020304
>b3q2+7wECAwQ=
!42|[temp:=32#C;humidity:=65#%]
```

### PULL (publish to `$tip/{serial}/pull`)

Comma-separated variable names:

```
temperature,humidity
!7|temperature,humidity
```

### ACK (received on `$tip/{serial}/ack`)

Status with optional detail and counter:

```
OK|3
!42|OK|2
OK|[temperature:=32#F@1694567890000;humidity:=65#%@1694567890000]
!7|OK|[temperature:=32#F@1694567890000]
ERR|invalid_payload
CMD|reboot
CMD|ota=https://example.com/v2.1.bin
```

When a sequence counter (`!N`) is present in the uplink, the server echoes it in the corresponding downlink so the device can correlate responses.

## Arduino example (ESP32)

```cpp
#include <WiFi.h>
#include <PubSubClient.h>

const char* SSID       = "your-wifi";
const char* PASSWORD   = "your-password";
const char* MQTT_HOST  = "mqtt.tip.us-e1.tago.io";
const int   MQTT_PORT  = 1883;
const char* MQTT_USER  = "4deedd7b";  // first 8 hex chars of auth hash
const char* MQTT_PASS  = "ab8817ec";  // last 8 hex chars of auth hash
const char* SERIAL_N   = "sensor-01";

WiFiClient wifi;
PubSubClient mqtt(wifi);

char pushTopic[64];
char ackTopic[64];

void onMessage(char* topic, byte* payload, unsigned int length) {
  char msg[256];
  memcpy(msg, payload, min(length, sizeof(msg) - 1));
  msg[min(length, sizeof(msg) - 1)] = '\0';
  Serial.print("ACK: ");
  Serial.println(msg);

  // check for commands
  if (strncmp(msg, "CMD|", 4) == 0) {
    Serial.print("Command: ");
    Serial.println(msg + 4);
  }
}

void setup() {
  Serial.begin(115200);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("WiFi connected");

  snprintf(pushTopic, sizeof(pushTopic), "$tip/%s/push", SERIAL_N);
  snprintf(ackTopic, sizeof(ackTopic), "$tip/%s/ack", SERIAL_N);

  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setCallback(onMessage);
}

void reconnect() {
  while (!mqtt.connected()) {
    if (mqtt.connect("esp32-client", MQTT_USER, MQTT_PASS)) {
      mqtt.subscribe(ackTopic, 1);
      Serial.println("MQTT connected");
    } else {
      delay(5000);
    }
  }
}

void loop() {
  if (!mqtt.connected()) reconnect();
  mqtt.loop();

  static unsigned long lastSend = 0;
  if (millis() - lastSend > 10000) {
    lastSend = millis();

    float temperature = analogRead(34) * 0.1;
    char payload[128];
    snprintf(payload, sizeof(payload), "[temperature:=%.1f#C]", temperature);

    mqtt.publish(pushTopic, payload, false);
  }
}
```

## Quick test with mosquitto

Replace the username/password with your Authorization Hash halves and `sensor-01` with your serial.

### Subscribe to responses

```bash
mosquitto_sub -h mqtt.tip.us-e1.tago.io -p 1883 \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/ack' -q 1
```

### Push a temperature reading

```bash
mosquitto_pub -h mqtt.tip.us-e1.tago.io -p 1883 \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/push' -q 1 \
  -m '[temperature:=25.5#C]'
```

### Push multiple variables

```bash
mosquitto_pub -h mqtt.tip.us-e1.tago.io -p 1883 \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/push' -q 1 \
  -m '[temperature:=25.5#C;humidity:=60#%;active?=true]'
```

### Push raw payload (passthrough)

```bash
mosquitto_pub -h mqtt.tip.us-e1.tago.io -p 1883 \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/push' -q 1 \
  -m '>xDEADBEEF01020304'
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored values

```bash
mosquitto_pub -h mqtt.tip.us-e1.tago.io -p 1883 \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/pull' -q 1 \
  -m 'temperature,humidity'
```

### Using TLS (port 8883)

```bash
mosquitto_pub -h mqtt.tip.us-e1.tago.io -p 8883 --capath /etc/ssl/certs \
  -u 4deedd7b -P ab8817ec \
  -t '$tip/sensor-01/push' -q 1 \
  -m '[temperature:=25.5#C]'
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

Received on the `$tip/{serial}/ack` topic:

| Response | Meaning |
|---|---|
| `OK\|N` | `N` data points stored |
| `OK\|[...]` | PULL response with variable data |
| `CMD\|<command>` | Server command (delivered asynchronously) |
| `ERR\|invalid_token` | Invalid or expired credentials |
| `ERR\|device_not_found` | Serial not found under your account |
| `ERR\|invalid_payload` | Malformed payload |
| `ERR\|invalid_seq` | Counter not greater than last accepted |
| `ERR\|rate_limited` | Back off and retry |
| `ERR\|payload_too_large` | Payload exceeds max size |
| `ERR\|server_error` | Retry after a delay |

## Supported features

| Feature | Support |
|---|---|
| MQTT versions | 3.1, 5 |
| QoS levels | 0, 1, 2 |
| TLS | Yes (port 8883, recommended for production) |
| Publish | Isolated per context |
| Subscribe | Isolated per context |
| Retain | No |
| Last Will | No |
| Persistent Sessions | No |
| Offline Messages | No |

## Limits

### Protocol limits

| Limit | Value |
|---|---|
| Max topic length | 128 chars |
| Max payload size (wire) | 16,384 bytes |
| Max variables per payload | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |
| Subscriptions per connection | 5 |

RPM = requests per minute.

### Per-profile rate limits

| Resource | Scale | Starter | Free |
|---|---|---|---|
| Uplink RPM (PUSH) | 1,000 | 500 | 60 |
| Downlink RPM (PULL) | 1,000 | 500 | 60 |
| Connections per IP | 100 | 20 | 5 |
| Active connections per profile | 500 | 50 | 10 |
| Subscription request RPM | 100 | 50 | 5 |

### Per-device limits

| Resource | Default |
|---|---|
| Max payload size | 100 KB |
| Connection TTL | 60 s |
| Keep-alive idle timeout | 20 s |

Keepalive is handled natively by MQTT's PINGREQ/PINGRESP mechanism and does not require a TagoTiP-level PING.

## Specification

For the complete protocol grammar, parsing rules, and ABNF, see the [TagoTiP Specification](./specification).
