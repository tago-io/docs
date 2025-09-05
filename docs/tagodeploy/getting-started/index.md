---
title: "TagoDeploy"
description: "A brief overview of Tago Deploy, a dedicated single-tenant IoT platform built on the TagoIO architecture, with an architecture overview and pointers to core capabilities, add-on services, and implementation considerations."
slug: /tagodeploy
---

Tago Deploy provides a dedicated, single‑tenant IoT platform environment built
on the complete TagoIO architecture. This enterprise solution delivers isolated
infrastructure with full resource control, enabling organizations to operate
their IoT platform without shared infrastructure constraints.

![Image 1](/docs_imagem/tagoio/external-45f285f7.png)

## Architecture Overview

The following diagram provides an overview of the TagoIO platform, showing how a
Tago Deploy environment delivers complete isolation of infrastructure and
resources for each deployment. This isolation ensures dedicated compute,
storage, and networking for enterprise customers.

Tago Deploy operates as a dedicated instance of the TagoIO platform, providing
complete isolation of compute, storage, and networking resources. The platform
can be deployed across 12+ AWS regions globally, allowing organizations to
position their infrastructure based on latency requirements, compliance needs,
or data residency regulations.

The deployment includes custom API endpoints and administrative interfaces with
configurable URLs, enabling complete white‑label implementation. All TagoIO
platform capabilities are included, with the addition of TagoRUN integration for
custom application deployment and user management.

## Core Capabilities

### Dedicated Infrastructure

Each Tago Deploy instance operates on isolated infrastructure with dedicated
resources. Organizations receive their own compute instances, storage systems,
and network configurations without sharing resources with other tenants. This
architecture ensures predictable performance and eliminates the resource
contention common in multi‑tenant environments.

![Image 2](/docs_imagem/tagoio/external-2780a3eb.png)

### Scalable Resource Configuration

The platform supports dynamic resource scaling based on workload requirements.
Organizations can configure CPU allocation, instance counts, and auto‑scaling
rules to handle varying traffic patterns. The infrastructure scales both
horizontally and vertically, with the ability to modify resource allocation in
real time based on usage patterns.

![Image 3](/docs_imagem/tagoio/external-6f637812.png)

Resource limits are configurable rather than fixed, allowing organizations to
define their own constraints for:

- API request rates per minute
- Maximum device connections
- Data storage allocation
- Dashboard quantities
- Tag and bucket limits

![Image 4](/docs_imagem/tagoio/external-5170193e.png)

### Data Protection and Recovery

Automated backup systems protect platform data and configurations. The backup
solution covers device registrations, historical data, dashboard configurations,
analysis scripts, and platform settings. Backup schedules and retention policies
are configurable to meet specific recovery time objectives and compliance
requirements.

![Image 5](/docs_imagem/tagoio/external-daf4b462.png)

### Custom Domain Management

Organizations can deploy custom domains for both administrative interfaces and
TagoRUN portals. This capability includes SSL certificate management, DNS
configuration, and domain routing setup. The custom domain functionality enables
complete platform branding and maintains consistent user experience across all
platform touchpoints.

![Image 6](/docs_imagem/tagoio/external-24882c27.png)

### Version Control and Updates

Platform updates and feature deployments are managed through controlled
versioning. Organizations maintain authority over when updates are applied,
allowing for testing and validation in non‑production environments before
rolling changes to production systems. This approach ensures operational
stability while providing access to new platform capabilities.

## Add-on Services

### MQTT Broker

A dedicated MQTT broker can be deployed within the Tago Deploy environment,
providing complete control over device communication protocols. The broker
supports custom authentication mechanisms, message routing rules, and protocol
configurations tailored to specific IoT deployment requirements.

![Image 7](/docs_imagem/tagoio/external-13c3db0d.png)

### Middleware Services

Custom middleware components can be deployed to extend platform functionality or
integrate with existing enterprise systems. These services operate within the
isolated environment while maintaining full access to platform APIs and data
streams. Services such as LNS (LoRaWAN Network Service) for Netmore, TTI, and
others, and MQTT are supported.

![Image 8](/docs_imagem/tagoio/external-4045d1cd.png)

## Technical Specifications

- Global Deployment: Available across 12+ AWS regions
- Custom URLs Configurable API and admin interface endpoints
- Resource Scaling: Dynamic CPU, memory, and instance scaling
- Data Isolation: Complete tenant separation at infrastructure level
- Backup Systems: Automated data protection and recovery
- Domain Management: Custom SSL and DNS configuration
- Version Control: Managed update and rollback capabilities

## Implementation Considerations

Organizations considering Tago Deploy should evaluate their specific
requirements for data isolation, regulatory compliance, and resource scaling
needs. The platform is designed for enterprises requiring dedicated IoT
infrastructure with the operational flexibility to customize resource allocation
and platform behavior.

For detailed pricing and deployment specifications, contact the TagoIO team at
[contact@tago.io](mailto:contact@tago.io).
