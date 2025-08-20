---
title: Device Overview
description: Understanding devices, the fundamental building blocks that connect your physical sensors and hardware to TagoIO's cloud platform.
---

# Device Overview

Devices are the fundamental building blocks that connect your physical sensors and hardware to TagoIO's cloud platform. They serve as the digital representation of your real-world equipment and act as the bridge for data communication.

## What are Devices?

A device in TagoIO represents any external hardware that needs to send or receive data from the platform. This includes:

- IoT sensors (temperature, humidity, pressure, etc.)
- GPS trackers
- Smart meters
- Industrial equipment
- Mobile applications
- Web services
- Any custom hardware with communication capabilities

## Core Concepts

### Communication Methods

Devices communicate with TagoIO through two primary protocols:

- **HTTP/HTTPS**: RESTful API calls for web-based applications and devices
- **MQTT**: Lightweight messaging protocol ideal for IoT devices with limited bandwidth

All data must be transmitted in JSON format following TagoIO's data structure.

### Device Authentication

Every device requires a unique **Device Token** for authentication. This token:
- Acts as a secret key between your device and TagoIO
- Must be included in all API requests
- Should be kept secure and shared only with trusted parties
- Is automatically generated when you create a device

### Data Flow Architecture

```
External Device → [HTTP/MQTT] → TagoIO Platform → Device Storage → Dashboards/Analytics
```

## Device Types and Storage Options

When creating a device, you must select the appropriate data storage type based on your use case:

### 1. Device Optimized Data (Immutable Database)

**Best for**: Long-term data retention, compliance requirements, high-volume sensors

**Features**:
- Store up to 36 million data points per device
- Highly optimized for both short and long retention periods
- Faster query responses with lower latency
- Immutable data - cannot be modified or deleted individually
- Cost-effective for running Analysis scripts
- Ideal for compliance scenarios requiring data integrity
- Data removal only through automatic retention policies

**Use Cases**:
- Environmental monitoring systems
- Industrial sensor networks
- Asset tracking applications
- Compliance-regulated industries

### 2. Managed Data Optimized (Mutable Database)

**Best for**: Configuration management, dynamic data that requires editing

**Features**:
- Store up to 50,000 data registers per device
- Full edit and delete capabilities for individual data points
- No automatic data retention
- Optimized for configurable variables
- Ideal for form inputs and web service data

**Use Cases**:
- Device configuration storage
- User input forms
- Settings and preferences
- Temporary data processing

## Device Management Features

### General Information
- View device name, network type, and connector information
- Manage device tokens and serial numbers
- Monitor usage statistics (with Control Tower add-on)
- Track last input timestamp

### Data Management
- View, filter, and export device data
- Import bulk data via CSV files
- Edit or delete individual variables (mutable devices only)
- Backup data to Files for safekeeping

### Device Control
- Activate or deactivate devices
- Hide devices from widget selections
- Set custom rate limits (with Control Tower add-on)
- Configure device-specific parameters

### Development Tools
- **Live Inspector**: Real-time monitoring of device communications
- **Device Emulator**: Send test data to your device
- **Payload Parser**: Customize data processing and formatting
- **Configuration Parameters**: Set device-specific behavior rules

## Integration with TagoIO Ecosystem

Devices seamlessly integrate with other TagoIO services:

- **Dashboards**: Visualize device data with widgets and charts
- **Analysis**: Process and analyze device data with custom scripts
- **Actions**: Trigger automated responses based on device data
- **Notifications**: Send alerts based on device conditions
- **Reports**: Generate automated reports from device data

## Getting Started

To start using devices in TagoIO:

1. **Create a device** using the appropriate connector
2. **Configure the storage type** based on your needs
3. **Obtain the device token** for authentication
4. **Set up your hardware** to send data using HTTP or MQTT
5. **Test the connection** using the Live Inspector
6. **Build dashboards** to visualize your data

## Best Practices

### Security
- Keep device tokens secure and rotate them regularly
- Use SSL/TLS encryption for data transmission
- Implement proper access controls in your applications

### Data Management
- Choose the right storage type for your use case
- Set up appropriate data retention policies
- Monitor your data usage and storage limits
- Implement proper error handling in your device code

### Performance
- Use batch data sending when possible
- Implement exponential backoff for failed requests
- Monitor rate limits to avoid service disruptions
- Use MQTT for bandwidth-constrained devices

## Next Steps

- Learn how to [create devices](./device-creation.md)
- Understand [device tokens and security](./device-tokens.md)
- Explore [data storage concepts](./data-storage.md)
- Set up [live monitoring with Live Inspector](./live-inspector.md)