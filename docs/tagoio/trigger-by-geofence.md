---
title: "Trigger by Geofence"
description: "This article explains how to use the Trigger by Geofence feature to run an Action when location data meets geofence conditions (inside or outside a predefined area), and it includes the UI text captured from the configuration screen."
tags: ["tagoio"]
---
The “Trigger by Geofence” feature allows you to execute an [Action](actions/actions) whenever a variable containing location data meets specific geofence conditions—either inside or outside a predefined area. For example, you can configure an action to trigger when a device enters or exits a designated zone.

<!-- Image placeholder removed for build -->

## Trigger configuration (text extracted from screenshot)

- Alert when outside geofence  
- Type: Geofence  
- Action Run Analysis | Last triggered at Never  
- Action | Tags | More  
- Trigger  
- Single device  
  - Watch a single device.  
- Multiple devices  
  - Watch all devices with matching tags.  
- Select the device  
  - Bus Simulator  
- Trigger  
  - If one of the conditions match, the action will be triggered.  
- location  
- Inside | Outside  
- Add new condition  
- Mapbox | OpenStreetMap  

![Image 1](https://help.tago.io/galleryDocuments/edbsna9c8ba07f465cdba9eb113e35c9e0c05cdaba19e78ddc99a96f9bdfb6401c31ba4d80faf9a07107866ace9196265a568?inline=true)

## Setting the Trigger Conditions

To set up this trigger, you need to draw geofences on the map. Geofences can be either polygons or circles, and you must select a variable that contains the location data.  
For each condition you can only set one geofence, so if you need multiple geofences you will have to create additional conditions—up to 10 in total.

You must define whether the trigger should activate when the chosen variable is **inside** or **outside** the geofence. When the selected variable receives new location data, the system checks if this location meets the specified geofence condition.

![Image 2](https://help.tago.io/galleryDocuments/edbsn120a2c64468ac67e5dd18cf4974ea10a4afe40a0b7cb3d5155e716e7295b3d88ef4348570f6fc0b3ba6bd461eb0f6ad8?inline=true)

### Editing Geofence

To edit a geofence condition, simply select the condition and click on the pencil icon to resize or move it.  
To delete a geofence in your condition, you can either draw another one, which will replace the previous geofence, or click on the trash icon to remove it.

## Related references

- See [Editing Geofence](../widgets/map-widget) for instructions on editing geofence shapes and parameters.
- See [Defining Actions](../actions/actions) or [Actions](../actions/actions) for how to configure the action executed when the geofence condition is met.