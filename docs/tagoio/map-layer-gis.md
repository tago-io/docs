---
title: "Map Layer GIS"
description: "This article explains how to use the Map widget's GIS layer to display geometries and spatial features from GeoJSON or shapefile data, and lists the supported file types and conversion behavior."
tags: ["tagoio"]
---

## Overview
Display geometries, boundaries, areas, roads, pipelines, and other spatial features using the [Map widget](../widgets/map-widget) GIS layer. Each layer is defined by GeoJSON files (`.geojson`, `.json`, `.zip`), which you can upload and manage either statically or dynamically.

## Supported file types and shapefile conversion
- Accepted GeoJSON formats: `.geojson`, `.json`, and `.zip` (containing GeoJSON).
- Shapefiles are also accepted. To use shapefiles, upload a ZIP that contains the layer files (`.shx`, `.shp`, `.prj`, `.dbf`); the system will convert the uploaded shapefile to GeoJSON.

## Example
![Map example showing points and a map control](/docs_imagem/tagoio/map-layer-gis-2.gif)

## On this page
- 1. Layer Type
- 2. Layer color

## Related documentation
- See [Map widget](../widgets/map-widget) for general map widget setup and configuration.