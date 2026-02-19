---
sidebar_position: 6
sidebar_label: HTTP
title: TagoTiP over HTTP
---

# TagoTiP over HTTP

Standard HTTP you already know -- `POST` to send, `GET` to retrieve, `HEAD` to ping. A single `Authorization` header and a clean REST-style API. Works through every firewall and proxy.

## Endpoint

**Host:** `http.tip.us-e1.tago.io` -- **IP:** `166.117.109.176` -- **Ports:** `80` (HTTP) / `443` (HTTPS)

Both ports accept TagoTiP and TagoTiP/S via URL path. See [Servers & Endpoints](./servers) for all regions.

:::info Use HTTPS in production
Port `443` (HTTPS) for production. Port `80` (HTTP) for development or when TLS is handled externally.
:::

## Why HTTP?

- **Universal** -- every language and platform has an HTTP client
- **Firewall-friendly** -- passes through proxies and load balancers
- **Familiar** -- standard methods, headers, and status codes
- **Quick integration** -- one `curl` command gets you started

## HTTP method mapping

| HTTP Method | TagoTiP Action | Purpose |
|---|---|---|
| `POST` | PUSH | Send data |
| `GET` | PULL | Retrieve last values |
| `HEAD` | PING | Keepalive / poll commands |

## Arduino example (ESP32)

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

const char* SSID       = "your-wifi";
const char* PASSWORD   = "your-password";
const char* TIP_URL    = "http://http.tip.us-e1.tago.io/v1/tip/sensor-01";  // replace serial
const char* TOKEN_HASH = "4deedd7bab8817ec";  // replace with yours

void setup() {
  Serial.begin(115200);
  WiFi.begin(SSID, PASSWORD);
  while (WiFi.status() != WL_CONNECTED) delay(500);
  Serial.println("WiFi connected");
}

void loop() {
  if (WiFi.status() != WL_CONNECTED) return;

  float temperature = analogRead(34) * 0.1;  // example reading

  char body[128];
  snprintf(body, sizeof(body), "[temperature:=%.1f#C]", temperature);

  char auth[64];
  snprintf(auth, sizeof(auth), "TagoTiP %s", TOKEN_HASH);

  HTTPClient http;
  http.begin(TIP_URL);
  http.addHeader("Authorization", auth);
  http.addHeader("Content-Type", "text/plain");

  int code = http.POST(body);
  if (code == 200) {
    Serial.print("Stored: ");
    Serial.println(http.getString());  // "1"
  } else {
    Serial.print("Error: ");
    Serial.println(code);
  }

  http.end();
  delay(10000);  // send every 10 seconds
}
```

## Quick test with curl

Replace `4deedd7bab8817ec` with your token hash and `sensor-01` with your serial.

### Push a temperature reading

```bash
curl -X POST https://http.tip.us-e1.tago.io/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[temperature:=25.5#C]'
```

```
1
```

### Push multiple variables

```bash
curl -X POST https://http.tip.us-e1.tago.io/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[temperature:=25.5#C;humidity:=60#%;active?=true]'
```

```
3
```

### Push with body-level defaults

```bash
curl -X POST https://http.tip.us-e1.tago.io/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '^batch_01@1694567890000{firmware=2.1}[temperature:=25.5#C;humidity:=60#%]'
```

### Push location data

```bash
curl -X POST https://http.tip.us-e1.tago.io/v1/tip/tracker-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '[position@=39.74,-104.99,1609;speed:=45.2#km/h]'
```

### Push raw payload (passthrough)

```bash
curl -X POST https://http.tip.us-e1.tago.io/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec" \
  -H "Content-Type: text/plain" \
  -d '>xDEADBEEF01020304'
```

Raw bytes are delivered to your device's [Payload Parser](/docs/tagoio/devices/payload-parser).

### Pull the last stored values

```bash
curl https://http.tip.us-e1.tago.io/v1/tip/sensor-01?variables=temperature,humidity \
  -H "Authorization: TagoTiP 4deedd7bab8817ec"
```

```
[temperature:=25.5#C@1694567890000;humidity:=60#%@1694567890000]
```

### Ping (connectivity check + command polling)

```bash
curl -I https://http.tip.us-e1.tago.io/v1/tip/sensor-01 \
  -H "Authorization: TagoTiP 4deedd7bab8817ec"
```

No command: `204 No Content`

When a command is pending:

```http
HTTP/1.1 200 OK
X-TagoTiP-CMD: reboot
```

## Endpoints

### `POST /v1/tip/{serial}` -- Send Data

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **Content-Type** | `text/plain` |
| **Body** | TagoTiP PUSH body |
| **Success** | `200 OK` -- body is data point count |

### `GET /v1/tip/{serial}?variables=...` -- Retrieve Data

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **Query** | `variables=var1,var2,...` |
| **Success** | `200 OK` -- body is variable list |

### `HEAD /v1/tip/{serial}` -- Keepalive / Commands

| | |
|---|---|
| **Header** | `Authorization: TagoTiP <token-hash>` |
| **No command** | `204 No Content` |
| **Pending command** | `200 OK` + `X-TagoTiP-CMD` header |

### `POST /v1/tips` -- TagoTiP/S (Encrypted)

| | |
|---|---|
| **Content-Type** | `application/octet-stream` |
| **Body** | Binary TagoTiP/S envelope |

No `Authorization` header. See [Encryption](./encryption).

## Operators

| Operator | Type | Example |
|---|---|---|
| `:=` | Number | `temperature:=25.5` |
| `=` | String | `status=online` |
| `?=` | Boolean | `active?=true` |
| `@=` | Location (lat,lng or lat,lng,alt) | `position@=39.74,-104.99` |

## Response codes

| HTTP Status | Meaning | Body |
|---|---|---|
| `200 OK` | Success | PUSH: count. PULL: variables. |
| `204 No Content` | PING ok | -- |
| `400 Bad Request` | Malformed body | `invalid_payload` |
| `401 Unauthorized` | Invalid auth | `invalid_token` |
| `404 Not Found` | Unknown device/variable | `device_not_found` |
| `413 Payload Too Large` | Body exceeds max payload size | `payload_too_large` |
| `429 Too Many Requests` | Rate limited | `rate_limited` |
| `500 Internal Server Error` | Server error | `server_error` |

## Limits

### Protocol limits

| Limit | Value |
|---|---|
| Max request body (wire) | 16,384 bytes |
| Max variables per request | 100 |
| Max metadata pairs | 32 |
| Variable name length | 100 chars |
| Unit length | 25 chars |
| Serial length | 100 chars |

### Per-profile rate limits

| Resource | Scale | Starter | Free |
|---|---|---|---|
| Uplink RPM (POST, HEAD) | 1,000 | 500 | 60 |
| Downlink RPM (GET) | 1,000 | 500 | 60 |
| Connections per IP | 100 | 20 | 5 |

### Per-device limits

| Resource | Default |
|---|---|
| Max payload size | 100 KB |

Unlike TCP/UDP, `HEAD` (PING) counts toward the uplink RPM on HTTP.

## Specification

For the complete protocol grammar, parsing rules, and ABNF, see the [TagoTiP Specification](./specification).
