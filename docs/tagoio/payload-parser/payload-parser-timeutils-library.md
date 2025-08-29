---
title: "Payload Parser timeUtils Library"
description: "A brief guide to the timeUtils library available in the Payload Parser, describing its purpose and showing the available functions for comparing and converting timezones with examples."
tags: ["tagoio"]
---
The timeUtils library is available as a global variable in the Payload Parser and is designed to simplify timezone conversion and manipulation. It provides functions to convert, format, and manage time information easily. For more on timezone handling, see [timezone conversion and manipulation](../payload-parser/-timeutils-library).

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

### formatInTimezone(dateInput, timezone, format)
Formats a date in a specific timezone according to the specified format string. The formatting options are based on the chrono `strftime` specification. You can find all available format specifiers in the [chrono documentation](https://docs.rs/chrono/latest/chrono/format/strftime/.html).

Example:
```javascript
const formattedTime = timeUtils.formatInTimezone(new Date().toISOString(), 'Europe/Paris', '%Y-%m-%d %H:%M:%S %z');
```

### getTimezoneAbbreviation(dateInput, timezone)
Returns the timezone abbreviation for a given date and timezone (e.g., `EST`, `PST`).

Example:
```javascript
const abbreviation = timeUtils.getTimezoneAbbreviation(new Date().toISOString(), "America/New_York"); // e.g., EST or EDT
```

### getTimezoneInfo(timezone)
Retrieves detailed information about a specific timezone.

Example:
```javascript
const tzInfo = timeUtils.getTimezoneInfo("America/New_York");
```

### getTimezoneOffset(dateInput, timezone)
Calculates the offset in minutes from UTC for a given date and timezone.

Example:
```javascript
const offset = timeUtils.getTimezoneOffset(new Date().toISOString(), 'America/Sao_Paulo');
```

### isValidTimezone(timezone)
Checks if a given timezone string is valid.

Example:
```javascript
const isValid = timeUtils.isValidTimezone("America/Los_Angeles"); // true
const isInvalid = timeUtils.isValidTimezone("Invalid/Timezone"); // false
```

### listTimezones()
Returns an array of all supported timezone names.

Example:
```javascript
const timezones = timeUtils.listTimezones();
```

### nowInTimezone(timezone)
Returns the current time in the specified timezone as an ISO string.

Example:
```javascript
const nowInTokyo = timeUtils.nowInTimezone('Asia/Tokyo');
```
