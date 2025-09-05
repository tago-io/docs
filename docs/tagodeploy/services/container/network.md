---
title: "Container Network Configuration"
description: "Configure protocol, port mappings, TLS, and load balancer integration for container networking."
tags: ["tagodeploy", "container"]
slug: /tagodeploy/project/container/network
---

# Network Configuration

Configure network settings for your Docker container, including load balancer
ports, communication protocols, and TLS encryption. Network configuration
determines how external traffic reaches your container and how your application
communicates with other services.

## Network Settings Overview

The network configuration provides control over:

- **Protocol Selection**: Choose between TCP and UDP protocols
- **Port Mapping**: Map container ports to external host ports
- **TLS Encryption**: Enable secure connections with TLS/SSL termination
- **Load Balancer Integration**: Automatic integration with project load
  balancing

## Network Protocol

### Protocol Selection

Choose the appropriate protocol for your application's communication needs:

- **TCP (Transmission Control Protocol)**: Reliable, connection-oriented
  protocol ideal for web applications, APIs, and services requiring guaranteed
  delivery
- **UDP (User Datagram Protocol)**: Faster, connectionless protocol suitable for
  real-time applications, gaming, and streaming services

**Common Protocol Uses:**

- **TCP**: Web servers (HTTP/HTTPS), APIs (REST/GraphQL), databases, file
  transfers
- **UDP**: DNS services, video streaming, online gaming, IoT sensor data

## Port Mappings

Port mappings define how external traffic reaches your container by connecting
container ports to host ports accessible from outside your project.

### Understanding Port Mapping

- **Container Port**: The port your application listens on inside the container
- **Host Port**: The external port that will be accessible from outside the
  project
- **TLS**: Whether to enable TLS/SSL encryption for this port mapping

### Port Mapping Examples

**Web Application (HTTP):**

- Container Port: `3000` (your app's internal port)
- Host Port: `80` (standard HTTP port)
- TLS: `Disabled`

**Web Application (HTTPS):**

- Container Port: `3000` (your app's internal port)
- Host Port: `443` (standard HTTPS port)
- TLS: `Enabled`

**API Service:**

- Container Port: `8080` (API server port)
- Host Port: `8080` (external API access)
- TLS: `Enabled` (for secure API calls)

## TLS Configuration

### What is TLS?

TLS (Transport Layer Security) provides encryption for data transmitted between
clients and your container. It ensures:

- **Data Encryption**: All communication is encrypted in transit
- **Identity Verification**: Clients can verify they're connecting to the
  correct service
- **Data Integrity**: Protection against data tampering during transmission

### When to Enable TLS

**Enable TLS for:**

- **Public-facing web applications** (HTTPS)
- **API endpoints** handling sensitive data
- **Services processing user authentication**
- **Any service requiring encrypted communication**

**TLS may not be needed for:**

- **Internal services** within the project network
- **Development and testing environments**
- **Services behind additional TLS termination**

### TLS Best Practices

- **Always use TLS** for production web applications
- **Enable TLS for APIs** that handle sensitive data
- **Consider performance impact** - TLS adds small overhead
- **Use standard ports** (443 for HTTPS, 8443 for HTTPS APIs)

## Load Balancer Integration

### Automatic Load Balancing

TagoIO Deploy automatically integrates your container with the project's load
balancer:

- **Traffic Distribution**: Incoming requests are distributed across container
  instances
- **Health Checks**: Automatic monitoring of container health and availability
- **SSL Termination**: TLS encryption/decryption handled at the load balancer
  level
- **Scaling Support**: Load balancer adapts to container scaling events

### Load Balancer Features

- **High Availability**: Automatic failover if container instances become
  unavailable
- **Geographic Distribution**: Traffic routing based on client location
- **Protocol Support**: Both TCP and UDP load balancing capabilities
- **Performance Optimization**: Connection pooling and request optimization

## Common Network Configurations

### Single Web Application

**Simple web app setup:**

```
Protocol: TCP
Port Mapping:
- Container: 3000 → Host: 80 (TLS: Disabled)
- Container: 3000 → Host: 443 (TLS: Enabled)
```

### Microservice with API

**Service with both web interface and API:**

```
Protocol: TCP
Port Mappings:
- Container: 3000 → Host: 80 (TLS: Disabled, Web UI)
- Container: 3000 → Host: 443 (TLS: Enabled, Web UI)
- Container: 8080 → Host: 8080 (TLS: Enabled, API)
```

## Security Considerations

### Network Security

- **Minimize Exposed Ports**: Only expose ports that need external access
- **Use TLS**: Enable encryption for all public-facing services
- **Port Ranges**: Avoid using well-known system ports (1-1023) unless necessary
- **Protocol Selection**: Choose the most appropriate protocol for your use case

### Access Control

- **Internal Services**: Consider if services need external access or can remain
  internal
- **Authentication**: Implement application-level authentication for sensitive
  services
- **Rate Limiting**: Configure application-level rate limiting for public APIs
- **Monitoring**: Monitor network traffic for unusual patterns

## Troubleshooting

### Common Network Issues

**Service Not Accessible:**

- Verify port mappings are configured correctly
- Check that your application is listening on the container port
- Ensure the container is running and healthy
- Confirm firewall rules aren't blocking traffic

**TLS Connection Issues:**

- Verify TLS is enabled for the correct port mapping
- Check that your application supports the configured protocol
- Ensure certificates are properly configured (handled automatically by TagoIO)

**Protocol Mismatch:**

- Confirm your application uses the same protocol (TCP/UDP) as configured
- Verify port numbers match between container and mapping configuration
- Check application logs for connection errors

**Performance Issues:**

- Consider if TLS overhead is affecting performance
- Review port mapping efficiency
- Monitor load balancer metrics for bottlenecks
- Check if UDP might be more appropriate for real-time applications
