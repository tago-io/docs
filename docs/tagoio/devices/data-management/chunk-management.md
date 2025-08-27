---
title: "Chunk Management"
description: "This article explains how to use the Chunk Management feature to view, export, and manage immutable device data in TagoIO, including exporting chunks to TagoIO Files and customizing file address templates."
tags: ["tagoio"]
---
The Chunk Management feature lets you view and manage the data of Immutable devices to create backups or delete information.

## Accessing Chunk Management

Access the Device module and select a Device Data Optimized (Immutable) device type from your list. In the device view you will find the Chunk Management section, which displays a graph of your data chunks according to the period you chose when creating the device. See [Immutable devices](../devices/index#immutable-devices) and [Device](../devices/index) for details on device types and the Device module.

<!-- Image placeholder removed for build -->

## Export chunks to TagoIO Files

By selecting one or multiple chunks, you can export them to your TagoIO Files in CSV format to create a backup of your data. During this process, the chunks are added to a queue and will become available at the file address once processed. This operation can take several minutes depending on the amount of data being exported. See [TagoIO Files](../files) for more on file storage and access.

### File address template

During export you can customize the file address so each chunk file has its own path inside your TagoIO Files. In the Advanced Settings you can use variables to change the path that will be created. The available variables are:

- `$DEVICE$` – the device ID  
- `$CHUNK$` – the chunk ID (useful if you need a unique identifier)  
- `$CHUNK_START$` – the chunk initial date (UTC)  
- `$CHUNK_END$` – the chunk end date (UTC)  
- `$FROM$` – the chunk start date (ISO 8601 format)  
- `$TO$` – the chunk end date (ISO 8601 format)  
- `$ORGID$` – the organization ID  
- `$ENVIRONMENT$` – the environment name  

Use these variables in the file address template to automatically generate meaningful file paths for each exported chunk. For example, a template such as:

```
device/$DEVICE$/$FROM$_$TO$
```

would result in a file address like:

```
/device/6297aa7691e70a00654f9816/2022-04-01_2022-06-30.csv
```

Date variables such as `$FROM$` and `$TO$` will be in the ISO 8601 format (YYYY‑MM‑DD).

#### Include Header option

When exporting a chunk, you can activate the **Include Header** option to add column headers to the CSV file. Headers describe each variable’s data in the first row. If you prefer a raw list of rows only, disable this option in Advanced Settings.

### How exporting is billed

Exporting data consumes the [Data Output service](../../services/data-output-service). The number of transactions billed is rounded to the next multiple of 10 000. For example:

1. Exporting 700 registers will consume 10 000 data output transactions.  
2. Exporting 12 000 registers will consume 20 000 data output transactions.  
3. Exporting 32 000 registers will consume 40 000 data output transactions.  
4. Exporting 103 000 registers will consume 110 000 data output transactions.

The billing scheme above does not apply when fetching data using the API; for example, a GET request consumes one transaction per fetched register.

## Delete chunks

You can delete chunks to optimize your data storage. This is an irreversible process, and once done there is no going back, so make sure you are certain before removing anything. Hover over the graph to check the chunk range information before deleting. All interactions with this feature are logged in the [Audit Log](../../security/audit-log).

## Automation

You can also access the chunk management functions programmatically using the SDK (`Devices.getChunk`), Analysis, and Actions to automate processes for backing up or deleting your data.