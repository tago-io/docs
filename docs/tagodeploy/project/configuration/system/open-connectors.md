---
title: "Open Connectors"
description: "Sync public device and network connectors into your TagoIO instance from TagoIO's open-source Decoders repository."
keywords: [tagodeploy, iot, connectors, decoders, devices]
tags: ["tagodeploy"]
slug: /tagodeploy/project/system/open-connectors
---

# Open Connectors

[Open Connectors](https://github.com/tago-io/decoders) is a library of public
device and network connectors maintained by TagoIO. These
[connectors](https://help.tago.io/portal/en/kb/articles/466-connector-overview)
route external data into your TagoIO instance and let you adopt new device models
as they become available, without custom development.

Open Connectors is the second section on the **System** page, below the Version
Timeline, reached from the TagoIO & API sidebar under **System**. The section is
titled "Open Connectors" and describes itself as "External connectors routing
data into your TagoIO instance." It includes a "Learn more about open connectors"
link.

## Syncing connectors

To bring the latest connectors into your instance, use the **Sync connectors**
action. This pulls the current versions published in the Decoders library into
your project.

Before any connectors are synced, the section shows the empty state "No
connectors synced yet." After a sync, the device and network connectors from the
repository are available in your project.

## Impact on existing devices

Syncing connectors can change existing devices in your project that already use a
connector from the repository. If a device runs older firmware, changes to a
connector's decoding logic or protocol handling could affect its compatibility
or behavior. Before syncing, review the release notes for the updated connectors
and test changes in a staging environment, especially for devices with legacy
firmware or custom configurations.

## Network connectors and middleware

Syncing adds network connectors so device data can be decoded. To start receiving
data through a network connector, you also need the matching middleware enabled.
Middlewares are added from the App Catalog under the **Apps** top-nav. Without the
required middleware, data from the network server does not reach your devices and
the connector has nothing to parse.

## Best practices

- Review connector release notes before syncing to assess the impact of updates.
- Test connector and network updates in a development or staging environment,
  particularly for devices on older firmware.
- After syncing, confirm the required network middleware is enabled so data flows
  from the server to your devices.
- Monitor device and network behavior after a sync to confirm everything works as
  expected.
