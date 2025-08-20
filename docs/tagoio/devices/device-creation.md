# Device Creation

Creating devices in TagoIO is straightforward and can be accomplished through the Admin interface. This guide covers the complete process of adding devices with connectors and configuring them properly.

## Prerequisites

Before creating a device, ensure you have:
- Access to your [TagoIO Admin interface](https://admin.tago.io/)
- Understanding of your device's communication method (HTTP or MQTT)
- Knowledge of the data format your device will send
- Appropriate account plan for your expected data volume

## Step-by-Step Device Creation

### 1. Access the Device Module

1. Log into your [TagoIO Admin](https://admin.tago.io/)
2. Navigate to the **Devices** section from the main menu
3. Click the **"Add Device"** button

### 2. Choose a Connector

Connectors are pre-built integrations that simplify device setup. They provide:
- Built-in payload parsers for specific hardware
- Network-specific communication protocols
- Logos, descriptions, and documentation
- Middleware integration when needed

**Types of Connectors:**

#### Direct Communication Connectors
For devices that communicate directly with TagoIO:
- **HTTP Connector**: For web-based applications and REST API clients
- **MQTT Connector**: For IoT devices using MQTT protocol
- **Custom Connector**: For specialized communication needs

#### Network Provider Connectors
For devices using third-party networks:
- **LoRaWAN providers**: The Things Network, Helium, ChirpStack
- **Cellular providers**: Sigfox, NB-IoT, LTE-M
- **Other networks**: WiFi, Bluetooth, Zigbee integrations

### 3. Configure Device Details

#### Basic Information
- **Device Name**: Choose a descriptive name for identification
- **Description**: Optional details about the device's purpose
- **Tags**: Labels for organizing and filtering devices

#### Data Storage Selection
Choose the appropriate storage type:

**Device Optimized Data (Immutable)**
- Select for: Long-term monitoring, compliance, high-volume data
- Benefits: Up to 36M data points, faster queries, immutable records
- Limitations: Cannot edit individual data points

**Managed Data Optimized (Mutable)**
- Select for: Configuration data, forms, editable content
- Benefits: Full edit/delete capabilities, flexible data management
- Limitations: 50K data points maximum, no retention policies

### 4. Network-Specific Configuration

#### For HTTP Devices
- Device token is automatically generated
- Use RESTful API endpoints for data transmission
- Implement proper error handling for HTTP status codes

#### For MQTT Devices
- Device token serves as the MQTT password
- Configure MQTT client with TagoIO broker settings
- Set up topics for publishing and subscribing

#### For Network Provider Devices
- Configure Authorization tokens for device groups
- Set up webhook endpoints for data reception
- Map device identifiers to TagoIO devices

## Advanced Configuration Options

### Configuration Parameters

Set device-specific parameters to customize behavior:

```json
{
  "downlink_port": 1,
  "data_retention_days": 365,
  "custom_parser": true,
  "alert_threshold": 25.5
}
```

**Common Parameters:**
- **Downlink settings**: Configure response messages
- **Parsing options**: Custom data processing rules
- **Alert thresholds**: Trigger values for notifications
- **Retention settings**: Data storage duration

### Payload Parser Customization

Create custom payload parsers for specialized data formats:

```javascript
// Example payload parser for temperature sensor
function parsePayload(payload, device) {
  const data = JSON.parse(payload);
  
  return [
    {
      variable: 'temperature',
      value: data.temp,
      unit: '°C',
      location: data.location
    },
    {
      variable: 'battery',
      value: data.battery,
      unit: '%'
    }
  ];
}
```

### Rate Limiting (Control Tower)

Set custom rate limits to prevent overuse:
- **Requests per minute**: Maximum API calls allowed
- **Data points per hour**: Limit data ingestion rate
- **Burst allowance**: Temporary spikes tolerance

## Device Creation Examples

### Example 1: Temperature Sensor (MQTT)

1. **Choose Connector**: Select "MQTT" from the connector list
2. **Device Name**: "Office Temperature Sensor"
3. **Storage Type**: Device Optimized Data (for historical trends)
4. **Configuration**: Set retention to 2 years
5. **Token**: Copy the generated device token for sensor configuration

### Example 2: User Form Data (HTTP)

1. **Choose Connector**: Select "HTTP" connector
2. **Device Name**: "Customer Feedback Form"
3. **Storage Type**: Managed Data Optimized (for editing responses)
4. **Configuration**: Enable data validation parameters
5. **Integration**: Set up webhook for form submissions

### Example 3: LoRaWAN Asset Tracker

1. **Choose Connector**: Select "The Things Network"
2. **Device Name**: "Asset Tracker #001"
3. **Storage Type**: Device Optimized Data (for tracking history)
4. **Authorization**: Configure TTN application key
5. **Parser**: Use built-in GPS payload parser

## Post-Creation Setup

### 1. Verify Device Configuration
- Check device details in the General Information tab
- Confirm storage type selection
- Verify connector and network settings

### 2. Test Communication
- Use the Device Emulator to send test data
- Monitor the Live Inspector for incoming messages
- Verify data storage in the Data tab

### 3. Configure Data Processing
- Set up Actions for data processing automation
- Create Analysis scripts for advanced data manipulation
- Configure Notifications for alert conditions

### 4. Build Visualizations
- Create Dashboard widgets to display device data
- Set up real-time monitoring dashboards
- Configure data export schedules if needed

## Bulk Device Creation

For large deployments, consider:

### Blueprint Devices
Create template devices that can be duplicated:
1. Configure a master device with all settings
2. Use the Blueprint feature to create multiple instances
3. Assign unique identifiers to each instance

### API-Based Creation
Use TagoIO's API for programmatic device creation:

```javascript
const deviceData = {
  name: "Sensor Device 001",
  connector: "mqtt",
  data_retention: "immutable",
  configuration_parameters: [
    { key: "location", value: "Building A" }
  ]
};

// API call to create device
const response = await tago.devices.create(deviceData);
```

## Troubleshooting Common Issues

### Device Not Receiving Data
1. **Check device token**: Ensure token is correctly configured
2. **Verify network connectivity**: Test internet connection
3. **Review payload format**: Confirm JSON structure is correct
4. **Check rate limits**: Ensure not exceeding allowed requests

### Authentication Failures
1. **Token validation**: Verify device token is active
2. **SSL certificates**: Ensure proper certificate handling
3. **Authorization setup**: Check network provider credentials
4. **API endpoints**: Confirm correct URLs are being used

### Data Not Storing
1. **Storage limits**: Check data storage allocation
2. **Payload parser errors**: Review custom parser code
3. **Data format issues**: Ensure proper variable structure
4. **Action configuration**: Verify MQTT actions are set up

## Best Practices

### Naming Conventions
- Use descriptive names that include location or function
- Include version numbers for hardware revisions
- Group related devices with consistent prefixes

### Security Considerations
- Rotate device tokens periodically
- Use secure channels (HTTPS/MQTTS) for data transmission
- Implement proper access controls
- Monitor for unusual activity patterns

### Performance Optimization
- Choose appropriate storage type for your use case
- Implement efficient data batching strategies
- Monitor and optimize data payload sizes
- Use compression when beneficial

### Maintenance Planning
- Document device configurations and parameters
- Set up monitoring for device health and connectivity
- Plan for firmware updates and token rotation
- Implement backup and recovery procedures

## Next Steps

After creating your device:
- Set up [device security with tokens](./device-tokens.md)
- Learn about [data storage options](./data-storage.md)
- Implement [live monitoring](./live-inspector.md)
- Explore device data management features