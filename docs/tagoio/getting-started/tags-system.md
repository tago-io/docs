---
title: "Tags System"
description: "This article explains the Tags system in TagoIO, describing what tags are, how they function as key-value metadata, and how to assign them to assets within the platform."
tags: ["tagoio"]
---
Tags are a flexible and powerful way to organize and label your assets within TagoIO. Tags let you manage access and identify key components such as [Devices](/docs/tagoio/devices/), [Actions](/docs/tagoio/actions/), [Analysis](/docs/tagoio/analysis/), [Dashboards](/docs/tagoio/dashboards/), and [Users & Access rules](/docs/tagoio/tagorun/access-management/).

Operating like key–value pairs, tags enable you to assign relevant metadata to your assets, such as:
- names
- descriptions
- categories
- locations
- customers
- products
- and more

## 1. How to use tags

Tags can be assigned to a wide range of components within TagoIO. They are typically available through a designated **"Tag"** tab when configuring assets that support label assignment.

### Tag parameters

| Parameter | Description |
|-----------|-------------|
| **Key**   | Name of the parameter used as reference; you may also select an existing key. |
| **Value** | The value you want to assign to your asset. |

### Maximum number of tags per asset

The maximum number of tags that can be attached to a single asset is **30**. If you attempt to add more than this limit, a notification will appear indicating that the maximum capacity has been reached.

### Delete protection

You can protect critical resources from accidental deletion by adding a special tag:

1. **Key:** `_delete_protection_`
2. **Value:** A custom error message to display when deletion is attempted

When this tag is present on a resource, any attempt to delete it will be blocked and result in an error or warning that you can customize.

### Managing tags

Tags can be managed from several sources:

1. **TagoIO Interface** – Manually add or edit tags by clicking the asset and then selecting the Tags tab.
2. **Analysis SDK** – Programmatically add or edit tags from an analysis script using methods such as `account.devices.edit()` or `account.actions.edit()`.
3. **TagoIO API** – Use REST API endpoints for each asset type to add or edit tags by sending HTTP requests with JSON payloads containing the tag information.

### Common use cases

- **Access Management:** Assign a tag like `_role: Manager_` to a user group and grant them access to all devices tagged with `_customer: ACME Inc._`.
- **Blueprint Dashboards:** Create a dashboard that allows users to switch between devices by selecting any device with a specific tag, e.g., `_device_type: Temperature Sensor_`.

(Example UI: the screenshot shows a "Tags" tab with a table-like interface where you can add a tag key and enter its corresponding value. There are controls to add or remove tag rows and a Save button.)