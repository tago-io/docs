---
title: "Getting Started"
description: "This article provides quick ways to begin using TagoIO, including manual steps, a simulator option, and an introductory video, plus the first step to add a device."
tags: ["tagoio", "getting-started"]
sidebar_position: 2
---
Welcome to TagoIO! Here are some options to get started.

## Options to get started
1. Follow the manual steps described below to start quickly.
2. Use our [SIMULATOR](/tagoio/other-topics/simulator-data-stream) to start right away even if you don't have a physical IoT device.
3. Go deeper by following the video below.

## Introductory video
![TagoIO Getting Started video](/docs_imagem/tagoio/throw-miA.gif)

_Tag title displayed in the video player: "TagoIO | Getting Started"_

---

## Next step

### Step 1. Add a device
Start by adding a [device](https://admin.tago.io/devices) to your account. This will provide a link between the data in your account and the external world.

In this example, let’s send a variable called _temperature_ from your device to your account.

1. Click the **Device** button on the left sidebar.
2. Click the **Add Device** button.
3. Look for the type **HTTPS** and select it.
4. In the field *"Device Name"*, add any name for your device.
5. Click the **Create Device** button.

![Image 1](/docs_imagem/tagoio/throw-miA.gif)

All devices should use a valid [device-token](devices/device-token) when accessing TagoIO. One device‑token is generated when a device is created and it is available for you to copy if you want to insert it in a real device.

![Image 2](/docs_imagem/tagoio/token-cj4.gif)

### Step 2. Build a dashboard
You can build great [dashboards](dashboards/dashboard-overview) to visualize data, interact with your devices and share with others. You can build it with the [widgets](widgets/widgets-overview) that best fit your needs.

1. Click **Dashboards** on the left side bar.
2. Click **+**, then select the type of dashboard, give a name for your dashboard, and click **Save**.
3. Add one widget to show the variable _temperature_. Click **+** (the top right button), and pick the widget **Card**.
4. Start the configuration of this widget by adding the device and variable to be displayed. Click on the search area then type the variable name that will be sent by the device as temperature, and click **Save** – your widget will be ready!

![Image 3](/docs_imagem/tagoio/temp-3UQ.gif)

### Step 3. Send data
Now that you have completed the setup of your account, you are ready to send data from your electronic devices using our [APIs](api/api-overview). You can use one of our [SDKs](https://help.tago.io/portal/en/kb/tagoio/14-sdk) designed for your platform.

You can simulate your device using any tool that transfers data to and from a server with HTTP. Below, you will learn how to quickly send data depending on the OS that you are using.

#### Mac or Linux Command Line
Let’s use curl to post the data. Enter the following command replacing the **YOUR_DEVICE_TOKEN** by the token created earlier for your device.

```bash
curl -H "Content-Type: application/json" \
     -H "Device-Token: YOUR_DEVICE_TOKEN" \
     -X POST -d '{"variable":"temperature","value":100,"unit":"F"}' https://api.tago.io/data
```

Try to send more data by changing the value of the ‘temperature’. Keep an eye on your dashboard. You should see something like this:

![Image 4](/docs_imagem/tagoio/1621971979910-jRM.png)

#### Windows
To send data, there are some tools that support HTTP communication like [Postman](https://api.docs.tago.io/#intro) or Insomnia. Considering the same input as used above, you can make a POST by entering the URL, Device-Token, and configuration in Postman like this:

![Image 5](/docs_imagem/tagoio/postman1-OU0.png)

Then, input the variable information in the JSON body. Make sure that you select the same configuration as shown in the picture below.

![Image 6](/docs_imagem/tagoio/postman2-rSE.png)

The response should look like this:

![Image 7](/docs_imagem/tagoio/postman3-wEs.png)

![Image 8](/docs_imagem/tagoio/postman-DU8.gif)

![Image 9](/docs_imagem/tagoio/1621972232616-8Gk.png)

### Step 4. Create complete solutions
This is just the beginning! Check out how powerful TagoIO is to deploy solutions in production.

Create powerful [analysis](analysis/analysis-overview) in real‑time using our script capabilities in JavaScript. Program [actions](actions/actions) to be taken based on your rules.

Learn more about our powerful [API’s](api/api-overview). And check out the [tutorials](https://help.tago.io/portal/en/kb/tagoio/tutorials) and [SDKs](https://help.tago.io/portal/en/kb/tagoio/14-sdk) prepared for different boards and applications.
