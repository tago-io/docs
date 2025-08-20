# Data Storage

Understanding TagoIO's data storage options is crucial for optimizing performance, costs, and functionality for your specific use case. TagoIO offers two distinct database types, each optimized for different scenarios and data management needs.

## Storage Architecture Overview

TagoIO's dual-database architecture provides flexibility to choose the optimal storage solution:

```
Device Creation → Storage Type Selection → Database Assignment → Data Optimization
```

The choice between storage types affects:
- **Data capacity**: Maximum number of data points
- **Query performance**: Response times and latency
- **Data mutability**: Ability to edit or delete records
- **Cost optimization**: Analysis execution costs
- **Compliance features**: Data integrity and audit trails

## Storage Type Comparison

| Feature | Device Optimized (Immutable) | Managed Data (Mutable) |
|---------|----------------------------|----------------------|
| **Capacity** | Up to 36 million data points | Up to 50,000 data points |
| **Query Speed** | Optimized for fast responses | Standard query performance |
| **Data Editing** | Read-only after storage | Full edit/delete capabilities |
| **Retention** | Automatic policies available | Manual management only |
| **Analysis Cost** | Reduced execution costs | Standard execution costs |
| **Compliance** | High integrity, audit-friendly | Standard data protection |

## Device Optimized Data (Immutable Database)

### Overview

The immutable database is designed for high-volume, long-term data storage with emphasis on performance and data integrity.

### Key Characteristics

**Massive Scale Storage**:
- Store up to **36 million data points** per device
- Ideal for continuous monitoring applications
- Handles high-frequency sensor data efficiently

**Performance Optimizations**:
- **Faster query responses** with reduced latency
- Optimized indexing for time-series data
- Efficient data compression and storage
- **Lower Analysis execution costs** due to optimized architecture

**Data Integrity**:
- **Immutable records** - data cannot be modified after storage
- Perfect for regulatory compliance and audit requirements
- Maintains complete data lineage and history
- Prevents accidental or malicious data modification

**Automatic Retention Management**:
- Configurable data retention policies
- Automatic cleanup based on age or volume
- Compliance with data protection regulations
- Efficient storage management

### Use Cases

**Industrial IoT Monitoring**:
```javascript
// Example: Factory sensor data
{
  "variable": "machine_temperature",
  "value": 67.3,
  "unit": "°C",
  "time": "2024-01-15T14:30:00Z",
  "location": {
    "lat": 40.7128,
    "lng": -74.0060
  }
}
```

**Environmental Monitoring**:
- Weather stations with continuous data collection
- Air quality sensors in smart cities
- Water quality monitoring systems
- Agricultural sensor networks

**Asset Tracking**:
- GPS tracking for fleet management
- Supply chain monitoring
- Equipment utilization tracking
- Predictive maintenance systems

**Compliance-Critical Applications**:
- Healthcare device monitoring
- Financial transaction logging
- Regulatory reporting systems
- Audit trail maintenance

### Configuration Example

```javascript
// Device configuration for immutable storage
const deviceConfig = {
  name: "Environmental Sensor Array",
  storage_type: "immutable",
  retention_policy: {
    duration: "2_years",
    auto_cleanup: true
  },
  data_optimization: {
    compression: true,
    indexing: "time_series"
  }
};
```

## Managed Data Optimized (Mutable Database)

### Overview

The mutable database provides full data manipulation capabilities, optimized for dynamic content and configuration management.

### Key Characteristics

**Full Data Control**:
- **Complete edit and delete capabilities**
- Modify individual data records as needed
- Update values, metadata, and timestamps
- Remove unwanted or erroneous data

**Flexible Data Management**:
- No automatic retention policies
- Manual data lifecycle management
- User-controlled data persistence
- Suitable for configuration storage

**Capacity Limitations**:
- Maximum **50,000 data registers** per device
- Optimized for smaller, frequently-accessed datasets
- Ideal for configuration and settings data

### Use Cases

**Configuration Management**:
```javascript
// Example: Device settings storage
{
  "variable": "alert_threshold",
  "value": 75,
  "unit": "%",
  "metadata": {
    "editable": true,
    "user_modified": "admin@company.com",
    "last_updated": "2024-01-15T14:30:00Z"
  }
}
```

**Form Data Collection**:
- User surveys and feedback forms
- Customer registration data
- Order and booking information
- Dynamic content management

**Interactive Applications**:
- Real-time dashboards with user inputs
- IoT device configuration interfaces
- Mobile app user preferences
- Web service data storage

**Development and Testing**:
- Prototype data storage
- Testing environment configurations
- Development dataset management
- Temporary data processing

### Configuration Example

```javascript
// Device configuration for mutable storage
const deviceConfig = {
  name: "User Configuration Panel",
  storage_type: "mutable",
  data_management: {
    max_records: 50000,
    backup_enabled: true,
    version_control: false
  }
};
```

## Data Management Operations

### Data Import and Export

**Bulk Data Import**:
```csv
variable,value,unit,location,metadata,time
temperature,23.5,°C,"lat:40.7128,lng:-74.0060","sensor:external",2024-01-15T14:30:00Z
humidity,65.2,%,"lat:40.7128,lng:-74.0060","sensor:external",2024-01-15T14:30:00Z
```

**Import Requirements**:
- CSV format with required headers
- Maximum file size: 200 MB
- Maximum rows: 1 million
- Minimum 10,000 Data Storage registers available
- Variable field is mandatory

**Export Options**:
- CSV format for data analysis
- JSON format for API integration
- Filtered exports based on criteria
- Backup to Files service

### Data Filtering and Querying

**Filter Options**:
- **Time range**: Specific date/time periods
- **Variable name**: Filter by specific variables
- **Value range**: Numerical or text value filters
- **Metadata**: Filter by custom metadata fields

**Query Examples**:
```javascript
// JavaScript API query example
const data = await device.getData({
  variable: 'temperature',
  start_date: '2024-01-01',
  end_date: '2024-01-31',
  qty: 1000
});

// SQL-like filtering (conceptual)
SELECT * FROM device_data 
WHERE variable = 'temperature' 
AND value > 20 
AND time BETWEEN '2024-01-01' AND '2024-01-31'
ORDER BY time DESC;
```

### Data Backup Strategies

**Automated Backups**:
```javascript
// Backup configuration
const backupConfig = {
  frequency: 'daily',
  destination: 'files_service',
  retention: '90_days',
  format: 'csv',
  compression: true,
  file_template: 'backup_$DEVICE$_$DATE$.csv'
};
```

**Manual Backup Process**:
1. Navigate to device Data tab
2. Click "More" → "Backup to Files"
3. Configure file address template
4. Execute backup operation
5. Verify backup in Files service

## Storage Optimization Strategies

### Choosing the Right Storage Type

**Decision Matrix**:

| Requirement | Immutable | Mutable |
|-------------|-----------|---------|
| Long-term retention (>1 year) | ✅ | ❌ |
| High data volume (>50k points) | ✅ | ❌ |
| Data editing required | ❌ | ✅ |
| Compliance requirements | ✅ | ⚠️ |
| Fast query performance | ✅ | ⚠️ |
| Configuration storage | ❌ | ✅ |
| Real-time updates | ✅ | ✅ |

### Data Structure Optimization

**Efficient Data Schema**:
```javascript
// Optimized data structure
const optimizedData = {
  variable: 'sensor_reading',
  value: 23.5,
  unit: '°C',
  group: 'room_sensors',
  location: {
    lat: 40.7128,
    lng: -74.0060
  },
  metadata: {
    sensor_id: 'temp_001',
    calibration_date: '2024-01-01',
    accuracy: '±0.1°C'
  },
  time: '2024-01-15T14:30:00Z'
};
```

**Best Practices**:
- Use consistent variable naming conventions
- Minimize metadata size while maintaining usefulness
- Implement data validation before storage
- Use appropriate data types for values

### Performance Considerations

**Query Optimization**:
- Use time-based queries for better performance
- Limit result sets with appropriate qty parameters
- Implement data pagination for large datasets
- Cache frequently accessed data

**Storage Efficiency**:
- Remove redundant data before storage
- Use data compression when available
- Implement data aggregation for reporting
- Monitor storage usage regularly

## Data Retention and Compliance

### Retention Policies (Immutable Storage)

**Automatic Retention**:
```javascript
const retentionConfig = {
  policy: 'time_based',
  duration: '2_years',
  cleanup_frequency: 'monthly',
  notification: true,
  backup_before_cleanup: true
};
```

**Compliance Features**:
- **GDPR compliance**: Right to be forgotten support
- **SOX compliance**: Immutable audit trails
- **HIPAA compliance**: Healthcare data protection
- **Industry-specific**: Customizable retention periods

### Data Lifecycle Management

**Lifecycle Stages**:
1. **Active Data**: Frequently accessed, optimized storage
2. **Archive Data**: Less frequent access, compressed storage
3. **Compliance Hold**: Legal or regulatory retention
4. **Deletion**: Secure data removal when appropriate

## Migration Between Storage Types

### Planning Migration

**Assessment Checklist**:
- Current data volume and growth projections
- Query performance requirements
- Data editing needs
- Compliance requirements
- Cost considerations

**Migration Strategy**:
1. **Assessment**: Analyze current usage patterns
2. **Planning**: Define migration timeline and approach
3. **Backup**: Create complete data backup
4. **Migration**: Execute storage type change
5. **Validation**: Verify data integrity post-migration
6. **Monitoring**: Track performance improvements

### Migration Limitations

⚠️ **Important Considerations**:
- Storage type cannot be changed after device creation
- Migration requires creating new devices
- Data export/import required for migration
- Potential downtime during migration process

## Troubleshooting Storage Issues

### Common Issues

**Storage Limit Exceeded**:
```javascript
// Error handling for storage limits
try {
  await device.sendData(data);
} catch (error) {
  if (error.code === 'STORAGE_LIMIT_EXCEEDED') {
    console.log('Storage limit reached, consider data cleanup');
    // Implement cleanup or upgrade logic
  }
}
```

**Import Failures**:
- Verify CSV format compliance
- Check data type compatibility
- Ensure sufficient storage allocation
- Validate file size limitations

**Query Performance Issues**:
- Optimize query parameters
- Implement proper indexing strategies
- Use appropriate time ranges
- Consider data aggregation

### Monitoring and Alerts

**Storage Monitoring**:
```javascript
// Monitor storage usage
const usage = await device.getStorageUsage();
if (usage.percentage > 80) {
  // Trigger cleanup or alert
  console.warn('Storage approaching limit:', usage);
}
```

## Best Practices Summary

### Data Architecture
- Choose storage type based on specific requirements
- Plan for data growth and scaling needs
- Implement proper data governance policies
- Design efficient data structures

### Performance
- Optimize query patterns for your storage type
- Implement appropriate caching strategies
- Monitor and tune query performance
- Use data aggregation when beneficial

### Security and Compliance
- Implement proper access controls
- Maintain audit trails where required
- Follow data protection regulations
- Regular security assessments

### Operations
- Monitor storage usage and trends
- Implement automated backup procedures
- Plan for disaster recovery scenarios
- Document data management procedures

## Next Steps

- Learn about [device creation](./device-creation.md) to select appropriate storage
- Implement [live monitoring](./live-inspector.md) to track data flow
- Set up [device tokens](./device-tokens.md) for secure data access
- Explore advanced device management features