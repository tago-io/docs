# Email Templates

Email templates in TagoRUN allow you to customize all automated emails sent to your users, ensuring consistent branding and messaging throughout the user experience. This feature enables you to create professional, branded communications that align with your company's identity.

## Overview

TagoRUN sends various types of emails during user interactions, from welcome messages to password resets and system notifications. With email templates, you can:

- **Customize Content**: Modify text, layout, and styling of all emails
- **Brand Consistency**: Include your logo, colors, and company information
- **Multilingual Support**: Create templates in multiple languages
- **Dynamic Content**: Include user-specific and context-specific information
- **Professional Appearance**: Create polished, professional communications

## Template Types

### User Management Emails

#### Welcome Email
Sent when new users register or are invited to the platform.

**Default Content**:
- Welcome message
- Account activation instructions
- Getting started resources
- Contact information

**Customization Options**:
```html
<!-- Welcome Email Template -->
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <div style="background: #000; padding: 20px; text-align: center;">
    <img src="{{company.logo}}" alt="{{company.name}}" style="max-height: 50px;">
  </div>
  
  <div style="padding: 30px 20px;">
    <h1 style="color: #000; margin-bottom: 20px;">Welcome to {{company.name}}!</h1>
    
    <p>Hi {{user.name}},</p>
    
    <p>Welcome to our IoT platform! Your account has been successfully created and you can now access all the features available in your plan.</p>
    
    <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 5px;">
      <h3>Your Account Details:</h3>
      <p><strong>Email:</strong> {{user.email}}</p>
      <p><strong>Role:</strong> {{user.role}}</p>
      <p><strong>Account Created:</strong> {{user.created_at}}</p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{login.url}}" style="background: #ff6b35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Access Your Dashboard</a>
    </div>
    
    <p>If you have any questions, feel free to contact our support team at {{support.email}}.</p>
    
    <p>Best regards,<br>{{company.name}} Team</p>
  </div>
</div>
```

#### Password Reset Email
Sent when users request password reset.

**Template Variables**:
- `{{user.name}}` - User's display name
- `{{reset.url}}` - Password reset link
- `{{reset.expires}}` - Link expiration time
- `{{company.name}}` - Your company name
- `{{support.email}}` - Support contact email

```html
<!-- Password Reset Template -->
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #000;">Password Reset Request</h2>
  
  <p>Hi {{user.name}},</p>
  
  <p>We received a request to reset your password for your {{company.name}} account.</p>
  
  <div style="text-align: center; margin: 30px 0;">
    <a href="{{reset.url}}" style="background: #ff6b35; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; display: inline-block;">Reset Your Password</a>
  </div>
  
  <p><strong>Important:</strong> This link will expire in {{reset.expires}}.</p>
  
  <p>If you didn't request this password reset, please ignore this email or contact support if you have concerns.</p>
</div>
```

#### Account Verification Email
Sent to verify email addresses during registration.

**Key Elements**:
- Clear call-to-action button
- Verification link with expiration
- Instructions for manual verification
- Support contact information

### Security Notification Emails

#### Login Alert Email
Sent when users log in from new devices or locations.

**Template Content**:
```html
<!-- Login Alert Template -->
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #000;">New Login Detected</h2>
  
  <p>Hi {{user.name}},</p>
  
  <p>We detected a new login to your {{company.name}} account:</p>
  
  <div style="background: #f9f9f9; padding: 15px; margin: 20px 0; border-left: 4px solid #ff6b35;">
    <p><strong>Time:</strong> {{login.timestamp}}</p>
    <p><strong>Location:</strong> {{login.location}}</p>
    <p><strong>Device:</strong> {{login.device}}</p>
    <p><strong>IP Address:</strong> {{login.ip}}</p>
  </div>
  
  <p>If this was you, no action is needed. If you don't recognize this activity, please secure your account immediately:</p>
  
  <ul>
    <li>Change your password</li>
    <li>Enable two-factor authentication</li>
    <li>Review your account activity</li>
  </ul>
</div>
```

#### Two-Factor Authentication Setup
Sent when users enable 2FA on their accounts.

### System Notification Emails

#### Maintenance Notification
Sent to inform users about scheduled maintenance.

```html
<!-- Maintenance Notification Template -->
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #ff6b35;">Scheduled Maintenance Notice</h2>
  
  <p>Dear {{user.name}},</p>
  
  <p>We're writing to inform you about scheduled maintenance for {{company.name}}:</p>
  
  <div style="background: #fff3cd; border: 1px solid #ffeaa7; padding: 20px; margin: 20px 0; border-radius: 5px;">
    <h3 style="color: #856404; margin-top: 0;">Maintenance Details</h3>
    <p><strong>Start Time:</strong> {{maintenance.start_time}}</p>
    <p><strong>End Time:</strong> {{maintenance.end_time}}</p>
    <p><strong>Duration:</strong> {{maintenance.duration}}</p>
    <p><strong>Impact:</strong> {{maintenance.impact}}</p>
  </div>
  
  <p>During this time, you may experience:</p>
  <ul>
    <li>{{maintenance.impact_list}}</li>
  </ul>
  
  <p>We apologize for any inconvenience and appreciate your understanding.</p>
</div>
```

#### Data Alert Notifications
Sent when data thresholds are exceeded or anomalies are detected.

## Template Customization

### Design Customization

#### Brand Elements
```css
/* Company branding styles */
.header {
  background-color: {{brand.primary_color}};
  padding: 20px;
  text-align: center;
}

.logo {
  max-height: 60px;
  width: auto;
}

.button-primary {
  background-color: {{brand.accent_color}};
  color: white;
  padding: 15px 30px;
  text-decoration: none;
  border-radius: {{brand.border_radius}};
  display: inline-block;
  font-weight: bold;
}

.footer {
  background-color: {{brand.secondary_color}};
  color: {{brand.text_color}};
  padding: 20px;
  font-size: 12px;
  text-align: center;
}
```

#### Responsive Design
```css
/* Mobile-responsive email styles */
@media only screen and (max-width: 600px) {
  .container {
    width: 100% !important;
    padding: 10px !important;
  }
  
  .header h1 {
    font-size: 24px !important;
  }
  
  .button-primary {
    width: 100% !important;
    padding: 15px 10px !important;
  }
}
```

### Content Personalization

#### Dynamic Variables
```html
<!-- User-specific content -->
<p>Hello {{user.first_name}},</p>
<p>Your {{user.role}} account gives you access to:</p>

<!-- Conditional content based on user role -->
{{#if user.is_admin}}
  <li>Administrative dashboard</li>
  <li>User management</li>
  <li>System configuration</li>
{{/if}}

{{#if user.is_operator}}
  <li>Device monitoring</li>
  <li>Data visualization</li>
  <li>Alert management</li>
{{/if}}

<!-- Account-specific information -->
<p>Account created: {{user.created_at | date: "MMMM dd, yyyy"}}</p>
<p>Last login: {{user.last_login | date: "MMMM dd, yyyy 'at' HH:mm"}}</p>
```

#### Localization Support
```html
<!-- Multi-language template using dictionaries -->
<h1>{{#dictionary "welcome_title"}}{{/dictionary}}</h1>
<p>{{#dictionary "welcome_message"}}{{user.name}}{{/dictionary}}</p>

<!-- Language-specific content -->
{{#if user.language == "es"}}
  <p>Bienvenido a {{company.name}}!</p>
{{else if user.language == "fr"}}
  <p>Bienvenue à {{company.name}}!</p>
{{else}}
  <p>Welcome to {{company.name}}!</p>
{{/if}}
```

## Template Management

### Template Editor

#### Visual Editor
- **WYSIWYG Interface**: Visual editing with real-time preview
- **Drag-and-Drop**: Easy layout construction
- **Component Library**: Pre-built email components
- **Mobile Preview**: Preview how emails appear on mobile devices

#### Code Editor
- **HTML/CSS Editing**: Direct code editing for advanced customization
- **Variable Helpers**: Auto-complete for template variables
- **Syntax Highlighting**: Clear code visualization
- **Validation**: Real-time error checking

### Version Control

#### Template Versioning
```javascript
// Template version management
{
  "template_id": "welcome_email",
  "versions": [
    {
      "version": "1.0",
      "status": "active",
      "created_at": "2023-01-15T10:00:00Z",
      "created_by": "admin@company.com",
      "changes": "Initial template"
    },
    {
      "version": "1.1",
      "status": "draft",
      "created_at": "2023-02-01T15:30:00Z",
      "created_by": "marketing@company.com",
      "changes": "Updated branding and copy"
    }
  ]
}
```

#### A/B Testing
```javascript
// A/B test configuration
{
  "test_name": "welcome_email_subject_test",
  "template_variants": [
    {
      "variant": "A",
      "subject": "Welcome to {{company.name}}!",
      "weight": 50
    },
    {
      "variant": "B", 
      "subject": "Your {{company.name}} account is ready!",
      "weight": 50
    }
  ],
  "success_metric": "click_through_rate",
  "duration_days": 14
}
```

### Template Testing

#### Preview and Testing
```javascript
// Test email sending
{
  "template": "welcome_email",
  "test_recipient": "test@company.com",
  "test_data": {
    "user": {
      "name": "Test User",
      "email": "test@example.com",
      "role": "viewer"
    },
    "company": {
      "name": "Test Company",
      "logo": "https://example.com/logo.png"
    }
  }
}
```

#### Validation Checks
- **HTML Validation**: Ensure proper HTML structure
- **CSS Compatibility**: Check email client compatibility
- **Link Validation**: Verify all links are working
- **Image Optimization**: Check image sizes and formats
- **Spam Score**: Analyze potential spam triggers

## Email Delivery Configuration

### SMTP Configuration

#### Custom SMTP Settings
```javascript
// SMTP configuration for custom email servers
{
  "smtp_settings": {
    "host": "smtp.company.com",
    "port": 587,
    "security": "STARTTLS",
    "authentication": {
      "username": "noreply@company.com",
      "password": "secure_password"
    }
  },
  "from_address": "noreply@company.com",
  "from_name": "Company Name",
  "reply_to": "support@company.com"
}
```

#### Email Service Providers
- **SendGrid**: High deliverability email service
- **Amazon SES**: Cost-effective solution for high volume
- **Mailgun**: Developer-friendly email API
- **Microsoft 365**: Enterprise email integration
- **Custom SMTP**: Use your own email server

### Delivery Optimization

#### Rate Limiting
```javascript
// Email rate limiting configuration
{
  "rate_limits": {
    "per_minute": 100,
    "per_hour": 1000,
    "per_day": 10000,
    "burst_limit": 10
  },
  "priority_queue": {
    "critical": 1,      // Security alerts, password resets
    "high": 2,          // Welcome emails, important notifications
    "normal": 3,        // General notifications
    "low": 4           // Marketing, non-urgent updates
  }
}
```

#### Bounce Handling
```javascript
// Handle email bounces and failures
function handleEmailBounce(bounceEvent) {
  const { email, bounceType, reason } = bounceEvent;
  
  switch (bounceType) {
    case 'permanent':
      // Remove from mailing list
      removeFromMailingList(email);
      break;
      
    case 'temporary':
      // Retry later with exponential backoff
      scheduleRetry(email, calculateBackoff());
      break;
      
    case 'complaint':
      // Handle spam complaints
      handleSpamComplaint(email);
      break;
  }
}
```

## Analytics and Reporting

### Email Metrics

#### Delivery Metrics
- **Sent Count**: Total emails sent
- **Delivered Count**: Successfully delivered emails
- **Bounce Rate**: Percentage of bounced emails
- **Delivery Rate**: Percentage of successful deliveries

#### Engagement Metrics
- **Open Rate**: Percentage of emails opened
- **Click-Through Rate**: Percentage of links clicked
- **Conversion Rate**: Percentage completing desired actions
- **Unsubscribe Rate**: Percentage of users unsubscribing

#### Performance Tracking
```javascript
// Email analytics tracking
{
  "email_id": "email_123456",
  "template": "welcome_email",
  "metrics": {
    "sent_at": "2023-01-15T10:30:00Z",
    "delivered_at": "2023-01-15T10:30:15Z",
    "opened_at": "2023-01-15T11:45:30Z",
    "clicked_at": "2023-01-15T11:46:15Z",
    "clicks": [
      {
        "url": "https://app.company.com/dashboard",
        "clicked_at": "2023-01-15T11:46:15Z"
      }
    ]
  }
}
```

### Reporting Dashboard

#### Email Performance Reports
- **Campaign Performance**: Compare different email campaigns
- **Template Analysis**: Analyze performance by template type
- **User Engagement**: Track user interaction patterns
- **Deliverability Reports**: Monitor delivery health

#### Automated Reports
```javascript
// Scheduled email reports
{
  "report_schedule": {
    "frequency": "weekly",
    "day": "monday",
    "time": "09:00",
    "recipients": ["marketing@company.com", "admin@company.com"]
  },
  "report_content": {
    "metrics": ["delivery_rate", "open_rate", "click_rate"],
    "timeframe": "last_7_days",
    "include_trends": true,
    "include_recommendations": true
  }
}
```

## Best Practices

### Design Best Practices

#### Email Design Guidelines
- **Single Column Layout**: Better mobile compatibility
- **Clear Hierarchy**: Use headings and spacing effectively
- **Minimal Images**: Reduce loading time and spam risk
- **Alt Text**: Include descriptive alt text for images
- **Web-Safe Fonts**: Use fonts that render consistently

#### Content Guidelines
- **Clear Subject Lines**: Descriptive and concise
- **Scannable Content**: Use bullet points and short paragraphs
- **Strong CTAs**: Clear, action-oriented calls-to-action
- **Personal Touch**: Include user-specific information
- **Value Proposition**: Clearly communicate benefits

### Technical Best Practices

#### Email Authentication
```dns
// SPF Record
TXT "v=spf1 include:_spf.company.com ~all"

// DKIM Record
TXT "k=rsa; t=s; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC..."

// DMARC Record
TXT "v=DMARC1; p=quarantine; rua=mailto:dmarc@company.com"
```

#### Accessibility
- **High Contrast**: Ensure sufficient color contrast
- **Semantic HTML**: Use proper HTML structure
- **Screen Reader Friendly**: Include descriptive text
- **Keyboard Navigation**: Ensure links are accessible
- **Alternative Text**: Provide alt text for all images

### Compliance and Legal

#### Privacy Compliance
- **GDPR Compliance**: Include unsubscribe options
- **CAN-SPAM Compliance**: Proper sender identification
- **Data Protection**: Secure handling of personal data
- **Consent Management**: Track email consent preferences

#### Unsubscribe Management
```javascript
// Unsubscribe handling
function handleUnsubscribe(email, unsubscribeType) {
  const preferences = {
    email: email,
    marketing_emails: unsubscribeType === 'marketing' ? false : true,
    system_emails: unsubscribeType === 'all' ? false : true,
    security_emails: true, // Always keep security emails
    updated_at: new Date().toISOString()
  };
  
  updateEmailPreferences(preferences);
  sendUnsubscribeConfirmation(email);
}
```

## Advanced Features

### Automation and Triggers

#### Automated Email Sequences
```javascript
// Welcome email sequence
{
  "sequence_name": "user_onboarding",
  "trigger": "user_registration",
  "emails": [
    {
      "template": "welcome_email",
      "delay": "immediate"
    },
    {
      "template": "getting_started_tips",
      "delay": "1_day",
      "condition": "user.last_login == null"
    },
    {
      "template": "feature_introduction",
      "delay": "3_days",
      "condition": "user.dashboard_views < 3"
    },
    {
      "template": "help_and_support",
      "delay": "7_days",
      "condition": "user.support_tickets == 0"
    }
  ]
}
```

#### Behavioral Triggers
- **User Inactivity**: Re-engagement emails
- **Feature Usage**: Feature-specific tips and guides
- **Data Thresholds**: Alert emails for data anomalies
- **Account Changes**: Notification of account modifications

### Integration Capabilities

#### CRM Integration
```javascript
// Sync email engagement with CRM
{
  "integration": "salesforce",
  "sync_settings": {
    "track_opens": true,
    "track_clicks": true,
    "create_activities": true,
    "update_lead_score": true
  },
  "field_mapping": {
    "email_opened": "Email_Engagement__c",
    "links_clicked": "Email_Clicks__c",
    "last_email_date": "Last_Email_Date__c"
  }
}
```

#### Analytics Integration
- **Google Analytics**: Track email campaign performance
- **Marketing Automation**: Integrate with marketing platforms
- **Customer Support**: Connect with helpdesk systems
- **Business Intelligence**: Feed data into BI tools

## Troubleshooting

### Common Issues

#### Delivery Problems
1. **Check SMTP Configuration**: Verify server settings
2. **Review DNS Records**: Ensure SPF, DKIM, DMARC are set
3. **Monitor Reputation**: Check sender reputation scores
4. **Validate Recipients**: Ensure email addresses are valid

#### Template Issues
1. **HTML Validation**: Check for syntax errors
2. **Variable Errors**: Verify all variables are defined
3. **CSS Compatibility**: Test across email clients
4. **Image Loading**: Ensure images are accessible

#### Performance Issues
1. **Rate Limiting**: Check sending rate limits
2. **Queue Management**: Monitor email queues
3. **Server Resources**: Ensure adequate server capacity
4. **Database Performance**: Optimize template queries

### Monitoring and Alerts

#### Email Health Monitoring
```javascript
// Monitor email system health
const emailHealthChecks = {
  smtp_connectivity: {
    check: () => testSMTPConnection(),
    alert_threshold: 95, // Alert if success rate below 95%
    check_interval: 300 // Check every 5 minutes
  },
  delivery_rate: {
    check: () => calculateDeliveryRate(),
    alert_threshold: 90, // Alert if delivery rate below 90%
    check_interval: 3600 // Check every hour
  },
  bounce_rate: {
    check: () => calculateBounceRate(),
    alert_threshold: 5, // Alert if bounce rate above 5%
    check_interval: 3600
  }
};
```

## Next Steps

To implement effective email templates:

1. **Design Strategy**: Plan your email template strategy and branding
2. **Template Creation**: Create and customize templates for all email types
3. **Testing**: Thoroughly test templates across email clients and devices
4. **Delivery Setup**: Configure SMTP and authentication
5. **Monitor Performance**: Track metrics and optimize based on results

For related information, see:
- [User Notifications](./user-notifications)
- [Branding and Deployment](./branding-deployment)
- [Dictionary Management](../dictionaries/dictionary-management)
- [Custom Settings](./custom-settings)
