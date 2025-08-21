---
title: "Trigger by Geofence"
description: "This article explains how to use the Trigger by Geofence feature to run an Action when location data meets geofence conditions (inside or outside a predefined area), and it includes the UI text captured from the configuration screen."
tags: ["tagoio"]
---

The "Trigger by Geofence" feature allows you to execute an Action whenever a variable containing location data meets specific geofence conditions—either inside or outside a predefined area. For example, you can configure an action to trigger when a device enters or exits a designated zone. See [Action](link-to-action) for details on defining actions.

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

## Setting the Trigger Conditions
(Section heading visible in source — detailed step-by-step content not present in the screenshot.)

## Related references
- See [Editing Geofence](link-to-editing-geofence) for instructions on editing geofence shapes and parameters.
- See [Defining Actions](link-to-defining-actions) or [Actions](link-to-actions) for how to configure the action executed when the geofence condition is met.