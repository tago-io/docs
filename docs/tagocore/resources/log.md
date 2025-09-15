---
sidebar_position: 6
title: Logs
slug: /tagocore/log
---

# Application Logs

Application Logs provide a real-time view of what's happening inside TagoCore and its plugins. Think of them as a detailed activity feed that helps you monitor system health, troubleshoot issues, and understand how your platform is performing.

## Choosing Log Sources (Channels)

You can filter logs by their source using the Channel selector. This helps you focus on specific parts of your system:

**Application Channel** (default): Shows logs from the core TagoCore system - startup messages, device connections, data processing activities, and system-level events.

**Plugin Channels**: Each installed plugin has its own dedicated channel. Select a plugin's channel to see only logs related to that specific plugin's activities, making it easier to debug plugin-specific issues.

## Understanding Log Types

TagoCore displays two types of log messages to help you quickly identify their importance:

### Error Logs
These appear in **red** and indicate problems that need your attention. Error logs help you identify:
- Connection failures with devices or external services
- Configuration issues that prevent proper operation
- Plugin crashes or malfunctions
- Data processing errors

Some error logs may include technical details (called a stack trace) to help with troubleshooting.

### Verbose Logs
These are **informational messages** that show normal system activity. Verbose logs are more common and indicate healthy operation:
- Successful device data reception
- Plugin startup and shutdown events
- Regular system maintenance activities
- Data processing confirmations

These logs help you confirm that everything is working as expected and provide visibility into your system's daily operations.
