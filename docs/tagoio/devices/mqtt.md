# MQTT

> **Note:** TagoIO MQTT Broker is available exclusively for Starter and Scale accounts in the US database region. European database region accounts cannot access this service due to new security requirements, but may utilize third-party MQTT services with TagoIO via the [MQTT Relay](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay) feature. Free accounts can access MQTT functionality also through the [MQTT Relay](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay).

For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of this broker will be for proof of concept testing.

## What is MQTT?

MQTT stands for MQ Telemetry Transport; it's an extremely simple and lightweight publish-subscribe messaging protocol. It was designed for constrained devices and low-bandwidth, high-latency or unreliable networks.

![MQTT Architecture](https://help.tago.io/galleryDocuments/edbsn6c1522f9148bce1f6b3d30a9ddc3e97b01e4e7a8e6a53fda738010b72ab9e42adac771ff93e2c7dabfe97cb7adf5d3c4?inline=true)

TagoIO has its own MQTT broker, which is responsible for pushing data to clients whenever new information is published on the specific topics to which they are subscribed. Our MQTT broker doesn't contain all the implementations that a standard MQTT would have because its main goal is to facilitate the ingestion of data from sensors into our data buckets.

> **Note:** TagoIO's MQTT broker does not support the native Retain feature found in standard MQTT protocol implementations; however, we offer a workaround to achieve similar functionality. Read more here: [MQTT Retain on TagoIO Broker](https://help.tago.io/portal/en/kb/articles/mqtt-retain).

## How MQTT Works with TagoIO

For instance, consider a system where a sensor sends temperature data to a topic each time it receives an update. In this scenario, devices that need to be notified when this data is available would subscribe to that topic. Once the temperature sensor has an update, it publishes the data to the topic, and the broker then takes on the responsibility of pushing this data to all the devices subscribed to that topic.

It's possible to combine MQTT with TagoIO's amazing capabilities to also create:
- [Dashboards](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview)
- [Analytics](https://help.tago.io/portal/en/kb/articles/29-analysis-overview)
- [Notifications](https://help.tago.io/portal/en/kb/articles/11-notification)
- [Reports](https://help.tago.io/portal/en/kb/articles/444-pdf-service-generator)

## Security

Encryption across the network can be handled with SSL independently of the MQTT protocol itself. Additional security can also be added through application-encrypted data that is sent and received.

At TagoIO, you can send your data as encrypted directly to your [Analysis](https://help.tago.io/portal/en/kb/articles/29-analysis-overview), decrypt it there, and then insert the data into your [Bucket](https://help.tago.io/portal/en/kb/articles/2-buckets). You can use this procedure to increase your security if your data is sensitive, or if you simply want to add an extra layer of security.

## Connection Parameters

To connect to our broker, please use the information provided below. Note that there is a limit on the number of connections, publications, and subscriptions you can make, enforced based on your account plan. For more information, read about [Rate Limits (Hard Limits)](https://help.tago.io/portal/en/kb/articles/rate-limits).

### Connection Details

| Parameter | Value |
|-----------|-------|
| **Host** | mqtt.tago.io |
| **TCP/IP port** | 1883 |
| **TCP/IP port over SSL** | 8883 |
| **Username** | Token |
| **Password** | _Your Device-Token_ |

> **Warning:** If the [Device-token](https://help.tago.io/portal/en/kb/articles/4-device-token) is removed from the device, or if it's deleted, it'll be disconnected from the MQTT broker.

## Data Flow at TagoIO

When you first send data through MQTT to your device, you'll be able to visualize the connection and message through the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector) on your device.

### Step 1: Initial Connection
The Live Inspector will show connection messages indicating that the MQTT connection is working, but nothing is being stored in your [bucket](https://help.tago.io/portal/en/kb/articles/2-buckets) yet.

### Step 2: Create Action
From this point, you'll need to create an [Action](https://help.tago.io/portal/en/kb/articles/30-actions) with:
- **Trigger**: MQTT 
- **Type**: Insert to Device Bucket

### Step 3: Data Storage
Now you should see the data being stored in the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector).

### Example Data Format
In the example, the variable is "payload" and it has a value of "22". If you don't send the data using the [TagoIO data](https://help.tago.io/portal/en/kb/articles/34-sending-data) format, you'll need to normalize your data and change it to the correct format.

To do that, check out our documentation on how to use a [Payload Parser](https://help.tago.io/portal/en/kb/articles/147-payload-parser).

## MQTT Best Practices

### Connection Management
- Use appropriate Quality of Service (QoS) levels
- Implement proper reconnection logic
- Handle connection timeouts gracefully
- Monitor connection status regularly

### Topic Organization
- Use hierarchical topic structures
- Follow consistent naming conventions
- Avoid overly complex topic hierarchies
- Plan for scalability

### Data Formatting
- Use consistent data formats (JSON recommended)
- Include timestamp information
- Add device identification in payload
- Implement data validation

### Security Considerations
- Always use SSL/TLS in production (port 8883)
- Rotate device tokens regularly
- Monitor for unauthorized connections
- Implement application-level encryption for sensitive data

## Troubleshooting Common Issues

### Connection Problems
- Verify correct host and port settings
- Check device token validity
- Ensure network connectivity
- Verify account plan supports MQTT

### Data Not Appearing
- Confirm Action is properly configured
- Check Live Inspector for connection messages
- Verify topic names match subscription
- Review payload format requirements

### Performance Issues
- Monitor rate limits and usage
- Optimize message frequency
- Review topic subscription patterns
- Consider message batching

## More Resources

Here's a list of some additional documentation on MQTT resources:

- [MQTT - Publishing and Subscribing](https://help.tago.io/portal/en/kb/articles/177-mqtt-publishing-and-subscribing)
- [MQTT - Action Triggers by Topic](https://help.tago.io/portal/en/kb/articles/452-trigger-by-mqtt-topic)
- [MQTT Retain on TagoIO Broker](https://help.tago.io/portal/en/kb/articles/mqtt-retain)
- [MQTT Relay for EU and Free Accounts](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay)

## Related Topics

- [Device Management](./overview.md)
- [Data Storage](./data-storage.md)
- [Live Inspector](./live-inspector.md)
- [Actions and Triggers](../actions/overview.md)
- [Payload Parser](../payload-parser/overview.md)

---

*Source URL: https://help.tago.io/portal/en/kb/articles/32-mqtt*