---
sidebar_position: 2
title: Home Dashboard
slug: /tagocore/home
---

# Home Dashboard

The TagoCore Home Dashboard serves as your central command center, providing a comprehensive overview of your IoT platform's health, performance, and resources. This dashboard gives you instant visibility into both your TagoCore application and the underlying system infrastructure.

## Platform Overview

### TagoCore Summary
Monitor your platform's core resources at a glance. This card displays:

- **Devices** - Total number of connected IoT devices
- **Analyses** - Active data processing scripts
- **Actions** - Configured automation rules
- **Connectors** - External system integrations
- **Version** - Current TagoCore release information

This summary helps you quickly assess your platform's scale and ensure all components are properly configured.

### Operating System Information
View essential details about your host environment:

- Operating system name and version
- System architecture and platform type
- OS-specific visual indicators

This information is crucial for troubleshooting compatibility issues and understanding your deployment environment.

## Infrastructure Monitoring

### Network Overview
Track your network connectivity and accessibility:

- **Local IP addresses** - Private network interfaces
- **Public IP** - External network visibility (when available)
- **Network interfaces** - All available network connections

Use this information to verify network configuration and troubleshoot connectivity issues.

### System Performance
Monitor real-time hardware utilization with dynamic metrics that adapt to your system:

- **RAM Usage** - Memory consumption with percentage and formatted values
- **CPU Usage** - Processor utilization and model information
- **Disk Storage** - Available storage across all mounted drives with names, locations, and capacity
- **Swap Memory** - Virtual memory usage (Linux/Unix systems)
- **Battery Status** - Power level for mobile/laptop deployments

:::info Dynamic Metrics
Performance metrics are system-dependent. Some metrics may not appear based on your operating system, hardware configuration, or system permissions.
:::

## Data Flow Analytics

### Real-time Data Monitoring
Track your IoT data streams with live visualization:

**Data Input Analytics**
- 15-minute sliding window of incoming data
- Real-time updates as devices send information
- Visual trends to identify data flow patterns

**Data Output Analytics**
- 15-minute sliding window of outgoing data
- Updates when devices or external systems retrieve data
- Helps monitor API usage and data consumption

These charts provide immediate feedback on your platform's activity and can help identify unusual patterns or connectivity issues.

## Customization

### Plugin-Enhanced Cards
Extend your dashboard with custom functionality through plugins:

- Create specialized monitoring widgets
- Add business-specific metrics
- Integrate external data sources
- Build custom visualization components

Plugin-based cards appear alongside the standard dashboard components, allowing you to tailor the interface to your specific operational needs.

:::tip Coming Soon
Enhanced plugin documentation and examples for custom dashboard cards will be available in future releases.
:::
