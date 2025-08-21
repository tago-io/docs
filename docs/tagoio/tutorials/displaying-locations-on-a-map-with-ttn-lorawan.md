---
title: "Displaying Locations on a Map with TTN LoRaWAN"
description: "This article explains how to send location data from The Things Network (TTN) to TagoIO so that device locations are displayed on a Map widget, including the required JSON payload format and the steps to add the 'location' variable to a dashboard map."
tags: ["tagoio"]
---

If you have a custom payload format decoder at TTN (The Things Network), you can send your payload variables directly to TagoIO.

To display locations on a Map, your data needs to be sent inside a "location" field with the format shown below:

```json
{
  "variable": "speed",
  "value": 10,
  "location": {
    "lat": 42.2974279,
    "lng": -85.628292
  }
}
```

TagoIO converts latitude and longitude fields to the specific format required, so you don't need to perform any conversions. To accomplish this, you only need to have the variables named `latitude` and `longitude` or `lat` and `lng`. TagoIO will automatically read these variables and create a new variable called `location`.

After your device is sending latitude and longitude information to TagoIO:

- Create a dashboard (see [create a dashboard](link-to-create-dashboard)).
- Add a Map widget (see [Map widget](link-to-map-widget)).
- Look for the device (see [device](link-to-device)) and add the variable `location` inside the Map widget.

References and related documentation:

- Breadcrumb context: Knowledge Base / TagoIO / Widgets / Map Widget

Map Widget section (internal links):
- [Map Widget](link-to-map-widget)
- [Map filters](link-to-map-filters)
- [Geofences in map widgets](link-to-geofences-in-map-widgets)
- [Map Layer GIS](link-to-map-layer-gis)
- [Images and Links in the map's pins](link-to-images-and-links-in-map-pins)
- [Router](link-to-router)
- [Displaying Locations on a Map with TTN LoR...](link-to-displaying-locations-ttn)

Related Articles (internal links):
- [LoRaWAN Publication of Environmental Mea...](link-to-lorawan-publication)
- [Map Widget](link-to-map-widget)
- [The Things Network LoRaWAN™](link-to-the-things-network-lorawan)
- [Network Integration](link-to-network-integration)
- [Adeunis with LoRaWAN™](link-to-adeunis-with-lorawan)