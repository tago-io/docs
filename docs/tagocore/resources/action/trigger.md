---
sidebar_position: 2
title: Trigger
slug: /tagocore/action/trigger
---

# Action Trigger

A trigger defines when your Action should run. Think of it as the "when" part of your automation rule. TagoCore offers two main types of triggers to cover different automation scenarios:

- **Variable Trigger**: Executes when device data meets specific conditions (e.g., temperature > 30°C)
- **Schedule Trigger**: Executes at specific times or intervals (e.g., every day at 9 AM, every 5 minutes)

## Variable Trigger

This trigger watches your device data and executes Actions when certain conditions are met. Perfect for responding to sensor readings, alerts, or changes in device status.

### Device Scope Options

**Single Device**: Monitor one specific [Device](/docs/tagocore/device) in your system. When that device sends data matching your conditions, the Action triggers.

**Multiple Devices**: Monitor several [Devices](/docs/tagocore/device) at once by using device tags. Any device with matching tags that sends data meeting your conditions will trigger the Action.

### Setting Up Conditions

After choosing your device scope, define the conditions that will trigger your Action:

<img className="big-image" src="/docs_imagem/tagocore/action/action-conditions.png" height="100px" />

1. **Choose a variable** to monitor (e.g., "temperature", "humidity", "battery")
2. **Select a condition type**:
   - **Less than**: Triggers when the value is below your threshold
   - **Greater than**: Triggers when the value exceeds your threshold  
   - **Equal to**: Triggers when the value exactly matches
   - **Different from**: Triggers when the value changes from a specific value
   - **Any**: Triggers whenever new data arrives (regardless of value)
   - **Between**: Triggers when the value falls within a specific range
3. **Set the comparison value** (e.g., 15 for "temperature > 15")

## Schedule Trigger

This trigger runs Actions based on time schedules rather than device data. Use it for regular maintenance tasks, periodic reports, or time-based automation.

Schedule triggers support flexible timing options:
- **Specific times**: Daily at 9:00 AM, weekly on Mondays
- **Regular intervals**: Every 5 minutes, every hour, every month, every year

Perfect for tasks like daily data backups, weekly reports, or periodic system health checks.
