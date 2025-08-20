---
title: Quick Start Guide
description: Get up and running with TagoIO in minutes. Create your first device, dashboard, and start sending data.
---

# Quick Start Guide

This guide will walk you through creating your first complete IoT solution with TagoIO in just a few steps. You'll learn how to add a device, create a dashboard, and send data.

## Prerequisites

- A TagoIO account (sign up at [tago.io](https://tago.io))
- Basic understanding of HTTP requests (for sending data)

## Step 1: Add Your First Device

Every IoT solution starts with connecting a device. Let's create an HTTPS device that can receive data via HTTP requests.

### Creating the Device

1. Go to [Devices](https://admin.tago.io/devices) in your TagoIO admin panel
2. Click **"Add Device"**
3. Select **"HTTPS"** as the device type
4. Enter a name for your device (e.g., "My Temperature Sensor")
5. Click **"Create Device"**

![Device Creation Process](https://cdn.elev.io/file/uploads/Vz4v2Fi-0uG-N7jOjBzSIFz4EER9y2t5YZIRrkJk9Xs/T8E5YSNbkIL-ItYBi3hzpzjYDhajWvxQCw1Bj_2PPmg/throw-miA.gif)

### Getting Your Device Token

Each device needs a unique token for authentication:

1. After creating the device, you'll see the device details page
2. Copy the **Device Token** - you'll need this to send data
3. Keep this token secure - it's like a password for your device

![Device Token Location](https://cdn.elev.io/file/uploads/Vz4v2Fi-0uG-N7jOjBzSIFz4EER9y2t5YZIRrkJk9Xs/gFtCcfwH8gh3bU8QLycC3xBO7V3rNiCOBBizFETtRBE/token-cj4.gif)

## Step 2: Create a Dashboard

Dashboards allow you to visualize your device data in real-time.

### Creating Your First Dashboard

1. Click **"Dashboards"** in the left sidebar
2. Click the **"+"** button
3. Select the dashboard type (choose "Default" for now)
4. Give your dashboard a name (e.g., "Temperature Monitor")
5. Click **"Save"**

### Adding a Widget

Let's add a card widget to display temperature data:

1. In your new dashboard, click the **"+"** button (top right)
2. Select **"Card"** widget
3. In the widget configuration:
   - **Device**: Select your device
   - **Variable**: Type "temperature" (this is the variable we'll send)
   - **Title**: "Temperature Reading"
4. Click **"Save"**

![Dashboard and Widget Creation](https://cdn.elev.io/file/uploads/Vz4v2Fi-0uG-N7jOjBzSIFz4EER9y2t5YZIRrkJk9Xs/kluf-ZgzvNFpyHwGdltlCxdbE5aVcqfsBUyFUiROTok/temp-3UQ.gif)

## Step 3: Send Data to Your Device

Now let's send some temperature data to see it appear in your dashboard.

### Using cURL (Mac/Linux)

Open your terminal and run this command, replacing `YOUR_DEVICE_TOKEN` with your actual device token:

```bash
curl -H "Content-Type: application/json" \
     -H "Device-Token: YOUR_DEVICE_TOKEN" \
     -X POST \
     -d '{"variable":"temperature","value":25.4,"unit":"°C"}' \
     https://api.tago.io/data
```

### Using Postman (Windows/All Platforms)

1. **Set up the request**:
   - Method: `POST`
   - URL: `https://api.tago.io/data`

2. **Add headers**:
   - `Content-Type`: `application/json`
   - `Device-Token`: `YOUR_DEVICE_TOKEN`

3. **Add JSON body**:
   ```json
   {
     "variable": "temperature",
     "value": 25.4,
     "unit": "°C"
   }
   ```

4. Click **"Send"**

![Postman Configuration](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/EhT2lMh4rqGlmm_pltnPnBeCbFQVvcJBW69CBVG27C4/postman1-OU0.png)

![Postman JSON Body](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/fABHAKFoogaiM9bHUL9LI9b9huEH4CSvvCdeQx_x-iM/postman2-rSE.png)

### Expected Response

You should receive a successful response:

```json
{
  "status": true,
  "result": "Data added"
}
```

![Successful Response](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/rxJ1GsCvpXHq6H2aA-pc9XvUHd874uZOPv-k7fb5lrI/postman3-wEs.png)

## Step 4: View Your Data

Go back to your dashboard - you should now see the temperature value displayed in your card widget!

![Dashboard with Data](https://cdn.elev.io/file/uploads/Vz4v2Fi-0uG-N7jOjBzSIFz4EER9y2t5YZIRrkJk9Xs/VMPh8Tuo-n57KxA_yWORLJg4T3TpvekIcgDoYQ3yKTY/1621971979910-jRM.png)

Try sending more data with different temperature values to see the widget update in real-time.

## Alternative: Using Simulators

If you don't want to send data manually, you can use our device simulators:

1. Go to **[Devices](https://admin.tago.io/devices)**
2. Click **"Add Device"**
3. Select **"Simulator"** as the network
4. Choose a simulator (e.g., "Freezer Simulator", "Bus Simulator")
5. The simulator will automatically start sending data

The simulator will create sample data that you can use to explore TagoIO's features without needing real hardware.

## Next Steps

Congratulations! You've successfully:
- ✅ Created your first device
- ✅ Built a dashboard with a widget
- ✅ Sent data and visualized it

### What's Next?

1. **Add More Widgets**: Try different widget types like charts, gauges, or maps
2. **Create Actions**: Set up automated responses when data meets certain conditions
3. **Write Analysis Scripts**: Process your data with custom JavaScript functions
4. **Explore Integrations**: Connect with external services like email, SMS, or webhooks

### Learn More

- [Dashboard Overview](https://help.tago.io/portal/en/kb/articles/15-dashboard-overview) - Master dashboard creation
- [Widgets Guide](https://help.tago.io/portal/en/kb/articles/18-widgets-overview) - Explore all widget types
- [Actions Overview](https://help.tago.io/portal/en/kb/articles/30-actions) - Automate your IoT solution
- [Analysis Overview](https://help.tago.io/portal/en/kb/articles/29-analysis-overview) - Process data with scripts
- [API Documentation](https://help.tago.io/portal/en/kb/articles/31-api-overview) - Complete API reference

## Troubleshooting

### Data Not Appearing?
- Verify your device token is correct
- Check that the variable name matches exactly
- Use the [Live Inspector](https://help.tago.io/portal/en/kb/articles/453-live-inspector) to monitor incoming data
- Ensure your JSON format is correct

### Widget Not Showing Data?
- Confirm the widget is configured with the correct device and variable name
- Check that data has been sent recently (widgets show the latest value by default)
- Try refreshing your dashboard

### Need Help?
- Browse our [Knowledge Base](https://help.tago.io/portal/en/kb)
- Ask the [Community](https://help.tago.io/portal/en/community)
- Submit a [Support Ticket](https://help.tago.io/portal/en/newticket)