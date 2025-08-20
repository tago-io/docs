# Sending Data

> **Note:** When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://api.docs.tago.io/)

A device can send data to TagoIO by using the POST method.

## Endpoint

```
POST https://api.<region>.tago.io/data
```

## Authentication

You will need to include a **Device-Token** in the request header to authorize the operation.

```
Headers:
Device-Token: Your-Device-Token
```

## Data Format

### Required and Optional Fields

| KEY | TYPE | REQUIRED | DESCRIPTION |
|-----|------|----------|-------------|
| variable | string [max 100 characters] | yes | Variable name (converted to lowercase) |
| unit | string [max 25 characters] | no | Measurement unit |
| value | string/number/boolean [max 6kB] | no | Data value |
| time | string | no | Timestamp (ISO format or relative) |
| group | string [max 100 characters] | no/auto | Data grouping identifier |
| location | object \|\| geoJSON | no | Geographic coordinates |
| metadata | object [max 10kB] | no | Additional data properties |

### Important Notes

> **Variable Naming**: Variable should **NOT** contain special characters such as `*?!<>.-=$` or space.

> **Case Conversion**: Variables will always be converted to **lowercase**.

## Example Requests

### Single Data Point

```json
{
    "variable": "temperature",
    "unit": "F",
    "value": 55,
    "time": "2015-11-03 13:44:33",
    "location": {"lat": 42.2974279, "lng": -85.628292}
}
```

### Multiple Data Points

It's possible to send more than one register at the same time, using an array:

```json
[{
    "variable": "temperature",
    "unit": "F",
    "value": 55
}, {
    "variable": "temperature_celsius",
    "unit": "C",
    "value": 12
}]
```

> **Limit**: The **limit** of each individual POST is **200 kB** (that is about 8,000 registers).

## Metadata

TagoIO uses metadata on variables to change some properties in widgets, but you can also use it to store more information on your variables.

### Basic Metadata Example

```json
{
  "variable": "temperature",
  "unit": "F",
  "value": 55,
  "metadata": { "color": "red" }
}
```

If you send this example and display it in a table, the row containing that value will be red.

### Location with Metadata Example

```json
{
  "variable": "temperature",
  "unit": "F",
  "value": 55,
  "metadata": { "color": "red", "icon": "car" },
  "location": {"lat": 42.2974279, "lng": -85.628292}
}
```

**Widget-Specific Behavior:**
- **Table Widget**: The row will be red, but the icon will be ignored
- **Map Widget**: The pin will be red, and its icon will be a car

Learn more about [Infobox on Map Widget](https://help.tago.io/portal/en/kb/articles/483-map-widget).

## Time Format Options

The time field accepts various formats:

### Standard Formats
- `"2015-11-03 13:44:33"` - Simple datetime
- `"2015-11-03T13:44:33.000Z"` - ISO 8601 format
- `"Thu Dec 25 2014 23:33:22 GMT+1300 (NZDT)"` - Full datetime with timezone

### Relative Time
- `"1 hour"` - One hour ago
- `"1 day"` - One day ago
- `"1 month"` - One month ago

## Location Data

### Coordinate Format
```json
{
  "location": {"lat": 42.2974279, "lng": -85.628292}
}
```

### GeoJSON Format
```json
{
  "location": {
    "type": "Point",
    "coordinates": [-85.628292, 42.2974279]
  }
}
```

## Error Handling

### Common Response Format
```json
{
    "status": true,
    "result": "Data inserted successfully"
}
```

### Error Response
```json
{
    "status": false,
    "message": "Error description"
}
```

## Rate Limits

> **Info**: When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](https://help.tago.io/portal/en/kb/articles/rate-limits).

## Best Practices

### Data Organization
- Use consistent variable naming conventions
- Group related data with appropriate metadata
- Include units for numerical values
- Add timestamps for time-series data

### Performance Optimization
- Batch multiple data points when possible
- Use appropriate data types for values
- Minimize metadata size
- Consider regional endpoints for better latency

### Security Considerations
- Rotate device tokens regularly
- Use HTTPS endpoints
- Validate data before sending
- Monitor for unauthorized usage

## Testing and Development

> **Tip**: Try our [Device Emulator](https://help.tago.io/portal/en/kb/articles/95-device-emulator) to post data and learn the JSON structure.

The Device Emulator allows you to:
- Test data formats before implementation
- Understand JSON structure requirements
- Validate API responses
- Debug data sending issues

## Related Documentation

- [Getting Data](./getting-data.md) - How to retrieve data from TagoIO
- [Device Tokens](../devices/device-tokens.md) - Authentication setup
- [Device Emulator](../devices/device-emulator.md) - Testing tool
- [Rate Limits](./rate-limits.md) - API usage limitations
- [Regional Endpoints](./api-overview.md#regional-endpoints) - Server locations

---

*Source URL: https://help.tago.io/portal/en/kb/articles/34-sending-data*