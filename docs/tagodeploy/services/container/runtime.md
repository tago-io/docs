---
title: "Container Runtime"
description: "Configure container working directory, startup command, and image overrides for custom runtime behavior."
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/runtime
---

# Runtime Configuration

Configure runtime settings to customize how your Docker container executes,
including the working directory and startup command. These settings allow you to
override the default behavior defined in your Docker image.

## Runtime Settings Overview

Runtime configuration provides control over:

- **Working Directory**: The directory where your application runs inside the
  container
- **Startup Command**: The command executed when the container starts
- **Image Overrides**: Customization that supersedes Docker image defaults

## Working Directory

### What is Working Directory?

The working directory is the file system location where your application runs
inside the container. It serves as the default location for relative file paths
and command execution.

**Default Behavior:**

- If left empty, uses the working directory defined in the Docker image
- Most images define a sensible default (often `/app`, `/usr/src/app`, or
  `/opt/app`)

**Custom Working Directory:**

- Override the image default with a specific path
- Must be an absolute path (starting with `/`)

**Examples:**

```
/app                    # Common for Node.js, Python apps
/usr/src/app           # Alternative for web applications
/opt/myapp             # Custom application directory
```

## Startup Command

### What is Startup Command?

The startup command defines what executes when your container starts. This can
be application startup, script execution, or service commands.

**Default Behavior:**

- If left empty, uses the `CMD` or `ENTRYPOINT` defined in the Docker image

**Custom Commands:**

- Override the image default with your specific command
- Can include command-line arguments and flags

**Examples:**

```
node server.js                    # Node.js application
python app.py                     # Python application
npm start                         # Using npm scripts
java -jar app.jar                 # Java application
```

## Best Practices

- **Use Standard Paths**: Follow common conventions for your application type
- **Foreground Execution**: Ensure your command runs in the foreground (doesn't
  exit immediately)
- **Absolute Paths**: Always use absolute paths for working directories starting
  with `/`
- **Test Locally**: Verify your configuration works with `docker run` before
  deploying
