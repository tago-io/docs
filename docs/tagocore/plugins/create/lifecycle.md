---
sidebar_position: 3
title: Lifecycle
slug: /tagocore/plugin/create/lifecycle
---

# Lifecycle

It's important to understand how Plugins run and how TagoCore manages Plugins.

In order for the Plugin system to be secure and stable all Plugins run in a sandbox. All communication between
a Plugin environment and TagoCore is done through messages. This means that if a Plugin crashes, this crash
will not affect TagoCore.

All incoming TagoCore messages are handled by [Modules](/docs/tagocore/plugins/create/sdk/module.md) Inside of each Plugin environment,
which means your **Plugin should have at least one module**.

## How Plugins are Started

```mermaid
sequenceDiagram
  TagoCore->>Plugin Env: Start
  Plugin Env->>Module1: onLoad
  Plugin Env->>Module2: onLoad
  Module2-->>Plugin Env: Success
  Module1-->>Plugin Env: Success
  Plugin Env-->>TagoCore: Success
```

After TagoCore is started, it will iterate through each Plugin environment and send a message for it to load. Once that
message is received, the Plugin environment will make a call to the `onLoad` function of each module.

Once all `onLoad` calls have been resolved, the Plugin environment sends a message to TagoCore, which in turn marks the
Plugin as `started`.

While the Plugin environment tries its best, it doesn't guarantee that the `onLoad` function of each module will be
called in the order that they were defined.

:::danger Timeout
Each plugin can take up to **30 seconds** to start. If after 30 seconds there are still pending `onLoad` calls, the plugin
will be terminated.
:::

## How Plugins are Stopped

```mermaid
sequenceDiagram
  TagoCore->>Plugin Env: Stop
  Plugin Env->>Module1: onDestroy
  Plugin Env->>Module2: onDestroy
  Module2-->>Plugin Env: Success
  Module1-->>Plugin Env: Success
  Plugin Env-->>TagoCore: Success
```

The Stop flow for each Plugin environment is very similar to the Start flow.

Whenever a Plugin needs to be terminated, the Plugin environment send a message for it to shutdown. Once that
message is received, the Plugin environment will make a call to the `onDestroy` function of each module.

Once all `onDestroy` calls have been resolved, the Plugin environment sends a message to TagoCore, which in turn marks the
Plugin as `stopped`.

While the Plugin environment tries its best, it doesn't guarantee that the `onDestroy` function of each module will be
called in the order that they were defined.

:::danger Timeout
Each plugin can take up to **60 seconds** to stop. If after 60 seconds there are still pending `onDestroy` calls, the plugin
will be terminated.
:::

## Errors during onLoad and onDestroy

Sometimes an error in your code may result in an Error being thrown in the `onLoad` or `onDestroy` functions of a
Module, or maybe it meant to throw one because it had not received the correct `configs` from your Plugin's UI.

In either case, errors may happen in these functions and that's acceptable. If an error occurs in these functions,
the plugin will still be loaded normally and its state will still be `started`.

However, the Module will have its state as `stopped` and the error will appear in the `Plugin Configuration`
page of your Plugin, under your Module's status:

<img className="big-image" src="/docs_imagem/tagocore/plugin/onload-error.png" height="150px" />

This functionality is a great tool for you to indicate that something is not quite right in your Plugin, or that
some unexpected error happened while trying to start/stop your Module.
