---
title: "Payload Parser timeUtils Library"
description: "A brief guide to the timeUtils library available in the Payload Parser, describing its purpose and showing the available functions for comparing and converting timezones with examples."
tags: ["tagoio"]
---

The timeUtils library is available as a global variable in the Payload Parser and is designed to simplify timezone conversion and manipulation. It provides functions to convert, format, and manage time information easily. For more on timezone handling, see [timezone conversion and manipulation](link-to-timezone-conversion-and-manipulation).

## Available Functions

### compareTimezones(dateInputA, timezoneA, dateInputB, timezoneB)
Compares two dates in their respective timezones and returns:
- `1` if the first date is greater,
- `-1` if the second date is greater,
- `0` if they are equal.

Example:
```javascript
const dateA = "2023-01-01T12:00:00.000Z";
const dateB = "2023-01-01T10:00:00.000-03:00";
const result = timeUtils.compareTimezones(dateA, "UTC", dateB, "America/Sao_Paulo"); // result will be -1
```

### convertTimezone(dateInput, fromTimezone, toTimezone)
Converts a date (string or Date object) from one timezone to another and returns the result as an ISO string.

Example:
```javascript
const convertedTime = timeUtils.convertTimezone(
  "2023-01-01T12:00:00.000Z",
  "UTC",
  "America/New_York"
);
```