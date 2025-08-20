# Live Inspector

The Live Inspector is an essential real-time debugging tool that provides immediate visibility into device communications, payload processing, and data flow. It's invaluable for developers setting up new devices, debugging connectivity issues, and monitoring data transmission in real-time.

## Overview

The Live Inspector serves as a real-time monitoring console that captures and displays all traffic between your devices and TagoIO. It provides immediate feedback on:

- **Incoming data**: Raw payloads from devices
- **Connection status**: Device connectivity and authentication
- **Payload processing**: Parser execution and data transformation
- **Error diagnosis**: Failed requests and processing issues
- **Data storage**: Successful data insertion into buckets

## Accessing the Live Inspector

### Navigation Steps

1. Navigate to the [Device Module](https://admin.tago.io/devices) in your Admin interface
2. Select the target device from your device list
3. Click on the **"Live Inspector"** tab
4. Click the green **Start** button (arrow icon) to begin monitoring

### Interface Overview

The Live Inspector interface displays:
- **Start/Stop Controls**: Green arrow to start, red square to stop
- **Real-time Feed**: Chronological list of all device communications
- **Message Details**: Expandable entries showing full payload and metadata
- **Status Indicators**: Visual indicators for success, errors, and warnings
- **Timestamp Information**: Precise timing for each communication event

## Understanding Inspector Output

### Connection Messages

**Successful Connection**:
```json
{
  "type": "connection",
  "status": "connected",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "protocol": "MQTT",
  "client_id": "sensor_device_001"
}
```

**Authentication Success**:
```json
{
  "type": "authentication",
  "status": "success",
  "timestamp": "2024-01-15T14:30:01.000Z",
  "device_token": "abc123...xyz",
  "message": "Device authenticated successfully"
}
```

### Data Transmission Messages

**Raw Payload Received**:
```json
{
  "type": "data_received",
  "timestamp": "2024-01-15T14:30:02.000Z",
  "payload": "{\"temperature\": 23.5, \"humidity\": 65.2}",
  "size": 42,
  "protocol": "HTTP",
  "ip_address": "192.168.1.100"
}
```

**Payload Parser Execution**:
```json
{
  "type": "parser_execution",
  "timestamp": "2024-01-15T14:30:02.100Z",
  "status": "success",
  "input": "{\"temperature\": 23.5, \"humidity\": 65.2}",
  "output": [
    {
      "variable": "temperature",
      "value": 23.5,
      "unit": "°C"
    },
    {
      "variable": "humidity", 
      "value": 65.2,
      "unit": "%"
    }
  ]
}
```

**Data Storage Confirmation**:
```json
{
  "type": "data_stored",
  "timestamp": "2024-01-15T14:30:02.200Z",
  "status": "success",
  "records_inserted": 2,
  "variables": ["temperature", "humidity"]
}
```

## Debugging Common Scenarios

### MQTT Connection Issues

**Problem**: Device not connecting to MQTT broker

**Inspector Output**:
```json
{
  "type": "connection_error",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "error": "Authentication failed",
  "details": "Invalid device token",
  "protocol": "MQTT"
}
```

**Solution Steps**:
1. Verify device token is correct and active
2. Check MQTT credentials (username: "Token", password: device_token)
3. Confirm broker settings (mqtt.tago.io:1883 or :8883 for SSL)
4. Test with a simple MQTT client first

### HTTP Authentication Failures

**Problem**: HTTP requests returning 401 Unauthorized

**Inspector Output**:
```json
{
  "type": "http_request",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "method": "POST",
  "status_code": 401,
  "error": "Unauthorized",
  "headers": {
    "Content-Type": "application/json"
  },
  "note": "Device-Token header missing or invalid"
}
```

**Solution Steps**:
1. Verify `Device-Token` header is included
2. Check token format (no extra spaces or characters)
3. Confirm token hasn't been regenerated
4. Test with curl or Postman first

### Payload Parser Errors

**Problem**: Data not being parsed correctly

**Inspector Output**:
```json
{
  "type": "parser_error",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "error": "JSON parse error",
  "input": "temperature:23.5,humidity:65.2",
  "details": "Unexpected token 't' in JSON at position 0",
  "line": 3
}
```

**Solution Steps**:
1. Validate JSON format of incoming payload
2. Check payload parser script for syntax errors
3. Add error handling in parser code
4. Test parser with sample data

### Data Storage Issues

**Problem**: Data received but not stored

**Inspector Output**:
```json
{
  "type": "storage_error",
  "timestamp": "2024-01-15T14:30:00.000Z",
  "error": "Storage limit exceeded",
  "current_usage": "49,850/50,000",
  "action": "Data insertion blocked"
}
```

**Solution Steps**:
1. Check storage allocation in billing settings
2. Clean up old data if using mutable storage
3. Implement data retention policies
4. Consider upgrading storage limits

## Advanced Debugging Techniques

### Custom Payload Parser Development

**Development Workflow**:
1. Start Live Inspector monitoring
2. Send sample data from device
3. Observe raw payload in inspector
4. Write parser code to handle the format
5. Test parser with new sample data
6. Iterate until data is correctly processed

**Parser Testing Example**:
```javascript
// Custom parser for comma-separated values
function parsePayload(payload) {
  try {
    // Input: "temp:23.5,hum:65.2,bat:85"
    const pairs = payload.split(',');
    const result = [];
    
    pairs.forEach(pair => {
      const [key, value] = pair.split(':');
      result.push({
        variable: key === 'temp' ? 'temperature' : 
                 key === 'hum' ? 'humidity' : 
                 key === 'bat' ? 'battery' : key,
        value: parseFloat(value),
        unit: key === 'temp' ? '°C' : 
              key === 'hum' ? '%' : 
              key === 'bat' ? '%' : null
      });
    });
    
    return result;
  } catch (error) {
    // Error will appear in Live Inspector
    throw new Error(`Parser failed: ${error.message}`);
  }
}
```

### MQTT Action Configuration

**Problem**: MQTT messages received but not stored

When using MQTT, data isn't automatically stored. You need to configure an Action:

1. **Create Action**: Navigate to Actions → Add Action
2. **Trigger**: Select "MQTT" trigger
3. **Type**: Choose "Insert to Device Bucket"
4. **Configuration**: Set topic filters and target device

**Action Configuration**:
```json
{
  "trigger": {
    "type": "mqtt",
    "topic": "device/+/data"
  },
  "action": {
    "type": "insert_to_bucket",
    "device": "${TOPIC[1]}", // Extract device ID from topic
    "parser": "default"
  }
}
```

### Network Troubleshooting

**Connection Diagnostics**:
```bash
# Test MQTT connectivity
mosquitto_pub -h mqtt.tago.io -p 1883 \
  -u Token -P YOUR_DEVICE_TOKEN \
  -t test/topic -m "hello world"

# Test HTTP connectivity  
curl -X POST https://api.tago.io/data \
  -H "Content-Type: application/json" \
  -H "Device-Token: YOUR_DEVICE_TOKEN" \
  -d '[{"variable":"test","value":1}]'
```

## Monitoring Best Practices

### Real-time Monitoring Setup

**Production Monitoring**:
```javascript
// Automated monitoring script
const monitorDevice = async (deviceId) => {
  const inspector = new LiveInspector(deviceId);
  
  inspector.on('connection_error', (error) => {
    console.error(`Device ${deviceId} connection failed:`, error);
    // Send alert to team
  });
  
  inspector.on('data_received', (data) => {
    console.log(`Data received from ${deviceId}:`, data.payload);
    // Log for analysis
  });
  
  inspector.on('parser_error', (error) => {
    console.error(`Parser error for ${deviceId}:`, error);
    // Alert development team
  });
};
```

### Alert Configuration

**Set up alerts for critical events**:
- Connection failures lasting > 5 minutes
- Repeated authentication failures
- Parser errors affecting > 10% of messages
- Storage limit approaching (>90% full)

### Performance Monitoring

**Track key metrics**:
- **Message frequency**: Messages per minute/hour
- **Payload size**: Average and maximum payload sizes  
- **Processing latency**: Time from receipt to storage
- **Error rates**: Percentage of failed vs successful messages

## Integration with TagoIO Services

### Live Inspector + Analysis Scripts

Use Live Inspector data in Analysis scripts:

```javascript
// Analysis script to monitor device health
const { Analysis, Device } = require('@tago-io/sdk');

async function deviceHealthCheck(context) {
  const device = new Device({ token: context.environment.device_token });
  
  // Get recent inspector data
  const inspectorData = await device.getInspectorData({
    qty: 100,
    start_date: '1 hour'
  });
  
  // Analyze connection patterns
  const connectionErrors = inspectorData.filter(
    entry => entry.type === 'connection_error'
  );
  
  if (connectionErrors.length > 5) {
    // Trigger alert
    console.log('High connection error rate detected');
  }
}
```

### Dashboard Integration

Create widgets to display Live Inspector metrics:
- Connection status indicators  
- Real-time message counters
- Error rate charts
- Payload size trends

## Troubleshooting Workflows

### New Device Setup Workflow

1. **Start Inspector**: Begin monitoring before first data transmission
2. **Test Connection**: Send simple test message
3. **Verify Authentication**: Confirm token is working
4. **Test Parser**: Send real data format
5. **Confirm Storage**: Verify data appears in Data tab
6. **Load Testing**: Send multiple messages to test rate limits

### Production Issue Workflow

1. **Enable Inspector**: Start monitoring affected device
2. **Reproduce Issue**: Trigger the problematic behavior
3. **Analyze Messages**: Review inspector output for errors
4. **Identify Root Cause**: Connection, parsing, or storage issue
5. **Implement Fix**: Address the identified problem
6. **Verify Resolution**: Confirm issue is resolved
7. **Document**: Record solution for future reference

## Performance Considerations

### Inspector Limitations

**Session Management**:
- Inspector only runs while admin interface is open
- Not suitable for long-term logging
- Sessions end when browser tab is closed
- Cannot run in background

**Data Retention**:
- Inspector data is not permanently stored
- Messages are only visible during active session
- Use for real-time debugging, not historical analysis

### Optimization Tips

**Efficient Monitoring**:
- Use Inspector for specific troubleshooting sessions
- Don't leave Inspector running unnecessarily
- Focus on critical time periods for monitoring
- Combine with other monitoring tools for comprehensive coverage

## Alternative Monitoring Solutions

### Permanent Logging Solutions

For production monitoring, consider:
- **Analysis Scripts**: Log inspector-like data to external systems
- **Webhook Integration**: Forward device data to monitoring services
- **Custom Dashboards**: Display connection status and health metrics
- **External Tools**: Integrate with monitoring platforms like DataDog or New Relic

### API-based Monitoring

```javascript
// Custom monitoring service
const DeviceMonitor = {
  async checkDeviceHealth(deviceId) {
    const device = new Device({ token: deviceToken });
    
    try {
      // Test device connectivity
      const info = await device.info();
      
      // Check recent data
      const recentData = await device.getData({ qty: 1 });
      
      const lastSeen = new Date(recentData[0]?.time || 0);
      const hoursSinceLastData = (Date.now() - lastSeen) / (1000 * 60 * 60);
      
      return {
        status: hoursSinceLastData < 2 ? 'healthy' : 'stale',
        lastSeen,
        hoursSinceLastData
      };
    } catch (error) {
      return {
        status: 'error',
        error: error.message
      };
    }
  }
};
```

## Next Steps

With Live Inspector mastery:
- Learn about [device creation](./device-creation.md) best practices
- Implement [secure token management](./device-tokens.md)
- Optimize [data storage strategies](./data-storage.md)
- Explore advanced device debugging techniques
- Set up comprehensive monitoring solutions for production environments