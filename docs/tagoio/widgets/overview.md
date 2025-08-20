---
title: Widget Overview
description: Explore TagoIO's comprehensive widget library for creating powerful data visualizations and interactive controls.
---

# Widget Overview

Widgets are the individual building blocks that make up your dashboards. They provide the visual and interactive components that display data, collect input, and enable user interactions with your IoT solutions.

## What are Widgets?

Widgets are reusable components that can:

- **Display data** from your connected devices
- **Visualize trends** through charts and graphs
- **Collect user input** through forms and controls
- **Provide interactivity** for device control and configuration
- **Show real-time status** and alerts
- **Create custom experiences** with advanced HTML/CSS/JavaScript

## Widget Categories

TagoIO provides a comprehensive library of widget types organized into the following categories:

### 📊 Chart Widgets
Perfect for visualizing data trends and patterns over time.

- **Line Chart**: Display time-series data with trend lines
- **Area Chart**: Show data volume with filled areas
- **Bar Chart**: Compare values across categories
- **Column Chart**: Vertical bar comparisons
- **Multiple Axis Chart**: Display multiple data sets with different scales
- **Pie Chart**: Show proportional data distribution
- **Semi-donut Chart**: Compact circular data display

### 📈 Display Widgets
Show current values, status information, and key metrics.

- **Card**: Display single values with formatting
- **Display**: Simple text and value presentation
- **Gauge**: Circular progress and status indicators
- **Icon**: Visual status indicators with icons
- **Image**: Display images and visual content
- **Note**: Text-based information and instructions

### 🎛️ Input Widgets
Enable user interaction and data collection.

- **Input Form**: Collect structured data from users
- **Input Control**: Simple input fields and controls
- **Keypad**: Numeric input interfaces
- **Push Button**: Action triggers and commands

### 🗺️ Map Widgets
Display location-based data and tracking information.

- **Map**: Geographic data visualization
- **Geofence**: Location-based boundaries and alerts
- **Markers**: Point-based location data
- **Heat Map**: Density-based location analysis

### 📋 Table Widgets
Organize and display tabular data.

- **Table**: Standard data tables with sorting and filtering
- **Entity Table**: Advanced table with entity relationships
- **Data List**: Simple list-based data display
- **Summary Table**: Aggregated data presentations

### ⚙️ Specialized Widgets
Advanced and custom widgets for specific use cases.

- **Custom Widget**: HTML/CSS/JavaScript custom components
- **Angular Widget**: Advanced Angular-based components
- **Clock**: Time and date displays
- **Cylinder**: Tank and container level displays
- **Dial**: Rotary controls and indicators
- **Video**: Live video streaming and playback

## Widget Features

### Data Binding
- **Device Connection**: Link widgets to specific devices
- **Variable Selection**: Choose data variables to display
- **Real-time Updates**: Automatic data refresh capabilities
- **Data Filtering**: Filter data by time, value, or other criteria

### Customization Options
- **Styling**: Colors, fonts, and visual appearance
- **Formatting**: Number formats, units, and precision
- **Labels**: Custom titles, descriptions, and legends
- **Sizing**: Flexible dimensions and responsive layouts

### Interactive Capabilities
- **Click Actions**: Trigger actions on user interactions
- **Data Input**: Collect and validate user input
- **Navigation**: Link to other dashboards or external URLs
- **Conditional Logic**: Show/hide based on data conditions

## Widget Configuration

### Basic Setup
1. **Add Widget**: Select widget type from the library
2. **Data Source**: Connect to device and choose variables
3. **Display Options**: Configure appearance and formatting
4. **Position**: Place and size widget on dashboard

### Advanced Configuration
- **Formulas**: Apply mathematical operations to data
- **Conditions**: Set up conditional formatting and behavior
- **Actions**: Configure user interaction responses
- **Custom Code**: Add HTML, CSS, or JavaScript for advanced features

## Data Analytics and Formulas

Widgets support advanced data processing capabilities:

### Built-in Functions
- **Aggregation**: Sum, average, min, max calculations
- **Time-based**: Last value, time ranges, intervals
- **Mathematical**: Complex formulas and calculations
- **Conditional**: If/then logic and comparisons

### Example Formulas
```javascript
// Calculate temperature in Fahrenheit from Celsius
(temperature * 9/5) + 32

// Show status based on value ranges
temperature > 25 ? 'Hot' : temperature < 10 ? 'Cold' : 'Normal'

// Calculate percentage
(current_value / max_value) * 100
```

## Performance Considerations

### Optimization Best Practices
- **Data Limits**: Consider the volume of data being displayed
- **Update Frequency**: Balance real-time needs with performance
- **Widget Selection**: Choose appropriate widgets for data types
- **Dashboard Layout**: Optimize widget arrangement for loading speed

### Resource Management
- **Memory Usage**: Monitor memory consumption for complex widgets
- **Network Traffic**: Minimize unnecessary data requests
- **Browser Performance**: Test across different browsers and devices
- **Mobile Optimization**: Ensure widgets work well on mobile devices

## Common Use Cases

### Monitoring and Alerting
- **Status Dashboards**: Real-time system monitoring
- **Alert Displays**: Critical condition notifications
- **KPI Tracking**: Key performance indicators
- **Trend Analysis**: Long-term data pattern recognition

### Control and Interaction
- **Device Control Panels**: Remote device operation
- **Configuration Interfaces**: System settings management
- **Data Collection Forms**: User input and feedback
- **Report Generation**: Interactive report creation

### Data Visualization
- **Analytics Dashboards**: Business intelligence displays
- **Environmental Monitoring**: Sensor data visualization
- **Asset Tracking**: Location and status monitoring
- **Performance Metrics**: System and process monitoring

## Widget Limitations

### Technical Constraints
- Maximum data points per widget vary by type
- Custom widgets have security restrictions
- Some widgets require specific data formats
- Performance degrades with excessive widgets per dashboard

### Browser Compatibility
- Modern browsers required for advanced features
- Mobile browsers may have limited functionality
- Internet connectivity required for real-time updates
- Local storage limits may affect performance

## Getting Started with Widgets

### Quick Start Checklist
1. ✅ **Understand Your Data**: Know what data your devices send
2. ✅ **Choose Appropriate Widgets**: Select widgets that match your data type
3. ✅ **Start Simple**: Begin with basic widgets before advanced customization
4. ✅ **Test Thoroughly**: Verify widgets work across devices and browsers
5. ✅ **Optimize Performance**: Monitor loading times and responsiveness

### Next Steps
- **Explore Chart Widgets**: Learn about [data visualization options](./chart-widgets)
- **Master Display Widgets**: Understand [status and value displays](./display-widgets)
- **Create Interactive Elements**: Build [input and control widgets](./input-widgets)
- **Advanced Customization**: Dive into [custom widget development](./custom-widgets)

## Additional Resources

- [Dashboard Overview](../dashboards/overview) - How widgets fit into dashboards
- [Device Data](../devices/overview) - Understanding data sources for widgets
- [API Documentation](../api/overview) - Programmatic widget management
- [Best Practices](../tutorials/overview) - Advanced widget patterns and techniques