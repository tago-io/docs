# TagoCore - Open Source IoT Platform

TagoCore is a **free**, **fast**, and **open-source** IoT platform for edge computing that you can use to parse and analyze data from your devices. Built for developers who need full control over their IoT infrastructure, TagoCore runs on edge computers, local servers, or cloud environments.

## What is TagoCore?

TagoCore provides a complete IoT platform that you can deploy anywhere - from Raspberry Pi devices to enterprise servers. Unlike cloud-based solutions, TagoCore gives you complete ownership and control over your data and infrastructure.

### Key Benefits

#### ✨ **Free and Open Source**
- No licensing fees or usage limits
- Full source code access
- Community-driven development
- MIT license for commercial use

#### ⚡ **Fast and Efficient**
- Optimized for edge computing
- Low resource requirements
- High-performance data processing
- Real-time analytics capabilities

#### 🔧 **Fully Customizable**
- Extend functionality with plugins
- Customize to your specific needs
- Integrate with existing systems
- Complete API access

#### 🌍 **Deploy Anywhere**
- Edge devices (Raspberry Pi, industrial computers)
- Local servers and data centers
- Cloud instances (AWS, Google Cloud, Azure)
- Hybrid deployments

## Quick Start

Getting TagoCore up and running is incredibly simple:

```bash
docker run -p 8888:8888 -p 8999:8999 tagoio/tagocore
```

That's it! TagoCore is now running and accessible at:
- **Web Interface**: http://localhost:8888
- **API Endpoint**: http://localhost:8999

### System Requirements

#### Minimum Requirements
- **RAM**: 512MB
- **Storage**: 1GB available space
- **CPU**: Single core (ARM or x86)
- **OS**: Linux, Windows, macOS

#### Recommended Requirements
- **RAM**: 2GB or more
- **Storage**: 10GB available space
- **CPU**: Dual core or better
- **OS**: Linux (Ubuntu 18.04+ or CentOS 7+)

## Core Concepts

### Devices

Devices are the link between your physical sensors/hardware and the data stored in TagoCore. For any physical device to send data to TagoCore, you must create a corresponding Device in the application.

**Device Features:**
- Unique device tokens for authentication
- Automatic data routing to buckets
- Real-time status monitoring
- Configurable data parsing

[Learn more about Devices](https://docs.tagocore.com/device) →

### Buckets

Buckets are where device data is stored. When you create a Device, TagoCore automatically creates a corresponding bucket with the same name. The bucket stores all time-series data from that device.

**Bucket Features:**
- Automatic creation with devices
- Time-series data storage
- Efficient querying capabilities
- Data retention policies

[Learn more about Buckets](https://docs.tagocore.com/bucket) →

### Analyses

Analyses allow you to implement custom scripts to analyze and manipulate data from any device in real-time. You can combine Analyses with Actions to execute code automatically when specific events occur.

**Analysis Capabilities:**
- Real-time data processing
- Custom business logic implementation
- Multi-device data correlation
- Automated decision making

**Supported Languages:**
- **JavaScript/Node.js** - Primary development language
- **Python** - Via plugin system
- **Other languages** - Through plugin architecture

[Learn more about Analyses](https://docs.tagocore.com/analysis) →

### Actions

Actions enable you to execute automated responses when specific events happen in TagoCore. They provide the trigger mechanism for running analyses, sending notifications, or integrating with external systems.

**Available Action Types:**
- **HTTP Requests** - Call external APIs and webhooks
- **Run Analyses** - Execute custom scripts
- **Send Data to TagoIO** - Cloud integration
- **Plugin Actions** - Extended functionality through plugins

**Trigger Types:**
- Data arrival from devices
- Scheduled execution
- Analysis completion
- External API calls

[Learn more about Actions](https://docs.tagocore.com/action) →

### Plugins

Plugins are extensions that allow developers to add or modify TagoCore functionalities. The plugin system provides unlimited extensibility for custom requirements.

**Plugin Capabilities:**
- Custom data connectors
- New analysis languages
- External system integrations
- UI extensions
- Custom action types

**Plugin Store:**
- Browse community plugins
- Install with one click
- Share your own plugins
- Rate and review plugins

[Learn more about Plugins](https://docs.tagocore.com/plugins) →

## Installation Options

### Docker Installation (Recommended)

#### Basic Installation
```bash
# Pull and run TagoCore
docker run -d --name tagocore \
  -p 8888:8888 \
  -p 8999:8999 \
  tagoio/tagocore
```

#### Persistent Data Storage
```bash
# Run with volume mapping for data persistence
docker run -d --name tagocore \
  -p 8888:8888 \
  -p 8999:8999 \
  -v tagocore_data:/app/data \
  tagoio/tagocore
```

#### Custom Configuration
```bash
# Run with custom configuration file
docker run -d --name tagocore \
  -p 8888:8888 \
  -p 8999:8999 \
  -v /path/to/config:/app/config \
  -v tagocore_data:/app/data \
  tagoio/tagocore
```

### Native Installation

#### Linux (Ubuntu/Debian)
```bash
# Install Node.js (required)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Download and install TagoCore
wget https://github.com/tago-io/tagocore/releases/latest/download/tagocore-linux.tar.gz
tar -xzf tagocore-linux.tar.gz
cd tagocore
npm install
npm start
```

#### Windows
1. Download Node.js from [nodejs.org](https://nodejs.org)
2. Download TagoCore Windows package
3. Extract and run `npm install`
4. Start with `npm start`

#### macOS
```bash
# Install Node.js via Homebrew
brew install node

# Download and install TagoCore
curl -L https://github.com/tago-io/tagocore/releases/latest/download/tagocore-macos.tar.gz | tar -xz
cd tagocore
npm install
npm start
```

## Architecture Overview

### Data Flow

```
Device → TagoCore → Bucket
   ↓         ↓
Analysis ← Action
   ↓
External Systems
```

**1. Data Ingestion**
- Devices send data via HTTP/MQTT
- Data automatically routed to device buckets
- Real-time processing and validation

**2. Processing Layer**
- Analyses process incoming data
- Actions trigger automated responses
- Real-time decision making

**3. Storage Layer**
- Time-series data in buckets
- Efficient querying and retrieval
- Configurable retention policies

**4. Integration Layer**
- Plugin system for extensions
- External API integrations
- Cloud service connections

### Communication Protocols

#### HTTP REST API
```bash
# Send data to device
curl -X POST http://localhost:8999/data \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer DEVICE_TOKEN" \
  -d '[{
    "variable": "temperature",
    "value": 23.5,
    "unit": "°C"
  }]'
```

#### MQTT Support
```bash
# Connect to TagoCore MQTT broker
mosquitto_pub -h localhost -p 1883 \
  -u "Device Token" \
  -P "DEVICE_TOKEN" \
  -t "topic/data" \
  -m '{"temperature": 23.5}'
```

#### WebSocket Real-time
- Real-time data streaming
- Live dashboard updates
- Bidirectional communication
- Event-driven updates

## Development and Customization

### Plugin Development

#### Creating a Simple Plugin
```javascript
// plugin.js
module.exports = {
  name: 'My Custom Plugin',
  version: '1.0.0',
  
  // Plugin initialization
  init: async (context) => {
    console.log('Plugin initialized');
  },
  
  // Custom action handler
  action: async (context, data) => {
    // Process data
    return { success: true };
  }
};
```

#### Plugin Installation
```bash
# Install from Plugin Store
tagocore plugin install plugin-name

# Install from local file
tagocore plugin install ./my-plugin.tar.gz

# Install from Git repository
tagocore plugin install git+https://github.com/user/plugin.git
```

### Analysis Development

#### JavaScript Analysis Example
```javascript
// temperature-monitor.js
const { Analysis, Utils } = require('@tago-io/tcore-sdk');

async function temperatureMonitor(context, scope) {
  // Get latest temperature reading
  const data = await Utils.getDevice(scope.device)
    .getData({
      variable: 'temperature',
      qty: 1
    });
  
  if (data[0]?.value > 30) {
    // Temperature too high - trigger alert
    await Utils.sendNotification({
      title: 'High Temperature Alert',
      message: `Temperature is ${data[0].value}°C`
    });
  }
}

module.exports = new Analysis(temperatureMonitor);
```

### API Integration

#### RESTful API Usage
```javascript
// Get device data
const response = await fetch('http://localhost:8999/data', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer DEVICE_TOKEN',
    'Content-Type': 'application/json'
  }
});

const data = await response.json();
```

#### SDK Integration
```bash
# Install TagoCore SDK
npm install @tago-io/tcore-sdk
```

```javascript
// Use SDK in your applications
const { Device, Analysis } = require('@tago-io/tcore-sdk');

const device = new Device({ token: 'DEVICE_TOKEN' });
await device.sendData([{
  variable: 'temperature',
  value: 25.3
}]);
```

## Use Cases

### Edge Computing Applications

#### Industrial IoT
- **Factory automation** - Real-time monitoring and control
- **Predictive maintenance** - Equipment health analysis
- **Quality control** - Production line optimization
- **Safety monitoring** - Environmental condition tracking

#### Smart Agriculture
- **Crop monitoring** - Soil moisture and temperature tracking
- **Irrigation control** - Automated watering systems
- **Weather stations** - Local climate monitoring
- **Livestock tracking** - Animal health and location

#### Smart Cities
- **Traffic management** - Flow optimization and monitoring
- **Environmental monitoring** - Air quality and noise levels
- **Energy management** - Smart grid optimization
- **Public safety** - Emergency response systems

### Research and Development

#### Academic Research
- **Data collection** - Long-term environmental studies
- **Prototype development** - IoT proof-of-concepts
- **Student projects** - Learning platform for IoT development
- **Collaborative research** - Multi-institution data sharing

#### Commercial R&D
- **Product development** - IoT product prototyping
- **Market testing** - Field trial data collection
- **Innovation labs** - Rapid prototyping platform
- **Customer pilots** - Proof-of-concept deployments

### Enterprise Deployments

#### Data Sovereignty
- **Regulatory compliance** - Keep data within jurisdiction
- **Security requirements** - Air-gapped environments
- **Privacy concerns** - Sensitive data handling
- **Performance needs** - Low-latency processing

#### Hybrid Architectures
- **Edge + Cloud** - Best of both worlds
- **Data preprocessing** - Reduce cloud costs
- **Backup systems** - Redundancy and reliability
- **Gradual migration** - Smooth cloud transition

## Integration with TagoIO Cloud

### Cloud Connectivity
TagoCore can seamlessly integrate with TagoIO Cloud for hybrid deployments:

#### Data Synchronization
- Selective data forwarding to cloud
- Automated backup and archival
- Multi-site data aggregation
- Cloud analytics and reporting

#### Unified Management
- Single pane of glass for edge and cloud
- Centralized device management
- Global dashboards and monitoring
- Cross-site analysis capabilities

#### Configuration Examples
```javascript
// Forward critical data to TagoIO Cloud
const cloudDevice = new TagoIODevice({ 
  token: 'CLOUD_DEVICE_TOKEN' 
});

// Analysis that forwards high-priority data
if (data.priority === 'high') {
  await cloudDevice.sendData(data);
}
```

## Community and Support

### Open Source Community
- **GitHub Repository**: [github.com/tago-io/tagocore](https://github.com/tago-io/tagocore)
- **Issue Tracking**: Bug reports and feature requests
- **Contributions**: Pull requests welcome
- **Discussions**: Community forums and chat

### Documentation Resources
- **Official Docs**: [docs.tagocore.com](https://docs.tagocore.com)
- **API Reference**: Complete API documentation
- **Tutorials**: Step-by-step guides
- **Examples**: Sample applications and plugins

### Learning Resources
- **Webinar Series**: Regular technical sessions
- **YouTube Channel**: Video tutorials and demos
- **Blog Posts**: Technical articles and use cases
- **Learning Center**: Structured learning paths

### Professional Support
- **Commercial Support**: Available for enterprise users
- **Consulting Services**: Custom development and integration
- **Training Programs**: Team training and certification
- **Priority Support**: Fast response for critical issues

## Performance and Scalability

### Performance Metrics
- **Data Throughput**: 10,000+ data points per second
- **Response Time**: Sub-millisecond API responses
- **Memory Usage**: Minimal footprint (< 100MB base)
- **Storage Efficiency**: Compressed time-series storage

### Scaling Strategies

#### Vertical Scaling
- Increase CPU and memory resources
- Optimize database configuration
- Tune analysis performance
- Monitor resource utilization

#### Horizontal Scaling
- Deploy multiple TagoCore instances
- Load balancing across instances
- Database sharding strategies
- Distributed analysis processing

#### Edge Deployment Patterns
- **Single Instance**: Simple edge deployments
- **Clustered**: High availability setups
- **Hierarchical**: Multi-tier architectures
- **Mesh Networks**: Distributed processing

## Security Features

### Authentication and Authorization
- **Device Tokens**: Secure device authentication
- **User Management**: Role-based access control
- **API Keys**: Granular access permissions
- **Session Management**: Secure web interface access

### Data Security
- **Encryption**: Data encrypted in transit and at rest
- **Access Logs**: Comprehensive audit trails
- **Network Security**: Configurable firewall rules
- **Backup Security**: Encrypted backup storage

### Compliance Support
- **GDPR Compliance**: Data privacy and protection
- **HIPAA Support**: Healthcare data handling
- **Industrial Standards**: IEC 62443 security framework
- **Audit Capabilities**: Comprehensive logging and reporting

## Monitoring and Maintenance

### Health Monitoring
- **System Metrics**: CPU, memory, disk usage
- **Application Metrics**: Request rates, response times
- **Device Status**: Connection health and data flow
- **Analysis Performance**: Execution times and errors

### Maintenance Tools
- **Backup and Restore**: Automated backup systems
- **Log Management**: Centralized logging and analysis
- **Update Management**: Rolling updates and rollbacks
- **Plugin Management**: Install, update, and remove plugins

### Alerting and Notifications
- **System Alerts**: Critical system conditions
- **Device Notifications**: Connection and data alerts
- **Performance Warnings**: Resource utilization thresholds
- **Custom Alerts**: User-defined notification rules

---

## Getting Started Today

### Quick Evaluation
1. **Run the Docker command** above to start TagoCore
2. **Access the web interface** at http://localhost:8888
3. **Create your first device** and send test data
4. **Explore the plugin store** for additional functionality

### Production Deployment
1. **Plan your architecture** - Single instance or clustered
2. **Set up persistent storage** - Configure volumes and backups
3. **Configure security** - Set up authentication and encryption
4. **Deploy monitoring** - Set up health checks and alerting

### Next Steps
- Explore the [official documentation](https://docs.tagocore.com)
- Join the [community discussions](https://help.tago.io/portal/en/community/tagoio/tagocore)
- Check out example projects and tutorials
- Consider hybrid deployment with TagoIO Cloud

---

*TagoCore provides the freedom and flexibility to build IoT solutions exactly how you need them, with complete control over your data and infrastructure. Start your edge computing journey today!*

*Source URLs: [TagoCore Documentation](https://docs.tagocore.com/), [TagoCore Overview](https://help.tago.io/portal/en/kb/articles/tagocore)*