---
title: "Device data management"
description: "This article explains how to use the Device page in TagoIO to visualize, filter, edit, import, and export device variables, and describes how the platform displays the amount of stored data for a device."
tags: ["tagoio", "devices"]
sidebar_position: 1
---
The device page provides tools for visualizing, filtering, editing, importing, and exporting variables to facilitate management of the data received from your device. You can access these tools by navigating to the Device module, selecting a device, and clicking on the "Data" tab. Refer to the Device module documentation for navigation details.

<!-- Image placeholder removed for build -->

## Amount of data records

The amount of data stored in each device is displayed at the top of the page. When the number of data records exceeds 1,000 registers, TagoIO will start to display a truncated value. This represents an estimated number of data records stored in the device.

When the value is greater than 1,000 registers it may be shown with a letter suffix: **K** for thousand, **M** for million, **B** for billion, and **T** for trillion.

![Image 2](/docs_imagem/tagoio/external-549c623a.png)

![Image 3](/docs_imagem/tagoio/external-525092fc.png)

## Last Input

The last input information refers to the last time the device received communication; it does not necessarily mean that the data sent was actually stored as data. This information is useful to verify the last time your sensor received an attempt of data input.

If you desire to verify if your data was received and added to your device, the best approach is to check the variable in the **Data** tab, or use the [Live Inspector](/docs/tagoio/devices/live-inspector) feature.

![Image 5](/docs_imagem/tagoio/external-474cf6ac.png)

## Managing variable data

The **Data** tab on your device page lists all stored variables, including their names, values, group, metadata, and time. Here, you can inspect each variable individually, as well as import and export them. For [Mutable devices](/docs/tagoio/devices/), you can even edit or delete them individually.

## Filtering

Filter options within the **Data** tab enable you to refine your variable search based on specific criteria.

The table visualization can be customized by adjusting column visibility or changing the time format; this option is accessible through the cog icon in the table's lower-left corner.

![Image 6](/docs_imagem/tagoio/external-e4612149.png)

## Editing and deleting variables individually

For [mutable devices](/docs/tagoio/devices/), individual variables can be edited or deleted directly from this tab. Simply hover over the desired information and click the pencil icon to make edits.

To delete variables, first select the ones you want to remove. Once selected, click **Delete selected** to proceed with the deletion. This action is irreversible.

![Image 7](/docs_imagem/tagoio/external-39e17ef8.png)

For [immutable devices](/docs/tagoio/devices/), it is not possible to edit data individually; data can only be deleted through the data chunks. Read more about it here: [Chunk Management](/docs/tagoio/devices/data-management/chunk-management).

## Importing

To import data in bulk into your device, navigate to the **Data** tab and click the **More** button in the top right corner. Then, select **Restore from Files**. Before importing, ensure that your data is uploaded to your [Files](/docs/tagoio/files/). If you find that you don't have sufficient storage space, you can easily increase your limit by visiting the [Billing page](https://admin.tago.io/account/billing) in your Admin panel.

The supported file format is CSV.

![Image 8](/docs_imagem/tagoio/external-e4940a38.png)

![Image 9: Alert](/docs_imagem/tagoio/exclamation-4.png)

The device payload parser does not execute during data import. Therefore, ensure that the data is properly formatted before importing.

### CSV format requirements

To ensure a successful import, your CSV file must adhere to the following requirements:

1. Include headers. The **variable** field is mandatory, while others are optional.
2. Values should be separated by a comma. Semicolons are not supported.
3. The file size should not exceed 200 MB.
4. The file should contain a maximum of 1 million rows.
5. Data integrity and structure should align with TagoIO's data format. For more information, refer to the [Sending Data](/docs/tagoio/api/sending-data) documentation.

The following headers are available for import. Any additional headers beyond those listed will be ignored:

- variable (mandatory)
- value
- group
- unit
- location
- metadata
- time

### Service limits for importing

When importing data, the [Data Input](/docs/tagoio/services/data-input-service) limit is not affected. However, since you are adding new data to your devices, the amount of new data will count against your [Data Storage](/docs/tagoio/services/data-records) service. You must have at least 10 000 Data Storage registers available to perform the import, even if you are importing less data than that.

Additionally, before uploading the data to your device, you must first upload it to your [Files](/docs/tagoio/files). Ensure you have enough space to upload your CSV file.

![Image 10: Notes](/docs_imagem/tagoio/file.png)

If needed, you can increase the data storage or file limits by accessing the [Billing page](https://admin.tago.io/account/billing) in your Admin.

### Differences between importing data to Mutable vs. Immutable Devices

TagoIO supports two types of devices: [Mutable](/docs/tagoio/devices/) and [Immutable](/docs/tagoio/devices/). Each has specific considerations when importing data.

1. **Immutable Devices**: If your CSV includes data for the **time** field, the time must fall within your [chunk period and retention configuration](/docs/tagoio/devices/data-management/data-retention-feature). If you attempt to import data outside the retention period, you will encounter an error. To resolve this, ensure the date and time information fits within your retention period.

2. **Mutable Devices**: These devices can store up to 50 000 records. Your import will fail if this limit is exceeded. You can check the number of data records in your bucket in the Device module.

## Exporting

The **Export** button, located in the top right corner of the **Data** tab, allows for variable data export in various formats. Further details on exporting data for specific device types can be found under: [Data Export](/docs/tagoio/devices/data-management/data-export).

## Backing up your data

To back up your device data, click the **More** button located in the top right corner, then select **Backup to Files** under the **Data** tab. This will export all your bucket data to your [Files](/docs/tagoio/files), creating a secure copy of your sensor data. This feature is particularly useful for safeguarding your data or capturing snapshots at specific points in time.

The tool automatically backs up all your device data. If you need to apply filters before backing up, use the Data Export function to refine your data, and then save it locally or in your Files. For [Immutable devices](/docs/tagoio/devices/), clicking the **Backup to Files** button will redirect you to the **Chunk Management** tab, where you can select specific chunks of data to back up to your Files.

![Image 11](/docs_imagem/tagoio/external-df29aa3f.png)

### File Address Template

During the backup process, you can customize the file address before exporting. As a result, each backup file will have its own unique file address. In the Advanced Settings, you can use key variables to modify the path name that will be created within your Files. The variables available for customizing your file address are listed below:

- $DEVICE$ – the device ID
- $CHUNK$ – the chunk ID
- $FROM$ – the chunk start date
- $TO$ – the chunk end date

For example, the following file address template:

```
device/$DEVICE$/$FROM$_$TO$
```

would result in a file address such as:

```
/device/6297aa7691e70a00654f9816/2022-04-01_2022-06-30.csv
```

![Image 12](/docs_imagem/tagoio/info-8.png)

Date variables such as $FROM$ and $TO$ will be in the ISO 8601 format (YYYY-MM-DD).

![Image 13: Warning](/docs_imagem/tagoio/caution.png)

When exporting a chunk to a location where a file already exists, all the data will be replaced with the new one.

## Emptying your Device Data

While it's feasible to remove variables one by one, there's a more efficient method to wipe all data simultaneously.

Navigate to the [Device](https://admin.tago.io/devices) module and choose the device you wish to clear. Then, click the **More** button located in the top right corner, then select **Empty Device Data** under the **Data** tab.