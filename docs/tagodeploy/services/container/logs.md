---
title: "Container Logs"
description: "View and manage container logs; understand logging best practices and cost considerations."
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/logs
---

# Container Logs

View and monitor real-time logs from your Docker container to troubleshoot
issues, monitor application performance, and track container behavior.

> [!WARNING]
>
> High log volume can significantly increase your project costs. Monitor your
> application's logging output and configure appropriate log levels to control
> expenses.

## What are Container Logs?

Container logs capture the output from your containerized application,
including:

- **Application Output**: Messages written to stdout and stderr by your
  application
- **Error Messages**: Runtime errors, exceptions, and error conditions
- **System Information**: Container startup, shutdown, and system-level events
- **Debug Information**: Diagnostic messages and debugging output

## Best Practices for Application Logging

### Optimize Log Output

- **Use appropriate log levels** to control volume and costs
- **Avoid excessive debug logging** in production
- **Structure logs** for easy analysis
- **Balance detail with performance** impact

### Security and Privacy

**Never Log:**

- Passwords or authentication tokens
- Credit card numbers or financial data
- Personal identification information
- API keys or secrets
