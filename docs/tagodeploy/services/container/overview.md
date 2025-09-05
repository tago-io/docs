---
title: "Custom Docker"
description: "Deploy and manage custom Docker containers in your TagoDeploy project, with image, network, runtime, and logging options."
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/overview
---

# Custom Docker

The **Custom Docker** addon allows you to deploy and manage custom Docker
containers within your TagoIO Deploy projects. This powerful feature enables you
to run any containerized application, microservice, or custom workload alongside
your other project resources.

## What is Container Deployment?

Container deployment provides a flexible way to run Docker containers in your
project infrastructure. This addon supports:

- **Custom Docker Images**: Deploy any Docker image from public or private
  registries
- **Private Registry Support**: Authenticate with Docker Hub, GitHub Container
  Registry, and other private registries
- **Environment Configuration**: Set environment variables for your container
  applications
- **Network Configuration**: Configure port mappings and load balancer settings
  with TLS support
- **Runtime Customization**: Override default working directories and startup
  commands
- **Real-time Monitoring**: View container logs and monitor application
  performance

> [!WARNING]
>
> High log volume can significantly increase your project costs. Monitor your
> application's logging output and configure appropriate log levels to control
> expenses.

## Container Management Features

### Image Management

- **Flexible Image Sources**: Support for Docker Hub, GitHub Container Registry,
  and custom registries
- **Version Control**: Pin specific image tags or use rolling tags like `latest`
- **Private Registry Access**: Secure authentication for private repositories

### Network Configuration

- **Port Mapping**: Map container ports to host ports for external access
- **Protocol Support**: Configure TCP or UDP protocols based on your application
  needs
- **TLS Termination**: Enable TLS/SSL encryption for secure connections
- **Load Balancer Integration**: Automatic integration with project load
  balancing

### Runtime Flexibility

- **Custom Commands**: Override default container startup commands
- **Working Directory**: Set custom working directories for your applications
- **Environment Variables**: Pass configuration and secrets to your containers
- **Resource Management**: Containers run within your project's resource
  allocation

## Getting Started

To deploy a container in your project:

1. **Add Container Addon**: Navigate to your project and add the Container addon
2. **Configure Image**: Set up your Docker image and registry authentication if
   needed
3. **Set Environment**: Configure any required environment variables
4. **Configure Network**: Set up port mappings for external access
5. **Deploy**: Save your configuration to deploy the container

The Container addon integrates seamlessly with your project's existing
infrastructure, providing a powerful platform for running custom applications
alongside your other TagoIO resources.
