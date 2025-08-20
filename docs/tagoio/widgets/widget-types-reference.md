# Widget Types Reference

This comprehensive guide covers the various widget types available in TagoIO for building interactive dashboards and visualizations.

## Display Widgets

### Chart Widgets

#### Line Chart Widget
Perfect for displaying time-series data and trends over time.

**Key Features:**
- Multiple data series support
- Real-time data updates
- Customizable axes and scales
- Time-based filtering
- Interactive zoom and pan
- Reference lines and annotations

**Best For:**
- Temperature monitoring
- Sensor data trending
- Performance metrics
- Historical analysis

#### Area Chart Widget
Similar to line charts but with filled areas, ideal for showing cumulative data.

**Key Features:**
- Stacked area support
- Gradient fills
- Transparency controls
- Multi-series comparison

**Best For:**
- Energy consumption
- Cumulative metrics
- Volume data
- Resource usage

#### Bar Chart Widget
Excellent for comparing discrete values across categories.

**Key Features:**
- Horizontal and vertical orientations
- Grouped and stacked bars
- Custom colors and styling
- Category-based filtering

**Best For:**
- Device comparisons
- Status counts
- Categorical data
- Performance comparisons

### Map Widget
Display location-based data with interactive maps.

**Key Features:**
- Multiple map providers (Google Maps, OpenStreetMap)
- Custom markers and icons
- Clustering for dense data
- Geofences and boundaries
- Heat map overlays
- GIS layer support
- Real-time location tracking

**Configuration Options:**
- Map style and theme
- Zoom levels and restrictions
- Marker customization
- Pop-up information
- Filtering and grouping

**Best For:**
- Asset tracking
- Environmental monitoring
- Fleet management
- Geographic analytics

### Table Widget
Structured data display with sorting and filtering capabilities.

**Key Features:**
- Dynamic columns
- Sorting and filtering
- Pagination
- Export functionality
- Custom cell formatting
- Action buttons

**Types:**
- **Static Table**: Pre-defined data display
- **Dynamic Table**: Real-time data updates

**Best For:**
- Device listings
- Alarm tables
- Data reports
- Configuration displays

### Gauge Widget
Visual indicators for single-value metrics with threshold monitoring.

**Key Features:**
- Multiple gauge styles (circular, linear, speedometer)
- Color-coded thresholds
- Custom scales and units
- Animation effects
- Threshold alerts

**Best For:**
- KPI monitoring
- Threshold alerts
- Single-value displays
- Status indicators

## Input and Control Widgets

### Input Form Widget
Collect user input and send data to devices or systems.

**Field Types:**
- Text input
- Number input
- Date/time picker
- Dropdown selection
- Radio buttons
- Checkboxes
- File upload
- Device selection

**Features:**
- Form validation
- Conditional fields
- Multi-step forms
- Data preprocessing
- Custom styling

**Best For:**
- Device configuration
- User registration
- Data collection
- Command interfaces

### Button Widget
Trigger actions and send commands to devices.

**Types:**
- **Push Button**: Single action trigger
- **Step Button**: Multi-step process control
- **Toggle Button**: On/off state control

**Features:**
- Custom styling and icons
- Confirmation dialogs
- Action feedback
- Conditional visibility

**Best For:**
- Device control
- Process triggers
- Emergency stops
- Status changes

### Input Control Widget
Advanced control interfaces for device interaction.

**Features:**
- Slider controls
- Knob controls
- Switch controls
- Multi-select options

**Best For:**
- Parameter adjustment
- Setting configuration
- Real-time control
- Value selection

## Specialized Widgets

### Device List Widget
Display and manage multiple devices with filtering and actions.

**Features:**
- Device status indicators
- Bulk actions
- Tag-based filtering
- Custom columns
- Device grouping

**Best For:**
- Device management
- Fleet overview
- Status monitoring
- Bulk operations

### Image Widget
Display static or dynamic images with optional overlays.

**Features:**
- Static image display
- Dynamic image from URLs
- Image overlays and annotations
- Responsive sizing
- Custom styling

**Best For:**
- System diagrams
- Camera feeds
- Status images
- Branding elements

### Video Widget
Embed video content for monitoring or informational purposes.

**Features:**
- Video streaming support
- Custom player controls
- Responsive sizing
- Multiple formats

**Best For:**
- Security monitoring
- Process observation
- Training videos
- Live streams

### Clock Widget
Display current time with customizable formatting and time zones.

**Features:**
- Multiple time zones
- Custom formatting
- Analog and digital displays
- Real-time updates

**Best For:**
- Global operations
- Timestamp reference
- Scheduling displays
- Time coordination

## Advanced Widgets

### Custom Widget
Unlimited flexibility for creating specialized visualizations and interfaces.

**Capabilities:**
- Full HTML/CSS/JavaScript development
- Framework support (React, Vue, Angular)
- Custom data processing
- External API integration
- Advanced visualizations

**Best For:**
- Unique requirements
- Complex visualizations
- Third-party integrations
- Advanced interactions

### Compose Widget
Combine multiple widgets into a single, cohesive interface.

**Features:**
- Widget embedding
- Layout management
- Shared data sources
- Coordinated interactions

**Best For:**
- Complex dashboards
- Grouped functionality
- Related data displays
- Composite interfaces

## Widget Configuration

### Common Settings

#### Data Source Configuration
- **Device Selection**: Choose source devices
- **Variable Filtering**: Select specific variables
- **Time Range**: Set data time bounds
- **Refresh Rate**: Configure update frequency

#### Styling Options
- **Colors and Themes**: Customize appearance
- **Fonts and Text**: Typography settings
- **Borders and Spacing**: Layout adjustments
- **Responsive Behavior**: Mobile optimization

#### Interactive Features
- **Filtering**: Enable data filtering
- **Drilling**: Navigate to details
- **Actions**: Trigger behaviors
- **Animations**: Visual effects

### Widget-Specific Settings

Each widget type has unique configuration options:

- **Charts**: Axes, scales, legends, annotations
- **Maps**: Providers, styles, markers, overlays
- **Tables**: Columns, sorting, pagination, formatting
- **Forms**: Fields, validation, styling, actions
- **Controls**: Ranges, steps, feedback, confirmations

## Best Practices

### Design Guidelines
- **Consistent Styling**: Use unified color schemes and fonts
- **Clear Labeling**: Provide descriptive titles and legends
- **Responsive Design**: Ensure mobile compatibility
- **Logical Grouping**: Organize related widgets together

### Performance Optimization
- **Efficient Queries**: Limit data requests
- **Appropriate Refresh Rates**: Balance real-time needs with performance
- **Data Aggregation**: Use summaries for large datasets
- **Conditional Loading**: Load widgets on demand

### User Experience
- **Intuitive Controls**: Make interactions obvious
- **Helpful Feedback**: Provide action confirmations
- **Error Handling**: Handle failures gracefully
- **Accessibility**: Support screen readers and keyboard navigation

### Data Management
- **Real-time vs Historical**: Choose appropriate data sources
- **Filtering Strategy**: Implement efficient data filtering
- **Caching**: Use data caching where appropriate
- **Validation**: Ensure data quality and consistency

## Integration with TagoIO Features

### Dashboard Integration
- **Layout Management**: Position and size widgets effectively
- **Global Filters**: Use dashboard-wide filtering
- **Widget Communication**: Enable widget interactions
- **Tab Organization**: Group widgets logically

### Device Integration
- **Data Binding**: Connect to device variables
- **Real-time Updates**: Display live device data
- **Command Sending**: Control devices through widgets
- **Status Monitoring**: Show device health and connectivity

### Analysis Integration
- **Triggered Analysis**: Run analysis from widget actions
- **Processed Data**: Display analysis results
- **Automated Actions**: Trigger responses based on widget interactions

---

*This reference covers the main widget types available in TagoIO. For specific configuration details, refer to individual widget documentation or the TagoIO Learning Center.*