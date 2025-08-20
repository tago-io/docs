# MQTT Device Setup

MQTT (MQ Telemetry Transport) is a lightweight publish-subscribe messaging protocol designed for IoT devices with limited bandwidth and processing power. TagoIO provides a dedicated MQTT broker that seamlessly integrates with your devices and the broader TagoIO ecosystem.

## MQTT Overview

### What is MQTT?

MQTT is an extremely lightweight messaging protocol that:
- **Minimizes bandwidth usage** with small message headers
- **Supports unreliable networks** with built-in retry mechanisms  
- **Provides quality of service levels** for message delivery guarantees
- **Uses publish-subscribe pattern** for efficient one-to-many communication
- **Maintains persistent connections** to reduce connection overhead

### TagoIO MQTT Broker Features

TagoIO's MQTT broker is specifically optimized for IoT data ingestion:
- **Dedicated broker**: `mqtt.tago.io`
- **SSL/TLS encryption** for secure data transmission
- **Device token authentication** using TagoIO's security model
- **Rate limiting protection** based on your account plan
- **Integration with TagoIO services** (Dashboards, Analysis, Actions)

⚠️ **Regional Availability**: 
- **US Database Region**: Full MQTT broker access for Starter and Scale accounts
- **EU Database Region**: Use [MQTT Relay](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay) for third-party MQTT brokers
- **Free Accounts**: Access via MQTT Relay feature

## Connection Configuration

### Broker Settings

**Standard Connection (TCP)**:
- **Host**: `mqtt.tago.io`
- **Port**: `1883`
- **Protocol**: MQTT over TCP
- **Security**: Unencrypted (not recommended for production)

**Secure Connection (SSL/TLS)**:
- **Host**: `mqtt.tago.io`
- **Port**: `8883`
- **Protocol**: MQTT over SSL/TLS
- **Security**: Encrypted connection (recommended)

### Authentication Parameters

- **Username**: `Token` (always use this exact string)
- **Password**: Your device token (obtained from device settings)
- **Client ID**: Any unique identifier for your device

### Connection Example

```javascript
const mqtt = require('mqtt');

// Connection configuration
const options = {
  host: 'mqtt.tago.io',
  port: 8883, // Use 8883 for SSL, 1883 for non-SSL
  protocol: 'mqtts', // 'mqtts' for SSL, 'mqtt' for non-SSL
  username: 'Token',
  password: 'YOUR_DEVICE_TOKEN_HERE',
  clientId: 'sensor_device_001',
  keepalive: 60,
  reconnectPeriod: 1000,
  clean: true
};

const client = mqtt.connect(options);

client.on('connect', () => {
  console.log('Connected to TagoIO MQTT broker');
});

client.on('error', (error) => {
  console.error('Connection error:', error);
});
```

## Publishing Data to TagoIO

### Basic Data Publishing

**Topic Structure**: Use any topic name that makes sense for your application

```javascript
// Publish temperature data
const topic = 'sensors/temperature';
const payload = JSON.stringify([
  {
    variable: 'temperature',
    value: 23.5,
    unit: '°C',
    time: new Date().toISOString()
  }
]);

client.publish(topic, payload, { qos: 1 }, (error) => {
  if (error) {
    console.error('Publish failed:', error);
  } else {
    console.log('Data published successfully');
  }
});
```

### TagoIO Data Format

Data must follow TagoIO's JSON structure:

```javascript
// Single variable
const singleVariable = [
  {
    variable: 'temperature',
    value: 23.5,
    unit: '°C',
    location: {
      lat: 40.7128,
      lng: -74.0060
    },
    metadata: {
      sensor_id: 'temp_001'
    },
    time: '2024-01-15T14:30:00Z'
  }
];

// Multiple variables
const multipleVariables = [
  {
    variable: 'temperature',
    value: 23.5,
    unit: '°C'
  },
  {
    variable: 'humidity', 
    value: 65.2,
    unit: '%'
  },
  {
    variable: 'pressure',
    value: 1013.25,
    unit: 'hPa'
  }
];
```

### Quality of Service (QoS) Levels

Choose appropriate QoS based on your requirements:

- **QoS 0** (At most once): Fire and forget, no acknowledgment
- **QoS 1** (At least once): Acknowledged delivery, possible duplicates
- **QoS 2** (Exactly once): Guaranteed single delivery (not supported by TagoIO)

```javascript
// Recommended: Use QoS 1 for important data
client.publish(topic, payload, { qos: 1 });

// Use QoS 0 for high-frequency, less critical data
client.publish(topic, payload, { qos: 0 });
```

## Setting Up Data Storage Actions

⚠️ **Important**: MQTT messages are received but not automatically stored. You must configure an Action to insert data into your device bucket.

### Creating MQTT Actions

1. **Navigate to Actions**: Go to [Actions](https://admin.tago.io/actions) in your Admin
2. **Add New Action**: Click "Add Action" button
3. **Configure Trigger**: Select "MQTT" as trigger type
4. **Set Action Type**: Choose "Insert to Device Bucket"

### Action Configuration

```json
{
  "trigger": {
    "type": "mqtt",
    "topic": "sensors/+/data",
    "device_id": "*"
  },
  "action": {
    "type": "insert_to_bucket", 
    "device": "DEVICE_ID_HERE",
    "parser": "default"
  }
}
```

### Topic Pattern Matching

Use wildcards in topic patterns:
- **Single level wildcard** (`+`): Matches one topic level
- **Multi-level wildcard** (`#`): Matches multiple topic levels

**Examples**:
```javascript
// Match specific device: sensors/device001/temperature
"topic": "sensors/device001/temperature"

// Match any device: sensors/+/temperature  
"topic": "sensors/+/temperature"

// Match all subtopics: sensors/device001/#
"topic": "sensors/device001/#"

// Match everything: #
"topic": "#"
```

## Platform-Specific Implementation

### Arduino/ESP32 Implementation

```cpp
#include <WiFi.h>
#include <PubSubClient.h>
#include <ArduinoJson.h>

// WiFi credentials
const char* ssid = "YOUR_WIFI_SSID";
const char* password = "YOUR_WIFI_PASSWORD";

// MQTT settings
const char* mqtt_server = "mqtt.tago.io";
const int mqtt_port = 8883;
const char* mqtt_user = "Token";
const char* mqtt_password = "YOUR_DEVICE_TOKEN";
const char* client_id = "esp32_sensor_001";

WiFiClientSecure espClient;
PubSubClient client(espClient);

void setup() {
  Serial.begin(115200);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("WiFi connected");
  
  // Configure MQTT
  espClient.setInsecure(); // For testing only - use proper certificates in production
  client.setServer(mqtt_server, mqtt_port);
  
  // Connect to MQTT broker
  connectMQTT();
}

void connectMQTT() {
  while (!client.connected()) {
    Serial.print("Attempting MQTT connection...");
    if (client.connect(client_id, mqtt_user, mqtt_password)) {
      Serial.println("connected");
    } else {
      Serial.print("failed, rc=");
      Serial.print(client.state());
      Serial.println(" try again in 5 seconds");
      delay(5000);
    }
  }
}

void publishSensorData(float temperature, float humidity) {
  if (!client.connected()) {
    connectMQTT();
  }
  
  // Create JSON payload
  StaticJsonDocument<200> doc;
  JsonArray data = doc.createNestedArray();
  
  JsonObject temp = data.createNestedObject();
  temp["variable"] = "temperature";
  temp["value"] = temperature;
  temp["unit"] = "°C";
  
  JsonObject hum = data.createNestedObject();
  hum["variable"] = "humidity"; 
  hum["value"] = humidity;
  hum["unit"] = "%";
  
  String payload;
  serializeJson(doc, payload);
  
  // Publish data
  const char* topic = "sensors/esp32_001/data";
  if (client.publish(topic, payload.c_str())) {
    Serial.println("Data published successfully");
  } else {
    Serial.println("Failed to publish data");
  }
}

void loop() {
  client.loop();
  
  // Read sensors (simulated values)
  float temperature = 23.5 + random(-50, 50) / 10.0;
  float humidity = 65.2 + random(-100, 100) / 10.0;
  
  // Publish data every 30 seconds
  publishSensorData(temperature, humidity);
  delay(30000);
}
```

### Python Implementation

```python
import paho.mqtt.client as mqtt
import json
import time
import ssl
from datetime import datetime

class TagoIOMQTTClient:
    def __init__(self, device_token, client_id):
        self.device_token = device_token
        self.client_id = client_id
        self.client = mqtt.Client(client_id=client_id)
        
        # Configure authentication
        self.client.username_pw_set("Token", device_token)
        
        # Configure SSL
        context = ssl.create_default_context(ssl.Purpose.SERVER_AUTH)
        context.check_hostname = False
        context.verify_mode = ssl.CERT_NONE
        self.client.tls_set_context(context)
        
        # Configure callbacks
        self.client.on_connect = self.on_connect
        self.client.on_disconnect = self.on_disconnect
        self.client.on_publish = self.on_publish
    
    def on_connect(self, client, userdata, flags, rc):
        if rc == 0:
            print("Connected to TagoIO MQTT broker")
        else:
            print(f"Connection failed with code {rc}")
    
    def on_disconnect(self, client, userdata, rc):
        print("Disconnected from MQTT broker")
    
    def on_publish(self, client, userdata, mid):
        print(f"Message {mid} published successfully")
    
    def connect(self):
        try:
            self.client.connect("mqtt.tago.io", 8883, 60)
            self.client.loop_start()
            return True
        except Exception as e:
            print(f"Connection error: {e}")
            return False
    
    def publish_data(self, topic, data):
        """
        Publish data to TagoIO
        data: list of dictionaries with variable, value, unit, etc.
        """
        payload = json.dumps(data)
        result = self.client.publish(topic, payload, qos=1)
        return result.rc == mqtt.MQTT_ERR_SUCCESS
    
    def disconnect(self):
        self.client.loop_stop()
        self.client.disconnect()

# Usage example
if __name__ == "__main__":
    # Initialize client
    client = TagoIOMQTTClient(
        device_token="YOUR_DEVICE_TOKEN_HERE",
        client_id="python_sensor_001"
    )
    
    # Connect to broker
    if client.connect():
        time.sleep(2)  # Wait for connection to establish
        
        # Publish sensor data
        sensor_data = [
            {
                "variable": "temperature",
                "value": 24.3,
                "unit": "°C",
                "time": datetime.utcnow().isoformat() + "Z"
            },
            {
                "variable": "humidity",
                "value": 62.1,
                "unit": "%",
                "time": datetime.utcnow().isoformat() + "Z"
            }
        ]
        
        success = client.publish_data("sensors/python_001/data", sensor_data)
        if success:
            print("Data sent successfully")
        else:
            print("Failed to send data")
        
        time.sleep(1)
        client.disconnect()
    else:
        print("Failed to connect to MQTT broker")
```

### Node.js Implementation

```javascript
const mqtt = require('mqtt');

class TagoIOMQTTDevice {
  constructor(deviceToken, clientId) {
    this.deviceToken = deviceToken;
    this.clientId = clientId;
    this.connected = false;
    
    const options = {
      host: 'mqtt.tago.io',
      port: 8883,
      protocol: 'mqtts',
      username: 'Token',
      password: deviceToken,
      clientId: clientId,
      keepalive: 60,
      reconnectPeriod: 1000,
      clean: true,
      rejectUnauthorized: false // For development only
    };
    
    this.client = mqtt.connect(options);
    this.setupEventHandlers();
  }
  
  setupEventHandlers() {
    this.client.on('connect', () => {
      console.log('Connected to TagoIO MQTT broker');
      this.connected = true;
    });
    
    this.client.on('error', (error) => {
      console.error('MQTT connection error:', error);
      this.connected = false;
    });
    
    this.client.on('offline', () => {
      console.log('MQTT client offline');
      this.connected = false;
    });
    
    this.client.on('reconnect', () => {
      console.log('Attempting to reconnect...');
    });
  }
  
  async publishData(topic, data) {
    return new Promise((resolve, reject) => {
      if (!this.connected) {
        reject(new Error('MQTT client not connected'));
        return;
      }
      
      const payload = JSON.stringify(data);
      
      this.client.publish(topic, payload, { qos: 1 }, (error) => {
        if (error) {
          reject(error);
        } else {
          resolve();
        }
      });
    });
  }
  
  disconnect() {
    this.client.end();
  }
}

// Usage example
async function main() {
  const device = new TagoIOMQTTDevice(
    'YOUR_DEVICE_TOKEN_HERE',
    'nodejs_sensor_001'
  );
  
  // Wait for connection
  setTimeout(async () => {
    try {
      const sensorData = [
        {
          variable: 'cpu_usage',
          value: Math.random() * 100,
          unit: '%'
        },
        {
          variable: 'memory_usage',
          value: Math.random() * 8192,
          unit: 'MB'
        }
      ];
      
      await device.publishData('system/nodejs_001/metrics', sensorData);
      console.log('Data published successfully');
      
      device.disconnect();
    } catch (error) {
      console.error('Failed to publish data:', error);
    }
  }, 2000);
}

main();
```

## Advanced MQTT Features

### Subscribing to Topics

While TagoIO's MQTT broker is optimized for data ingestion, you can also subscribe to topics:

```javascript
// Subscribe to downlink commands
client.on('connect', () => {
  client.subscribe('commands/device001/+', (error) => {
    if (error) {
      console.error('Subscription error:', error);
    } else {
      console.log('Subscribed to command topics');
    }
  });
});

// Handle incoming messages
client.on('message', (topic, message) => {
  console.log(`Received message on ${topic}: ${message.toString()}`);
  
  // Process commands
  if (topic.includes('commands/device001/reboot')) {
    console.log('Reboot command received');
    // Handle reboot command
  }
});
```

### Last Will and Testament

Configure last will message for device disconnection detection:

```javascript
const options = {
  host: 'mqtt.tago.io',
  port: 8883,
  protocol: 'mqtts',
  username: 'Token',
  password: deviceToken,
  clientId: clientId,
  will: {
    topic: 'device/status/' + clientId,
    payload: JSON.stringify([{
      variable: 'device_status',
      value: 'offline',
      time: new Date().toISOString()
    }]),
    qos: 1,
    retain: false
  }
};
```

### Retained Messages Workaround

TagoIO's MQTT broker doesn't support native retain feature, but you can achieve similar functionality:

```javascript
// Store device state in mutable device
const publishDeviceState = async (state) => {
  const stateData = [
    {
      variable: 'device_state',
      value: state,
      metadata: { retained: true }
    }
  ];
  
  client.publish('device/state', JSON.stringify(stateData));
  
  // Also store in mutable device for persistence
  // Use Analysis or Action to manage state persistence
};
```

## Troubleshooting MQTT Connections

### Common Connection Issues

**Authentication Failures**:
```javascript
// Check for common auth issues
if (error.code === 5) {
  console.error('Authentication failed - check device token');
}

// Verify token format
const tokenRegex = /^[a-f0-9-]{36}$/;
if (!tokenRegex.test(deviceToken)) {
  console.error('Invalid token format');
}
```

**SSL/TLS Issues**:
```javascript
// For development, disable certificate verification
const options = {
  // ... other options
  rejectUnauthorized: false,
  ca: null
};

// For production, use proper certificates
const fs = require('fs');
const options = {
  // ... other options
  ca: [fs.readFileSync('path/to/ca.crt')],
  cert: fs.readFileSync('path/to/client.crt'),
  key: fs.readFileSync('path/to/client.key')
};
```

**Network Connectivity**:
```bash
# Test network connectivity
ping mqtt.tago.io

# Test port availability
telnet mqtt.tago.io 1883
telnet mqtt.tago.io 8883

# Test with mosquitto client
mosquitto_pub -h mqtt.tago.io -p 1883 -u Token -P YOUR_TOKEN -t test -m "hello"
```

### Debugging with Live Inspector

Use TagoIO's Live Inspector to debug MQTT issues:

1. **Start Live Inspector** on your device
2. **Attempt MQTT connection** from your client
3. **Observe connection messages** in real-time
4. **Check payload format** and parsing results
5. **Verify data storage** completion

### Performance Optimization

**Connection Management**:
```javascript
// Implement exponential backoff
let reconnectAttempts = 0;
const maxReconnectAttempts = 5;

client.on('error', (error) => {
  reconnectAttempts++;
  const delay = Math.min(1000 * Math.pow(2, reconnectAttempts), 30000);
  
  if (reconnectAttempts <= maxReconnectAttempts) {
    setTimeout(() => {
      client.reconnect();
    }, delay);
  }
});

client.on('connect', () => {
  reconnectAttempts = 0; // Reset counter on successful connection
});
```

**Efficient Publishing**:
```javascript
// Batch multiple readings
const batchData = [];

function addReading(variable, value, unit) {
  batchData.push({ variable, value, unit });
  
  // Publish when batch is full or timeout reached
  if (batchData.length >= 10) {
    publishBatch();
  }
}

function publishBatch() {
  if (batchData.length > 0) {
    client.publish(topic, JSON.stringify(batchData));
    batchData.length = 0; // Clear batch
  }
}

// Periodic batch publishing
setInterval(publishBatch, 30000); // Every 30 seconds
```

## Production Considerations

### Security Best Practices

- Always use SSL/TLS in production (port 8883)
- Implement proper certificate validation
- Rotate device tokens regularly
- Monitor for unusual connection patterns
- Use secure storage for credentials

### Monitoring and Alerting

- Set up connection status monitoring
- Monitor message delivery rates
- Track authentication failures
- Alert on extended disconnections
- Monitor bandwidth usage

### Scalability Planning

- Consider rate limits for your account plan
- Implement proper error handling and retry logic
- Plan for device fleet management
- Consider using MQTT bridges for local networks
- Implement load balancing for high-volume deployments

## Next Steps

With MQTT setup complete:
- Learn about [device tokens and security](./device-tokens.md)
- Implement [live monitoring](./live-inspector.md) for debugging
- Explore [data storage strategies](./data-storage.md)
- Set up Actions for automated data processing
- Build dashboards to visualize your MQTT device data