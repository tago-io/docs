---
sidebar_position: 2
title: Manually
slug: /tagocore/plugins/install/manually
---

# Manual Plugin Installation

Need to install a custom plugin that's not available in the Plugin Store? This happens when you're developing your own plugin or someone has shared a custom plugin with you. TagoCore offers two convenient ways to manually install plugins:

## Method 1: Quick Install via Sidebar

The fastest way to install a custom plugin is through TagoCore's interface:

1. Look for the &nbsp;<img src="/docs_imagem/tagocore/icons/puzzle-piece.svg" width="15px"/>&nbsp; puzzle piece icon in the sidebar
2. Click the icon to open the plugin installer
3. Browse and select the folder containing your plugin (the folder should have a `package.json` file)
4. TagoCore will automatically install and activate the plugin

This method is perfect for testing plugins during development or quickly adding plugins shared by others.

## Method 2: Configure via Settings File

For permanent installation or when managing multiple plugins, you can add them directly to TagoCore's configuration:

### Locate Your Configuration File
Find the `tagocore.yml` file in your TagoCore settings folder:
- **Windows**: `TagoCore` folder in your user directory
- **Mac/Linux**: `.tagocore` folder in your user directory (hidden folder)

### Add Plugin Paths
Open the `tagocore.yml` file and add your plugin paths to the `custom_plugins` section:

```yml
custom_plugins:
  - /path_to_your_plugin/folder_plugin_one
  - /path_to_your_plugin/folder_plugin_two
```

Replace the example paths with the actual folder paths where your plugins are located. After saving the file, restart TagoCore to load the new plugins.
