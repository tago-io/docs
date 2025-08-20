# Analytics Setup

Analytics in TagoRUN provide comprehensive insights into user behavior, application performance, and business metrics. This powerful feature enables you to track user engagement, monitor system health, optimize user experience, and make data-driven decisions about your IoT platform.

## Overview

TagoRUN analytics help you understand how users interact with your application, identify areas for improvement, and measure the success of your IoT deployment. The analytics system captures various metrics including user activities, feature usage, performance data, and business KPIs.

### Key Benefits

- **User Behavior Insights**: Understand how users navigate and use your application
- **Performance Monitoring**: Track application performance and identify bottlenecks
- **Business Intelligence**: Measure ROI and business impact of your IoT platform
- **Optimization Opportunities**: Identify areas for user experience improvement
- **Custom Reporting**: Create tailored reports for different stakeholders

## Analytics Configuration

### Google Analytics Integration

#### Setting Up Google Analytics 4 (GA4)
```javascript
// Google Analytics 4 configuration
{
  "google_analytics": {
    "measurement_id": "G-XXXXXXXXXX",
    "api_secret": "your-api-secret",
    "debug_mode": false,
    "enhanced_measurement": {
      "page_views": true,
      "scrolls": true,
      "outbound_clicks": true,
      "site_search": true,
      "video_engagement": true,
      "file_downloads": true
    }
  }
}
```

#### Universal Analytics (Legacy)
```javascript
// Universal Analytics configuration
{
  "universal_analytics": {
    "tracking_id": "UA-XXXXXXXXX-X",
    "domain": "auto",
    "enhanced_ecommerce": true,
    "demographics": true,
    "display_features": true
  }
}
```

#### Custom Events Tracking
```javascript
// Track custom events in TagoRUN
function trackEvent(eventName, parameters) {
  gtag('event', eventName, {
    'event_category': parameters.category,
    'event_label': parameters.label,
    'value': parameters.value,
    'custom_parameter_1': parameters.custom1,
    'custom_parameter_2': parameters.custom2
  });
}

// Example usage
trackEvent('dashboard_view', {
  category: 'User_Engagement',
  label: 'Production_Dashboard',
  value: 1,
  custom1: user.role,
  custom2: dashboard.type
});
```

### Adobe Analytics Integration

#### Adobe Analytics Setup
```javascript
// Adobe Analytics configuration
{
  "adobe_analytics": {
    "report_suite_id": "your-rsid",
    "tracking_server": "your-tracking-server.sc.omtrdc.net",
    "visitor_namespace": "your-namespace",
    "marketing_cloud_org_id": "your-org-id@AdobeOrg"
  }
}
```

### Custom Analytics Platform

#### Generic Analytics Integration
```javascript
// Custom analytics platform configuration
{
  "custom_analytics": {
    "endpoint": "https://analytics.your-company.com/api/events",
    "api_key": "your-api-key",
    "batch_size": 100,
    "flush_interval": 30000, // 30 seconds
    "retry_attempts": 3
  }
}
```

## Event Tracking

### User Interaction Events

#### Navigation Events
```javascript
// Track page navigation
{
  "event": "page_view",
  "properties": {
    "page_title": "{{page.title}}",
    "page_url": "{{page.url}}",
    "referrer": "{{page.referrer}}",
    "user_id": "{{user.id}}",
    "session_id": "{{session.id}}",
    "timestamp": "{{event.timestamp}}"
  }
}

// Track menu navigation
{
  "event": "menu_click",
  "properties": {
    "menu_item": "{{menu.item}}",
    "menu_section": "{{menu.section}}",
    "destination_url": "{{menu.url}}",
    "user_role": "{{user.role}}"
  }
}
```

#### Dashboard Interactions
```javascript
// Track dashboard usage
{
  "event": "dashboard_interaction",
  "properties": {
    "action": "{{action.type}}", // view, export, share, edit
    "dashboard_id": "{{dashboard.id}}",
    "dashboard_name": "{{dashboard.name}}",
    "widget_count": "{{dashboard.widget_count}}",
    "interaction_duration": "{{session.duration}}",
    "device_type": "{{device.type}}"
  }
}

// Track widget interactions
{
  "event": "widget_interaction",
  "properties": {
    "widget_type": "{{widget.type}}",
    "widget_id": "{{widget.id}}",
    "action": "{{action.type}}", // click, hover, resize, configure
    "data_source": "{{widget.data_source}}",
    "time_range": "{{widget.time_range}}"
  }
}
```

#### Feature Usage Events
```javascript
// Track feature adoption
{
  "event": "feature_used",
  "properties": {
    "feature_name": "{{feature.name}}",
    "feature_category": "{{feature.category}}",
    "user_experience_level": "{{user.experience}}",
    "first_time_use": "{{feature.is_first_use}}",
    "usage_context": "{{feature.context}}"
  }
}

// Track search usage
{
  "event": "search_performed",
  "properties": {
    "search_term": "{{search.query}}",
    "search_category": "{{search.category}}",
    "results_count": "{{search.results_count}}",
    "selected_result": "{{search.selected_result}}",
    "search_duration": "{{search.duration}}"
  }
}
```

### Data and Device Events

#### Data Interaction Events
```javascript
// Track data viewing patterns
{
  "event": "data_viewed",
  "properties": {
    "data_type": "{{data.type}}",
    "device_id": "{{device.id}}",
    "time_range": "{{view.time_range}}",
    "data_points": "{{view.data_points}}",
    "visualization_type": "{{view.chart_type}}",
    "filters_applied": "{{view.filters}}"
  }
}

// Track data export
{
  "event": "data_exported",
  "properties": {
    "export_format": "{{export.format}}", // CSV, JSON, PDF
    "data_range": "{{export.date_range}}",
    "record_count": "{{export.record_count}}",
    "file_size": "{{export.file_size}}",
    "export_reason": "{{export.purpose}}"
  }
}
```

#### Device Management Events
```javascript
// Track device interactions
{
  "event": "device_managed",
  "properties": {
    "action": "{{action.type}}", // view, edit, delete, configure
    "device_type": "{{device.type}}",
    "device_status": "{{device.status}}",
    "configuration_changes": "{{device.config_changes}}",
    "management_tool": "{{tool.used}}"
  }
}
```

### Performance Events

#### Application Performance
```javascript
// Track performance metrics
{
  "event": "performance_metric",
  "properties": {
    "metric_type": "{{performance.metric}}", // page_load, api_response, widget_render
    "duration": "{{performance.duration}}",
    "success": "{{performance.success}}",
    "error_code": "{{performance.error_code}}",
    "resource_usage": "{{performance.resources}}"
  }
}

// Track error events
{
  "event": "error_occurred",
  "properties": {
    "error_type": "{{error.type}}",
    "error_message": "{{error.message}}",
    "error_stack": "{{error.stack}}",
    "user_action": "{{error.user_action}}",
    "browser_info": "{{error.browser}}",
    "affected_feature": "{{error.feature}}"
  }
}
```

## Custom Metrics and KPIs

### Business Metrics

#### User Engagement Metrics
```javascript
// Define custom KPIs
const userEngagementKPIs = {
  daily_active_users: {
    calculation: "COUNT(DISTINCT user_id) WHERE last_activity >= TODAY()",
    target: 100,
    trend: "increasing"
  },
  average_session_duration: {
    calculation: "AVG(session_duration) WHERE date >= CURRENT_WEEK()",
    target: 900, // 15 minutes
    trend: "increasing"
  },
  feature_adoption_rate: {
    calculation: "COUNT(DISTINCT users_using_feature) / COUNT(DISTINCT total_users)",
    target: 0.7, // 70%
    trend: "increasing"
  },
  dashboard_views_per_user: {
    calculation: "COUNT(dashboard_views) / COUNT(DISTINCT users)",
    target: 5,
    trend: "increasing"
  }
};
```

#### Platform Performance KPIs
```javascript
// System performance metrics
const performanceKPIs = {
  page_load_time: {
    calculation: "PERCENTILE(page_load_duration, 95)",
    target: 3000, // 3 seconds
    trend: "decreasing"
  },
  api_response_time: {
    calculation: "AVG(api_response_duration)",
    target: 500, // 500ms
    trend: "decreasing"
  },
  error_rate: {
    calculation: "COUNT(errors) / COUNT(total_requests)",
    target: 0.01, // 1%
    trend: "decreasing"
  },
  uptime_percentage: {
    calculation: "SUM(uptime_minutes) / SUM(total_minutes)",
    target: 0.999, // 99.9%
    trend: "increasing"
  }
};
```

### IoT-Specific Metrics

#### Device and Data Metrics
```javascript
// IoT platform specific KPIs
const iotKPIs = {
  device_connectivity_rate: {
    calculation: "COUNT(connected_devices) / COUNT(total_devices)",
    target: 0.95, // 95%
    trend: "increasing"
  },
  data_freshness: {
    calculation: "AVG(CURRENT_TIME - last_data_timestamp)",
    target: 300, // 5 minutes
    trend: "decreasing"
  },
  alert_response_time: {
    calculation: "AVG(alert_acknowledgment_time - alert_creation_time)",
    target: 600, // 10 minutes
    trend: "decreasing"
  },
  data_quality_score: {
    calculation: "COUNT(valid_data_points) / COUNT(total_data_points)",
    target: 0.98, // 98%
    trend: "increasing"
  }
};
```

## Analytics Dashboard

### Real-Time Analytics

#### Live Dashboard Configuration
```javascript
// Real-time analytics dashboard
{
  "real_time_dashboard": {
    "refresh_interval": 30, // seconds
    "widgets": [
      {
        "type": "counter",
        "title": "Active Users",
        "query": "SELECT COUNT(DISTINCT user_id) FROM sessions WHERE status = 'active'",
        "target": 50
      },
      {
        "type": "chart",
        "title": "Page Views (Last Hour)",
        "query": "SELECT timestamp, COUNT(*) FROM page_views WHERE timestamp >= HOUR_AGO GROUP BY MINUTE",
        "chart_type": "line"
      },
      {
        "type": "table",
        "title": "Top Pages",
        "query": "SELECT page_url, COUNT(*) as views FROM page_views WHERE timestamp >= HOUR_AGO GROUP BY page_url ORDER BY views DESC LIMIT 10"
      }
    ]
  }
}
```

#### Alert Configuration
```javascript
// Set up analytics alerts
{
  "analytics_alerts": [
    {
      "name": "Low User Activity",
      "condition": "daily_active_users < 20",
      "severity": "warning",
      "notification_channels": ["email", "slack"],
      "check_interval": 3600 // 1 hour
    },
    {
      "name": "High Error Rate",
      "condition": "error_rate > 0.05",
      "severity": "critical",
      "notification_channels": ["email", "sms", "pagerduty"],
      "check_interval": 300 // 5 minutes
    },
    {
      "name": "Poor Performance",
      "condition": "avg_page_load_time > 5000",
      "severity": "warning",
      "notification_channels": ["email"],
      "check_interval": 900 // 15 minutes
    }
  ]
}
```

### Historical Analytics

#### Trend Analysis
```javascript
// Configure trend analysis
{
  "trend_analysis": {
    "time_periods": ["daily", "weekly", "monthly", "quarterly"],
    "metrics": [
      "user_growth",
      "feature_adoption",
      "performance_trends",
      "error_patterns"
    ],
    "comparison_periods": {
      "previous_period": true,
      "same_period_last_year": true,
      "baseline_comparison": true
    }
  }
}
```

#### Custom Reports
```javascript
// Define custom analytics reports
{
  "custom_reports": [
    {
      "name": "Executive Dashboard",
      "schedule": "weekly",
      "recipients": ["ceo@company.com", "cto@company.com"],
      "sections": [
        "user_growth_summary",
        "platform_performance",
        "key_metrics_trends",
        "business_impact"
      ]
    },
    {
      "name": "Technical Performance Report",
      "schedule": "daily",
      "recipients": ["devops@company.com"],
      "sections": [
        "system_performance",
        "error_analysis",
        "capacity_utilization",
        "security_metrics"
      ]
    }
  ]
}
```

## Data Privacy and Compliance

### Privacy Configuration

#### GDPR Compliance
```javascript
// GDPR-compliant analytics configuration
{
  "privacy_settings": {
    "anonymize_ip": true,
    "respect_do_not_track": true,
    "cookie_consent_required": true,
    "data_retention_period": 26, // months
    "anonymize_user_data": true,
    "allow_data_export": true,
    "allow_data_deletion": true
  }
}
```

#### Data Retention Policies
```javascript
// Configure data retention
{
  "data_retention": {
    "raw_events": {
      "retention_period": "12_months",
      "archival_storage": true,
      "deletion_after": "24_months"
    },
    "aggregated_data": {
      "retention_period": "36_months",
      "archival_storage": true,
      "deletion_after": "60_months"
    },
    "user_profiles": {
      "retention_period": "indefinite",
      "anonymize_after": "24_months_inactive"
    }
  }
}
```

### Consent Management

#### Cookie Consent
```javascript
// Cookie consent configuration
{
  "cookie_consent": {
    "required_cookies": ["session", "security"],
    "analytics_cookies": {
      "consent_required": true,
      "default_state": "denied",
      "categories": ["performance", "analytics", "marketing"]
    },
    "consent_banner": {
      "position": "bottom",
      "style": "minimalist",
      "customizable": true
    }
  }
}
```

## Advanced Analytics Features

### Cohort Analysis

#### User Cohort Tracking
```javascript
// Define user cohorts for analysis
{
  "cohort_analysis": {
    "cohort_definitions": [
      {
        "name": "Registration Month",
        "criteria": "GROUP BY DATE_TRUNC('month', registration_date)"
      },
      {
        "name": "User Role",
        "criteria": "GROUP BY user_role"
      },
      {
        "name": "Feature Adoption",
        "criteria": "GROUP BY first_feature_used"
      }
    ],
    "metrics": [
      "retention_rate",
      "engagement_score",
      "feature_adoption_rate",
      "customer_lifetime_value"
    ]
  }
}
```

### Funnel Analysis

#### User Journey Funnels
```javascript
// Define conversion funnels
{
  "funnel_analysis": [
    {
      "name": "User Onboarding",
      "steps": [
        "registration_started",
        "email_verified",
        "profile_completed",
        "first_dashboard_viewed",
        "first_data_interaction"
      ],
      "conversion_windows": {
        "step_1_to_2": "24_hours",
        "step_2_to_3": "7_days",
        "step_3_to_4": "7_days",
        "step_4_to_5": "14_days"
      }
    },
    {
      "name": "Feature Adoption",
      "steps": [
        "feature_discovered",
        "feature_clicked",
        "feature_configured",
        "feature_used_regularly"
      ]
    }
  ]
}
```

### A/B Testing Integration

#### Experiment Tracking
```javascript
// A/B testing analytics integration
{
  "ab_testing": {
    "experiments": [
      {
        "name": "dashboard_layout_test",
        "variants": ["control", "variant_a", "variant_b"],
        "success_metrics": ["user_engagement", "task_completion_rate"],
        "segment_by": ["user_role", "device_type"],
        "sample_size": 1000,
        "confidence_level": 0.95
      }
    ],
    "integration": {
      "experiment_assignment": "on_user_login",
      "metric_tracking": "automatic",
      "result_calculation": "real_time"
    }
  }
}
```

## Implementation Guide

### Analytics SDK Integration

#### JavaScript SDK
```javascript
// Initialize TagoRUN Analytics SDK
import TagoRunAnalytics from '@tagorun/analytics';

const analytics = new TagoRunAnalytics({
  apiKey: 'your-api-key',
  userId: user.id,
  sessionId: session.id,
  environment: 'production',
  batchSize: 50,
  flushInterval: 10000 // 10 seconds
});

// Track events
analytics.track('dashboard_viewed', {
  dashboard_id: 'dash_123',
  dashboard_name: 'Production Overview',
  widget_count: 8,
  load_time: 1200
});

// Set user properties
analytics.setUserProperties({
  role: 'operator',
  department: 'manufacturing',
  experience_level: 'intermediate'
});

// Track page views
analytics.page('Dashboard', 'Production Overview');
```

#### Server-Side Integration
```javascript
// Server-side analytics tracking
const AnalyticsServer = require('@tagorun/analytics-server');

const analytics = new AnalyticsServer({
  apiKey: process.env.TAGORUN_ANALYTICS_KEY,
  environment: process.env.NODE_ENV
});

// Track server-side events
app.post('/api/data', async (req, res) => {
  // Process data
  await processData(req.body);
  
  // Track analytics event
  analytics.track(req.user.id, 'api_data_received', {
    endpoint: '/api/data',
    data_size: req.body.length,
    processing_time: processingTime,
    success: true
  });
  
  res.json({ status: 'success' });
});
```

### Custom Analytics Implementation

#### Data Collection Layer
```javascript
// Custom analytics data collection
class CustomAnalytics {
  constructor(config) {
    this.config = config;
    this.eventQueue = [];
    this.batchTimer = null;
  }
  
  track(event, properties) {
    const analyticsEvent = {
      event: event,
      properties: {
        ...properties,
        timestamp: new Date().toISOString(),
        session_id: this.getSessionId(),
        user_id: this.getUserId(),
        page_url: window.location.href,
        user_agent: navigator.userAgent
      }
    };
    
    this.eventQueue.push(analyticsEvent);
    this.scheduleFlush();
  }
  
  scheduleFlush() {
    if (this.batchTimer) return;
    
    this.batchTimer = setTimeout(() => {
      this.flush();
      this.batchTimer = null;
    }, this.config.flushInterval);
  }
  
  async flush() {
    if (this.eventQueue.length === 0) return;
    
    const events = this.eventQueue.splice(0);
    
    try {
      await fetch('/api/analytics/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`
        },
        body: JSON.stringify({ events })
      });
    } catch (error) {
      console.error('Analytics flush failed:', error);
      // Re-queue events for retry
      this.eventQueue.unshift(...events);
    }
  }
}
```

## Performance Optimization

### Analytics Performance

#### Efficient Data Collection
```javascript
// Optimize analytics data collection
{
  "performance_optimization": {
    "sampling_rate": {
      "high_frequency_events": 0.1, // Sample 10% of frequent events
      "user_interactions": 1.0,     // Track all user interactions
      "system_events": 1.0          // Track all system events
    },
    "batching": {
      "batch_size": 100,
      "max_batch_delay": 30000,     // 30 seconds
      "compression": true
    },
    "caching": {
      "user_properties": true,
      "session_data": true,
      "device_info": true
    }
  }
}
```

#### Resource Management
```javascript
// Manage analytics resource usage
const analyticsConfig = {
  async_processing: true,
  memory_limit: '256MB',
  queue_size_limit: 10000,
  worker_threads: 2,
  fallback_storage: 'localStorage',
  error_recovery: {
    max_retries: 3,
    backoff_strategy: 'exponential',
    fallback_endpoint: '/api/analytics/fallback'
  }
};
```

## Troubleshooting

### Common Issues

#### Data Collection Problems
```javascript
// Debug analytics data collection
function debugAnalytics() {
  console.log('Analytics Debug Info:');
  console.log('- Event Queue Size:', analytics.eventQueue.length);
  console.log('- Session ID:', analytics.getSessionId());
  console.log('- User ID:', analytics.getUserId());
  console.log('- Configuration:', analytics.config);
  
  // Test event sending
  analytics.track('debug_test', {
    test_timestamp: new Date().toISOString(),
    debug_mode: true
  });
}
```

#### Performance Issues
```javascript
// Monitor analytics performance impact
const performanceMonitor = {
  trackingOverhead: {
    start: performance.now(),
    end: null,
    duration: null
  },
  
  measureTrackingOverhead() {
    this.trackingOverhead.start = performance.now();
    
    // Perform analytics tracking
    analytics.track('performance_test', {
      test_data: 'performance_measurement'
    });
    
    this.trackingOverhead.end = performance.now();
    this.trackingOverhead.duration = 
      this.trackingOverhead.end - this.trackingOverhead.start;
    
    console.log('Analytics tracking overhead:', 
      this.trackingOverhead.duration, 'ms');
  }
};
```

### Monitoring and Alerts

#### Analytics Health Monitoring
```javascript
// Monitor analytics system health
{
  "analytics_monitoring": {
    "health_checks": [
      {
        "name": "Event Collection Rate",
        "query": "SELECT COUNT(*) FROM events WHERE timestamp > NOW() - INTERVAL 1 HOUR",
        "alert_threshold": 100,
        "alert_condition": "less_than"
      },
      {
        "name": "Data Processing Lag",
        "query": "SELECT AVG(processing_timestamp - event_timestamp) FROM processed_events",
        "alert_threshold": 300, // 5 minutes
        "alert_condition": "greater_than"
      }
    ],
    "notification_channels": ["email", "slack"],
    "check_interval": 300 // 5 minutes
  }
}
```

## Next Steps

To implement comprehensive analytics:

1. **Strategy Planning**: Define your analytics strategy and key metrics
2. **Platform Selection**: Choose appropriate analytics platforms and tools
3. **Implementation**: Set up tracking and data collection
4. **Dashboard Creation**: Build analytics dashboards and reports
5. **Monitoring Setup**: Implement monitoring and alerting
6. **Optimization**: Continuously optimize based on insights

For related information, see:
- [User Management](../access-management/user-management) for user-based analytics
- [Custom Settings](./custom-settings) for configuration options
- [Security and Protection](./security-protection) for privacy and compliance
- [User Notifications](./user-notifications) for analytics-driven notifications
