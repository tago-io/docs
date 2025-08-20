---
title: TagoCore Overview
description: Discover TagoCore, the free, fast, and open-source IoT platform for edge computing and local deployments.
---

# TagoCore Overview

TagoCore is TagoIO's free, fast, and open-source IoT platform designed for edge computing and local deployments. It provides the core functionality of TagoIO in a lightweight package that can be deployed on-premises, at the edge, or in private cloud environments.

## What is TagoCore?

TagoCore brings TagoIO's powerful IoT capabilities to edge computing scenarios where:

- **Data must stay local** due to security, compliance, or latency requirements
- **Connectivity is limited** or intermittent
- **Real-time processing** is critical for operations
- **Cost optimization** through local processing is needed
- **Open-source flexibility** is preferred

## Key Features

### Open Source Architecture
- **MIT License** - Free to use, modify, and distribute
- **Community-driven** development and support
- **Transparent codebase** on GitHub
- **Extensible plugin system** for custom functionality
- **No vendor lock-in** - full control over your deployment

### Edge Computing Optimized
- **Lightweight footprint** - Minimal resource requirements
- **Low latency processing** - Process data at the source
- **Offline operation** - Works without internet connectivity
- **Local data storage** - Keep sensitive data on-premises
- **Edge-to-cloud sync** - Synchronize with cloud when needed

### TagoIO Compatibility
- **Familiar interface** - Same concepts as TagoIO cloud
- **Dashboard compatibility** - Migrate dashboards from cloud
- **API compatibility** - Use existing TagoIO integrations
- **Hybrid deployments** - Mix cloud and edge components
- **Migration path** - Easy transition between cloud and edge

## Architecture

TagoCore consists of several key components:

### Core Services
- **Data Engine** - High-performance data storage and retrieval
- **Device Manager** - Handle device connections and authentication
- **Dashboard Engine** - Render dashboards and visualizations
- **Analysis Runtime** - Execute custom scripts and logic
- **API Gateway** - RESTful API for external integrations

### Plugin System
- **Device Connectors** - Add support for new device types
- **Data Processors** - Custom data transformation logic
- **Notification Services** - Alert and notification capabilities
- **Storage Adapters** - Connect to different storage systems
- **Authentication Providers** - Integrate with identity systems

## Deployment Options

### Docker Deployment
```bash
# Quick start with Docker
docker run -d -p 8080:8080 tagoio/tagocore:latest
```

### Local Installation
- **Windows** - MSI installer package
- **macOS** - DMG installer package  
- **Linux** - DEB/RPM packages or binary installation
- **ARM devices** - Raspberry Pi and other ARM platforms

### Cloud Deployment
- **AWS** - EC2, ECS, or Lambda deployments
- **Azure** - Container instances or App Service
- **Google Cloud** - Cloud Run or Compute Engine
- **Kubernetes** - Helm charts for container orchestration

## Use Cases

### Industrial IoT
- **Factory floor monitoring** with real-time dashboards
- **Equipment maintenance** with predictive analytics
- **Quality control** with automated alerts
- **Production optimization** through local data processing

### Smart Buildings
- **HVAC monitoring** and control systems
- **Energy management** with local optimization
- **Security system integration** and monitoring
- **Occupancy tracking** and space optimization

### Remote Locations
- **Mining operations** with limited connectivity
- **Agricultural monitoring** in rural areas
- **Oil and gas** remote facility monitoring
- **Environmental monitoring** in remote locations

### Development and Testing
- **Local development** environment for IoT solutions
- **Testing and validation** before cloud deployment
- **Proof of concept** development
- **Educational projects** and learning environments

## Getting Started

### System Requirements

**Minimum Requirements:**
- **CPU**: 1 core (ARM or x86)
- **RAM**: 512MB
- **Storage**: 1GB available space
- **OS**: Linux, Windows 10+, or macOS 10.14+

**Recommended Requirements:**
- **CPU**: 2+ cores
- **RAM**: 2GB
- **Storage**: 10GB SSD storage
- **Network**: Ethernet connection

### Installation Steps

1. **Download TagoCore**
   - Visit [TagoCore releases](https://github.com/tago-io/tagocore/releases)
   - Choose your platform (Windows, macOS, Linux, or Docker)
   - Download the appropriate installer or image

2. **Install and Configure**
   ```bash
   # For Docker
   docker pull tagoio/tagocore:latest
   docker run -d -p 8080:8080 --name tagocore tagoio/tagocore:latest
   
   # For Linux (example)
   sudo dpkg -i tagocore_1.0.0_amd64.deb
   sudo systemctl start tagocore
   ```

3. **Access Web Interface**
   - Open browser to `http://localhost:8080`
   - Complete initial setup wizard
   - Create your first admin user

4. **Connect Your First Device**
   - Create a device in the TagoCore interface
   - Configure device connection (HTTP, MQTT, etc.)
   - Send test data to verify connectivity

## Development and Customization

### Plugin Development
TagoCore supports custom plugins for extending functionality:

```javascript
// Example device connector plugin
class CustomDeviceConnector {
  constructor(config) {
    this.config = config;
  }
  
  async processData(payload) {
    // Custom data processing logic
    return transformedData;
  }
}
```

### API Integration
TagoCore provides REST APIs compatible with TagoIO:

```javascript
// Send data to TagoCore
const response = await fetch('http://localhost:8080/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Device-Token': 'your-device-token'
  },
  body: JSON.stringify({
    variable: 'temperature',
    value: 23.5,
    unit: '°C'
  })
});
```

## Community and Support

### Open Source Community
- **GitHub Repository** - [github.com/tago-io/tagocore](https://github.com/tago-io/tagocore)
- **Issue Tracking** - Report bugs and request features
- **Discussions** - Community support and collaboration
- **Contributing** - Contribute code, documentation, and plugins

### Documentation and Resources
- **Official Documentation** - Complete setup and usage guides
- **API Reference** - Detailed API documentation
- **Plugin Gallery** - Community-contributed plugins
- **Examples** - Sample applications and use cases

### Commercial Support
While TagoCore is open source, TagoIO offers:
- **Professional support** - SLA-backed technical support
- **Custom development** - Tailored solutions and plugins
- **Training** - On-site or remote training programs
- **Migration services** - Help moving from other platforms

## TagoCore vs TagoIO Cloud

| Feature | TagoCore | TagoIO Cloud |
|---------|----------|--------------|
| **Deployment** | Self-hosted | Cloud-hosted |
| **Cost** | Free (open source) | Subscription-based |
| **Scalability** | Hardware-limited | Unlimited cloud scale |
| **Maintenance** | Self-managed | Fully managed |
| **Updates** | Manual updates | Automatic updates |
| **Support** | Community + Commercial | Full commercial support |
| **Customization** | Full source access | Configuration-based |

## Migration and Hybrid Deployments

### Cloud to Edge Migration
- Export dashboards from TagoIO cloud
- Import device configurations to TagoCore
- Set up data synchronization if needed
- Test functionality in edge environment

### Hybrid Architecture
- **Edge processing** for real-time requirements
- **Cloud analytics** for long-term analysis
- **Data synchronization** between edge and cloud
- **Failover capabilities** for high availability

## Next Steps

- **Install TagoCore**: Follow the [installation guide](./installation)
- **Join the Community**: Connect with developers on [GitHub](https://github.com/tago-io/tagocore)
- **Explore Examples**: Check out sample applications and use cases
- **Build Your Solution**: Start developing your edge IoT application

## Additional Resources

- [TagoCore GitHub Repository](https://github.com/tago-io/tagocore) - Source code and releases
- [TagoCore Documentation](https://docs.tagocore.com) - Complete technical documentation
- [Community Forum](https://community.tago.io) - Ask questions and share solutions
- [Professional Support](https://tago.io/support) - Commercial support options