# Sharing Dashboards

A great feature from TagoIO is its native sharing capability for dashboards, because we know that sometimes a dashboard can become an entire feature that you want to share.

> **Template Sharing**: If you want to share only the template of your dashboards, use the [Distribute](https://help.tago.io/portal/en/kb/articles/518-distributing-dashboards) feature.

> **Brand Customization**: To share applications with your end-user using your brand and custom URL, use [TagoRUN](https://help.tago.io/portal/en/kb/articles/191-tagorun).

## Prerequisites

> **Important**: [Dashboards](./overview.md) can only be shared once you activate your [TagoRUN](https://help.tago.io/portal/en/kb/articles/191-tagorun) portal and create an [Anonymous User](https://help.tago.io/portal/en/kb/articles/190-user-management#Anonymous_User).

Before you can share dashboards publicly, ensure you have:
1. **Active TagoRUN portal**
2. **Anonymous User created** with appropriate permissions
3. **Access Management policies** configured for the Anonymous User

## How to Share a Dashboard

### Method 1: Dashboard Menu

To share a dashboard, open the menu for the dashboard you want to share and click on **Share Public**:

![Share Dashboard Menu](https://help.tago.io/galleryDocuments/edbsn9277a77b714313248a850fd1b0934acbcd85973398c5c6b712d5e161760fd02d82580e7773b9e4d92a80890ef5593f76?inline=true)

### Method 2: Dashboard Settings

The Share Public section can also be accessed by opening the settings page when accessing the dashboard in your Admin panel.

## Share Public

You can share your dashboard with anyone that receives a URL link. It will not be necessary for the other users to have an account created at TagoIO, or any credentials to sign in.

### Requirements for Public Sharing

1. **TagoRUN Activation**: Your [TagoRUN](https://help.tago.io/portal/en/kb/articles/191-tagorun) portal must be active
2. **Anonymous User**: Create an [Anonymous User](https://help.tago.io/portal/en/kb/articles/190-user-management#Anonymous_User)
3. **Proper Permissions**: The Anonymous User should have the necessary permissions to access the resources you want to display in your public dashboard

### Setting Up Permissions

You can configure permissions by creating a policy in the [Access Management](https://help.tago.io/portal/en/kb/articles/183-access-management) module.

### Public Link Generation

A public link can be copied from the Share Public page for both:
- **Normal Dashboards**: Static device configurations
- **[Blueprint Dashboards](./blueprint-dashboard.md)**: Dynamic device switching capabilities

![Public Link Interface](https://help.tago.io/galleryDocuments/edbsnd87ee25163a030e7240adf80fb8acd35c441d4cf1914503e10fc5e5e9e26a43c307d95e0b3b4989a04863687ea5f6c07?inline=true)

### Configuration Assistance

> **Setup Help**: If your Profile does not have [TagoRUN](https://help.tago.io/portal/en/kb/articles/191-tagorun) deployed or an [Anonymous User](https://help.tago.io/portal/en/kb/articles/190-user-management#Anonymous_User), the Share Public section will display instructions you need to follow to meet the requirements.

## Data Output Considerations

> **Usage Tracking**: Accessing data from dashboards, even when it's downloaded in .csv format from the widgets, is counted towards your [Data Output for Dashboards](https://help.tago.io/portal/en/kb/articles/data-output-for-dashboards).

### Important Notes
- Public dashboard access consumes your data output quota
- Monitor usage to avoid unexpected charges
- Consider implementing caching strategies for high-traffic dashboards
- Track anonymous user activity through dashboard analytics

## Dashboard Templates

You can also share the template of your dashboard using the [distribute](https://help.tago.io/portal/en/kb/articles/518-distributing-dashboards) feature. In this case, **no data is shared**, only the template.

### Template vs Data Sharing

| Share Type | Data Included | Use Case |
|------------|---------------|----------|
| **Public Sharing** | Yes, live data | Customer dashboards, monitoring displays |
| **Template Distribution** | No, structure only | Dashboard templates, reusable layouts |

## Sharing Strategies

### Public Monitoring Displays
- **Use Case**: Public information displays, kiosks
- **Configuration**: Anonymous user with read-only permissions
- **Best Practice**: Use auto-refresh and full-screen mode

### Customer Portals
- **Use Case**: Individual customer data access
- **Configuration**: Blueprint dashboards with device filtering
- **Best Practice**: Implement user-specific device access

### Demo Dashboards
- **Use Case**: Product demonstrations, sales presentations
- **Configuration**: Sample data with full feature access
- **Best Practice**: Regular data refresh and cleanup

### Internal Sharing
- **Use Case**: Team collaboration, stakeholder updates
- **Configuration**: Named users or Anonymous users with broader permissions
- **Best Practice**: Implement proper access controls

## Security Considerations

### Access Control
- **Principle of Least Privilege**: Grant minimal necessary permissions
- **Regular Audits**: Review Anonymous User permissions periodically
- **URL Security**: Consider URL complexity and sharing scope

### Data Protection
- **Sensitive Data**: Avoid sharing sensitive information publicly
- **Data Filtering**: Use Access Management to restrict data access
- **Monitoring**: Track dashboard usage and access patterns

### Performance Security
- **Rate Limiting**: Monitor for unusual access patterns
- **Resource Usage**: Set appropriate limits on Anonymous User resources
- **Caching**: Implement caching to reduce server load

## Best Practices

### Dashboard Design for Sharing
- **Mobile Responsiveness**: Ensure dashboards work on various devices
- **Clear Navigation**: Provide intuitive user interface
- **Performance Optimization**: Minimize load times
- **Error Handling**: Implement graceful error messages

### User Experience
- **Loading Indicators**: Show progress during data loading
- **Refresh Controls**: Provide manual refresh options
- **Help Documentation**: Include usage instructions
- **Contact Information**: Provide support contact details

### Maintenance
- **Regular Updates**: Keep shared dashboards current
- **Link Management**: Track and update shared URLs
- **User Feedback**: Collect and act on user feedback
- **Performance Monitoring**: Monitor dashboard performance metrics

## Troubleshooting Common Issues

### Dashboard Not Loading
- Verify TagoRUN is active and properly configured
- Check Anonymous User permissions
- Confirm dashboard sharing settings
- Review Access Management policies

### Permission Denied Errors
- Review Anonymous User access rights
- Check device and bucket permissions
- Verify Access Management policy configuration
- Confirm dashboard resource access

### Performance Issues
- Monitor data output usage
- Review widget query efficiency
- Check for large data sets
- Consider implementing caching

### Sharing Link Problems
- Verify URL accuracy and completeness
- Check browser compatibility
- Test link in incognito/private mode
- Confirm network connectivity

## Advanced Sharing Features

### Custom Branding
- Use TagoRUN for custom domain and branding
- Implement custom CSS for personalized appearance
- Add company logos and color schemes
- Create branded user experience

### Analytics and Tracking
- Monitor dashboard usage statistics
- Track user engagement metrics
- Analyze popular dashboard sections
- Generate usage reports

### Integration Options
- Embed dashboards in external websites
- Integrate with SSO systems
- Connect with external authentication
- Implement custom user management

## Related Documentation

- [Dashboard Overview](./overview.md) - Basic dashboard concepts
- [Blueprint Dashboard](./blueprint-dashboard.md) - Dynamic dashboard creation
- [Distributing Dashboards](./distributing-dashboards.md) - Template sharing
- [TagoRUN](../tagorun/overview.md) - White-label platform
- [User Management](../users/user-management.md) - User configuration
- [Access Management](../security/access-management.md) - Permission control
- [Data Output](../billing/data-output-dashboards.md) - Usage tracking

---

*Source URL: https://help.tago.io/portal/en/kb/articles/17-sharing-dashboards*