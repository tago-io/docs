---
sidebar_position: 4
title: Manifest
slug: /tagocore/plugins/create/manifest
---

# Plugin Manifest

TagoCore Plugins need a manifest to be to loaded by TagoCore's Plugin Environment.
This manifest is defined within the package.json of your project.

## Package attributes

To generate a Plugin Manifest, you must add a `tagocore` property to it, this is a sample JSON showing all
attributes of the object:

```json
{
  "tcore": {
    "name": "My Plugin Name",
    "short_description": "Explain what your Plugin does in a few words",
    "full_description": "./README.md",
    "icon": "./assets/icon.png",
    "types": [
      "service",
      "action-type",
      "action-trigger",
      "database"
      "encoder"
    ],
    "permissions": [
      "device",
      "device-data",
      "action",
      "analysis"
    ]
  },
}
```

### name

This property must contain the name of your Plugin. This is the same name that will appear in the Plugin Store when you
publish your plugin.

### short_description

Explain in up to 100 characters what your Plugin does.

### full_description

This property should contain a markdown file that will be rendered in the body of your Plugin Configuration. In the
markdown file you explain your Plugin and its API in-depth. Developers usually use the `README.md` file in the root
of the project.

:::info Good to know
TagoCore doesn't support html in the `full_description` file.
:::

### icon

Set the path of an image file to act as your Plugin's main icon. We recommend you use a `PNG` image for the icon.

### types

This is an array that should contain all [module](/docs/tagocore/plugins/create/module.md) types used by your Plugin. For instance,
if you are using a [Service Module](/docs/tagocore/plugins/create/service) and a [Payload Encoder Module](/docs/tagocore/plugins/create/encoder)
in your code, you should have an array like this:

```json
["service", "encoder"]
```

Here are all the types of modules:

- [Payload Encoder Module](/docs/tagocore/plugins/create/encoder) - `encoder`;
- [Service Module](/docs/tagocore/plugins/create/service) - `service`;
- [Action Trigger Module](/docs/tagocore/plugins/create/action-trigger) - `action-trigger`;
- Action Type Module - `action-type`;
- Database Module - `database`.

### permissions

This array specifies which API calls you will be able to make to TagoCore's API via the [core](/docs/tagocore/plugins/create/core.md) object. For instance, if you wish to create a new [Device](/docs/tagocore/device) via the `core.createDevice` function, you have need to add the `device` property to this permissions array.

These are all the possibilities for this array:

```json
["action", "analysis", "device", "device-data"]
```
