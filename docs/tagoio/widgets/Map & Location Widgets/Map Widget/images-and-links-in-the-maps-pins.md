---
title: "Images and Links in the map's pins"
description: "This article explains how developers can add an image and a URL to each map pin in the Map widget and where to find the widget settings to configure them."
tags: ["tagoio"]
---
Developers can add an image and a URL link to each pin on the map.

![Map showing a pin popup with an image and a URL](/docs_imagem/tagoio/images-and-links-in-the-maps-pins-2.png)

To add images and a URL to your pins, open the Map widget options menu, go to Advanced Options, and then choose the Edit option.

![Map widget Edit/Advanced Options screenshot](/docs_imagem/tagoio/images-and-links-in-the-maps-pins-2.png)

### Setting images and Links using devices

Another way to insert an image and url link to a pin is to use the metadata parameter of the data the device sent. The widget will first look at these elements and, if not found, it will use the default settings of the widget.

```json
[
   {
     "variable":"location",
     "value":"My Address",
     "location": {
       "lat": 42.2974279,
       "lng": -85.628292
     },
     "metadata":{
       "color":"green",
       "icon":"car",
       "url_pin": {
         "url":"https://admin.tago.io/dashboards/info/5b16b4c86ba351000105badc",
         "alias":"More Details"
       },
       "img_pin":"https://pbs.twimg.com/profile_images/882008081667772417/3_2eeoPj_400x400.jpg"
     }
   }
]
```

Click here to test the code using our [Device emulator!](https://admin.tago.io/devices/emulator)

The parameters that define the configuration through the metadata are `img_pin`, `url` and `alias`. They work exactly the same as setting the configuration through the widget and will have the same result.