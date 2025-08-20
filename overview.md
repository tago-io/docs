---
title: Dashboard Overview
description: Comprehensive guide to TagoIO dashboards - creation, management, sharing, and best practices
sidebar_position: 1
tags: [dashboards, widgets, visualization, real-time, blueprint]
---

# Dashboard Overview

A dashboard is where you place your widgets to visualize and interact with data, all in real-time. Dashboards serve as the primary interface for data visualization and can be shared with end-users accessing your application through TagoRUN.

## What are Dashboards?

TagoIO dashboards are interactive, real-time data visualization platforms that allow you to:

- **Visualize Data**: Display sensor data, metrics, and analytics through various widget types
- **Real-time Interaction**: Monitor and interact with live data streams
- **User Access**: Share dashboards with end-users through TagoRUN applications
- **Customization**: Fully customize appearance with icons, backgrounds, and layouts

All your dashboards are listed in the sidebar of the Admin panel, with the Edit Dashboard menu providing access to dashboard management functions including rename, share, distribute, duplicate, and delete.

## Dashboard Types and Features

### Normal Dashboards

Standard dashboards created for pre-selected devices and variables. These are ideal for:
- Fixed device monitoring
- Specific use case applications
- Direct device-to-widget mapping

### Blueprint Dashboards

Advanced dashboards that use tag-based associations to scale applications dynamically. Blueprint dashboards:
- **Scale Dynamically**: One dashboard can serve multiple devices and users
- **Tag-Based**: Use matching tags to associate devices with widgets
- **Multi-tenant**: Perfect for applications serving multiple customers
- **Real-time Device Switching**: Users can change devices within the dashboard

Blueprint dashboards work through **Blueprint Devices** - dynamic devices that can be changed by users while viewing the dashboard, automatically reloading widget data.

## Creating and Managing Dashboards

### Creating New Dashboards

1. Click the **+** button on the left side of the Admin page
2. Choose to build from scratch or select from pre-designed templates
3. Toggle the **Blueprint slider** for Blueprint dashboard creation
4. Enter a dashboard name and click **Save**
5. Begin adding widgets (limit: 100 widgets per dashboard)

### Dashboard Customization

#### Dashboard Icons
Add custom icons to personalize your dashboard appearance and improve user experience.

#### Background Customization
- **Colors**: Set custom background colors
- **Images**: Upload custom background images
- **Animations**: Use .gif format for animated backgrounds (videos not supported)
- **Opacity Control**: Full control over background and widget opacity levels

#### Dashboard Tabs
Create multiple tabs within a single dashboard for organized content presentation.

#### Mobile Optimization
Reorder widgets specifically for mobile app display on TagoRUN:
1. Switch dashboard to **Edit mode**
2. Click the smartphone icon at the top right
3. Drag widgets to preferred positions for mobile view

## Dashboard Sharing and Permissions

### Share Public

Share dashboards with anyone via URL link without requiring TagoIO accounts:

**Requirements:**
- Activated TagoRUN portal
- Created Anonymous User with proper permissions
- Access Management policies configured

**Features:**
- Public link generation for both Normal and Blueprint dashboards
- No authentication required for viewers
- Data access counted towards Data Output limits

### Distributing Dashboard Templates

Create and share dashboard templates without personal data:

**Template Features:**
- Customizable installation pages
- Logo and image customization
- Device and analysis descriptions
- Mockup data support (200KB limit)
- JSON export (Dashboard Structure or Manifest)

**Installation Process:**
- Users receive customized installation page
- Device association wizard
- Analysis configuration (if required)
- Automatic template setup

### Access Control

Dashboard access is managed through:
- **TagoRUN Users**: End-user access through branded applications
- **Access Management**: Permission policies for resource access
- **Anonymous Users**: Public access configuration
- **User Groups**: Organized access control

## Integration with Widgets

Dashboards serve as containers for various widget types that visualize your data:

### Widget Management
- **100 Widget Limit**: Maximum widgets per dashboard
- **Real-time Updates**: All widgets update with live data
- **Interactive Elements**: Widgets support user interaction
- **Responsive Design**: Automatic adaptation to different screen sizes

### Widget Types Integration
Dashboards support various widget types including:
- Display widgets for metrics and values
- Chart widgets for trend visualization  
- Map widgets for location data
- Custom widgets for specialized needs
- Control widgets for device interaction

### Data Flow
- **Device Data**: Widgets pull data from connected devices
- **Real-time Updates**: Automatic data refresh
- **Formula Support**: Data transformation and calculations
- **Time Filtering**: Global time controls for historical data

## Best Practices

### Design Guidelines
- **User Experience**: Design with end-users in mind
- **Performance**: Limit widgets per dashboard for optimal performance
- **Mobile First**: Consider mobile layout from the start
- **Visual Hierarchy**: Use proper spacing and organization

### Security
- **Permission Management**: Configure proper access controls
- **Data Privacy**: Be mindful of shared data sensitivity
- **Anonymous Access**: Carefully control public dashboard content

### Scalability
- **Blueprint Strategy**: Use Blueprint dashboards for multi-tenant applications
- **Tag Organization**: Implement consistent tagging strategies
- **Template Distribution**: Create reusable templates for common use cases

### Performance Optimization
- **Widget Limits**: Stay within the 100 widget limit
- **Data Filtering**: Use time filters to limit data loads
- **Background Images**: Optimize image sizes for faster loading
- **Mock Data**: Use for template testing (200KB limit)

### Management
- **Naming Conventions**: Use clear, descriptive dashboard names
- **Organization**: Group related dashboards logically
- **Version Control**: Utilize dashboard restore functionality
- **Documentation**: Include descriptions in distributed templates

### Integration
- **TagoRUN Deployment**: Plan for end-user access through TagoRUN
- **Analysis Integration**: Consider analysis dependencies in templates
- **Device Planning**: Organize devices with proper tagging for Blueprint dashboards
- **User Management**: Plan user access and permission structures

## Related Features

- **[Widgets](../widgets/)**: Various widget types for data visualization
- **[TagoRUN](../tagorun/)**: End-user application platform
- **[Analysis](../analysis/)**: Data processing and automation
- **[Access Management](../access-management/)**: Permission control system
- **[Tags System](../tags/)**: Organization and filtering system
- **[Blueprint Devices](../blueprint-devices/)**: Dynamic device management