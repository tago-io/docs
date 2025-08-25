---
sidebar_position: 1
title: Plugin - Getting Started
sidebar_label: Getting Started
slug: /tagocore/plugins/create
---

# Getting Started

Plugins are programs or applications created by the community and TagoIO that extend the functionality of TagoCore.

## Prerequisites

Like TagoCore itself, Plugins are built using Node.js. You’ll need an understanding of **JavaScript** or **TypeScript** and **Node.js** to
develop plugins. You should take a look at our [Prerequisites](/docs/tagocore/plugins/create/prerequisites) before starting.

## Lifecycle

Before jumping into development, it's important to understand how Plugins run in TagoCore, and how TagoCore manages
Plugins. Learn more about a [Plugin's Lifecycle](/docs/tagocore/plugin/create/lifecycle).

## Development

This tutorial will build a Plugin that allows the user to set a port for an HTTP server to start.
It will use many Plugin components to give an introductory demonstration of their relationships.

To begin, you need to create a new directory where your plugin will be located.

Now, we must start a new Node.js project. To do so, run the following command by opening up a terminal in the newly
created folder:

```bash
npm init --yes
```

### Manifest

Every Plugin needs a [manifest](/docs/tagocore/plugins/create/manifest). The Plugin manifest is defined within the package.json
of your project, so open the `package.json` file in your favorite text editor and add a `tcore` property to it.

Your Plugin's `package.json` should look something like this:

```json
{
  "name": "Getting Started Example",
  "version": "1.0.0",
  "tcore": {
    "name": "Getting Started Example",
    "short_description": "Example of how to get started with Plugins"
  }
}
```

### Installing the SDK

Now that you have your Plugin's manifest ready, it's time to add some functionality. The first step is to install
the [TagoCore Plugin SDK](https://npmjs.com/package/@tago-io/tcore-sdk) from the npm registry, so run the following
commands by opening up a terminal in your folder:

```bash
npm install @tago-io/tcore-sdk
```

### Adding Functionality

With the TagoCore Plugin SDK installed, we are free to start adding functionality to our Plugin. To do so, create a new
JavaScript file called `index.js`.

Inside of the `index.js` file, we will create our first [Module](/docs/tagocore/plugins/create/module). Modules are JavaScript
classes that allow you to add a specific functionality for your Plugin. Each **Plugin should have at least one module**.

Each Module should be instantiated with an `id` and `name` properties, which means our code should look something
like this:

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");

const service = new ServiceModule({
  id: "getting-started-service",
  name: "Getting Started Service",
});
```

### Allow a Service Module to be created

Every Module type that you use in your code must be declared in the `types` property of your Plugin's manifest. In this
case, we are creating a Service Module so we must add a `service` type to the manifest.
[See the full list here](/docs/tagocore/plugins/create/manifest#types).

```json
{
  "name": "Getting Started Example",
  "version": "1.0.0",
  "tcore": {
    "name": "Getting Started Example",
    "short_description": "Example of how to get started with Plugins",
    // highlight-start
    "types": ["service"]
    // highlight-end
  }
}
```

### Installing your Plugin

Your Plugin is ready. It doesn't do anything, but it can already be installed in TagoCore. Since you already have
created your Plugin you need to install it [Manually](/docs/tagocore/plugins/install/manually).

Once you do so, you should see something like this as soon as the application starts:

<img className="big-image" src="/docs_imagem/tagocore/plugin/getting-started-loaded.png" height="40px" />

### Give users options

Our Plugin is loaded but it doesn't do anything. Our goal is to create an HTTP server, but we are not sure which
port is available in the system, so we will ask the user to set a port via the Plugin's UI.

Head over to the `index.js` file and add a `configs` field to the Module's
setup. We will add a single string number field for the user to set a port for us to start an HTTP server.

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");

const service = new ServiceModule({
  id: "getting-started-service",
  name: "Getting Started Service",
  configs: [
    {
      type: "number", // type of the field, there are many types
      field: "port", // unique identifier for this field
      name: "Port", // visual label for the field
      required: true, // obligatory
    },
  ],
});
```

:::info
Every time you modify your Plugin's code or manifest, you should restart TagoCore.
:::

After restarting TagoCore, you should see an input in the Plugin's Configuration page. The input will only accept
numbers because of its `type`, and it is required to have a value because of the `required` property.

### Using users values

Now that the user has informed a port and saved it, it's time for us to actually use the value informed by the user.
That's where the `onLoad` and `onDestroy` Module functions come in. These functions are a part of the
[Plugin's Lifecycle](/docs/tagocore/plugin/create/lifecycle).

- `onLoad` will always be the first function called for each Module. It is in here that you should add the starting
  functionality for a single Module (starting an http server for example).
- `onDestroy` will always be the last function called for each Module. It is in here that you should add the stopping
  functionality for a single Module (stopping an http server for example).

To start the HTTP server, we will use [express](https://npmjs.com/package/express), and our code will look something
like this:

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");
const express = require("express");
const app = express();
let server = null;

const service = new ServiceModule({
  id: "getting-started-service",
  name: "Getting Started Service",
  configs: [
    {
      type: "number",
      field: "port",
      name: "Port",
      required: true,
    },
  ],
});

service.onLoad = async (userValues) => {
  if (!userValues.port) {
    throw new Error("Invalid port");
  }

  app.get("/", (req, res) => res.send("Hello World"));
  server = app.listen(userValues.port);
};

service.onDestroy = () => {
  server.close();
};
```

After you restart TagoCore, you will see that if you access the address `http://localhost:3000` in your browser, a text
response of 'Hello World' will be sent back, indicating that the plugin is alive.
