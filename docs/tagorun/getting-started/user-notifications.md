# Notifications for Users

You can push notification messages directly to the users registered in your [TagoRun application](../overview). This article will guide you on how to send notifications to your users using Actions or Analysis.

Notifications for users are not much different from your account's regular notifications, and you will have many more options to customize.

> **Important**: Users registered in your TagoRun account can only receive notifications sent by your application.

![User notifications interface](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/6BT-4uRzAaOnxs8s77UiBo6j9lgIUmGLgV-ftc_ViBk/1624305318040--D4.png)

## How to Send Notifications

First, you must have users registered in your [User Management](../access-management/user-management).

You also have two options: Send using Actions or Using Analysis.

> **Tip**: By pushing notifications using Analysis, you can add custom buttons allowing for more interaction.

## 1. Notifications Using Actions

The easiest way to push a notification to a user is by using Actions.

### Setup Process

1. Go to '[Actions](https://admin.tago.io/actions)' and create a new Action.
2. In the "Action to be Taken" option, select **Push notification to Run users**.
3. Select the user to receive the notification. If the dropdown is empty, you must register a user first.
4. Enter a **Title** and a **Message**.
5. Setup a **Trigger** for your action.

### Action Configuration Options

#### User Selection
- **Specific Users**: Select individual users by name or email
- **User Groups**: Target users based on tags or roles
- **All Users**: Send to all registered users (use with caution)

#### Message Content
- **Title**: Brief, descriptive notification title
- **Message**: Detailed notification content
- **Priority**: Set notification importance level
- **Icon**: Custom icon for the notification

#### Delivery Options
- **Immediate**: Send notification right away
- **Scheduled**: Schedule for specific date/time
- **Conditional**: Send based on trigger conditions

The notification will show up for your user like this:

![Notification display example](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/hbBnQ48DwiRWr4VXgSsyYMRumNVhEx2rdWYbKZuMAiQ/1624305684387-aJA.png)

## 2. Notifications Using Analysis

With Analysis, you are powered with more options to send a notification. You can even setup an action to trigger the analysis to get these options available.

### Advanced Features with Analysis

#### Interactive Notifications
- **Custom Buttons**: Add action buttons to notifications
- **User Input**: Collect responses from users
- **Dynamic Content**: Generate content based on data
- **Conditional Logic**: Send different messages based on conditions

#### Programming with SDK
```javascript
// Example: Send notification with custom buttons
const { Resources } = require('@tago-io/sdk');

const resource = new Resources({ token: 'your-token' });

await resource.run.userNotificationCreate({
  user_id: 'user-id',
  title: 'Alert: High Temperature',
  message: 'Temperature has exceeded 30°C',
  buttons: [
    { label: 'Acknowledge', value: 'ack' },
    { label: 'View Details', value: 'details' }
  ]
});
```

#### Advanced Targeting
- **Dynamic User Selection**: Choose users based on real-time data
- **Personalized Content**: Customize messages per user
- **Bulk Operations**: Send to multiple users efficiently
- **Response Handling**: Process user interactions

### Implementation Examples

#### Critical Alert System
```javascript
// Send critical alerts to administrators
if (temperature > 35) {
  await sendNotification({
    users: adminUsers,
    title: 'CRITICAL: Temperature Alert',
    message: `Temperature: ${temperature}°C`,
    priority: 'high',
    buttons: [
      { label: 'Emergency Response', value: 'emergency' },
      { label: 'Dismiss', value: 'dismiss' }
    ]
  });
}
```

#### Status Updates
```javascript
// Send status updates to relevant users
await sendNotification({
  users: getUsersByTag('maintenance_team'),
  title: 'Maintenance Complete',
  message: 'System maintenance has been completed successfully.',
  icon: 'success'
});
```

## Notification Types and Use Cases

### Informational Notifications
- **System Updates**: Inform users about system changes
- **Status Reports**: Regular status updates
- **Welcome Messages**: Onboarding notifications
- **News and Announcements**: Company or product updates

### Alert Notifications
- **Warning Alerts**: Potential issues requiring attention
- **Critical Alerts**: Urgent issues requiring immediate action
- **Threshold Notifications**: Values exceeding set limits
- **System Down Alerts**: Service outage notifications

### Interactive Notifications
- **Approval Requests**: Request user approval for actions
- **Survey Notifications**: Collect user feedback
- **Action Required**: Tasks that need user intervention
- **Confirmation Requests**: Verify user intentions

## Best Practices

### Message Design
- **Clear Titles**: Use descriptive, action-oriented titles
- **Concise Messages**: Keep messages brief but informative
- **Actionable Content**: Include clear next steps
- **Consistent Tone**: Maintain consistent communication style

### Timing and Frequency
- **Respect Time Zones**: Send notifications at appropriate times
- **Avoid Spam**: Don't overwhelm users with too many notifications
- **Priority-Based**: Use different frequencies for different priority levels
- **User Preferences**: Allow users to customize notification settings

### Targeting and Personalization
- **Relevant Recipients**: Only send to users who need the information
- **Role-Based Targeting**: Use user roles and tags for targeting
- **Personalized Content**: Include user-specific information when relevant
- **Language Preferences**: Use appropriate language based on user settings

### Technical Considerations
- **Error Handling**: Implement proper error handling for failed deliveries
- **Delivery Tracking**: Monitor notification delivery success
- **Rate Limiting**: Implement rate limiting to prevent abuse
- **Fallback Methods**: Have backup delivery methods if needed

## Troubleshooting

### Common Issues

#### Notifications Not Delivering
- Check user registration status
- Verify user permissions
- Check notification service configuration
- Review delivery logs

#### Users Not Receiving Notifications
- Confirm user has notifications enabled
- Check user's device/browser settings
- Verify user is logged in to TagoRUN
- Check notification filters and targeting

#### Performance Issues
- Optimize notification queries
- Implement batch processing for large user groups
- Monitor notification service resources
- Consider asynchronous delivery

### Monitoring and Analytics

#### Delivery Metrics
- Track delivery success rates
- Monitor response times
- Analyze user engagement
- Measure notification effectiveness

#### User Feedback
- Collect user feedback on notification quality
- Monitor user preferences and settings
- Track notification-related support requests
- Analyze user interaction patterns

## Integration with Other Features

### User Management Integration
- Sync with user roles and permissions
- Respect user privacy settings
- Use user tags for advanced targeting
- Consider user timezone and language

### Analytics Integration
- Track notification effectiveness
- Monitor user engagement metrics
- Generate reports on notification performance
- Analyze user behavior patterns

### Security Considerations
- Validate user permissions before sending
- Encrypt sensitive notification content
- Audit notification activities
- Implement access controls

## Next Steps

- Explore [Notifications for Users using Analysis](https://help.tago.io/portal/en/kb/articles/224-notifications-for-users-using-analysis) for advanced features
- Configure [User Management](../access-management/user-management) for proper user targeting
- Set up [Security and Protection](./security-protection) for notification security
- Learn about [Custom Settings](./custom-settings) for user notification preferences
