# Defining Permissions

You need to setup **Permissions** in order to define what type of resources your **Targets** will be allowed/denied to access.

The resources available to grant permission will depend on the [**Target**](https://help.tago.io/portal/en/kb/articles/185-defining-targets) you select, and the rules will depend on the resource selected.

![Permission configuration interface](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/TsbLS9vsHjYCkx318l5Pw4qQAj-Jsddvwz75WWMggG8/access_management%20permission-plc.png)

You can add more resources as wished. An operation **OR** is applied. Therefore, as you add more permissions, more resources will be included for verification.

> **Caution**: If you use one permission with Deny, it will override any options using an Allow that contains the same condition.

## Permission Types

### Allow Permissions
Grant access to specific resources or actions:
- **Positive Authorization**: Explicitly grant access to resources
- **Additive Nature**: Multiple allow permissions expand access
- **Default Behavior**: Most permissions are allow-type
- **Scope Control**: Define exactly what is permitted

### Deny Permissions
Explicitly block access to resources or actions:
- **Negative Authorization**: Explicitly block access to resources
- **Override Behavior**: Deny permissions override allow permissions
- **Security Priority**: Used for high-security restrictions
- **Exception Handling**: Block specific cases within broader allow rules

## Resource Types

### Dashboard Permissions

#### Access Levels
- **View**: Read-only access to dashboard content
- **Edit**: Modify dashboard configuration and widgets
- **Share**: Grant access to other users
- **Delete**: Remove dashboards from the system

#### Targeting Options
- **Specific Dashboards**: Grant access to individual dashboards by ID
- **Tagged Dashboards**: Use tags to group and control dashboard access
- **All Dashboards**: Broad access to all dashboards in the account
- **Conditional Access**: Based on user attributes or context

#### Best Practices
- Use tags for efficient dashboard grouping
- Implement role-based dashboard access
- Regularly review dashboard permissions
- Test access controls thoroughly

### Device Permissions

#### Operations
- **Read**: View device information and data
- **Write**: Send commands and update device settings
- **Create**: Add new devices to the system
- **Delete**: Remove devices and their data

#### Data Access
- **Real-time Data**: Access to live device readings
- **Historical Data**: Access to stored device data
- **Device Metadata**: Access to device configuration and properties
- **Device Commands**: Ability to send commands to devices

#### Security Considerations
- Limit device control to authorized users
- Implement time-based access restrictions
- Monitor device access patterns
- Audit device command history

### Data Bucket Permissions

#### Access Types
- **Read**: Retrieve data from buckets
- **Write**: Insert new data into buckets
- **Update**: Modify existing data records
- **Delete**: Remove data from buckets

#### Data Filtering
- **Variable-Based**: Filter by specific variables
- **Time-Based**: Restrict access to specific time periods
- **Tag-Based**: Use data tags for access control
- **Query-Based**: Complex filtering using query parameters

#### Data Privacy
- Implement data classification schemes
- Use encryption for sensitive data
- Audit data access activities
- Comply with privacy regulations

### File Permissions

#### File Operations
- **Download**: Retrieve files from storage
- **Upload**: Add new files to storage
- **Update**: Replace existing files
- **Delete**: Remove files from storage

#### File Types
- **Images**: Photos, logos, icons
- **Documents**: PDFs, spreadsheets, presentations
- **Scripts**: Analysis code and configurations
- **Data Files**: CSV, JSON, XML data exports

#### Storage Management
- Implement file size limits
- Use file type restrictions
- Organize with folder structures
- Monitor storage usage

### Analysis Permissions

#### Execution Rights
- **Run**: Execute analysis scripts
- **Debug**: Access debugging features
- **Schedule**: Set up automated execution
- **Monitor**: View execution logs and status

#### Code Access
- **View Source**: Read analysis code
- **Edit Code**: Modify analysis scripts
- **Deploy**: Publish changes to production
- **Version Control**: Manage code versions

#### Resource Usage
- **Compute Limits**: Restrict processing resources
- **Memory Limits**: Control memory usage
- **Execution Time**: Limit runtime duration
- **API Quotas**: Manage external API calls

## Permission Rules and Conditions

### Tag-Based Rules

#### User Tags
Match permissions based on user attributes:
```javascript
// Example: Grant dashboard access to managers
Target: Run User with tag "role = manager"
Permission: Dashboard with tag "level = executive" - Read access
```

#### Resource Tags
Control access based on resource characteristics:
```javascript
// Example: Allow access to regional data
Target: Run User with tag "region = north"
Permission: Device with tag "location = north" - Read access
```

### Conditional Logic

#### Time-Based Conditions
- **Business Hours**: Restrict access to working hours
- **Date Ranges**: Temporary access for specific periods
- **Timezone Considerations**: Handle global user bases
- **Holiday Schedules**: Account for non-working days

#### Location-Based Conditions
- **Geographic Restrictions**: Limit access by country or region
- **IP Address Filtering**: Control access from specific networks
- **Mobile Device Location**: Use GPS for access control
- **Office vs Remote**: Different rules for different locations

#### Context-Based Conditions
- **Device Type**: Different permissions for mobile vs desktop
- **Connection Security**: Require secure connections for sensitive data
- **Authentication Method**: Higher privileges for MFA users
- **Session Duration**: Escalate privileges for fresh sessions

## Advanced Permission Strategies

### Role-Based Access Control (RBAC)

#### Standard Roles
- **Viewer**: Read-only access to assigned resources
- **Editor**: Modify content within assigned areas
- **Administrator**: Full control over specific domains
- **Super Admin**: Complete system access

#### Custom Roles
- **Department-Specific**: Roles tailored to organizational units
- **Project-Based**: Temporary roles for specific initiatives
- **Skill-Based**: Roles based on technical capabilities
- **Hybrid Roles**: Combinations of standard and custom permissions

### Attribute-Based Access Control (ABAC)

#### User Attributes
- **Department**: Engineering, Sales, Marketing
- **Level**: Junior, Senior, Executive
- **Clearance**: Public, Internal, Confidential
- **Project Assignment**: Active projects and responsibilities

#### Resource Attributes
- **Classification**: Sensitivity level of resources
- **Owner**: Who created or owns the resource
- **Purpose**: Intended use of the resource
- **Lifecycle Stage**: Development, testing, production

#### Environmental Attributes
- **Time of Day**: When access is requested
- **Location**: Where access is requested from
- **Network**: Which network the request originates from
- **Risk Level**: Calculated risk score for the request

### Dynamic Permissions

#### Real-Time Evaluation
- **Just-in-Time Access**: Grant permissions as needed
- **Contextual Decisions**: Consider current conditions
- **Risk-Based**: Adjust permissions based on risk assessment
- **Adaptive**: Learn from user behavior patterns

#### Workflow Integration
- **Approval Processes**: Require approval for sensitive access
- **Temporary Elevation**: Grant elevated access for specific tasks
- **Emergency Access**: Override normal restrictions in emergencies
- **Audit Requirements**: Automatic logging and reporting

## Permission Management Best Practices

### Design Principles

#### Principle of Least Privilege
- Grant minimum necessary access
- Regularly review and reduce permissions
- Use temporary permissions when possible
- Monitor for privilege escalation

#### Separation of Duties
- Divide sensitive operations among multiple users
- Require approval for critical actions
- Implement maker-checker processes
- Prevent conflicts of interest

#### Defense in Depth
- Layer multiple security controls
- Don't rely on single permission checks
- Implement redundant safeguards
- Plan for control failures

### Implementation Guidelines

#### Planning Phase
- **Assess Requirements**: Understand business needs
- **Map Resources**: Identify all protected resources
- **Define Roles**: Create clear role definitions
- **Design Policies**: Plan permission structures

#### Development Phase
- **Start Simple**: Begin with basic permission models
- **Test Thoroughly**: Verify all permission scenarios
- **Document Everything**: Maintain clear documentation
- **Review Regularly**: Establish review cycles

#### Maintenance Phase
- **Monitor Usage**: Track permission effectiveness
- **Update as Needed**: Adapt to changing requirements
- **Audit Compliance**: Regular compliance checks
- **Optimize Performance**: Ensure efficient operation

### Common Pitfalls

#### Over-Permissioning
- **Too Broad**: Granting excessive access
- **Too Persistent**: Not removing unused permissions
- **Too Static**: Not adapting to changing needs
- **Too Complex**: Creating unmaintainable permission structures

#### Under-Permissioning
- **Too Restrictive**: Blocking legitimate access
- **Too Rigid**: Not accommodating business needs
- **Too Slow**: Inefficient permission management
- **Too Fragmented**: Inconsistent permission models

## Troubleshooting Permissions

### Common Issues

#### Access Denied Errors
1. **Check Policy Order**: Permissions are evaluated in sequence
2. **Verify Tag Matching**: Ensure tags match exactly
3. **Review Deny Rules**: Check for overriding deny permissions
4. **Test Incremental**: Start with simple rules and add complexity

#### Unexpected Access
1. **Audit Permission Grants**: Review all applicable permissions
2. **Check Inheritance**: Verify permission inheritance chains
3. **Review Default Policies**: Check for broad default permissions
4. **Monitor Changes**: Track recent permission modifications

#### Performance Problems
1. **Optimize Queries**: Simplify complex permission rules
2. **Cache Results**: Implement permission caching
3. **Reduce Complexity**: Consolidate similar permissions
4. **Monitor Impact**: Track performance metrics

### Debugging Techniques

#### Permission Tracing
- Enable detailed logging for permission decisions
- Trace specific user access patterns
- Monitor permission evaluation performance
- Create test scenarios for validation

#### Access Testing
- Use test users with known permissions
- Simulate various access scenarios
- Validate permission changes before deployment
- Implement automated permission testing

## Integration Considerations

### External Systems

#### Identity Providers
- **SAML**: Enterprise single sign-on integration
- **OAuth/OIDC**: Modern authentication protocols
- **LDAP**: Legacy directory service integration
- **Active Directory**: Microsoft enterprise integration

#### Security Tools
- **SIEM**: Security information and event management
- **IAM**: Identity and access management platforms
- **PAM**: Privileged access management systems
- **Audit Tools**: Compliance and audit platforms

### API Integration

#### Permission APIs
- Query user permissions programmatically
- Validate access before operations
- Implement consistent authorization
- Handle permission changes dynamically

#### Webhook Integration
- Notify external systems of permission changes
- Trigger workflows based on access events
- Synchronize permissions across systems
- Implement real-time security responses

## Compliance and Auditing

### Regulatory Requirements

#### Data Protection
- **GDPR**: European data protection regulation
- **CCPA**: California consumer privacy act
- **HIPAA**: Healthcare data protection
- **SOX**: Financial reporting requirements

#### Industry Standards
- **ISO 27001**: Information security management
- **SOC 2**: Service organization controls
- **PCI DSS**: Payment card industry standards
- **NIST**: National institute of standards guidelines

### Audit Processes

#### Regular Reviews
- **Access Certification**: Periodic permission validation
- **Role Mining**: Discover actual vs intended permissions
- **Segregation Analysis**: Verify separation of duties
- **Compliance Reporting**: Generate regulatory reports

#### Continuous Monitoring
- **Real-Time Alerts**: Immediate notification of issues
- **Trend Analysis**: Identify patterns and anomalies
- **Risk Assessment**: Ongoing security risk evaluation
- **Performance Monitoring**: Track system health

## Next Steps

To implement effective permissions:

1. **Start with Assessment**: Understand your current permission landscape
2. **Design Strategy**: Create a comprehensive permission strategy
3. **Implement Gradually**: Roll out permissions in phases
4. **Monitor Continuously**: Track effectiveness and make adjustments
5. **Review Regularly**: Maintain and optimize over time

For related topics, see:
- [Access Management Overview](./access-management-overview)
- [User Management](./user-management)
- [Security and Protection](./security-protection)
- [Creating a Policy](https://help.tago.io/portal/en/kb/articles/184-creating-a-policy)
