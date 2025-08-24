---
sidebar_position: 5
title: Core
slug: /tagocore/plugins/create/core
---

# Core

The `core` object from the Plugin SDK allows your plugin to interact with TagoCore data.


## Device functions

All functions in this category need the `device` Permission in your manifest.
You cannot use any of these functions without the appropriate permissions.

### Get all devices

To retrieve the list of devices in TagoCore, use the `getDeviceList` function. You may pass additional parameters in the
function to filter the results of the list.

```js
const { core } = require("@tago-io/tcore-sdk");

async function getDeviceList() {
  const list = await core.getDeviceList();
  console.log("Retrieved", list.length, "devices"); // outputs 12 in my case
}

getDeviceList();
```

### getDeviceInfo
Retrieves all the information of a single device.
- Parameter: ID of the device;

### getDeviceByToken
Retrieves all the information of a single device via its token.
- Parameter: Token of the device;

### editDevice
Edits the information of a single device.
- Parameter: ID of the device;
- Parameter: Data to edit the device;

### deleteDevice
Deletes a device.
- Parameter: ID of the device;

### createDevice
Creates a new device.
- Parameter: Data to create the device;

### createDeviceToken
Creates a new device token.
- Parameter: ID of the device;
- Parameter: Data to create the token;

### getDeviceTokenList
Retrieves a list of device tokens.
- Parameter: ID of the device;
- Parameter: Query to filter and organize the list;

### deleteDeviceToken
Deletes a device's token.
- Parameter: Token of the device;

### getDeviceParamList
Gets all the parameters of a device.
- Parameter: ID of the device;
- Parameter: Sent status to filter the list;

### deleteDeviceParam
Deletes a device's param.
- Parameter: ID of the param;

### setDeviceParams
Overrides or edits device parameters.
- Parameter: ID of the device;
- Parameter: Data to override or edit the params;

## Action functions

All functions in this category need the `action` Permission in your manifest.
You cannot use any of these functions without the appropriate permissions.

### getActionTypes
Retrieves a list of all action types.

### getActionList
Retrieves a list of actions.
- Parameter: Query to filter and organize the list;

### getActionInfo
Retrieves all the information of a single action.
- Parameter: ID of the action;

### editAction
Edits the information of a single action.
- Parameter: ID of the action;
- Parameter: Data to edit the action;

### deleteAction
Deletes an action.
- Parameter: ID of the action;

### createAction
Creates a new action.
- Parameter: Data to create the action;

### triggerAction
Triggers an action.
- Parameter: ID of the action;
- Parameter: Data to pass to the action;

## Analysis functions

All functions in this category need the `analysis` Permission in your manifest. You cannot use any of these functions without the appropriate permissions.

### getAnalysisList
Retrieves a list of analyses.
- Parameter: Query to filter and organize the list;

### getAnalysisInfo
Retrieves all the information of a single analysis.
- Parameter: ID of the analysis;

### editAnalysis
Edits the information of a single analysis.
- Parameter: ID of the analysis;
- Parameter: Data to edit the analysis;

### deleteAnalysis
Deletes an analysis.
- Parameter: ID of the analysis;

### createAnalysis
Creates a new analysis.
- Parameter: Data to create the analysis;

## Device Data functions

All functions in this category need the `device-data` Permission in your manifest. You cannot use any of these functions without the appropriate permissions.

### getDeviceDataAmount
Retrieves the amount of data in a device.
- Parameter: ID of the device;

### addDeviceData
Adds a data item into a device.
- Parameter: ID of the device;
- Parameter: Data to be added;

### getDeviceData
Retrieves data from a device.
- Parameter: ID of the device;
- Parameter: Query to filter and organize the list;


## Other functions

These functions do not require any permissions.

### getSummary
Retrieves the summary information of TagoCore.

### getTagKeys
Retrieves the list of tags from a resource type.

