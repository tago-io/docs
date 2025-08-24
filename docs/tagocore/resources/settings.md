---
sidebar_position: 7
title: Settings
slug: /tagocore/settings
---

# Settings

The settings page allows you to modify any configuration related to TagoCore. You can visit this page by clicking on the &nbsp;<img src="/docs_imagem/tagocore/icons/cog.svg" width="15px"/>&nbsp; button on the sidebar.

Settings are saved to a `.yml` file located in the `tagocore` folder, which resides in your Operating System's `Home Directory`.

## Settings folder

The first configuration you will find is the **Settings folder**. This is a read-only field that shows you where the settings are located in your filesystem.

## Port

This field allows you to change the port that TagoCore will run on. By default it has a value of `8888`, but you can change it to whatever port you prefer.

Changing the port will:

- Change the API endpoint where you make requests;
- Change the endpoint that you use to open TagoCore in your browser.

:::tip
This field requires TagoCore to restart for it to take effect.
:::

:::info
This configuration only affects TagoCore, and not any plugins that may start web servers.
:::

## Database plugin

This field allows you to define which Database plugin you want to use.

By default this configuration will use the first Database plugin it finds, but this option is ideal for you if you have multiple database plugins.

Once you switch to another Database Plugin, TagoCore will start using that Database as the data source for the application.

:::tip
This field requires TagoCore to restart for it to take effect.
::: 

:::info
Data is not replicated between database plugins.
:::

## Queue Plugin

This field allows you to define which Queue plugin you want to use.

:::info Good to know
This field requires TagoCore to restart for it to take effect.
:::

## Filesystem Plugin

This field allows you to define which Filesystem plugin you want to use. By default, it must be the Local Disk Filesystem plugin.

:::info Good to know
This field requires TagoCore to restart for it to take effect.
:::
