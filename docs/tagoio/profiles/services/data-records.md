---
title: "Data Records Service"
description: "This article explains how Data Records are structured in TagoIO, what counts toward a profile's data record limit, and provides a JSON example showing how a single register can include variable fields, location, and metadata."
tags: ["tagoio"]
---

A Data Record represents the variables stored and sent by devices. Each register consists of a variable and all metadata associated with it. The profile's data record limit defines the maximum storage capacity for the selected Profile at all times.

Fields such as [location](/docs/tagoio/devices/sending-data.md) that contain latitude/longitude as part of a variable should be considered part of the same register. The same rule applies to metadata fields.

## Metadata

All fields and [metadata](/docs/tagoio/devices/payload-parser/metadata.md) stored with a given variable are counted together as a single register. For example, all data stored with the variable "temperature" in the example below counts as only one register.


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

Another simple example: Your device sends speed, temperature, and humidity with location every hour. As a result, 3 new registers will be added every hour.

## Notes

- The "variable" and its associated metadata (for example, [metadata](/docs/tagoio/devices/payload-parser/metadata.md)) are counted together as one register regardless of how many fields are present.
- Location stored inside the variable (lat/lng) is considered part of the same register.
- The data record limit is enforced per Profile and defines the maximum number of registers stored for that Profile.

## Additional considerations

- If the Data Record limit is exceeded, no data will be saved until the limit is increased or the number of registers is reduced. The API response will indicate that the limit was exceeded for that Profile.
- Location stored inside the variable (lat/lng) is considered part of the same register.
- When you reduce the number of registers, the Usage Statistics in your [Admin](https://admin.tago.io/) page may take some minutes to update to the new amount of data records.
- TagoIO will send warning Emails to you each time the storage exceeds 80%, 90%, and 100% of the limit.
