---
title: "Open Connectors"
description: "Use and synchronize public device and network connectors from TagoIO's open-source Decoders repository."
tags: ["tagodeploy"]
slug: /tagodeploy/project/system/open-connectors
---

# Open Connectors

[Open Connectors](https://github.com/tago-io/decoders) is a comprehensive
library of public device and network connectors maintained by TagoIO. These
[connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview)
enable seamless integration between your project and a wide range of devices and
networks, leveraging the latest decoders and integration logic from the
open-source Decoders repository. By using Open Connectors, you can quickly adopt
new device models as they become available, without the need for custom
development.

## Synchronizing Connectors

To ensure your project uses the most current versions of available connectors,
you can synchronize your connectors with the open-source repository. This is
accomplished by clicking the **Sync decoders** button in your project interface.
When you perform this action, your project's connectors are updated to the
latest versions published in the Decoders library.

During synchronization, all device connectors and network connectors are updated
or added to your project. This process ensures your infrastructure benefits from
the latest features, compatibility improvements, and security patches provided
by the TagoIO community.

## Connector Update Tracking

After synchronization, all connector updates are logged in a synchronization
table. This table provides an audit trail for every time the connectors were
syncronized, including:

- **FROM**: The version of the connector github repository before the update.
- **TO**: The version of the connector github repository after the update.
- **UPDATED BY IP**: The IP address of the user who performed the
  synchronization.
- **UPDATED AT**: The timestamp when the update occurred.

## Impact on Existing Devices

It is important to note that synchronizing connectors may modify any existing
devices in your project that already utilize a connector from the repository. If
a device is operating with an older firmware version, changes to the
connector—such as updates to decoding logic or protocol handling, could affect
device compatibility or behavior. Before synchronizing, review the release notes
for each updated connector and test changes in a staging environment, especially
for devices with legacy firmware or custom configurations.

## Network Connectors and Middleware Activation

When you synchronize, any new network connectors from the repository will be
added to your project to ensure proper decoding of device data. However, to
begin receiving data through these connectors, you must enable the corresponding
middleware for each network on the **Services** page. If the required middleware
is not enabled, data from the network server will not reach your devices, and
the connector will not have any data to parse.

## Best Practices

- Always review connector release notes and documentation before synchronizing
  to assess the impact of updates.
- Test connector and network updates in a development or staging environment,
  particularly for devices using older firmware versions.
- After synchronization, verify that all required network middleware is enabled
  in the **Services** page to ensure data flow from the server to your devices.
- Monitor device and network behavior post-update to ensure everything is
  working as expected.
