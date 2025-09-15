---
sidebar_position: 7
title: Settings
slug: /tagocore/settings
---

# Settings

The Settings page is your control panel for configuring how TagoCore operates. Here you can customize core system behavior, choose which plugins to use, and adjust network settings to match your environment.

Access Settings by clicking the &nbsp;<img src="/docs_imagem/tagocore/icons/cog.svg" width="15px"/>&nbsp; gear icon in the sidebar.

All settings are automatically saved to a configuration file (`tagocore.yml`) in your system's home directory, ensuring your preferences persist between restarts.

## Settings Location

**Settings Folder** shows you exactly where your configuration file is stored on your computer. This read-only field helps you locate the file if you need to back it up or troubleshoot configuration issues.

## Network Configuration

### Port Setting
Controls which network port TagoCore uses to communicate. The default port is `8888`, but you can change this if:
- Another application is already using port 8888
- Your network requires a specific port number
- You want to run multiple TagoCore instances

**What changes when you modify the port:**
- The web address you use to access TagoCore (e.g., `http://localhost:9000`)
- The API endpoint your devices use to send data

:::tip Restart Required
TagoCore must restart after changing the port. Your devices will need the updated port number to continue sending data.
:::

:::info Plugin Independence
This setting only affects TagoCore itself. Plugins that start their own web servers use separate port configurations.
:::

## Plugin Configuration

### Database Plugin
Determines where TagoCore stores your device data and system information. If you have multiple database plugins installed, you can switch between them here.

**Default behavior:** TagoCore automatically uses the first available database plugin it finds.

**When to change:** You have specific database requirements (like PostgreSQL instead of SQLite) or want to migrate to a different storage system.

:::tip Restart Required
TagoCore must restart when switching database plugins.
:::

:::info Data Migration
Switching database plugins doesn't automatically transfer your existing data. You'll need to manually migrate data between different database systems.
:::

### Queue Plugin
Manages how TagoCore handles background tasks and message processing. Queues help TagoCore process multiple operations efficiently without blocking other activities.

:::info Restart Required
TagoCore must restart when changing queue plugins.
:::

### Filesystem Plugin
Controls how TagoCore accesses and stores files on your system. The default Local Disk plugin works for most installations.

**When to change:** You need specialized file storage (like network drives or cloud storage) through custom plugins.

:::info Restart Required
TagoCore must restart when changing filesystem plugins.
:::
