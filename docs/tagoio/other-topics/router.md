---
title: "Router"
description: "This article explains the Router option for the Map widget, which enables turn-by-turn routing so users can get directions to device locations displayed on the map."
tags: ["tagoio"]
---
You can enable the Router option to allow users to get directions to a destination on the map. This feature provides turn‑by‑turn routing to guide users to the locations of their devices.

![Map showing route and directions](/docs_imagem/tagoio/router-2.png)

### How to configure the Router

To use the router you must first define an **origin** point.  
This is done by selecting a device and specifying the variable that holds its coordinates (for example, GPS data from the TagoIO mobile app or any other device that reports latitude/longitude).

![Router example showing origin and destination](
<!-- URL temporarily disabled: https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/9z77pHL2QbGjjb7zC7zTBDddaFsnKAlzDLoOUHrvr88/router_example-5Vo.png -->)

Once the origin is set, you can enable the router option in the map widget settings. The following screenshot shows how to activate it:

![Router option configuration](
<!-- URL temporarily disabled: https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/1po3_tsiPad8stRYHbDMsr8vOffCuEeh48UwrhG6BaA/router_option-KkE.png -->)

When users access the map from a mobile device, they will have the option to select one of the following navigation services:

* Google Maps  
* Apple Maps  
* Waze  

![Mobile navigation options](
<!-- URL temporarily disabled: https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/2xG7aEgHH_FpZnpi5WKP1LKQExVZg5e2GYz6uBhNiNU/router_tagoIO-iuo.png -->)

> **Note:** Only Google Maps is available when using a browser from a computer.

## Related documentation
- [Map Widget](/tagoio/widgets/map-widget)
- [Map filters](/tagoio/map-filters)
- [Geofences in map widgets](/tagoio/widgets/geofences-in-map-widgets)
- [Map Layer GIS](/tagoio/map-layer-gis)
- [Images and Links in the map's pins](/tagoio/images-and-links-in-the-maps-pins)
- [Router](#) (this article)
- [Displaying Locations on a Map with TTN LoRaWAN](/tagoio/tutorials/displaying-locations-on-a-map-with-ttn-lorawan)

## Additional related articles
- [Map Widget](/tagoio/widgets/map-widget)
- [Tags System](/tagoio/data-management/tags-system)
- [Compose Widget](/tagoio/widgets/compose-widget)
- [Formula](/tagoio/formula)
- [Image Marker Widget](/tagoio/widgets/image-marker-widget)