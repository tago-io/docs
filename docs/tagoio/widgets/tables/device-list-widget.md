---
title: "Device List Widget"
description: "A concise guide to the Device List widget that explains what it shows and how to edit its appearance and filters in a dynamic table format."
tags: ["tagoio", "widgets", "devices"]
---
The Device List widget is a table that dynamically populates with information about your devices, such as names, tags, configuration parameters, and IDs. It cannot access devices' telemetry or sensor data.

## 1. Editing the device list
The Device List works as a dynamic table. You can customize its colors and columns, and apply filters to control which devices appear in the list.

![Device List widget configuration and preview](/docs_imagem/tagoio/device-list-widget-2.png)

### 2. Device filtering
This option is required to be filled in order to show your devices. You can either filter the devices that will show up in your list by the devices' tag key and tag value, or by tag match for one of the blueprint devices on your dashboard.

You can also have multiple filters working at the same time. It works as an AND operator, and the device must match all the filters.

To set up tags on your devices, go to each Device’s page and add the desired key/value pairs.

**a) Filter by Tag Key and Tag Value**  
All devices for the list must have the same tag key and tag value specified in this filter.

**b) Match with Blueprint Devices tag**  
Select a blueprint device from the dashboard and one tag key. The devices for the list must match the same value of that tag key in the selected blueprint device.

### 3. Setting parameters on Columns
Every column created will require you to select a parameter from the device to show up for the column.

- **Device Information** – Shows a piece of specific information from the Device, such as the device name, ID, Connector, or Network.
- **Tag Key** – Shows a value of a specified tag key. It will be an empty row if the tag key doesn't exist in the device settings.
- **Configuration parameter** – Shows a value of a specified configuration parameter. It will be an empty row if the configuration parameter key doesn't exist in the device settings.

> Configuration Parameter values in ISO‑8601 date format will be displayed as Date.

### 4. Editing device parameters
You can allow users to modify a tag or configuration parameter value inside of the list by enabling the edit option located inside the column’s configuration.

> Device Information such as ID, Connector, and Network can't be edited.

To enable editing of device information, you must first activate the control column. After that, select the columns you wish to make editable. Additionally, you can choose the field type for each column.

The device list offers a variety of field types: Text, Password, Number, Dropdown, Dropdown Multiple, and Address. These field types behave the same as the Input Form’s fields.

### 5. Blueprint Device List for TagoRUN
When sharing a blueprint dashboard to Run Users, you must create an Access Rule so that the devices appear in the list. Without the Access Rule, users don’t have access to the devices the Device List expects to show, even with your filtering from section 2.

Make sure you have an Access Rule granting Blueprint access of the devices to the RUN Users. The rules must match in some way the devices you are applying on the Device List filter.