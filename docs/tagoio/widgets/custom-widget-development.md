# Custom Widget Development

Custom Widgets are very versatile, allowing you to build whatever you need to suit your application's needs. They provide unlimited flexibility for creating unique visualizations and interactions that aren't available with standard widgets.

## Overview

The widget can be built with plain web technologies like HTML, CSS, and JavaScript, but keep in mind that at least some JavaScript is needed in the form of [our library](https://github.com/tago-io/custom-widget).

You can go further by developing your custom widget with client-side web frameworks (e.g. React, Vue, Angular), as long as the framework outputs HTML, CSS, and JavaScript in its build process.

## Widget Examples

![Custom Widget Examples](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/p4L36LTMKA3ZFBq2vBSIIZQ8mYHUbl_bmgYi_0JnK8I/Apr-28-2020%2008-23-01-3Sg.gif)

![Advanced Widget Demo](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/Xh0wxJm9ozh-1noSfAptEx-heNnCgpFT1aTVDG3Ly2k/Apr-28-2020%2008-32-38-vww.gif)

![Interactive Widget Demo](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/MbA0dqVNRzmfkjh_8KXFvhmyPaZ-J-gGc3wsX4Pk5KU/Apr-28-2020%2008-37-46-uoU.gif)

![Widget Interface Examples](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/c-iprudK3_wCBz73fsXTDnIYAHWQVxR3FkuSNmqTjNk/1588077846724-H1g.png)

![Widget Dashboard Integration](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/3Wmy3XyADW0JHdV1mgTUzrwyCOWINmybs346azNqg9I/1588077887315-0-0.png)

## Creating Your Own Custom Widget

The sky's the limit when using this widget. You can build your widget using:

### Supported Technologies
- **Angular** - Full-featured framework for complex applications
- **React** - Component-based library for dynamic UIs
- **Vue.js** - Progressive framework for interactive interfaces
- **Plain JavaScript** - For lightweight, custom solutions
- **Any framework** that compiles to HTML, CSS, and JavaScript

### Development Resources
To understand how to write the code for your Custom Widget, check out our comprehensive guide in the [Community Forum](https://community.tago.io/t/custom-widget-iframe/279).

:::tip Learning Center
Check out our Module 202 in the Learning Center. It guides you in crafting custom widgets with ease. [Access Learning Center now](https://tago.io/learning-center).
:::

## Data Sources

Due to their versatility, Custom Widgets allow you to use data from different sources in TagoIO.

### Device Variables
You can use data stored in your **device's variables** by configuring your devices and the variables in the **Data from** section of the widget's configuration.

### Resource Data
You can also use data from **resources** such as devices and users – just like on the [Device List](https://help.tago.io/portal/en/kb/articles/527-device-list-widget) and [User List](https://help.tago.io/portal/en/kb/articles/user-list-widget) widgets – by configuring the tag filters in the **Device Filters** and/or **User Filters** sections of the widget's configuration.

### Mixed Data Sources
It's possible to build your custom logic by mixing data from different data sources, such as getting data from variables and combining them with Devices/User information.

![Data Source Configuration](https://help.tago.io/galleryDocuments/edbsn99fa6052994c1dd954f66185e4542a68e8302ff3d10035d63a0f314e95709846866f70e8736df778854a3634f3f1b879?inline=true)

## Main Configuration

After you've coded your Custom Widget, you need to host it and provide a link to the location where you've hosted it.

![Widget Configuration Interface](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/zjITxZFTJZzHrqEwXggbqp7nYoVmd0VbgUvQV1o_820/1588017173880-8JY.png)

### Hosting Options
:::tip File Hosting
You can use TagoIO Files to host your custom Widget, making deployment seamless within your TagoIO environment.
:::

### Configuration Steps
1. **Develop your widget** using your preferred technology stack
2. **Build the widget** to generate HTML, CSS, and JavaScript files
3. **Host the files** on a web server or use TagoIO Files
4. **Configure the widget** by providing the hosting URL
5. **Set up data sources** and parameters as needed

## Parameters

Parameters allow you to send a list of keys and values to your Custom widget, enabling dynamic behavior and reusability.

![Parameters Configuration](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/QP_FcaGOr9ZlQ7ABwGw1yO6iVgC_nGlcdmiZ9Wl3XIw/1587658883225-xaM.png)

### Use Cases for Parameters
- **Behavior Control**: Change how your code behaves based on parameter values
- **Styling Options**: Pass color schemes, themes, or layout preferences
- **Configuration Settings**: API endpoints, refresh rates, or display options
- **Reusability**: Have multiple widgets pointing to the same link but exhibiting different behaviors

### Parameter Benefits
- **Code Reusability**: One widget codebase, multiple configurations
- **Dynamic Behavior**: Runtime customization without code changes
- **Easy Maintenance**: Centralized code with distributed configurations

Read more about [Custom Widget Parameters](https://help.tago.io/portal/en/kb/articles/451-custom-widget-parameters).

## User Control and Analysis Integration

### Analysis Integration
You may choose to run an Analysis once you send data from your widget. To do so, inform the desired Analysis in the **Run analysis when sending data** field.

![Analysis Integration](https://cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/dE6Cbd_y-emRHP921bYPJtEAKLyVFhCHgH-QxmNYvZs/1587659332760-NCM.png)

### User Interaction Features
- **Data Input**: Allow users to submit data through forms or controls
- **Device Control**: Send commands to connected devices
- **Real-time Updates**: Display live data with automatic refresh
- **Interactive Controls**: Buttons, sliders, dropdowns for user interaction

## Development Best Practices

### Code Organization
- **Modular Structure**: Organize code into reusable components
- **Clear Documentation**: Comment your code thoroughly
- **Error Handling**: Implement robust error handling and validation
- **Performance**: Optimize for fast loading and smooth interactions

### TagoIO Integration
- **Use TagoIO Library**: Leverage the official TagoIO custom widget library
- **Follow Data Format**: Ensure data follows TagoIO's expected format
- **Handle Authentication**: Properly manage device tokens and permissions
- **Responsive Design**: Make widgets work across different screen sizes

### Testing and Debugging
- **Local Development**: Test widgets locally before deployment
- **Browser Compatibility**: Ensure cross-browser functionality
- **Mobile Testing**: Verify mobile device compatibility
- **Performance Testing**: Check loading times and responsiveness

## Security Considerations

### Data Protection
- **Sanitize Inputs**: Validate and sanitize all user inputs
- **Secure Communication**: Use HTTPS for all external communications
- **Token Management**: Handle device tokens securely
- **Data Validation**: Validate data before sending to TagoIO

### Access Control
- **User Permissions**: Respect user access levels and permissions
- **Device Filtering**: Only show data the user has access to
- **Secure Hosting**: Use secure hosting environments for widget files

## Advanced Features

### Real-time Data
- **WebSocket Integration**: For real-time data updates
- **Polling Strategies**: Implement efficient data refresh mechanisms
- **Data Caching**: Cache data to improve performance

### External Integrations
- **Third-party APIs**: Integrate with external services
- **Map Services**: Include location-based features
- **Chart Libraries**: Use advanced charting solutions like D3.js or Chart.js

### Interactive Features
- **Drag and Drop**: Implement interactive data manipulation
- **Touch Gestures**: Support mobile touch interactions
- **Keyboard Shortcuts**: Add keyboard navigation support

## Deployment and Maintenance

### Deployment Process
1. **Build Production Version**: Create optimized production build
2. **Upload to Hosting**: Deploy to your chosen hosting platform
3. **Configure Widget**: Set up the widget in TagoIO dashboard
4. **Test Functionality**: Verify all features work correctly
5. **Monitor Performance**: Keep track of widget performance

### Maintenance Tasks
- **Regular Updates**: Keep dependencies and libraries updated
- **Performance Monitoring**: Track loading times and user interactions
- **Bug Fixes**: Address issues promptly
- **Feature Enhancements**: Continuously improve based on user feedback

---

*Source URL: https://help.tago.io/portal/en/kb/articles/450-custom-widget*