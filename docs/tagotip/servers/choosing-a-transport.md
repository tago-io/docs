---
sidebar_position: 3
sidebar_label: Choosing a Transport
title: Choosing a Transport
description: "Compare UDP, TCP, HTTP, and MQTT transports for TagoTiP and choose the best fit for your hardware and use case."
keywords: [tagotip, iot, transport, udp, tcp, mqtt]
---

# Choosing a Transport

TagoTiP is transport-agnostic - the same protocol frames work over any transport. Pick the one that fits your hardware and use case.

<div class="transport-list">
  <a class="transport-card" href="../transports/udp">
    <h3>UDP</h3>
    <p>Battery-powered sensors that wake up, send a reading, and sleep. Zero connection overhead - one datagram in, one datagram out. Every milliamp counts.</p>
    <div class="transport-card__details">
      <span>No connection</span>
      <span>Server push via PING poll</span>
      <span><a href="../specification/encryption">TagoTiP(s)</a> on port <code>5684</code></span>
    </div>
  </a>
  <a class="transport-card" href="../transports/tcp">
    <h3>TCP</h3>
    <p>Always-on gateways that stream data and need commands instantly - reboots, config updates, OTA triggers. Guaranteed, ordered delivery over a persistent connection.</p>
    <div class="transport-card__details">
      <span>Persistent connection</span>
      <span>Instant CMD push</span>
      <span>TLS on port <code>5694</code></span>
    </div>
  </a>
  <a class="transport-card" href="../transports/http">
    <h3>HTTP</h3>
    <p>Cloud integrations, serverless functions, or any device behind firewalls and proxies. Standard POST/GET/HEAD with a single Authorization header. No special libraries needed.</p>
    <div class="transport-card__details">
      <span>Per-request</span>
      <span>Server push via HEAD poll</span>
      <span>HTTPS on port <code>443</code></span>
    </div>
  </a>
  <a class="transport-card" href="../transports/mqtt">
    <h3>MQTT</h3>
    <p>Large device fleets on unreliable networks. Publish/subscribe with QoS levels 0, 1, and 2. Topic-based routing with native keepalive and reconnection handling.</p>
    <div class="transport-card__details">
      <span>Persistent connection</span>
      <span>Instant via ack topic</span>
      <span>TLS on port <code>8883</code></span>
    </div>
  </a>
</div>
