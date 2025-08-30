---
title: "Map Layer GIS"
description: "This article explains how to use the Map widget's GIS layer to display geometries and spatial features from GeoJSON or shapefile data, and lists the supported file types and conversion behavior."
tags: ["tagoio"]
---
## Overview
Display geometries, boundaries, areas, roads, pipelines, and other spatial features using the [Map widget](/docs/tagoio/widgets/map-and-location/map-widget/) GIS layer. Each layer is defined by GeoJSON files (`.geojson`, `.json`, `.zip`), which you can upload and manage either statically or dynamically.

## Supported file types and shapefile conversion
- Accepted GeoJSON formats: `.geojson`, `.json`, and `.zip` (containing GeoJSON).
- Shapefiles are also accepted. To use shapefiles, upload a ZIP that contains the layer files (`.shx`, `.shp`, `.prj`, `.dbf`); the system will convert the uploaded shapefile to GeoJSON.

## Example
![Map example showing points and a map control](/docs_imagem/tagoio/map-layer-gis-2.gif)

## Layer Type

### 1. Static layer
In the static layer, you can use the widget configuration to input and choose a file. The file can come from our [files module](/docs/tagoio/files) or an external URL. In addition, the label input defines how the layer will be listed in the map.

### 2. Dynamic layer
In the dynamic layer, the files are saved in a variable so developers can manage them easily and display the layers dynamically. This is similar to the **Data From** field of the Map widget.

Each variable value will display a GIS layer; you can control that using the [Dynamic Table widget](/docs/tagoio/widgets/tables/dynamic-table-widget) or the [Input Form widget](/docs/tagoio/widgets/input-widgets/input-form/).  
A variable should have a payload like this so that the Map widget can successfully display a layer:

```json
{
  "variable": "layer_variable",
  "value": "file name",
  "metadata": {
    "url" : "uploaded file URL",
    "label": "layer label"
  }
}
```

The **Metadata** field is used to indicate the file’s URL or the label that defines how the layer will be listed.

## Layer color
You can use colors from your GeoJSON file by indicating which property represents this color. You can also override the file color with a fixed color or set up color conditions. Color conditions help indicate the layer status based on variable data; the variable used for color conditions is defined in the Layer color configuration of the Map widget.