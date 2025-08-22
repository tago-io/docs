---
title: "Tago Deploy: Enterprise IoT Platform Infrastructure"
description: "A brief overview of Tago Deploy, a dedicated single-tenant IoT platform built on the TagoIO architecture, with an architecture overview and pointers to core capabilities, add-on services, and implementation considerations."
tags: ["tagodeploy"]
---
Tago Deploy provides a dedicated, single‑tenant IoT platform environment built on the complete TagoIO architecture. This enterprise solution delivers isolated infrastructure with full resource control, enabling organizations to operate their IoT platform without shared infrastructure constraints.

![Image 1](https://help.tago.io/galleryDocuments/edbsna09bcf1e27b84c1788c384610d54dc6ca6b66f9d42c116ec1fdaabf3352a37efcc90a745fcb0ea2e9eee819d84b4e0a9?inline=true)

## Architecture Overview

The following diagram provides an overview of the TagoIO platform, showing how a Tago Deploy environment delivers complete isolation of infrastructure and resources for each deployment. This isolation ensures dedicated compute, storage, and networking for enterprise customers.

Tago Deploy operates as a dedicated instance of the TagoIO platform, providing complete isolation of compute, storage, and networking resources. The platform can be deployed across 12+ AWS regions globally, allowing organizations to position their infrastructure based on latency requirements, compliance needs, or data residency regulations.

The deployment includes custom API endpoints and administrative interfaces with configurable URLs, enabling complete white‑label implementation. All TagoIO platform capabilities are included, with the addition of TagoRUN integration for custom application deployment and user management.

## Core Capabilities

### Dedicated Infrastructure
Each Tago Deploy instance operates on isolated infrastructure with dedicated resources. Organizations receive their own compute instances, storage systems, and network configurations without sharing resources with other tenants. This architecture ensures predictable performance and eliminates the resource contention common in multi‑tenant environments.

![Image 2](https://help.tago.io/galleryDocuments/edbsnaf1a19002edcc3a2b424f9ff2d649fd74c226439454f19a536982bea6f211016670becc7e9b23c130fd7d55e647e1879?inline=true)

### Scalable Resource Configuration
The platform supports dynamic resource scaling based on workload requirements. Organizations can configure CPU allocation, instance counts, and auto‑scaling rules to handle varying traffic patterns. The infrastructure scales both horizontally and vertically, with the ability to modify resource allocation in real time based on usage patterns.

![Image 3](https://help.tago.io/galleryDocuments/edbsn4d4a67a529d4125151b05ae73902daeafce2a3d5c98f17b5f7be27440f8915661a5de2dbcaac14ca7f6ea03a561320db?inline=true)

Resource limits are configurable rather than fixed, allowing organizations to define their own constraints for:

- API request rates per minute  
- Maximum device connections  
- Data storage allocation  
- Dashboard quantities  
- Tag and bucket limits  

![Image 4](https://help.tago.io/galleryDocuments/edbsnd403ac8d638c22e7aa4e2d43bd25f3fd416147f17b6d661cf9ec4b11677c4abf1faff96f1b0d432694bd03c02a2bd79e?inline=true)

### Data Protection and Recovery
Automated backup systems protect platform data and configurations. The backup solution covers device registrations, historical data, dashboard configurations, analysis scripts, and platform settings. Backup schedules and retention policies are configurable to meet specific recovery time objectives and compliance requirements.

![Image 5](https://help.tago.io/galleryDocuments/edbsn0b7df50b32edad2fcb5e682330299b1d5da3ba78817d9d0da4b6ec99af6f79f1be309bc4cea02925fbee495b05898461?inline=true)

### Custom Domain Management
Organizations can deploy custom domains for both administrative interfaces and TagoRUN portals. This capability includes SSL certificate management, DNS configuration, and domain routing setup. The custom domain functionality enables complete platform branding and maintains consistent user experience across all platform touchpoints.

![Image 6](https://help.tago.io/galleryDocuments/edbsnb54456a01934ea873335b120ae90b31f28affd76c8e761af193ba8dd64a2f946bc15980ea57f3df8adafc28e873b624f?inline=true)

### Version Control and Updates
Platform updates and feature deployments are managed through controlled versioning. Organizations maintain authority over when updates are applied, allowing for testing and validation in non‑production environments before rolling changes to production systems. This approach ensures operational stability while providing access to new platform capabilities.

## Add-on Services

### MQTT Broker
A dedicated MQTT broker can be deployed within the Tago Deploy environment, providing complete control over device communication protocols. The broker supports custom authentication mechanisms, message routing rules, and protocol configurations tailored to specific IoT deployment requirements.

![Image 7](https://help.tago.io/galleryDocuments/edbsn5815235d8d6da99830135e90778251a5e1a48b410ad80a19c42ba939c58f8b005db5cf9275dfbcc9b1cca8a5a36c637f?inline=true)

### Middleware Services
Custom middleware components can be deployed to extend platform functionality or integrate with existing enterprise systems. These services operate within the isolated environment while maintaining full access to platform APIs and data streams. Services such as LNS (LoRaWAN Network Service) for Netmore, TTI, and others, and MQTT are supported.

![Image 8](https://help.tago.io/galleryDocuments/edbsnc1f8e89507360d961768acc5360d97f4bcdbd980fafaa87954a6b924780048ea83d8e0ec1e2ce0513770e87d785225c2?inline=true)

## Technical Specifications

- Global Deployment: Available across 12+ AWS regions  
- Custom URLs Configurable API and admin interface endpoints  
- Resource Scaling: Dynamic CPU, memory, and instance scaling  
- Data Isolation: Complete tenant separation at infrastructure level  
- Backup Systems: Automated data protection and recovery  
- Domain Management: Custom SSL and DNS configuration  
- Version Control: Managed update and rollback capabilities  

## Implementation Considerations

Organizations considering Tago Deploy should evaluate their specific requirements for data isolation, regulatory compliance, and resource scaling needs. The platform is designed for enterprises requiring dedicated IoT infrastructure with the operational flexibility to customize resource allocation and platform behavior.

For detailed pricing and deployment specifications, contact the TagoIO team at [contact@tago.io](mailto:contact@tago.io).