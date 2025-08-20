# Devices Overview

Devices are the fundamental link between your external IoT things and the data in your TagoIO account. To allow anything to send or receive data from TagoIO, you need to create a device. This comprehensive guide covers everything you need to know about managing devices in TagoIO.

## What Are Devices?

A device in TagoIO represents any physical or virtual entity that generates or consumes data. The communication between external devices and TagoIO is done via HTTP or [MQTT](https://help.tago.io/portal/en/kb/articles/32-mqtt) methods using JSON format. To facilitate this communication, a device must be created within the platform, specifying the type of device and configuring it to send and receive data correctly.

Devices are managed through your [Admin](https://admin.tago.io/) interface, where users can access detailed information about each device, including its ID and other settings.

:::info API Integration
Our [TagoIO API documentation](https://help.tago.io/portal/en/kb/articles/31-api-overview) offers comprehensive instructions on how to interface with devices, ensuring developers can effectively integrate their hardware with the platform.
:::

## Adding Devices

Devices are connected to TagoIO using [Connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview), which act as a bridge between TagoIO and networks to transmit and receive data. To follow a tutorial on how to add a device, go to the [Getting Started](https://help.tago.io/portal/en/kb/articles/1-getting-started) article.

:::info Learn More
Learn more about [Connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview) here.
:::

## Device Types and Data Storage

Once you create a device, it will store all the data sent by your sensors. During the creation process, you will be prompted to select the type of data storage to be used. There are two types of data storage you can choose from, each associated with a different type of database.

![Device Storage Types](https://help.tago.io/galleryDocuments/edbsn12859d289e036dc1fd1178598fea7a1d1e5f0169b049fcc4660fde99d6bca06b3b13ed20ccb2d15b61c9d764ebf671e0?inline=true)

### 1. Device Optimized Data [Immutable Database]

By selecting the immutable device, you can store up to **36 million data points per device**. This device type offers several advantages:

#### Key Features:
- **High Performance**: Highly optimized for short and long retention periods
- **Fast Queries**: Query responses are faster, which means less latency for devices
- **Cost Effective**: Reduced costs when running [Analysis](https://help.tago.io/portal/en/kb/articles/120-creating-analysis)
- **Compliance Ready**: Data is immutable, so no one can change or delete individual sets of data – ideal for compliance requirements
- **Automatic Cleanup**: Data can only be removed by the [data retention policy](https://help.tago.io/portal/en/kb/articles/52-data-retention-feature)

#### Best For:
- High-volume sensor data
- Compliance-critical applications
- Long-term data storage
- Real-time analytics applications

### 2. Managed Data Optimized [Mutable Database]

By using the mutable device, you can easily edit or delete data. Key characteristics:

#### Key Features:
- **Editable Data**: Full CRUD (Create, Read, Update, Delete) operations
- **No Data Retention**: Manual data management
- **Limited Capacity**: Up to 50k data registers
- **Configuration Focused**: Optimized for storage and manipulation of configurable variables

#### Best For:
- Configuration management
- Form data storage
- Device settings and parameters
- Small datasets requiring frequent updates

:::note Sensor Integration
Check out the [list of sensors integrated into TagoIO](https://admin.tago.io/connectors); there are hundreds of them available.
:::

## Managing and Customizing Your Device

Access your device management by going to your Admin and selecting the [Device module](https://admin.tago.io/devices). By clicking on any device, you can find several sections with detailed information and resourceful features.

### General Information

When you open any device page, you'll first see the 'General Information' tab containing:

![Device General Information](https://help.tago.io/galleryDocuments/edbsna665efda8e5c113aa8451fe8046a25db041d65f6c1f5f34b1479e8b7dfa12b737c831c8e038704b3423b8435ee905a43?inline=true)

- **Device Name**: Custom identifier for your device
- **Network**: The network protocol used for data transmission
- **Connector**: The decoder used to process incoming data
- **Device Token Management**: Generate or delete authentication tokens
- **Serial Number**: Unique device identifier
- **Usage Statistics**: Data input/output monitoring (requires [Control Tower add-on](https://help.tago.io/portal/en/kb/articles/control-tower))

### Data Management

Manage the data received from sensors by viewing, filtering, exporting, and much more. Learn more about [Device data management](https://help.tago.io/portal/en/kb/articles/device-data).

### Device Activation Control

You can easily define how TagoIO will respond to any request from the device. In the right upper corner of your device page, you'll find a switch to activate or deactivate it. If deactivated, the system will deny access to any command coming from the device.

### Widget Visibility Control

You can hide a specific device from showing in the device selection option for your [Widgets](https://help.tago.io/portal/en/kb/articles/18-widgets-overview). This is helpful when creating a [Dashboard](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview) and using the [Input Form Widget](https://help.tago.io/portal/en/kb/articles/456-input-form-widget) that has a field type called 'Device'. Access your device's page and navigate to the tab 'More' to make your device visible or hidden.

### Live Inspector

To debug if your device is sending data, you can use the Live Inspector tool by accessing its respective tab on your device's page. It's useful for:

- Debugging [parser scripts](https://help.tago.io/portal/en/kb/articles/147-payload-parser)
- Monitoring traffic to and from your device
- Real-time connection verification

Read more about the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector).

### Payload Parser Customization

Sometimes you may need to customize the payload parser of your device to adjust to your use case. You can run your own parser by activating the script console in the 'Payload Parser' tab inside your device's page.

![Payload Parser Interface](https://help.tago.io/galleryDocuments/edbsn12859d289e036dc1fd1178598fea7a1d0ba3bd2bc0b30181bba76a988338cb714c315b63fbb852887743c2f51ff0620a?inline=true)

:::note Custom Connectors
You can also create your own connector if you need to use the same payload parser for several devices. Read more about [creating a Connector](https://help.tago.io/portal/en/kb/articles/466-connector-overview).
:::

### Device Emulator

Inside your device's page, you'll find a tab named 'Emulator', where you can send data to your device as if it was sent by a real sensor. This is invaluable for:

- Testing device configurations
- Simulating sensor data
- Debugging data flow
- Development and prototyping

Learn how to use [Device Emulator](https://help.tago.io/portal/en/kb/articles/95-device-emulator).

### Configuration Parameters

You can customize the behavior of your device in different scenarios by setting device parameters in the tab 'Configuration Parameters'. Uses include:

- Specifying how to decode data
- Configuring downlink messages
- Filtering devices on [Widgets](https://help.tago.io/portal/en/kb/articles/18-widgets-overview)
- Interacting with [API](https://help.tago.io/portal/en/kb/articles/31-api-overview) & [Analysis](https://help.tago.io/portal/en/kb/articles/29-analysis-overview) scripts

Learn how [Configuration Parameters for Devices](https://help.tago.io/portal/en/kb/articles/configuration-parameters-for-devices) work.

### Rate Limits Management

When sending data to TagoIO, you will have a limit on the number of requests that can be made during a certain time period, called [Rate Limits (Hard Limits)](https://help.tago.io/portal/en/kb/articles/rate-limits).

You can set custom request rate limits for your device, which is great to:

- Protect against device malfunctioning
- Prevent excessive [Data Input](https://help.tago.io/portal/en/kb/articles/192-data-input-service) or [Output](https://help.tago.io/portal/en/kb/articles/193-data-output-service) usage
- Avoid a single device from reaching account-wide limits
- Maintain system stability

This feature is unlocked once you activate the [Control Tower add-on](https://help.tago.io/portal/en/kb/articles/control-tower).

### Device Deletion

To delete a device:

1. Go to 'More' on the device page
2. Click on 'Delete Device'
3. Confirm the action

:::warning Data Loss
Once deleted, all data will also be excluded. There is no way to recover it once deleted. Be certain before proceeding.
:::

## Best Practices

### Device Organization
- Use descriptive device names
- Implement consistent naming conventions
- Group related devices logically
- Use tags for easy filtering

### Security Considerations
- Regularly rotate device tokens
- Monitor device activity through Live Inspector
- Set appropriate rate limits
- Use immutable storage for compliance-critical data

### Performance Optimization
- Choose the right storage type for your use case
- Configure appropriate data retention policies
- Monitor usage statistics
- Optimize payload parsers for efficiency

## Integration Points

### With Other TagoIO Features
- **Dashboards**: Display device data in real-time visualizations
- **Actions**: Trigger automated responses based on device data
- **Analysis**: Process device data with custom business logic
- **Notifications**: Send alerts based on device conditions

### External Integration
- **APIs**: Programmatic device management
- **MQTT**: Real-time bidirectional communication
- **HTTP**: Standard web-based data transmission
- **Third-party Services**: Connect with external platforms

---

:::tip Need Help?
Need help? Contact our team by opening a [ticket](https://help.tago.io/portal/en/kb), or join our [Community](https://help.tago.io/portal/en/community/tagoio) with developers from around the world.
:::

*Source URL: https://help.tago.io/portal/en/kb/articles/3-devices*