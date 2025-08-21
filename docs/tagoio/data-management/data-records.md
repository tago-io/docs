---
title: "Data Records"
description: "This article explains how Data Records are structured in TagoIO, what counts toward a profile's data record limit, and provides a JSON example showing how a single register can include variable fields, location, and metadata."
tags: ["tagoio"]
---

## Overview

A Data Record represents the variables stored and sent by devices. Each register consists of a variable and all metadata associated with it. The profile's data record limit defines the maximum storage capacity for the selected Profile at all times.

Learn more about [Allocating Services to profiles](link-to-allocating-services-to-profiles).

Fields such as [location](link-to-location) that contain latitude/longitude as part of a variable should be considered part of the same register. The same rule applies to metadata fields.

## Key rule

All fields and metadata stored with a given variable are counted together as a single register. For example, all data stored with the variable "temperature" in the example below counts as only one register.

## Example

```json
[
  {
    "variable": "temperature",
    "value": 71,
    "unit": "F",
    "time": "2019-06-30 01:58:11",
    "serie": "1561859891862",
    "location": {
      "lat": 35.770723,
      "lng": -78.677328
    },
    "metadata": {
      "color": "green"
    }
  }
]
```

## Notes

- The "variable" and its associated metadata (for example, [metadata](link-to-metadata)) are counted together as one register regardless of how many fields are present.
- Location stored inside the variable (lat/lng) is considered part of the same register.
- The data record limit is enforced per Profile and defines the maximum number of registers stored for that Profile.

## Related documentation

- See [Allocating Services to profiles](link-to-allocating-services-to-profiles)
- Refer to the Targets documentation or other relevant TagoIO service articles for additional context.