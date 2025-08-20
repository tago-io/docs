# Device Tokens and Security

Device tokens are the cornerstone of security in TagoIO, serving as unique authentication keys that control access between your devices and the platform. Understanding how to properly manage device tokens is crucial for maintaining secure and reliable IoT deployments.

## What are Device Tokens?

A device token is a unique, secret key that:
- **Authenticates** your device with TagoIO services
- **Authorizes** data transmission and reception
- **Identifies** your device in all API communications
- **Secures** the connection between your hardware and the cloud

Think of device tokens as digital passwords that your devices use to prove their identity when communicating with TagoIO.

## Token Generation and Management

### Automatic Token Creation

Every device receives an automatically generated token upon creation:
- **Format**: Alphanumeric string (typically 36+ characters)
- **Uniqueness**: Each token is globally unique across the platform
- **Persistence**: Tokens remain active until manually regenerated or deleted
- **Location**: Found in the device's "General Information" tab

### Viewing Your Device Token

To access your device token:

1. Navigate to your [Device Module](https://admin.tago.io/devices)
2. Select the target device from your device list
3. Click on the **"General Information"** tab
4. Click the **"Reveal"** button to display the token
5. Use **"Copy Token"** to safely copy it to your clipboard

:::info
You can find your device token in the device's General Information tab. Click the "Reveal" button to display the token, then use "Copy Token" to safely copy it to your clipboard.
:::

### Token Regeneration

You can generate a new token when needed:

**When to regenerate**:
- Suspected security compromise
- Regular security maintenance (recommended quarterly)
- Team member access changes
- Device ownership transfer

**Regeneration process**:
1. Access the device's General Information tab
2. Click the "Generate New Token" button
3. Confirm the action (old token becomes invalid immediately)
4. Update all applications using the old token

⚠️ **Warning**: Regenerating a token immediately invalidates the previous token. Ensure all connected devices and applications are updated.

## Token Usage in Different Protocols

### HTTP/HTTPS Authentication

For REST API communications, include the token in the request header:

```bash
curl -X POST \
  https://api.tago.io/data \
  -H 'Content-Type: application/json' \
  -H 'Device-Token: YOUR_DEVICE_TOKEN_HERE' \
  -d '[
    {
      "variable": "temperature",
      "value": 23.5,
      "unit": "°C"
    }
  ]'
```

**JavaScript Example**:
```javascript
const deviceToken = 'YOUR_DEVICE_TOKEN_HERE';

const response = await fetch('https://api.tago.io/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Device-Token': deviceToken
  },
  body: JSON.stringify([
    {
      variable: 'humidity',
      value: 65.2,
      unit: '%'
    }
  ])
});
```

### MQTT Authentication

For MQTT connections, use the token as your password:

```javascript
const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://mqtt.tago.io:1883', {
  username: 'Token',
  password: 'YOUR_DEVICE_TOKEN_HERE',
  clientId: 'unique_client_id'
});
```

**Connection Parameters**:
- **Host**: `mqtt.tago.io`
- **Port**: 1883 (TCP) or 8883 (SSL)
- **Username**: Always use `"Token"`
- **Password**: Your device token
- **Client ID**: Any unique identifier

### Network Provider Authentication

For third-party network integrations (LoRaWAN, Sigfox, etc.):
- Device tokens are managed through Authorization configurations
- One authorization can cover multiple devices
- Network-specific credentials are handled separately

## Security Best Practices

### Token Protection

**Storage Security**:
- Never hardcode tokens in publicly accessible code
- Use environment variables or secure configuration files
- Implement proper access controls on token storage
- Use encrypted storage for sensitive token databases

**Transmission Security**:
- Always use HTTPS for HTTP-based communications
- Use MQTTS (MQTT over SSL) for secure MQTT connections
- Implement certificate pinning where possible
- Avoid sending tokens in URL parameters

### Access Management

**Principle of Least Privilege**:
- Use separate tokens for different environments (dev, staging, production)
- Limit token sharing to essential team members only
- Implement role-based access controls in your applications
- Document token usage and ownership

**Monitoring and Auditing**:
- Monitor device connection patterns for anomalies
- Log authentication attempts and failures
- Set up alerts for unusual token usage
- Regularly audit token distribution and usage

### Token Lifecycle Management

**Regular Rotation**:
```javascript
// Example token rotation schedule
const rotationSchedule = {
  production: '90 days',
  staging: '60 days',
  development: '30 days'
};
```

**Rotation Procedure**:
1. Generate new token in TagoIO admin
2. Update all applications with new token
3. Test connectivity with new token
4. Monitor for any failures or missed updates
5. Document rotation in security logs

## Advanced Security Features

### Rate Limiting Protection

Configure rate limits to protect against token abuse:
- **Request limits**: Maximum API calls per minute
- **Data limits**: Maximum data points per hour
- **Connection limits**: Maximum concurrent MQTT connections

### IP Whitelisting

For enhanced security:
- Restrict token usage to specific IP addresses
- Implement firewall rules for additional protection
- Use VPN connections for remote device access

### Token Scoping

Implement token scoping in your applications:
```javascript
const tokenPermissions = {
  read: true,
  write: true,
  delete: false,
  admin: false
};
```

## Troubleshooting Token Issues

### Authentication Failures

**Common Causes**:
1. **Invalid token**: Token may have been regenerated or deleted
2. **Incorrect format**: Extra spaces or characters in token
3. **Network issues**: Connectivity problems preventing authentication
4. **Rate limiting**: Too many requests exceeding limits

**Diagnostic Steps**:
```bash
# Test token validity
curl -H "Device-Token: YOUR_TOKEN" https://api.tago.io/info

# Check connection with MQTT
mosquitto_pub -h mqtt.tago.io -p 1883 -u Token -P YOUR_TOKEN -t test -m "hello"
```

### Connection Issues

**MQTT Connection Problems**:
1. **Verify broker settings**: Confirm host and port
2. **Check SSL configuration**: Ensure proper certificate handling
3. **Test network connectivity**: Verify internet access
4. **Monitor client ID conflicts**: Use unique client identifiers

**HTTP Request Failures**:
1. **Validate token format**: Check for encoding issues
2. **Confirm endpoint URLs**: Verify API endpoints are correct
3. **Check request headers**: Ensure proper Content-Type and token headers
4. **Monitor response codes**: Analyze HTTP status codes for insights

## Token Integration Examples

### Arduino/ESP32 Example

```cpp
#include <WiFi.h>
#include <HTTPClient.h>

const char* deviceToken = "YOUR_DEVICE_TOKEN_HERE";
const char* tagoURL = "https://api.tago.io/data";

void sendData(float temperature) {
  HTTPClient http;
  http.begin(tagoURL);
  http.addHeader("Content-Type", "application/json");
  http.addHeader("Device-Token", deviceToken);
  
  String payload = "[{\"variable\":\"temperature\",\"value\":" + 
                   String(temperature) + "}]";
  
  int httpResponseCode = http.POST(payload);
  
  if (httpResponseCode > 0) {
    String response = http.getString();
    Serial.println("Data sent successfully");
  }
  
  http.end();
}
```

### Python Example

```python
import requests
import json
import os

# Load token from environment variable
device_token = os.getenv('TAGO_DEVICE_TOKEN')

def send_sensor_data(variable, value, unit=None):
    url = "https://api.tago.io/data"
    headers = {
        'Content-Type': 'application/json',
        'Device-Token': device_token
    }
    
    data = [{
        'variable': variable,
        'value': value,
        'unit': unit
    }]
    
    response = requests.post(url, headers=headers, json=data)
    
    if response.status_code == 200:
        print("Data sent successfully")
        return True
    else:
        print(f"Error: {response.status_code}")
        return False

# Usage
send_sensor_data('temperature', 24.5, '°C')
```

### Node.js Environment Variables

```javascript
// .env file
TAGO_DEVICE_TOKEN=your_device_token_here
TAGO_API_URL=https://api.tago.io/data

// app.js
require('dotenv').config();

const deviceToken = process.env.TAGO_DEVICE_TOKEN;
const apiUrl = process.env.TAGO_API_URL;

async function sendData(data) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Device-Token': deviceToken
    },
    body: JSON.stringify(data)
  });
  
  return response.json();
}
```

## Compliance and Governance

### Security Standards

Device token management should align with:
- **ISO 27001**: Information security management
- **SOC 2**: Security controls and compliance
- **GDPR**: Data protection and privacy requirements
- **Industry-specific**: Medical (HIPAA), Financial (PCI-DSS), etc.

### Documentation Requirements

Maintain proper documentation for:
- Token creation and distribution records
- Rotation schedules and procedures
- Access control policies
- Incident response procedures
- Security audit trails

## Next Steps

With secure token management in place:
- Learn about [MQTT device setup](./mqtt-setup.md) for IoT devices
- Explore [data storage options](./data-storage.md) for your devices
- Implement [live monitoring](./live-inspector.md) for debugging
- Set up proper [device creation workflows](./device-creation.md)