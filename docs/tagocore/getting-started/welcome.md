---
sidebar_position: 1
title: Welcome
slug: /tagocore/
---

# Welcome to TagoCore

## What is TagoCore?

TagoCore is a **free**, **fast**, and **open-source** IoT platform designed for edge computing and data management. Built for developers and businesses who need a reliable, self-hosted solution to collect, process, and analyze data from IoT devices.

### Key Features

- **Edge Computing Ready**: Process data locally without relying on cloud services
- **Real-time Data Processing**: Analyze and manipulate device data as it arrives
- **Extensible Architecture**: Customize functionality through plugins and integrations
- **Docker-based Deployment**: Simple installation and consistent runtime environment
- **Open Source**: Full access to source code and community-driven development
- **Cloud Integration**: Plugin support to connect with any cloud provider or server of your choice

<img className="big-image" src="/docs_imagem/tagocore/welcome/main-diagram-tagocore.png" height="500px" />

### Why Choose TagoCore?

TagoCore bridges the gap between raw device data and actionable insights. Whether you're prototyping IoT solutions, managing industrial sensors, or building smart applications, TagoCore provides the foundation to:

- Connect and manage multiple devices from a single platform
- Execute custom logic on incoming data streams
- Trigger automated responses based on specific conditions
- Extend capabilities through a growing plugin ecosystem

### Quick Start

Get TagoCore running in seconds with Docker:

```shell
docker run -p 8888:8888 -p 8999:8999 tagoio/tagocore
```

<img className="big-image" src="/docs_imagem/tagocore/welcome/initial-screen.png" height="300px" />

## Core Concepts

Understanding these four fundamental concepts will help you get the most out of TagoCore:

### Devices

Devices represent your physical hardware within TagoCore. Each device you want to monitor or control must be registered in the platform. Once registered, devices can send sensor data, receive commands, and participate in automated workflows.

[Learn more about Devices →](/docs/tagocore/device)

### Analyses

Analyses are custom scripts that process your device data in real-time. Use them to transform raw sensor readings, detect patterns, calculate derived values, or implement business logic. Analyses can be triggered automatically when new data arrives or run on scheduled intervals.

[Learn more about Analyses →](/docs/tagocore/analysis)

### Actions

Actions are automated responses that execute when specific conditions are met. They enable TagoCore to react to your data by sending notifications, making HTTP requests, running analyses, or integrating with external systems. Think of them as the "then" part of "if-then" automation rules.

[Learn more about Actions →](/docs/tagocore/action)

### Plugins

Plugins extend TagoCore's capabilities beyond its core features. Install community-developed plugins or create your own to add new integrations, data sources, or functionality. The Plugin Store makes it easy to discover and install extensions that fit your specific needs.

[Learn more about Plugins →](/docs/tagocore/plugins)
