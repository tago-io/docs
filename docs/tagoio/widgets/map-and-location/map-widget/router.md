---
title: "Router"
description: "This article explains the Router option for the Map widget, which enables turn-by-turn routing so users can get directions to device locations displayed on the map."
tags: ["tagoio"]
---
You can enable the Router option to allow users to get directions to a destination on the map. This feature provides turn‑by‑turn routing to guide users to the locations of their devices.

![Map showing route and directions](/docs_imagem/tagoio/router-2.png)

### How to configure the Router

To use the router enter the map widget in edit mode, navigate to 
 you must first define an **origin** point.  
This is done by selecting a device and specifying the variable that holds its coordinates (for example, GPS data from the TagoIO mobile app or any other device that reports latitude/longitude).

![Router example showing origin and destination](
<!-- URL temporarily disabled: https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/9z77pHL2QbGjjb7zC7zTBDddaFsnKAlzDLoOUHrvr88/router_example-5Vo.png -->)

Once the origin is set, you can enable the router option in the map widget settings. The following screenshot shows how to activate it:

![Router option configuration](/docs_imagem/tagoio/router.jpeg)

When users access the map from a mobile device, they will have the option to select one of the following navigation services:

* Google Maps  
* Apple Maps  
* Waze  

![Maps services options](/docs_imagem/tagoio/router_screenshot.png)


:::info

Only Google Maps is available when using a browser from a computer.

:::