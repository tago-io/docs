# MQTT Protocol Integration

MQTT (MQ Telemetry Transport) is an extremely simple and lightweight publish-subscribe messaging protocol designed for constrained devices and low-bandwidth, high-latency or unreliable networks.

## Availability and Regions

:::note Regional Availability
TagoIO MQTT Broker is available exclusively for **Starter and Scale accounts** in the **US database region**. 

European database region accounts cannot access this service due to new security requirements, but may utilize third-party MQTT services with TagoIO via the [MQTT Relay](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay) feature. 

Free accounts can access MQTT functionality through the [MQTT Relay](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay).
:::

For EU accounts, a public MQTT broker without SLA guarantees is planned for the future. The main purpose of this broker will be for proof of concept testing.

## How MQTT Works

![MQTT Architecture Diagram](https://help.tago.io/galleryDocuments/edbsn6c1522f9148bce1f6b3d30a9ddc3e97b01e4e7a8e6a53fda738010b72ab9e42adac771ff93e2c7dabfe97cb7adf5d3c4?inline=true)

TagoIO has its own MQTT broker, which is responsible for pushing data to clients whenever new information is published on the specific topics to which they are subscribed. Our MQTT broker doesn't contain all the implementations that a standard MQTT would have because its main goal is to facilitate the ingestion of data from sensors into our data buckets.

:::warning MQTT Retain Feature
TagoIO's MQTT broker does not support the native Retain feature found in standard MQTT protocol implementations; however, we offer a workaround to achieve similar functionality. Read more: [MQTT Retain on TagoIO Broker](https://help.tago.io/portal/en/kb/articles/mqtt-retain).
:::

### Example Use Case
Consider a system where a sensor sends temperature data to a topic each time it receives an update. Devices that need to be notified when this data is available would subscribe to that topic. Once the temperature sensor has an update, it publishes the data to the topic, and the broker then takes on the responsibility of pushing this data to all the devices subscribed to that topic.

## Integration with TagoIO Features

It's possible to combine MQTT with TagoIO's capabilities to create:
- [Dashboards](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview) - Real-time data visualization
- [Analytics](https://help.tago.io/portal/en/kb/articles/29-analysis-overview) - Data processing and business logic
- [Notifications](https://help.tago.io/portal/en/kb/articles/11-notification) - Automated alerts
- [Reports](https://help.tago.io/portal/en/kb/articles/444-pdf-service-generator) - PDF generation and reporting

## Security

### Network Security
Encryption across the network can be handled with SSL independently of the MQTT protocol itself. Additional security can also be added through application-encrypted data that is sent and received.

### Application-Level Security
At TagoIO, you can send your data as encrypted directly to your [Analysis](https://help.tago.io/portal/en/kb/articles/29-analysis-overview), decrypt it there, and then insert the data into your [Bucket](https://help.tago.io/portal/en/kb/articles/2-buckets). You can use this procedure to increase your security if your data is sensitive, or if you simply want to add an extra layer of security.

## Connection Configuration

To connect to our broker, use the following information:

### Connection Parameters
- **Host:** `mqtt.tago.io`
- **TCP/IP port:** `1883`
- **TCP/IP port over SSL:** `8883`
- **Username:** `Token`
- **Password:** *Your Device-Token*

:::warning Device Token Management
If the [Device-token](https://help.tago.io/portal/en/kb/articles/4-device-token) is removed from the device, or if it's deleted, it'll be disconnected from the MQTT broker.
:::

### Rate Limits
Note that there is a limit on the number of connections, publications, and subscriptions you can make, enforced based on your account plan. For more information, read about [Rate Limits (Hard Limits)](https://help.tago.io/portal/en/kb/articles/rate-limits).

## Data Flow Process

![Data Flow Diagram](https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/jY_tt6ovlFWZRT51haba2vDA4Xa3VUtXjlbSQZgwVWU/1623783352697-6ok.png)

### Step 1: Initial Connection
When you first send data through MQTT to your device, you'll be able to visualize the connection and message through the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector) on your device.

![Live Inspector MQTT](https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/J4NvXqv-YUhICknGr5obSqDkzozW7_TOB8GAMc3yj8I/1623782776109-ato.png)

### Step 2: Configure Data Storage
Those messages mean the connection is working, but nothing is being stored in your [bucket](https://help.tago.io/portal/en/kb/articles/2-buckets) yet. From this point, you'll need to create an [Action](https://help.tago.io/portal/en/kb/articles/30-actions) with trigger **MQTT** and type **Insert to Device Bucket.**

![MQTT Action Configuration](https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/kFXGnLerEvBJmYPqPkkUVmVB5gMsyXrP44Sx-ih4-7I/1623782574993-Bio.png)

### Step 3: Verify Data Storage
Now you should see the data being stored in the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector).

![MQTT Data Storage](https://cdn.elev.io/file/uploads/qh72WgBv-E2Q3qO94VO2POz6QghyF6TOwT3t_PMEKX4/exEdD7taToU7RUxg3ZLF30uITNgGunJ4PtFcr_xo_7Q/1623782908938-ObE.png)

### Data Format Considerations
In this case, the variable is "payload" and it has a value of "22". If you don't send the data using the [TagoIO data](https://help.tago.io/portal/en/kb/articles/34-sending-data) format, you'll need to normalize your data and change it to the correct format.

To do that, check out our documentation on how to use a [Payload Parser](https://help.tago.io/portal/en/kb/articles/147-payload-parser).

## Additional MQTT Resources

Here's a list of additional documentation on MQTT resources:

- [MQTT - Publishing and Subscribing](https://help.tago.io/portal/en/kb/articles/177-mqtt-publishing-and-subscribing)
- [MQTT - Action Triggers by Topic](https://help.tago.io/portal/en/kb/articles/452-trigger-by-mqtt-topic)
- [Connecting your MQTT Broker to TagoIO](https://help.tago.io/portal/en/kb/articles/tagoio-mqtt-relay)
- [MQTT - Process data, Publish it and Subscribe to a topic](https://help.tago.io/portal/en/kb/articles/12-mqtt-process-data-publish-it-and-subscribe-to-a-topic)
- [MQTT Retain on TagoIO Broker](https://help.tago.io/portal/en/kb/articles/mqtt-retain)

## Getting Started

1. **Set up your device**: Create a device in TagoIO and obtain the device token
2. **Configure connection**: Use the connection parameters above to connect to the MQTT broker
3. **Set up actions**: Create MQTT actions to store data in device buckets
4. **Test connection**: Use Live Inspector to verify data flow
5. **Process data**: Configure payload parsers if needed for data normalization

---

*Source URL: https://help.tago.io/portal/en/kb/articles/32-mqtt*