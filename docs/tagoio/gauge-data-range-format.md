---
title: "Gauge - Data Range & Format"
description: "This article explains how to configure the Data Range & Format options for the Gauge widget, describing range limit types (Fixed and From Metadata) and how to set a static range."
tags: ["tagoio"]
---
Data Range & Format is where you define the display format and the value range used by the gauge.

## Range Limits

![Gauge example showing min and max values](/docs_imagem/tagoio/gauge-data-range-format-2.png)

In the Range Limits section you set the minimum and maximum values displayed on the gauge. There are two types of range limits:

- Fixed: The minimum and maximum values of the gauge are static and never change.  
- From Metadata: The minimum and maximum values of the gauge can change based on a metadata property in a variable.

## Fixed

If you want to set a static range on your gauge, choose the Fixed type. Simply specify the minimum and maximum values to define the range shown in the widget.

![Gauge example showing static range](/cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/CQ92PZnTkmHs3kr2Mkhkd0VI1qzLAaJu5ufr_FeQFFY/1584998259067-NcM.png)

## From Metadata

If you want to set a dynamic range on your gauge, this is the desired type. This type defines the range based on a metadata property of a variable.

The variable that contains the metadata can be selected in the **Get metadata from** field. The variable that you choose in this field must contain a metadata field with the following schema:

```json
{
  "variable": "range",
  "value": "50",
  "metadata": {
    "limit_inferior": 0,
    "limit_superior": 100
  }
}
```

You can choose one of 3 options in the **Get metadata from** field:

1. **From original variable**: The metadata property will be acquired from the variable that contains the gauge's value.
2. **From variable used in formula**: The metadata property will be acquired from the variable that is being used in the formula. This option will only be enabled if your gauge is using [Formula](/tagoio/formula), and the Formula is being used with a variable.
3. **From another variable**: The metadata will be acquired from a variable of your choice. If you select this option, a variable selector will appear.

![Gauge example showing dynamic range](/cdn.elev.io/file/uploads/yGBQnVkwTkwKzLvCtyE2FWwacoOTiKC1hwphA_gVtqs/JcEqhWiKdOri4fx-LbJq5WSzwHf0sqGYAoLLv6FxMsA/1584998743226-9_Q.png)