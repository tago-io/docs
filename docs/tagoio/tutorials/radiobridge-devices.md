---
title: "RadioBridge Devices"
description: "This article explains how TagoIO integrates with RadioBridge devices over Sigfox or LoRaWAN, what data is available, and that uplink/downlink operations are supported."
tags: ["tagoio", "devices"]
---

TagoIO is fully integrated with RadioBridge devices connected over Sigfox or
LoRaWAN, providing seamless integration with the RadioBridge backend. Read more about [Radio Bridge](https://radiobridge.com/).

![Diagram of devices, network, RadioBridge server, and TagoIO with uplink/downlink arrows](/docs_imagem/tagoio/rounded-image-1761312825480.png)

All data sent by your device will be readily available to display in widgets or
to be processed by your Analysis.

:::info
You can perform both uplink and downlink operations.
:::

## Step 1:

First, go to your TagoIO account, and if this is your first device connected
between Radio Bridge and TagoIO, you will need to create an
[Authorization](/docs/tagoio/integrations/general/authorization.md).

Copy the **Authorization** to use in the next step.

### Step 2:

After configuring your device on RadioBridge console following the developer's
documentation, set up a Callback API.\
Go to your RadioBridge Console and open the Callback API page. Here, enter the
TagoIO callback URL and set an Authorization Header of your choice.

- **Callback URL:**
  [https://radiobridge.middleware.tago.io/uplink](https://radiobridge.middleware.tago.io/uplink)
- **Header Authorization Code:** Enter the one you generated at Step 1.

### Step 3:

Copy the **Unique API URL** and return to the TagoIO Authorization page by
clicking [here](https://radiobridge.com/).\
Press the Pencil button to edit the authorization you created previously in
Step 1. Paste the **Unique API URL** and press save.

### Step 4:

Add the device at TagoIO. Go to [Devices](https://admin.tago.io/devices), click
on **Add Devices**, search for the RadioBridge category, and pick your device
from the list. If you can’t find it, select **Custom RadioBridge** to add your
device.

Then follow the directions to integrate your device with TagoIO and start
building your own application.\
When completed, click on **Create Device**.

Turn your Radio Bridge device on, and wait for the data to be stored on your
device. Every time the [device](/docs/tagoio/devices/) sends data, it will be stored in the device's data and be ready to be shown in the dashboard.\
You can start editing the installed dashboard.

Also, you can create
[notifications](/docs/tagoio/getting-started/notification.md) and more advanced
[scripts](/docs/tagoio/analysis/creating-analysis.md) as needed.

:::tip

Depending on your type of device, a Parser may be automatically added. You may
want to edit the [parse function](/docs/tagocore/resources/device/payload-parser.md) in
your device if necessary.

:::
