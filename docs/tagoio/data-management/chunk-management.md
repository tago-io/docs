---
title: "Chunk Management"
description: "This article explains how to use the Chunk Management feature to view, export, and manage immutable device data in TagoIO, including exporting chunks to TagoIO Files and customizing file address templates."
tags: ["tagoio"]
---

The Chunk Management feature lets you view and manage the data of Immutable devices to create backups or delete information.

## Accessing Chunk Management

Access the Device module and select a Device Data Optimized (Immutable) device type from your list. In the device view you will find the Chunk Management section, which displays a graph of your data chunks according to the period you chose when creating the device. See [Immutable devices](../devices/devices#immutable-devices) and [Device](../devices/devices) for details on device types and the Device module.

<!-- Image placeholder removed for build -->

## Export chunks to TagoIO Files

By selecting one or multiple chunks, you can export them to your TagoIO Files in CSV format to create a backup of your data. During this process, the chunks are added to a queue and will become available at the file address once processed. This operation can take several minutes depending on the amount of data being exported. See [TagoIO Files](../files) for more on file storage and access.

### File address template

During export you can customize the file address so each chunk file has its own path inside your TagoIO Files. In the Advanced Settings you can use variables to change the path that will be created. The available variables are:

- `$DEVICE$` - the device ID  
- `$CHUNK_START$` - the chunk initial date (UTC)  
- `$CHUNK_END$` - the chunk end date (UTC)  
- `$ORGID$` - the organization ID  
- `$ENVIRONMENT$` - the environment name

Use these variables in the file address template to automatically generate meaningful file paths for each exported chunk.