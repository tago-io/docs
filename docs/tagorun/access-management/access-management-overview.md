# Access Management

[Access Management](https://admin.tago.io/am) (AM) is a module that helps you securely grant access to certain resources in your account. You create Targets (users or things) and determine which type of Permissions for the resources they will have.

![Access Management interface](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/WzyF4ubkPZ2UBKcZ1GMUBeJSWZRdSml9_Uhn6Hm6VWY/access_management-Bf4.png)

## Overview

Access Management provides a comprehensive security framework for controlling who can access what resources in your TagoRUN application. It operates on a policy-based system where you define rules that govern access to dashboards, devices, data, and other system resources.

## Key Components

### Targets
Targets represent who or what is requesting access to resources. They can be:
- **Run Users**: End-users of your TagoRUN application
- **Analysis Scripts**: Automated processes that need resource access
- **API Consumers**: External systems accessing your data
- **Service Accounts**: System-level accounts for automated operations

### Permissions
Permissions define what actions can be performed on specific resources:
- **Read**: View or retrieve data
- **Write**: Modify or update existing data
- **Create**: Add new resources or data
- **Delete**: Remove resources or data
- **Execute**: Run scripts or trigger actions

### Resources
Resources are the assets being protected:
- **Dashboards**: Visual displays and interfaces
- **Devices**: IoT devices and their data
- **Data Buckets**: Data storage containers
- **Files**: Uploaded documents and media
- **Analysis**: Scripts and automation

## Common Use Cases

### 1. Role-Based Dashboard Access
Share one specific dashboard only with the users that contain certain tags.

**Example**: Share dashboard 'Regional Sales View' with users containing the tag 'level = **supervisor**'.

```javascript
Target: Run User with tag "level = supervisor"
Permission: Dashboard "Regional Sales View" - Read access
```

### 2. Geographic Data Segmentation
Share all dashboards with certain tags only with the users that contain certain tags.

**Example**: Share dashboards containing tag 'state = **NY**' or 'state = **MA**' with users with tag 'region = **northeast**'.

```javascript
Target: Run User with tag "region = northeast"
Permission: Dashboard with tags "state = NY" OR "state = MA" - Read access
```

### 3. Open Access Configuration
Share all my dashboards with all users.

For this, you just need to set the field in Targets like 'Run User = **Any**', and the 'Permissions = **Any**' to share everything with anyone.

```javascript
Target: Run User = Any
Permission: Dashboard = Any - Read access
```

### 4. Automated System Access
Allow an Analysis to do a bulk device upload.

**Example**: Analysis with the tag 'script = **device_upload**', and the 'Permission = **device**' with rules '**Create**' and with field '**Any**'.

```javascript
Target: Analysis with tag "script = device_upload"
Permission: Device = Any - Create access
```

> **Warning**: By using the option **Any** in the matching field will expose all that resources without restrictions.

## Access Management Workflow

### 1. Planning Phase
- **Identify Resources**: List all resources that need protection
- **Define User Roles**: Categorize users based on their responsibilities
- **Map Requirements**: Determine who needs access to what
- **Security Assessment**: Evaluate security requirements and compliance needs

### 2. Implementation Phase
- **Create Policies**: Define access control policies
- **Set Up Targets**: Configure user groups and system accounts
- **Define Permissions**: Specify what actions each target can perform
- **Test Access**: Verify that policies work as intended

### 3. Maintenance Phase
- **Monitor Access**: Track resource usage and access patterns
- **Update Policies**: Modify rules as requirements change
- **Audit Compliance**: Regular reviews of access permissions
- **Optimize Performance**: Ensure access controls don't impact system performance

## Policy Types

### Restrictive Policies
- **Principle of Least Privilege**: Grant minimum necessary access
- **Explicit Permissions**: Specifically define what is allowed
- **Regular Review**: Periodically audit and update permissions
- **Role-Based Access**: Group permissions by job function

### Permissive Policies
- **Open by Default**: Allow access unless explicitly restricted
- **Exception-Based**: Define what is not allowed rather than what is allowed
- **Trust-Based**: Rely on user responsibility and monitoring
- **Simplified Management**: Easier to implement but less secure

## Advanced Features

### Tag-Based Access Control
Use tags to create flexible, dynamic access rules:

#### User Tags
- **Department**: engineering, sales, marketing
- **Level**: admin, manager, user
- **Region**: north, south, east, west
- **Project**: project-a, project-b, project-c

#### Resource Tags
- **Environment**: production, staging, development
- **Sensitivity**: public, internal, confidential
- **Category**: dashboard, device, data, report
- **Owner**: team-name, department, individual

### Conditional Access
Implement rules based on conditions:
- **Time-Based**: Access only during business hours
- **Location-Based**: Restrict access by geographic location
- **Device-Based**: Allow access only from approved devices
- **Context-Based**: Consider multiple factors for access decisions

### Inheritance and Hierarchies
Create efficient access structures:
- **Parent-Child Relationships**: Inherit permissions from parent resources
- **Group Memberships**: Users inherit permissions from groups
- **Role Hierarchies**: Senior roles include junior role permissions
- **Organizational Structure**: Mirror company hierarchy in access rules

## Security Best Practices

### Access Design Principles
- **Least Privilege**: Give users minimum necessary access
- **Separation of Duties**: Divide critical functions among multiple users
- **Defense in Depth**: Layer multiple security controls
- **Regular Audits**: Periodically review and validate access rights

### Implementation Guidelines
- **Clear Naming**: Use descriptive names for policies and rules
- **Documentation**: Document all access policies and their purpose
- **Testing**: Thoroughly test all access configurations
- **Monitoring**: Continuously monitor access patterns and violations

### Compliance Considerations
- **Data Privacy**: Ensure compliance with GDPR, CCPA, and other regulations
- **Industry Standards**: Follow sector-specific security requirements
- **Audit Trails**: Maintain detailed logs of access and changes
- **Regular Reviews**: Conduct periodic access reviews and certifications

## Troubleshooting Common Issues

### Access Denied Problems
1. **Check Policy Order**: Policies are evaluated in order of creation
2. **Verify Tag Matching**: Ensure tags are spelled correctly and match exactly
3. **Review Inheritance**: Check if permissions are being inherited properly
4. **Test Incrementally**: Start with simple rules and add complexity gradually

### Performance Issues
1. **Optimize Tag Queries**: Use efficient tag structures
2. **Cache Permissions**: Implement permission caching where appropriate
3. **Minimize Policy Complexity**: Keep rules simple and focused
4. **Monitor Resource Usage**: Track system performance impact

### Maintenance Challenges
1. **Policy Sprawl**: Regularly consolidate and clean up policies
2. **Orphaned Rules**: Remove policies for deleted resources or users
3. **Documentation Drift**: Keep documentation updated with changes
4. **Change Management**: Implement proper change control processes

## Integration with Other Systems

### Single Sign-On (SSO)
- **SAML Integration**: Connect with enterprise identity providers
- **OAuth/OIDC**: Modern authentication and authorization protocols
- **LDAP/Active Directory**: Traditional enterprise directory services
- **Multi-Factor Authentication**: Add additional security layers

### External Authorization Systems
- **Policy Engines**: Integrate with external policy management systems
- **Risk Assessment**: Connect with security risk evaluation tools
- **Compliance Systems**: Link with governance and compliance platforms
- **Monitoring Tools**: Integrate with security information and event management (SIEM)

## Monitoring and Reporting

### Access Analytics
- **Usage Patterns**: Track how resources are being accessed
- **User Behavior**: Monitor for unusual access patterns
- **Permission Effectiveness**: Evaluate whether policies are working as intended
- **Performance Impact**: Measure the effect of access controls on system performance

### Compliance Reporting
- **Access Reviews**: Generate reports for periodic access reviews
- **Audit Trails**: Detailed logs of all access decisions and changes
- **Violation Reports**: Track and report policy violations
- **Compliance Dashboards**: Visual representation of compliance status

### Alerting and Notifications
- **Anomaly Detection**: Alert on unusual access patterns
- **Policy Violations**: Immediate notification of access rule violations
- **Administrative Changes**: Notify when policies are modified
- **System Health**: Monitor access management system performance

## Next Steps

After understanding Access Management basics:

1. **Create Your First Policy**: Start with a simple, restrictive policy
2. **Set Up User Management**: Configure [user roles and permissions](./user-management)
3. **Configure Security**: Implement [security and protection](./security-protection) measures
4. **Test Thoroughly**: Verify access works correctly for all user types
5. **Monitor and Optimize**: Continuously improve your access management strategy

For detailed implementation guides, see:
- [Creating a Policy](https://help.tago.io/portal/en/kb/articles/184-creating-a-policy)
- [Defining Targets](https://help.tago.io/portal/en/kb/articles/185-defining-targets)
- [Defining Permissions](https://help.tago.io/portal/en/kb/articles/186-defining-permissions)
- [User Management](./user-management)
