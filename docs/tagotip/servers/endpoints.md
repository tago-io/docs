---
sidebar_position: 2
sidebar_label: Endpoints
title: Endpoints
---

# Endpoints

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
| MQTT | `mqtt.tip.us-e1.tago.io`<br/><span class="ip-addr">15.197.247.146</span> | 8883 | TagoTiP | TLS (MQTTS) |

## EU-West-1

| Transport | Hostname | Port | Protocol | Security |
|-----------|----------|------|----------|----------|
| UDP | `udp.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.51.137</span> | 5683 | TagoTiP | None |
| UDP | `udp.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.51.137</span> | 5684 | TagoTiP(s) | Encrypted (AEAD) |
| TCP | `tcp.tip.eu-w1.tago.io`<br/><span class="ip-addr">15.197.224.153</span> | 5693 | TagoTiP(s) | None |
| TCP | `tcp.tip.eu-w1.tago.io`<br/><span class="ip-addr">15.197.224.153</span> | 5694 | TagoTiP(s) | TLS |
| HTTP | `http.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.2.140</span> | 80 | TagoTiP(s) | None (HTTP) |
| HTTP | `http.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.2.140</span> | 443 | TagoTiP(s) | TLS (HTTPS) |
| MQTT | `mqtt.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.88.178</span> | 1883 | TagoTiP | None (MQTT) |
| MQTT | `mqtt.tip.eu-w1.tago.io`<br/><span class="ip-addr">166.117.88.178</span> | 8883 | TagoTiP | TLS (MQTTS) |
