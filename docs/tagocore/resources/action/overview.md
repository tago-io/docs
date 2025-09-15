---
sidebar_position: 1
title: Action Overview
slug: /tagocore/action
---

# Action

An Action is an automated response that executes when specific events happen in your TagoCore system. Think of Actions as the "then" part of "if-then" rules - when something occurs (like a device sending data), TagoCore can automatically take action based on the rules you set up.

Actions give you powerful automation capabilities for your [Devices](/docs/tagocore/device) and IoT workflows.

## What Actions Can Do

With Actions, you can automatically:

- **Run custom scripts** using an [Analysis](/docs/tagocore/analysis) to process or analyze data
- **Send HTTP requests** to external APIs or webhooks to integrate with other systems
- **Trigger plugin functionality** using specialized [triggers](/docs/tagocore/resources/action/trigger.md) and [types](/docs/tagocore/resources/action/type.md)
- **Extend capabilities** through the growing plugin ecosystem

## Creating an Action

To create a new Action, click the&nbsp; <img className="inline-image" src="/docs_imagem/tagocore/action/add-action-button.png" height="25px" /> &nbsp;button on the **Actions** page. This opens the Action creation modal:

<img className="big-image" src="/docs_imagem/tagocore/action/add-action-modal.png" height="300px" />

You'll need to configure three essential components:

1. **Name**: A descriptive name for your Action (e.g., "High Temperature Alert")
2. **[Trigger](/docs/tagocore/resources/action/trigger.md)**: What event should activate this Action (e.g., when device data arrives)  
3. **[Type](/docs/tagocore/resources/action/type.md)**: What should happen when the Action runs (e.g., run an analysis, post to data to HTTP endpoint)
