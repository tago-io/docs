---
sidebar_position: 3
title: Type
slug: /tagocore/action/type
---

# Action Type

Action Types determine what happens when your Action is triggered. Think of them as the "do this" part of your automation rule - after a trigger condition is met, the Action Type defines the specific task that will be executed.

TagoCore offers several built-in Action Types to handle common automation needs:

## Run Analysis Script

This type executes custom [Analysis](/docs/tagocore/analysis) scripts when your Action triggers. Perfect for complex data processing, calculations, or custom business logic that goes beyond simple data forwarding.

**Common use cases:**
- Process sensor data and calculate averages or trends
- Apply complex filtering or validation rules  
- Transform data formats before sending to external systems
- Implement custom alert logic based on multiple variables

## Send HTTP Request

This type sends data to external web services or APIs via HTTP POST requests. When your Action triggers, it automatically sends the device data (in JSON format) to any web endpoint you specify.

**Common use cases:**
- Forward device data to cloud services or databases
- Send notifications to webhook services (like Slack or Discord)
- Integrate with third-party IoT platforms or analytics tools
- Trigger actions in external systems based on your device data
