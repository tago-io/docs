---
sidebar_position: 1
title: Welcome
slug: /tagocore/
---

# Welcome!

Welcome to TagoCore's Documentation! 📖

## Fast Track

We know your time is valuable, so we'll help you understand TagoCore in 5 minutes! ⏰

### TagoCore

TagoCore is a **free**, **fast**, and **open-source** IoT platform for edge computing that you can use to parse,
and analyze the data from your devices!

TagoCore can be downloaded and executed using Docker by typing the following command:

```shell
docker run -p 8888:8888 -p 8999:8999 tagoio/tagocore
```

That's it! TagoCore is up and running. ⚡

<img className="big-image" src="/docs_imagem/tagocore/welcome/initial-screen.png" height="300px" />

Now that you have access to the system, it's time to understand some of the resources in TagoCore.

### Devices

Devices are the link between the data in your TagoCore and your devices in the real world. For a physical device to
send data to TagoCore, you must create a new Device in the application. [Learn more about Devices](/docs/tagocore/device).

### Analyses

Analyses allow you to implement scripts to analyze and manipulate data from any device in real-time. You can combine
Analyses with Actions to execute an Analysis as soon as an event defined by you happens.

Check out our [Analysis Overview](/docs/tagocore/analysis) to learn more about Analyses.

### Actions

Actions enable you to execute an **action** when something happens in TagoCore. Here are some actions available for
you to use:
- Sending HTTP Requests;
- Running Analyses;
- Sending Data to TagoIO;
- ...And many more via Plugins.

Check out our [Action Overview](/docs/tagocore/action) to learn more.

### Plugins

Plugins are extensions that allow developers to add or modify TagoCore functionalities. You can develop your own
plugin or install plugins from other developers by using the Plugin Store.

If you are interested in Plugins, you should take a look in our [Plugin Overview](/docs/tagocore/plugins) article.
