# Blueprint Dashboard

Blueprint is a type of [Dashboard](./overview.md) that allows users to dynamically link [widgets](../widgets/overview.md) to multiple devices. This type of dashboard is extremely useful when scaling up applications.

![Blueprint Dashboard Animation](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/baMyIBUBfzLyzPSMmK10G7tSCyKLXYIJSG010TMbQ5g/bp-dash-nOo.gif)

## Key Concepts

Blueprint works by allowing users to change the widgets' devices in real-time inside of the Dashboard. These dynamic devices are called **Blueprint Devices**, and you can learn more about them in the following sections of this article.

This means that you can distribute the same Dashboard to hundreds of different [TagoRUN Users](https://help.tago.io/portal/en/kb/articles/190-user-management) and each one would see their own data inside of the Dashboard.

## Blueprint Devices

[Blueprint Devices](https://help.tago.io/portal/en/kb/articles/455-blueprint-devices) are dynamic devices that can be changed by the User while viewing the Dashboard. Changing these devices will reload the data for the Widgets that use them.

![Blueprint Device Selection](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/vT-ak7yzBg4Vvy7asN7hVrehHUeuxWKfPmxPKEKwepA/1592330671692-dtA.png)

## Use Cases

### Multi-Tenant Applications
- **Scenario**: IoT service provider serving multiple customers
- **Benefit**: Single dashboard template serves all customers with their respective data
- **Implementation**: Each customer sees only their devices and data

### Asset Management
- **Scenario**: Fleet management with multiple vehicles
- **Benefit**: Switch between different vehicles using the same dashboard layout
- **Implementation**: Real-time switching between vehicle data streams

### Multi-Location Monitoring
- **Scenario**: Chain of stores or facilities
- **Benefit**: Monitor different locations using identical dashboard structure
- **Implementation**: Location-specific device selection with consistent KPIs

### Device Comparison
- **Scenario**: Comparing performance across similar devices
- **Benefit**: Side-by-side analysis using dynamic device switching
- **Implementation**: Quick device selection for comparative analysis

## Blueprint vs Regular Dashboards

| Feature | Regular Dashboard | Blueprint Dashboard |
|---------|------------------|---------------------|
| Device Binding | Fixed to specific devices | Dynamic device selection |
| Scalability | Manual creation for each use case | Single template for multiple use cases |
| User Experience | Static device data | Interactive device switching |
| Maintenance | Multiple dashboards to maintain | Single dashboard template |
| Distribution | Individual sharing | Template-based distribution |

## Implementation Benefits

### Development Efficiency
- **Reduced Development Time**: Create once, use many times
- **Consistent UI/UX**: Identical layout across all instances
- **Simplified Maintenance**: Update template to affect all instances
- **Version Control**: Single source of truth for dashboard structure

### User Experience
- **Intuitive Interface**: Users can easily switch between their devices
- **Real-time Updates**: Data refreshes automatically when devices change
- **Personalization**: Each user sees their relevant data only
- **Seamless Navigation**: No need for multiple dashboard URLs

### Business Benefits
- **Faster Time to Market**: Deploy scalable solutions quickly
- **Cost Effective**: Reduce development and maintenance overhead
- **Customer Satisfaction**: Provide personalized experiences
- **Easy Scaling**: Add new customers without dashboard modifications

## Configuration Steps

### 1. Create Blueprint Devices
- Define device templates that can be dynamically assigned
- Configure device permissions and access rules
- Set up device grouping and categorization

### 2. Design Dashboard Layout
- Create widgets using Blueprint Device references
- Configure widget properties and styling
- Set up dashboard tabs and organization

### 3. Configure User Access
- Set up [TagoRUN Users](https://help.tago.io/portal/en/kb/articles/190-user-management) with appropriate permissions
- Define device access rules per user
- Configure [Access Management](https://help.tago.io/portal/en/kb/articles/183-access-management) policies

### 4. Deploy and Share
- Share dashboard with users through [TagoRUN](https://help.tago.io/portal/en/kb/articles/191-tagorun)
- Test device switching functionality
- Monitor user engagement and performance

## Best Practices

### Dashboard Design
- **Keep it Simple**: Avoid overcomplicated layouts that may confuse users
- **Consistent Naming**: Use clear, consistent naming conventions for Blueprint Devices
- **Visual Hierarchy**: Organize widgets in logical groups and sections
- **Responsive Design**: Ensure dashboard works well on different screen sizes

### Performance Optimization
- **Efficient Queries**: Optimize data queries for quick device switching
- **Caching Strategy**: Implement appropriate caching for frequently accessed data
- **Load Balancing**: Consider data distribution across different time periods
- **Monitoring**: Track dashboard performance and user interactions

### User Management
- **Clear Permissions**: Define precise access rules for each user type
- **Device Organization**: Group devices logically for easier selection
- **User Training**: Provide guidance on how to use dynamic device switching
- **Feedback Collection**: Gather user feedback for continuous improvement

## Troubleshooting

### Common Issues
- **Device Not Appearing**: Check user permissions and device access rules
- **Data Not Loading**: Verify device connectivity and data availability
- **Slow Performance**: Review query efficiency and caching configuration
- **Widget Errors**: Confirm widget configuration matches device data structure

### Performance Optimization
- Monitor dashboard load times
- Review widget query efficiency
- Optimize data refresh rates
- Consider regional endpoint usage

## Advanced Features

### Dynamic Filtering
- Implement device-based filtering across multiple widgets
- Create cascading filters for hierarchical device structures
- Enable user-defined filter combinations

### Custom Device Grouping
- Group devices by location, type, or custom criteria
- Enable multi-level device hierarchies
- Support for nested device categories

### Real-time Collaboration
- Multiple users viewing the same dashboard simultaneously
- Shared device selection across user sessions
- Collaborative dashboard annotation and notes

## Related Documentation

- [Dashboard Overview](./overview.md) - Basic dashboard concepts
- [Sharing Dashboards](./sharing-dashboards.md) - Distribution methods  
- [Blueprint Devices](../devices/blueprint-devices.md) - Device configuration
- [TagoRUN Users](../users/user-management.md) - User management
- [Access Management](../security/access-management.md) - Permission control
- [Widget Configuration](../widgets/overview.md) - Widget setup

---

*Source URL: https://help.tago.io/portal/en/kb/articles/454-blueprint-dashboard*