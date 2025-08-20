# Getting Data

> **Note:** When making a request to the TagoIO API, you must also specify the appropriate regional endpoint. Check out the available regions here: [API documentation](https://api.docs.tago.io/)

## Endpoint

```
GET https://api.<region>.tago.io/data
```

## Authentication

**HEADERS:**
```
Authorization: Your-Device-Token
```

## Query Parameters

| KEY | TYPE | DESCRIPTION |
|-----|------|-------------|
| variable | string \|\| array | Get specific variables |
| query | string | Pre-defined query functions |
| qty | string | Maximum number of data to be returned |
| start_date | string | Start date (e.g., "1 day" or ISO String) |
| end_date | string | End date (e.g., "1 day" or ISO String) |
| detail | bool | Add more JSON fields on result |

## Basic Response

Below is the data returned without any parameters:
`https://api.<region>.tago.io/data`

```json
{
    "status": true,
    "result": [
        {
            "id": "547e42847dbf3af122c02582",
            "location": {
                "coordinates": [
                    41.878876,
                    -87.635915
                ],
                "type": "Point"
            },
            "time": "2014-12-02T22:51:48.005Z",
            "variable": "location"
        }, 
        {
            "id": "547e353d7dbf3af122c0257d",
            "time": "2014-12-02T21:55:09.301Z",
            "unit": "%",
            "value": 32,
            "variable": "fuel_level"
        },  
        {
            "id": "547e41f97dbf3af122c02580",
            "time": "2014-12-02T22:49:29.777Z",
            "unit": "psi",
            "value": 25,
            "variable": "oil_pressure"
        }
    ]
}
```

## Variables Parameter

The `variable` parameter defines which variable(s) should be returned with the GET method.

### Single Variable
```
https://api.<region>.tago.io/data?variable=temperature
```

### Multiple Variables
Use an array to get multiple variables:
```
https://api.<region>.tago.io/data?variable[]=temperature&variable[]=pressure
```

## Query Parameter

The `query` parameter returns predefined functions to help you obtain certain processed data. 

> **Note:** You cannot use two queries concurrently.

### Available Query Functions

#### `last_item`
Returns the last information from the data based on the 'time'.
```
https://api.<region>.tago.io/data?variable=temperature&query=last_item
```

#### `last_value`
Returns the last information from the data based on the 'time'. Only data containing 'value' information will be returned.
```
https://api.<region>.tago.io/data?variable=temperature&query=last_value
```

#### `last_location`
Returns the last information from the data based on the 'time'. Only data containing 'location' information will be returned.
```
https://api.<region>.tago.io/data?variable=temperature&query=last_location
```

## Quantity Parameter

The `qty` parameter limits the number of results returned from a query. The default value is **15**.

### Example
```
https://api.<region>.tago.io/data?variable=temperature&qty=99
```
This will return the last 99 registers from temperature.

## Date Range Parameters

### Start Date and End Date

- `start_date`: Define the start time for the data search. Only data with 'time' information newer than start_date will be returned.
- `end_date`: Define the end time for the data search. Only data with 'time' information older than end_date will be returned.

### Basic Date Range Example
```
https://api.<region>.tago.io/data?variable=temperature&start_date=2014-12-25&end_date=2014-12-26
```

This returns data from the variable temperature between the start_date & end_date. By default, it will return the last **15 items** from the variable.

### Large Date Ranges
If your interval has more than 15 items, you need to add the `qty` attribute:
```
https://api.<region>.tago.io/data?variable=temperature&start_date=2014-12-25&end_date=2014-12-26&qty=999
```

## Date Formats

Start/End date parameters accept different formats, including selection based on relative time (e.g., to get data from the last 1 hour).

### Supported Date Formats

**Absolute Dates:**
- `"2014-12-25"`
- `"2014-12-25 23:33:22"`
- `"Thu Dec 25 2014 23:33:22 GMT+1300 (NZDT)"`
- `"2014-12-25T23:33:22.000Z"`

**Relative Dates:**
- `"1 day"`
- `"1 month"`
- `"1 year"`
- `"1 hour"`
- `"30 minutes"`

> **Note:** Relative dates will be subtracted or added to the current time.

## Practical Examples

### Get Latest Temperature Reading
```
GET https://api.<region>.tago.io/data?variable=temperature&query=last_value
```

### Get Last 50 Pressure Readings
```
GET https://api.<region>.tago.io/data?variable=pressure&qty=50
```

### Get Data from Last 24 Hours
```
GET https://api.<region>.tago.io/data?variable=temperature&start_date=1 day&qty=1000
```

### Get Multiple Variables for Specific Date Range
```
GET https://api.<region>.tago.io/data?variable[]=temperature&variable[]=humidity&start_date=2023-01-01&end_date=2023-01-02&qty=500
```

### Get Location Data Only
```
GET https://api.<region>.tago.io/data?variable=gps&query=last_location
```

## Response Data Structure

### Standard Fields
- `id`: Unique identifier for the data point
- `time`: Timestamp in ISO format
- `variable`: Variable name
- `value`: Data value (when present)
- `unit`: Measurement unit (when present)
- `location`: Geographic coordinates (when present)
- `metadata`: Additional data properties (when present)

### Location Format
```json
{
    "location": {
        "coordinates": [longitude, latitude],
        "type": "Point"
    }
}
```

## Error Handling

### Successful Response
```json
{
    "status": true,
    "result": [...]
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

> **Info:** When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](https://help.tago.io/portal/en/kb/articles/rate-limits).

## Best Practices

### Query Optimization
- Use specific variable names instead of retrieving all data
- Limit results with `qty` parameter to avoid large responses
- Use appropriate date ranges to minimize data transfer
- Leverage query functions (`last_value`, `last_item`, etc.) for common use cases

### Performance Considerations
- Cache frequently accessed data
- Use regional endpoints closest to your application
- Implement pagination for large datasets
- Monitor rate limits and implement backoff strategies

### Data Processing
- Parse timestamps according to your timezone requirements
- Handle missing values gracefully
- Validate data types before processing
- Implement proper error handling

## Related Documentation

- [Sending Data](./sending-data.md) - How to send data to TagoIO
- [Device Tokens](../devices/device-tokens.md) - Authentication setup
- [Rate Limits](./rate-limits.md) - API usage limitations
- [Regional Endpoints](./api-overview.md#regional-endpoints) - Server locations
- [Data Visualization](../dashboards/overview.md) - Using data in dashboards

---

*Source URL: https://help.tago.io/portal/en/kb/articles/36-getting-data*