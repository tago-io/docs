---
sidebar_position: 2
title: Manually
slug: /tagocore/plugins/install/manually
---

# Install Plugin Manually

Maybe you are developing a Plugin or maybe you have received a plugin from someone and you want to install it manually. In either case, to install a plugin manually, you have two options:

## Install via the sidebar

TagoCore's sidebar allows you to quickly install a plugin by selecting its folder where the package.json file is located. Look for the &nbsp;<img src="/docs_imagem/tagocore/icons/puzzle-piece.svg" width="15px"/>&nbsp; button in the sidebar and click on it.

## Install via settings file

To begin, you need to find the tagocore.yml file in the TagoCore folder. This folder is located in your user profile directory. On **Windows** systems, it is named `TagoCore`, while on **Unix-like** systems, it is named `.tagocore`.

In that file, there is a property named `custom_plugins`. In that property, you must enter the folder path to your plugin.

```yml
custom_plugins:
  - /path_to_your_plugin/folder_plugin_one
  - /path_to_your_plugin/folder_plugin_two
```
