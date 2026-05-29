---
title: "Container Runtime"
description: "The Runtime section of the Docker Settings page: override the container's work directory and command."
keywords: [tagodeploy, iot, container, runtime, docker]
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/runtime
---

# Runtime Configuration

The **Runtime** section on the container **Docker Settings** page overrides the
default work directory and command from the Docker image. Leave a field empty to
keep the image default. Edit the fields and use **Save** to stage the change,
which is applied through the project deploy flow.

## Work Directory

**Work Directory** is the directory the container runs in. Leave it empty to use
the working directory defined in the image, or set an absolute path (starting
with `/`) to override it. Common values are `/app` and `/usr/src/app`.

## Command

**Command** is what runs when the container starts. Leave it empty to use the
`CMD` or `ENTRYPOINT` from the image, or set your own command with any arguments,
such as `node server.js`, `python app.py`, or `java -jar app.jar`.

Make sure the command runs in the foreground so the container does not exit
right after it starts.
