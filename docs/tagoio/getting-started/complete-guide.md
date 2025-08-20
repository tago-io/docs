# Getting Started with TagoIO

Welcome to TagoIO! This comprehensive guide will help you get started with the platform, from setting up your first device to creating your first dashboard.

## What is TagoIO?

TagoIO is a complete IoT platform that enables you to:
- **Connect Devices**: Integrate sensors and IoT devices
- **Store Data**: Manage and process IoT data efficiently
- **Visualize Information**: Create interactive dashboards
- **Analyze Data**: Run custom business logic and analytics
- **Automate Actions**: Set up triggers and notifications
- **Control Devices**: Send commands and manage device states

## Quick Start Checklist

Follow these steps to get your IoT application up and running:

### ✅ Step 1: Create Your Account
1. Visit [TagoIO Admin](https://admin.tago.io)
2. Sign up for a free account
3. Verify your email address
4. Choose your preferred database region (US or EU)

### ✅ Step 2: Add Your First Device
1. Go to **Devices** in the Admin panel
2. Click **Add Device**
3. Select a [Connector](https://help.tago.io/portal/en/kb/articles/466-connector-overview) that matches your device
4. Configure device settings and data storage type
5. Save your device and note the **Device Token**

### ✅ Step 3: Send Test Data
1. Use the **Device Emulator** to send test data
2. Monitor incoming data with **Live Inspector**
3. Verify data is being stored correctly
4. Configure [Payload Parser](https://help.tago.io/portal/en/kb/articles/147-payload-parser) if needed

### ✅ Step 4: Create Your First Dashboard
1. Go to **Dashboards** in the Admin panel
2. Click **Add Dashboard**
3. Add widgets to display your device data
4. Configure data sources and styling
5. Save and test your dashboard

### ✅ Step 5: Set Up Actions (Optional)
1. Go to **Actions** in the Admin panel
2. Create actions for notifications or device control
3. Set up triggers based on your data
4. Test action functionality

## Detailed Setup Guide

### Device Configuration

#### Choosing Storage Type
When creating a device, you'll choose between two storage types:

**Device Optimized Data (Immutable)**
- ✅ Up to 36 million data points
- ✅ High performance and fast queries
- ✅ Ideal for compliance requirements
- ✅ Automatic data retention policies
- ❌ Cannot edit or delete individual data points

**Managed Data Optimized (Mutable)**
- ✅ Full CRUD operations (Create, Read, Update, Delete)
- ✅ Easy data manipulation
- ✅ Good for configuration data
- ❌ Limited to 50k data points
- ❌ No automatic data retention

#### Device Token Security
Your device token is like a password for your device:
- 🔒 Keep it secure and private
- 🔄 Rotate tokens regularly
- 📝 Store tokens securely in your application
- ⚠️ Never expose tokens in client-side code

### Data Integration

#### Supported Protocols
TagoIO supports multiple communication protocols:

**HTTP/HTTPS**
- REST API endpoints
- JSON data format
- Secure SSL communication
- Rate limiting applies

**MQTT** (US region, Starter/Scale plans)
- Lightweight messaging protocol
- Real-time bidirectional communication
- Topics for organized data routing
- SSL encryption available

**LoRaWAN**
- Long-range, low-power protocol
- Multiple network providers supported
- Automatic payload parsing
- Downlink command support

**Sigfox**
- Ultra-narrowband IoT protocol
- Battery-efficient communication
- Global network coverage
- Simple integration

#### Data Format
TagoIO expects data in a specific JSON format:

```json
[
  {
    "variable": "temperature",
    "value": 23.5,
    "unit": "°C",
    "time": "2023-12-01T10:30:00Z",
    "location": {
      "lat": 40.7128,
      "lng": -74.0060
    }
  }
]
```

### Dashboard Creation

#### Planning Your Dashboard
Before creating widgets, consider:

1. **Purpose**: What story does your data tell?
2. **Audience**: Who will use this dashboard?
3. **Layout**: How should information be organized?
4. **Interactivity**: What controls do users need?

#### Widget Selection Guide

**For Real-time Monitoring:**
- 📊 Line Charts for trends
- 🎛️ Gauges for current values
- 🗺️ Maps for location data
- 🚨 Status indicators for alerts

**For Historical Analysis:**
- 📈 Line and area charts
- 📊 Bar charts for comparisons
- 📋 Tables for detailed data
- 📅 Time-based filtering

**For Device Control:**
- 🔘 Buttons for actions
- 📝 Input forms for configuration
- 🎚️ Sliders for adjustments
- 🔄 Toggle switches

#### Dashboard Best Practices

**Design Principles:**
- Keep it simple and focused
- Use consistent colors and fonts
- Group related information
- Provide clear labels and units

**Performance Tips:**
- Limit widgets per dashboard (< 20)
- Use appropriate refresh rates
- Filter data efficiently
- Optimize queries for speed

### Common Integration Patterns

#### Sensor Monitoring
```
Sensor → Network → TagoIO Device → Dashboard
                                 ↓
                              Analysis → Actions
```

#### Asset Tracking
```
GPS Tracker → LoRaWAN/Cellular → TagoIO → Map Widget
                                         ↓
                                    Geofence Analysis → Alerts
```

#### Environmental Monitoring
```
Weather Station → WiFi/Ethernet → TagoIO → Charts & Gauges
                                          ↓
                                      Threshold Analysis → Email/SMS
```

#### Industrial IoT
```
Machinery → Industrial Gateway → TagoIO → Process Dashboard
                                        ↓
                                    Predictive Analysis → Maintenance Actions
```

## Advanced Configuration

### Payload Parsing
When your device sends data in a custom format, you can use payload parsers to transform it:

```javascript
// Example payload parser
const payload = [
  {
    variable: 'temperature',
    value: payload_raw.temp / 100, // Convert from centidegrees
    unit: '°C'
  },
  {
    variable: 'humidity',
    value: payload_raw.hum / 100, // Convert from percentage * 100
    unit: '%'
  }
];
```

### Analysis Scripts
Create custom business logic with Analysis:

```javascript
// Example analysis for threshold checking
const { Analysis, Account, Device } = require('@tago-io/sdk');

async function myAnalysis(context) {
  const account = new Account({ token: context.token });
  const device = new Device({ token: 'device-token' });
  
  // Get latest temperature reading
  const data = await device.getData({
    variable: 'temperature',
    qty: 1
  });
  
  if (data[0]?.value > 30) {
    // Send notification when temperature exceeds 30°C
    await account.actions.send({
      action: 'notification-action-id',
      data: { message: 'High temperature alert!' }
    });
  }
}
```

### Actions and Automation
Set up automated responses to data events:

**Trigger Types:**
- **Variable**: Based on data values
- **Schedule**: Time-based triggers
- **MQTT Topic**: Message-based triggers
- **Resource**: Device/user events

**Action Types:**
- **Notification**: Email, SMS, push notifications
- **Analysis**: Run custom scripts
- **HTTP**: Call external APIs
- **Device Control**: Send commands to devices

## Development Environment

### Local Testing
Set up a development environment:

1. **Install Node.js** for analysis development
2. **Use Device Emulator** for testing
3. **Set up Git** for version control
4. **Configure IDE** with TagoIO extensions

### API Development
Use TagoIO's REST API for custom integrations:

```bash
# Example API call to send data
curl -X POST "https://api.tago.io/data" \
  -H "Authorization: Bearer YOUR_DEVICE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '[{
    "variable": "temperature",
    "value": 25.3,
    "unit": "°C"
  }]'
```

### SDK Usage
Use official SDKs for easier development:

- **Node.js SDK**: @tago-io/sdk
- **Python SDK**: tago-sdk-python
- **Arduino Libraries**: Available in library manager

## Troubleshooting

### Common Issues

**Device Not Receiving Data:**
1. Check device token validity
2. Verify network connectivity
3. Review payload format
4. Check rate limits
5. Examine Live Inspector logs

**Dashboard Not Updating:**
1. Verify widget data sources
2. Check device data availability
3. Review time filters
4. Confirm refresh settings

**Analysis Not Running:**
1. Check trigger configuration
2. Verify analysis code syntax
3. Review execution logs
4. Confirm resource limits

### Getting Help

**Documentation Resources:**
- 📚 [Knowledge Base](https://help.tago.io/portal/en/kb)
- 🎓 [Learning Center](https://tago.io/learning-center)
- 💬 [Community Forum](https://help.tago.io/portal/en/community)
- 🎯 [Tutorials](https://help.tago.io/portal/en/kb/tagoio/tutorials)

**Support Channels:**
- 🎫 [Support Tickets](https://help.tago.io/portal/en/newticket)
- 💬 Community discussions
- 📧 Email support (paid plans)
- 📞 Phone support (enterprise plans)

## Next Steps

Once you have the basics working:

1. **Explore Advanced Features:**
   - Custom widgets
   - External integrations
   - Advanced analytics
   - User management

2. **Optimize Performance:**
   - Data retention policies
   - Query optimization
   - Dashboard efficiency
   - Resource monitoring

3. **Scale Your Application:**
   - Multi-tenant architecture
   - White-label solutions
   - Enterprise features
   - Global deployment

4. **Join the Community:**
   - Share your projects
   - Learn from others
   - Contribute to discussions
   - Request new features

---

🚀 **Ready to start building?** Head over to [TagoIO Admin](https://admin.tago.io) and create your first device!

*For detailed technical documentation, visit our [API Documentation](https://help.tago.io/portal/en/kb/articles/31-api-overview) and [Learning Center](https://tago.io/learning-center).*