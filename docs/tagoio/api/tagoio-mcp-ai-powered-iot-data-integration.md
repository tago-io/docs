---
title: "TagoIO MCP - AI-Powered IoT Data Integration"
description: "This article introduces the TagoIO MCP Server and shows an example AI-powered workflow for detecting temperature spikes in greenhouse sensor data, including the resulting summary statistics from the analysis."
tags: ["tagoio", "integration"]
---
The TagoIO MCP Server bridges AI‑powered development tools with your TagoIO IoT platform, enabling intelligent workflows that understand and interact with your real device data, configurations, and platform resources.

![TagoIO MCP in Claude AI](/docs_imagem/claude_chat_mcp.png)

## What is a Model Context Protocol (MCP)?
Model Context Protocol (MCP) is an open standard that connects AI assistants to external data sources and tools. When integrated with TagoIO, it allows AI models in your development environment to directly access your IoT data, analyze patterns, generate code, and provide context‑aware assistance based on your actual platform configuration.

![TagoIO MCP Diagram](/docs_imagem/claude_chat_mcp.png)

## Core capabilities

Core capabilities of the MCP Server include:

### Device Management & Data Access

The MCP server provides comprehensive access to your TagoIO environment:

- Query device configurations, metadata, and real-time sensor readings
- Access historical data from both Devices and Entities
- Retrieve user information, actions, and analysis scripts
- Generate statistical reports with aggregations, trends, and custom analytics


### Intelligent Development Support

Beyond data access, the integration enhances your development workflow:

- Context-Aware Code Generation: AI generates TagoIO Analysis - scripts with knowledge of your actual device structure and data formats
- Smart Debugging: Identify tag relationships, data dependencies, and configuration issues
- Automated Documentation: Generate reports and documentation based on your platform's current state

### Platform Integration

The TagoIO MCP Server works seamlessly with popular AI platforms and development environments:
- AI Platforms: Claude Desktop, ChatGPT, and other MCP-compatible assistants
- Development IDEs: Cursor, Windsurf, VS Code with AI extensions


The MCP Server works seamlessly with popular AI platforms such as Claude Desktop, ChatGPT, and other MCP‑compatible assistants, as well as IDEs like Cursor, Windsurf, and VS Code with AI extensions.

## Installation and Setup

For complete installation instructions and configuration options, see the [TagoIO MCP Server GitHub repository](https://github.com/tago-io/mcp-server).


## Real-World Use Case
### For IoT Application Developers

#### Rapid Prototyping
Generate boilerplate code for new Analysis scripts with proper error handling and TagoIO-specific patterns:
> "Create an Analysis script that monitors temperature sensors and sends SMS alerts when readings exceed thresholds"

#### Data Pipeline Debugging
Trace data flow issues across devices and scripts:
> "Show me all devices with tag value TEST sending data to the 'temperature' variable in the last hour and identify any gaps"

#### Performance Optimization
Analyze resource usage and optimize data retention strategies:
> "Which devices are consuming the most data transactions this month?"

### For Platform Administrators

#### Tag Monitoring
Identify devices with data transmission issues:
> "List all devices that haven't sent data in the last 24 hours"

#### User Management
Track platform access and new user activity:
> "Show me all users created in the past week"

### For Data Analysts

#### Trend Analysis
Perform complex queries across multiple data sources:
> Quote"Compare energy consumption patterns between weekdays and weekends for all smart meters"

#### Anomaly Detection
Identify unusual patterns in sensor data:
> "Find all temperature spikes that deviate more than 2 standard deviations from the weekly average"