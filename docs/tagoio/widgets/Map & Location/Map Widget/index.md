---
title: "Map Widget"
description: "Learn how to use the Map Widget to visualize location variables of your device on a map, customize visualization with icons, pins, images, links, geofences, filters and more."
tags: ["tagoio", "widgets"]
---

# Map Widget

The Map Widget allows you to visualize the location variables of your device on a map, as well as customize the visualization in many ways. By default, the map widget uses OpenStreetMap as provider; however, you can integrate your preferred map provider like Mapbox, Google Maps, or Here to fit your needs.

Additionally, the widget allows you to customize the visualization by adding icons, pins, images, links, geofences, filters, and much more!

<!-- Map widget example image -->

The variable data should look like the following payload. Note that the 'lat' and 'lng' values should be added inside the 'location' field as shown below:

```json
{
  "variable": "location",
  "value": "My Address",
  "location": {
    "lat": 42.2974279,
    "lng": -85.628292
  }
}
```

This widget also accepts features like [metadata](../../../data-management/metadata) and [series](../../../data-management/grouping-variables), that can be set in your variable data.

---

## Creating your own

To add it to your dashboard, choose the Map widget from the list and customize it to your preference. You can edit it by using the options located on the right side of the widget.

<!-- Map widget creation image -->

> This widget works for both dashboards, **Normal** and [**Blueprint**](../../../dashboards/blueprint-dashboard).

---

## 1. 'Data From' Field

This field allows you to set the device and variable that will be used in this widget.

<!-- Data From field image -->

Click on the **cog icon** to edit specific options for this variable, such as: pin icon, formulas, and more. Click on the **close icon** to remove this variable from the widget's data.

> This field is dependent on the **type of dashboard** you are using; the difference is explained below.

### 1.1 'Data From' for Normal Dashboards

From the option 'Data From' on the right menu, select one device from your list of devices and the variable that contains the **location** data.

### 1.2 'Data From' for Blueprint Dashboards

From the option 'Data From' on the right menu, add the [Blueprint device](../../../devices/blueprint-devices-entities) and input the name of the variable that contains the **location** information.

> When using a [Blueprint dashboard](../../../dashboards/blueprint-dashboard), the field **Variable** will not list variables to be picked because it doesn't know the devices linked to your Blueprint Device.

---

## 2. Tile Provider

This option allows you to define which map provider will be used on your widget to display the map. This is great if you need to have customized maps to fit your specific use case. By default, the map tile provider is OpenStreetMap, which is free to use; however, you can go with other providers like [Mapbox](https://www.mapbox.com/), [Here Maps](https://www.here.com/), or [Google Maps](https://developers.google.com/maps).

> **Info:** Each map provider has its own customization options for the tiles and pricing tiers, which often may be free up to a certain amount of tile requests. You should consult the providers to make an informed decision.

### 2.1 How to configure a map title provider on TagoIO

To use one of the alternative map tile providers, you will simply need to have an **API Key** from your provider and a username in some cases. The API key can be found by accessing the console of your map provider. We suggest consulting the documentation of your provider if you have trouble getting the key.

Once the key is at hand, you will have to store the API key value inside a [Secret](../../../secrets) on TagoIO. Go to your Admin, then the [Secrets](https://admin.tago.io/secrets) page, and create a new secret with the name of your map provider. In the **Secret Value**, paste the API Key and save.

<!-- Secrets configuration image -->

Once you have a Secret with your API key created, you can go to your **Map widget**, then the **Title Provider** option, select your map provider, and now in API Key, select the secret where the API key of your map provider is stored. Once you save the widget, the map will start displaying your provider's map and not the default.

<!-- Tile provider configuration image -->

### 2.2 How to configure Google Maps as map provider

For instance, using Google Maps as a provider is quite simple. All you need to do is have a Google account and set up an API Key. Read the full tutorial here: [How to Set Up Google Maps in Your Map Widget](https://help.tago.io/portal/en/community/topic/how-to-set-up-google-maps-in-your-map-widget)

---

## 3. Infobox

Present more information with an infobox that'll automatically be associated with the pins, and customize it with icons, images, external links, street views, formulas, routes by GoogleMaps, and much more.

<!-- Infobox example image -->

In the widget edit screen, you can customize the following options for the variables:

- **Image options**: Choose how the image will appear by selecting by top or side view and the perfect aspect ratio (portrait or landscape).
- **Allow users to get directions:** Create a button with another variable location data, so that once the button is pressed a new route is made by Google Maps and you are redirected to it.

Also, you can customize an image and a link that could be set through the edit screen or by metadata. **In this widget, metadata always has priority over options set by the edit screen.**

In addition, the map widget supports [series](../../../data-management/grouping-variables), so you can group your variables' data in the same infobox.

> If a group of variables has more than one **external link** or **location data**, only one will be considered based on the **Data From field's order**. This does not apply to **images,** as more than one image will produce a slide show inside the infobox.

---

## 4. Filter

The filter makes your data easier to visualize by allowing users to filter for results.

<!-- Filter example image -->

You can filter pins by **device, variable, value,** and **time**. Filters also provide a table to list each pin that's being displayed, and you can click on a row to center it.

Learn more about [Map filters](../../../map-filters).

---

## 5. Geofence

Draw colored geographic boundaries to make it easy to see your devices' trajectory through a zone.

<!-- Geofence example image -->

You can draw polygon or circle figures and associate them with events, and build an [analysis](https://community.tago.io/t/implementing-an-analysis-to-notify-when-a-device-is-inside-of-a-geofence/617) to receive notifications when the device enters or leaves the zone.

<YouTube videoId="EmwtOqq_KLQ" title="Mapping and Geofencing IoT Devices on TagoIO" />

Learn more about [Geofence in map widgets](../../../widgets/geofences-in-map-widgets).

---

## 6. Layer GIS

Customize your Map with GeoJSON or Shapefiles layers. Display boundaries, areas, roads, pipelines, and more. Learn more about [Map Layer GIS](../../../map-layer-gis).

<!-- Layer GIS example image -->