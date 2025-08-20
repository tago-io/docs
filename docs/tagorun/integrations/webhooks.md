# Webhooks Integration

Webhooks enable real-time communication between TagoRUN and external systems by automatically sending HTTP requests when specific events occur. This powerful integration mechanism allows you to connect TagoRUN with third-party services, trigger automated workflows, and synchronize data across platforms.

## Overview

Webhooks are "reverse APIs" that push data to external endpoints when events happen in TagoRUN, rather than requiring external systems to poll for updates. They provide instant notifications about user activities, data changes, system events, and custom triggers.

### Key Benefits

- **Real-time Updates**: Instant notification of events
- **Automation**: Trigger external workflows automatically
- **Integration**: Connect with any HTTP-capable service
- **Scalability**: Handle high-volume event streams efficiently
- **Flexibility**: Customize payload format and delivery options

## Webhook Events

### User Events

#### Authentication Events
- **User Login**: When a user successfully logs into TagoRUN
- **User Logout**: When a user logs out or session expires
- **Failed Login**: When login attempts fail
- **Password Reset**: When users reset their passwords
- **2FA Events**: Two-factor authentication setup and usage

#### User Management Events
- **User Registration**: New user account creation
- **Profile Updates**: Changes to user profile information
- **Permission Changes**: Modifications to user access rights
- **Account Deletion**: User account removal requests
- **Role Assignments**: Changes to user roles and responsibilities

### Data Events

#### Device Data
- **Data Received**: New data points from devices
- **Data Threshold**: Values exceeding defined thresholds
- **Device Status**: Device online/offline status changes
- **Data Quality**: Data validation and quality alerts
- **Batch Processing**: Completion of data batch operations

#### Dashboard Events
- **Dashboard Viewed**: User dashboard access events
- **Widget Interactions**: User interactions with widgets
- **Report Generation**: Dashboard report creation
- **Export Operations**: Data export activities
- **Sharing Events**: Dashboard sharing activities

### System Events

#### Application Events
- **System Maintenance**: Maintenance mode activation/deactivation
- **Performance Alerts**: System performance threshold breaches
- **Error Events**: Application errors and exceptions
- **Security Events**: Security-related incidents
- **Backup Operations**: Backup and restore activities

#### Administrative Events
- **Configuration Changes**: System configuration modifications
- **User Management**: Administrative user operations
- **Access Control**: Permission and policy changes
- **Audit Events**: Security and compliance audit trails
- **Integration Events**: Third-party integration status changes

## Webhook Configuration

### Basic Setup

#### 1. Create Webhook Endpoint
```javascript
// Example webhook endpoint
POST /webhook/tagorun
Content-Type: application/json

{
  "event": "user.login",
  "timestamp": "2023-01-15T10:30:00Z",
  "user": {
    "id": "user123",
    "email": "user@example.com",
    "name": "John Doe"
  },
  "data": {
    "ip_address": "192.168.1.100",
    "user_agent": "Mozilla/5.0...",
    "session_id": "sess_abc123"
  }
}
```

#### 2. Configure Webhook in TagoRUN
```javascript
// Webhook configuration
{
  "name": "External System Integration",
  "url": "https://api.external-system.com/webhook/tagorun",
  "events": ["user.login", "data.received", "system.alert"],
  "headers": {
    "Authorization": "Bearer your-api-token",
    "Content-Type": "application/json",
    "X-Source": "TagoRUN"
  },
  "retry_policy": {
    "max_attempts": 3,
    "backoff": "exponential"
  },
  "timeout": 30
}
```

### Advanced Configuration

#### Event Filtering
```javascript
// Filter webhooks by conditions
{
  "filters": {
    "user.login": {
      "conditions": [
        {"field": "user.role", "operator": "equals", "value": "admin"},
        {"field": "location.country", "operator": "in", "value": ["US", "CA"]}
      ]
    },
    "data.received": {
      "conditions": [
        {"field": "device.type", "operator": "equals", "value": "sensor"},
        {"field": "data.value", "operator": "greater_than", "value": 100}
      ]
    }
  }
}
```

#### Custom Payload Templates
```javascript
// Customize webhook payload format
{
  "payload_template": {
    "id": "{{event.id}}",
    "type": "{{event.type}}",
    "occurred_at": "{{event.timestamp}}",
    "source": "TagoRUN",
    "user": {
      "identifier": "{{user.id}}",
      "email": "{{user.email}}"
    },
    "metadata": "{{event.data}}"
  }
}
```

## Implementation Examples

### User Activity Tracking

#### CRM Integration
```javascript
// Webhook for CRM user activity tracking
{
  "event": "user.login",
  "webhook_url": "https://crm.company.com/api/user-activity",
  "payload": {
    "user_id": "{{user.id}}",
    "activity": "login",
    "timestamp": "{{event.timestamp}}",
    "application": "TagoRUN",
    "session_data": {
      "ip": "{{session.ip}}",
      "device": "{{session.device}}",
      "location": "{{session.location}}"
    }
  }
}
```

#### Analytics Integration
```javascript
// Webhook for analytics platform
{
  "event": "dashboard.viewed",
  "webhook_url": "https://analytics.company.com/events",
  "payload": {
    "event_name": "dashboard_view",
    "user_properties": {
      "user_id": "{{user.id}}",
      "role": "{{user.role}}",
      "department": "{{user.department}}"
    },
    "event_properties": {
      "dashboard_id": "{{dashboard.id}}",
      "dashboard_name": "{{dashboard.name}}",
      "view_duration": "{{session.duration}}"
    }
  }
}
```

### Data Pipeline Integration

#### Data Warehouse Sync
```javascript
// Webhook for data warehouse integration
{
  "event": "data.received",
  "webhook_url": "https://etl.company.com/api/ingest",
  "payload": {
    "source": "TagoRUN",
    "device_id": "{{device.id}}",
    "device_type": "{{device.type}}",
    "timestamp": "{{data.timestamp}}",
    "measurements": "{{data.variables}}",
    "quality_score": "{{data.quality}}",
    "metadata": {
      "location": "{{device.location}}",
      "owner": "{{device.owner}}"
    }
  }
}
```

#### Alert Management System
```javascript
// Webhook for alert management platform
{
  "event": "data.threshold",
  "webhook_url": "https://alerts.company.com/api/incidents",
  "payload": {
    "severity": "{{alert.severity}}",
    "title": "TagoRUN Threshold Alert",
    "description": "{{alert.message}}",
    "source": {
      "device": "{{device.name}}",
      "variable": "{{variable.name}}",
      "value": "{{variable.value}}",
      "threshold": "{{threshold.value}}"
    },
    "assignee": "{{alert.assignee}}",
    "tags": ["TagoRUN", "IoT", "{{device.type}}"]
  }
}
```

### Business Process Automation

#### Workflow Automation
```javascript
// Webhook for workflow automation
{
  "event": "user.registration",
  "webhook_url": "https://workflow.company.com/api/trigger",
  "payload": {
    "workflow_id": "new_user_onboarding",
    "trigger_data": {
      "user": {
        "id": "{{user.id}}",
        "email": "{{user.email}}",
        "name": "{{user.name}}",
        "role": "{{user.role}}"
      },
      "registration": {
        "timestamp": "{{event.timestamp}}",
        "source": "TagoRUN",
        "invitation_code": "{{invitation.code}}"
      }
    }
  }
}
```

#### Notification Systems
```javascript
// Webhook for notification service
{
  "event": "system.maintenance",
  "webhook_url": "https://notifications.company.com/api/broadcast",
  "payload": {
    "channel": "system_announcements",
    "message": {
      "title": "TagoRUN Maintenance Notice",
      "body": "{{maintenance.description}}",
      "scheduled_time": "{{maintenance.start_time}}",
      "estimated_duration": "{{maintenance.duration}}"
    },
    "recipients": {
      "roles": ["admin", "operator"],
      "notification_types": ["email", "slack"]
    }
  }
}
```

## Security and Authentication

### Webhook Security

#### Authentication Methods
```javascript
// Bearer token authentication
{
  "headers": {
    "Authorization": "Bearer your-secret-token"
  }
}

// API key authentication
{
  "headers": {
    "X-API-Key": "your-api-key",
    "X-API-Secret": "your-api-secret"
  }
}

// Basic authentication
{
  "headers": {
    "Authorization": "Basic base64(username:password)"
  }
}
```

#### Webhook Verification
```javascript
// Verify webhook authenticity
const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// In your webhook endpoint
app.post('/webhook', (req, res) => {
  const signature = req.headers['x-tagorun-signature'];
  const payload = JSON.stringify(req.body);
  
  if (verifyWebhook(payload, signature, process.env.WEBHOOK_SECRET)) {
    // Process webhook
    processWebhook(req.body);
    res.status(200).send('OK');
  } else {
    res.status(401).send('Unauthorized');
  }
});
```

### IP Allowlisting
```javascript
// Restrict webhook sources by IP
const allowedIPs = [
  '203.0.113.1',
  '203.0.113.2',
  '203.0.113.0/24'  // CIDR notation
];

function isIPAllowed(clientIP) {
  return allowedIPs.some(ip => {
    if (ip.includes('/')) {
      return ipInRange(clientIP, ip);
    }
    return clientIP === ip;
  });
}
```

## Handling Webhook Delivery

### Reliable Delivery

#### Retry Logic
```javascript
// Implement retry with exponential backoff
async function deliverWebhook(webhook, payload, attempt = 1) {
  const maxAttempts = 3;
  const baseDelay = 1000; // 1 second
  
  try {
    const response = await fetch(webhook.url, {
      method: 'POST',
      headers: webhook.headers,
      body: JSON.stringify(payload),
      timeout: webhook.timeout || 30000
    });
    
    if (response.ok) {
      console.log('Webhook delivered successfully');
      return true;
    } else {
      throw new Error(`HTTP ${response.status}`);
    }
  } catch (error) {
    if (attempt < maxAttempts) {
      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log(`Webhook delivery failed, retrying in ${delay}ms`);
      
      setTimeout(() => {
        deliverWebhook(webhook, payload, attempt + 1);
      }, delay);
    } else {
      console.error('Webhook delivery failed after max attempts');
      // Store for manual retry or dead letter queue
      storeFailedWebhook(webhook, payload, error);
    }
  }
}
```

#### Dead Letter Queue
```javascript
// Handle permanently failed webhooks
function storeFailedWebhook(webhook, payload, error) {
  const failedWebhook = {
    webhook_id: webhook.id,
    url: webhook.url,
    payload: payload,
    error: error.message,
    failed_at: new Date().toISOString(),
    attempts: webhook.max_attempts || 3
  };
  
  // Store in database for later retry or investigation
  database.failedWebhooks.insert(failedWebhook);
  
  // Optionally notify administrators
  notifyAdmins('Webhook delivery failed permanently', failedWebhook);
}
```

### Response Handling

#### Processing Webhook Responses
```javascript
// Handle different response types
app.post('/webhook', async (req, res) => {
  try {
    const event = req.body;
    
    switch (event.type) {
      case 'user.login':
        await handleUserLogin(event);
        break;
        
      case 'data.received':
        await handleDataReceived(event);
        break;
        
      case 'system.alert':
        await handleSystemAlert(event);
        break;
        
      default:
        console.log(`Unknown event type: ${event.type}`);
    }
    
    // Always respond with 200 OK for successful processing
    res.status(200).json({ status: 'processed' });
    
  } catch (error) {
    console.error('Webhook processing error:', error);
    
    // Return appropriate error status
    if (error.type === 'validation') {
      res.status(400).json({ error: 'Invalid payload' });
    } else {
      res.status(500).json({ error: 'Processing failed' });
    }
  }
});
```

## Monitoring and Debugging

### Webhook Monitoring

#### Delivery Metrics
```javascript
// Track webhook delivery metrics
const webhookMetrics = {
  total_sent: 0,
  successful_deliveries: 0,
  failed_deliveries: 0,
  retry_attempts: 0,
  average_response_time: 0
};

function updateMetrics(webhook, success, responseTime) {
  webhookMetrics.total_sent++;
  
  if (success) {
    webhookMetrics.successful_deliveries++;
  } else {
    webhookMetrics.failed_deliveries++;
  }
  
  // Update average response time
  webhookMetrics.average_response_time = 
    (webhookMetrics.average_response_time + responseTime) / 2;
}
```

#### Health Monitoring
```javascript
// Monitor webhook endpoint health
async function checkWebhookHealth(webhook) {
  try {
    const response = await fetch(webhook.url, {
      method: 'HEAD',
      timeout: 5000
    });
    
    return {
      webhook_id: webhook.id,
      status: response.ok ? 'healthy' : 'unhealthy',
      response_code: response.status,
      response_time: response.responseTime,
      checked_at: new Date().toISOString()
    };
  } catch (error) {
    return {
      webhook_id: webhook.id,
      status: 'unreachable',
      error: error.message,
      checked_at: new Date().toISOString()
    };
  }
}
```

### Debugging Tools

#### Webhook Inspector
```javascript
// Create webhook testing endpoint
app.post('/webhook-test', (req, res) => {
  console.log('Webhook received:');
  console.log('Headers:', req.headers);
  console.log('Body:', JSON.stringify(req.body, null, 2));
  
  // Store for debugging
  const webhookLog = {
    timestamp: new Date().toISOString(),
    headers: req.headers,
    body: req.body,
    ip: req.ip
  };
  
  database.webhookLogs.insert(webhookLog);
  
  res.status(200).json({ 
    status: 'received',
    timestamp: webhookLog.timestamp
  });
});
```

#### Payload Validation
```javascript
// Validate webhook payload structure
function validateWebhookPayload(payload, eventType) {
  const schemas = {
    'user.login': {
      required: ['event', 'user', 'timestamp'],
      user: ['id', 'email']
    },
    'data.received': {
      required: ['event', 'device', 'data', 'timestamp'],
      device: ['id', 'name'],
      data: ['variables']
    }
  };
  
  const schema = schemas[eventType];
  if (!schema) {
    throw new Error(`Unknown event type: ${eventType}`);
  }
  
  // Validate required fields
  for (const field of schema.required) {
    if (!payload[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
  
  // Validate nested objects
  for (const [object, fields] of Object.entries(schema)) {
    if (object !== 'required' && payload[object]) {
      for (const field of fields) {
        if (!payload[object][field]) {
          throw new Error(`Missing required field: ${object}.${field}`);
        }
      }
    }
  }
  
  return true;
}
```

## Best Practices

### Design Principles

#### Idempotency
```javascript
// Make webhook processing idempotent
const processedEvents = new Set();

app.post('/webhook', (req, res) => {
  const eventId = req.body.id;
  
  if (processedEvents.has(eventId)) {
    console.log(`Event ${eventId} already processed`);
    return res.status(200).json({ status: 'already_processed' });
  }
  
  // Process event
  processEvent(req.body);
  processedEvents.add(eventId);
  
  res.status(200).json({ status: 'processed' });
});
```

#### Graceful Degradation
```javascript
// Handle webhook failures gracefully
async function processWebhookEvent(event) {
  try {
    // Primary processing
    await primaryProcessor(event);
  } catch (error) {
    console.error('Primary processing failed:', error);
    
    try {
      // Fallback processing
      await fallbackProcessor(event);
    } catch (fallbackError) {
      // Store for manual processing
      await storeForManualProcessing(event, {
        primary_error: error.message,
        fallback_error: fallbackError.message
      });
    }
  }
}
```

### Performance Optimization

#### Batch Processing
```javascript
// Process webhooks in batches for better performance
class WebhookBatchProcessor {
  constructor(batchSize = 100, flushInterval = 5000) {
    this.batch = [];
    this.batchSize = batchSize;
    this.flushInterval = flushInterval;
    
    setInterval(() => this.flush(), flushInterval);
  }
  
  add(webhook) {
    this.batch.push(webhook);
    
    if (this.batch.length >= this.batchSize) {
      this.flush();
    }
  }
  
  async flush() {
    if (this.batch.length === 0) return;
    
    const currentBatch = this.batch.splice(0);
    
    try {
      await this.processBatch(currentBatch);
    } catch (error) {
      console.error('Batch processing failed:', error);
      // Re-queue failed items
      this.batch.unshift(...currentBatch);
    }
  }
  
  async processBatch(webhooks) {
    const promises = webhooks.map(webhook => 
      this.processWebhook(webhook)
    );
    
    await Promise.allSettled(promises);
  }
}
```

#### Rate Limiting
```javascript
// Implement rate limiting for webhook delivery
class RateLimiter {
  constructor(maxRequests = 100, windowMs = 60000) {
    this.maxRequests = maxRequests;
    this.windowMs = windowMs;
    this.requests = new Map();
  }
  
  isAllowed(webhookId) {
    const now = Date.now();
    const windowStart = now - this.windowMs;
    
    if (!this.requests.has(webhookId)) {
      this.requests.set(webhookId, []);
    }
    
    const requests = this.requests.get(webhookId);
    
    // Remove old requests
    while (requests.length > 0 && requests[0] < windowStart) {
      requests.shift();
    }
    
    if (requests.length < this.maxRequests) {
      requests.push(now);
      return true;
    }
    
    return false;
  }
}
```

## Integration Examples

### Third-Party Services

#### Slack Integration
```javascript
// Send TagoRUN alerts to Slack
{
  "event": "system.alert",
  "webhook_url": "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK",
  "payload": {
    "text": "TagoRUN Alert",
    "attachments": [
      {
        "color": "{{alert.severity == 'critical' ? 'danger' : 'warning'}}",
        "fields": [
          {
            "title": "Alert Type",
            "value": "{{alert.type}}",
            "short": true
          },
          {
            "title": "Device",
            "value": "{{device.name}}",
            "short": true
          },
          {
            "title": "Message",
            "value": "{{alert.message}}",
            "short": false
          }
        ],
        "footer": "TagoRUN",
        "ts": "{{event.timestamp}}"
      }
    ]
  }
}
```

#### Microsoft Teams Integration
```javascript
// Send notifications to Microsoft Teams
{
  "event": "user.registration",
  "webhook_url": "https://outlook.office.com/webhook/YOUR/TEAMS/WEBHOOK",
  "payload": {
    "@type": "MessageCard",
    "@context": "http://schema.org/extensions",
    "themeColor": "0076D7",
    "summary": "New User Registration",
    "sections": [
      {
        "activityTitle": "New User Registered",
        "activitySubtitle": "TagoRUN Platform",
        "facts": [
          {
            "name": "User",
            "value": "{{user.name}} ({{user.email}})"
          },
          {
            "name": "Role",
            "value": "{{user.role}}"
          },
          {
            "name": "Registration Time",
            "value": "{{event.timestamp}}"
          }
        ]
      }
    ]
  }
}
```

#### Zapier Integration
```javascript
// Trigger Zapier workflows from TagoRUN
{
  "event": "data.threshold",
  "webhook_url": "https://hooks.zapier.com/hooks/catch/YOUR/ZAPIER/HOOK",
  "payload": {
    "event_type": "threshold_exceeded",
    "device_name": "{{device.name}}",
    "variable_name": "{{variable.name}}",
    "current_value": "{{variable.value}}",
    "threshold_value": "{{threshold.value}}",
    "severity": "{{alert.severity}}",
    "timestamp": "{{event.timestamp}}",
    "user_email": "{{user.email}}"
  }
}
```

## Next Steps

To implement webhooks in your TagoRUN application:

1. **Plan Integration**: Identify which events and external systems to connect
2. **Set Up Endpoints**: Create webhook receiver endpoints in external systems
3. **Configure Webhooks**: Set up webhook configurations in TagoRUN
4. **Test Thoroughly**: Test webhook delivery and processing
5. **Monitor Performance**: Implement monitoring and alerting for webhook health
6. **Scale Appropriately**: Optimize for your webhook volume and requirements

For related topics, see:
- [Integration Overview](./overview)
- [Single Sign-On (SSO)](../sso/single-sign-on)
- [User Management](../access-management/user-management)
- [Security and Protection](../access-management/security-protection)
