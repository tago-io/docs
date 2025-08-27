---
title: "TagoIO MCP - AI-Powered IoT Data Integration"
description: "This article introduces the TagoIO MCP Server and shows an example AI-powered workflow for detecting temperature spikes in greenhouse sensor data, including the resulting summary statistics from the analysis."
tags: ["tagoio", "integration"]
---
The TagoIO MCP Server bridges AI‑powered development tools with your TagoIO IoT platform, enabling intelligent workflows that understand and interact with your real device data, configurations, and platform resources.  
Model Context Protocol (MCP) is an open standard that connects AI assistants to external data sources and tools. When integrated with TagoIO, it allows AI models in your development environment to directly access your IoT data, analyze patterns, generate code, and provide context‑aware assistance based on your actual platform configuration.

Core capabilities of the MCP Server include:

- Querying device configurations, metadata, and real‑time sensor readings  
- Accessing historical data from both Devices and Entities  
- Retrieving user information, actions, and analysis scripts  
- Generating statistical reports with aggregations, trends, and custom analytics  

The MCP Server works seamlessly with popular AI platforms such as Claude Desktop, ChatGPT, and other MCP‑compatible assistants, as well as IDEs like Cursor, Windsurf, and VS Code with AI extensions.

## Example: Greenhouse Temperature Anomaly Detection

The following is a captured example of an AI‑driven analysis flow performed by the MCP Server for a device named **"Greenhouse 2 - Soil & Humidity"**:

- Prompt:
  - *“Find all temperature spikes that deviate more than 2 standard deviations from the June 19 daily average for Greenhouse 2 – Soil & Humidity.”*
- Assistant preparation:
  - *“I’ll help you find temperature spikes in Greenhouse 2 – Soil & Humidity data. Let me start by looking for devices with that name or a similar naming pattern.”*  
    (operation) `device‑lookup`
- Assistant confirmation and data retrieval:
  - *“Perfect! I found the device ‘Greenhouse 2 – Soil & Humidity’. Now let me retrieve temperature data for June 19, 2025 to analyze the daily average and identify spikes.”*  
    (operation) `device-data-operations`
- Data analysis:
  - *“Great! I have the hourly temperature data for June 19, 2025. Now let me analyze this data to calculate the daily average, standard deviation, and identify any temperature spikes that deviate more than 2 standard deviations from the average.”*  
    (operation) `Analyzed data — View analysis`

### Temperature Spike Analysis Results
- **Device:** Greenhouse 2 – Soil & Humidity  
- **Date:** June 19, 2025  

**Summary Statistics:**
- Daily Average: 30.88 °C  
- Standard Deviation: 8.89 °C  
- Upper Threshold (Mean + 2σ): 48.67 °C  
- Lower Threshold (Mean − 2σ): 13.10 °C

*(End of captured example interaction.)*