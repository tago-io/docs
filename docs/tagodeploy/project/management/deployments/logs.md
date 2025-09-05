---
title: "Deployment Logs"
description: "Track deployment progress, understand change management behavior, and identify failures via real-time logs."
tags: ["tagodeploy"]
slug: /tagodeploy/project/deployments/logs
---

# Logs

The Logs section offers a chronological account of your project’s deployment
process. Each log entry records the date and time of deployment actions,
providing real-time visibility into deployment activities. This level of detail
enables you to monitor deployment progress and quickly identify any issues as
they arise, supporting troubleshooting and maintaining a transparent deployment
history.

Key features of the Logs section include:

- **Real-Time Tracking:** Each deployment action is timestamped, allowing you to
  follow the deployment process step by step and verify that all stages are
  completed as expected.
- **Change Management:** Any modification to services automatically triggers a
  new deployment. Changes are only applied after the deployment process has
  completed and the previous deployment has been removed. This approach ensures
  that updates are introduced in a controlled manner, reducing the risk of
  configuration drift or partial updates.
- **Immediate Issue Notification:** If the most recent deployment fails, an
  orange warning sign will appear at the top of every page within the TagoDeploy
  console. This prominent visual alert draws immediate attention to deployment
  issues, enabling you to respond and resolve problems without delay.

**Note:** Logs are specific to the current deployment session. When a new
deployment begins, logs from the previous deployment are cleared and are no
longer accessible. This ensures that you are always viewing the most relevant
and up-to-date information for the active deployment lifecycle.
