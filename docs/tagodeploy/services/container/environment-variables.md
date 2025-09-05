---
title: "Container Environment Variables"
description: "Configure environment variables for containers, including security and configuration best practices."
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/environment-variables
---

# Environment Variables

Configure environment variables that will be passed to your container at
runtime. Environment variables are key-value pairs that provide configuration
settings, API keys, database connections, and other runtime parameters to your
containerized applications.

## What are Environment Variables?

Environment variables are dynamic values that can affect the way running
processes behave in your container. They provide a way to:

- **Configure Applications**: Pass configuration settings without modifying code
- **Store Credentials**: Provide API keys, database passwords, and other
  sensitive information
- **Set Runtime Parameters**: Control application behavior based on deployment
  environment
- **Enable Feature Flags**: Toggle application features on or off

## Best Practices

### Security Considerations

- **Use Descriptive Names**: Make variable purposes clear through naming
- **Avoid Hardcoding**: Use environment variables instead of hardcoded values in
  your application

### Configuration Management

- **Group Related Variables**: Use prefixes to organize related configuration
  (e.g., `DB_*`, `SMTP_*`)
- **Provide Defaults**: Have sensible defaults in your application when
  variables are optional
- **Validate Values**: Implement validation in your application for critical
  environment variables
