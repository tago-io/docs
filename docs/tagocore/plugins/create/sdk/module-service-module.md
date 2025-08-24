---
sidebar_position: 3
title: Module - Service
slug: /tagocore/plugins/create/service
---

# Service Module

This Module allows you to run any kind of code once your plugin is loaded.

## How it works

As soon the Plugin is loaded, the `onLoad` function of the Module will be invoked. You can override this function to
execute your code, such as to start an http server or to run analytics on some data you have stored.

Just like all other Modules, the `onDestroy` function will be invoked just before the Module is stopped. You can
override this function if you wish to clean up your code before the Module is destroyed.

## Sample code

This sample starts an http server with [express](https://npmjs.com/package/express). When a `GET /` request is made to the server, the string `Hello World` will be sent back.

```js
const { ServiceModule } = require("@tago-io/tcore-sdk");
const express = require('express');
const app = express();
let server = null;

const myService = new ServiceModule({
  id: "hello-world-service",
  name: "Hello World service",
});

// `onLoad` is used to run your code.
// This function will be called once when your plugin gets loaded.
myService.onLoad = async () => {
  app.get('/', function (req, res) {
    res.send('Hello World');
  });
  server = app.listen(3000);
};

// `onDestroy` is used to clean up your code.
// This function will never be called before `onLoad`.
myService.onDestroy = async () => {
  server.close();
};
```

