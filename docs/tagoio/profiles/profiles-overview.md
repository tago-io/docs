# Profiles

Profiles are similar to having different sub-accounts under your own main account. You can create multiple profiles for persons or organizations and then share them with others. By doing this, you will continue to own the 'sub-account' while allowing others to access each profile separately.

## Benefits of Profiles

1. **Application Isolation**: Isolate applications from different customers. If you have two profiles, and one of them reaches the service limits for example, only that one will be blocked, the other will not be impacted.

2. **Controlled Access**: Grant restricted access for external individuals to certain applications and organizations.

3. **Cost Tracking**: Track cost of individual applications and customers. Visualize breakdown cost per Profile and Services on the [Statistics](https://help.tago.io/portal/en/kb/articles/115-services-overview) page.

## Profile Management

### Switching Profiles

To switch profiles, click on the current profile shown on the top left and select another one.

![Profile Switching Interface](https://help.tago.io/galleryDocuments/edbsn4080bb37f89a4c35d1b0ebe201d1f813429bf992989bee6bb730185af9b12b1e69140daf7dadb0713d30a453eabef573?inline=true)

### Adding Profiles

1. Go to your account settings
2. Select **[Profiles & Teams](https://admin.tago.io/profile)** from the list
3. Click on **Add Profile**

![Add Profile Interface](https://help.tago.io/galleryDocuments/edbsnc3e2ebb2d159b7e92ef06f8b85579149334362cb39182f6c038936b4e77f21795f854b83113c832ec6593e9771acf6e0?inline=true)

After creating a profile, you can edit it to:
- Change the name
- Upload a logo
- Upgrade services & add-ons

Each Profile starts with certain services included. It is up to you to increase the limits as you scale up the applications that will run on that Profile.

### Renaming Profiles

Renaming your profile is simple:

1. Navigate to your [Profiles & Teams](https://admin.tago.io/profile) page
2. Select the **Profile** tab
3. Click on your profile name
4. Type a new name
5. Click **Save** to finalize your changes

![Profile Renaming Interface](https://help.tago.io/galleryDocuments/edbsn524c7e961decaaf0b2a47b57f6c6e0dea3753b21968a96b979c67c45a203a9537b5e895d6c5fbea3db60276b5a2b0374?inline=true)

> **Note**: It is possible to use the exact same name for multiple profiles.

## Profile Transfer

### Transferring Profiles Between TagoIO Accounts

It is possible to transfer profiles between TagoIO accounts. The transfer process requires:

- **Minimum Profiles**: At least two profiles in the source account before initiating the process
- **Resource Planning**: The destination account should ideally have enough resources (plan limits and add-ons) to ensure the application keeps running
- **Manual Process**: Transfers are handled manually by TagoIO support team

### How to Request Transfer

1. Navigate to [Profiles](https://admin.tago.io/profile) > More
2. Click on "**Transfer this profile to another account**"
3. Type the Account Email of the destination account in the field

![Profile Transfer Interface](https://help.tago.io/galleryDocuments/edbsn17194ae4a8d40cdee420cb5e718f3e6142726ca992f298ca128caabb38efc96b31efca0f79a8520d9a2c06ed3c20188c?inline=true)

### Transfer Process

1. **Request Submission**: Submit the transfer request through the admin panel
2. **Automatic Ticket Creation**: A support ticket is automatically created
3. **Support Contact**: Support team contacts you via email to confirm details
4. **Prerequisites Verification**: Required information and prerequisites are verified
5. **Manual Processing**: The transfer is processed manually (may take a few hours)

> **Account Requirements**: The profile transfer is available for Starter and Scale accounts. Check out our [pricing page](https://tago.io/pricing) for more information.

## Team Management - Sharing Profiles

You can add others to your profiles by adding their emails to the team.

### Adding Team Members

1. Go to the specific Profile
2. Select the **Team** tab
3. Enter team member email addresses

Learn more about [sharing your profile](https://help.tago.io/portal/en/kb/articles/106-sharing-your-profile).

> **Important**: Before you invite someone to join your team, make sure that the person already has created a TagoIO account.

### Team Permissions

Configure appropriate permissions for team members:
- **Profile Access**: Control which profiles team members can access
- **Resource Permissions**: Define what resources team members can modify
- **Administrative Rights**: Set administrative capabilities per team member

## Account Token Generation

[Account tokens](https://help.tago.io/portal/en/kb/articles/495-account-token) are used to authenticate requests in the TagoIO API. You can use our API to make integrations and create devices, buckets, dashboards, send data, and more.

### Creating Account Tokens

1. Click on the **Tokens** tab
2. Add a name, permission, expiration
3. Click on **Generate Token**
4. **Insert your password**
5. **Click on Generate my token**

### Token Management Best Practices

- **Meaningful Names**: Use descriptive names for easy identification
- **Appropriate Permissions**: Grant only necessary permissions
- **Expiration Dates**: Set reasonable expiration dates for security
- **Regular Rotation**: Rotate tokens periodically
- **Secure Storage**: Store tokens securely in your applications

## Use Cases and Scenarios

### Multi-Customer SaaS Provider
- **Scenario**: IoT service provider serving multiple customers
- **Implementation**: One profile per customer for complete isolation
- **Benefits**: Individual billing, service limits, and resource management

### Enterprise Departments
- **Scenario**: Large enterprise with multiple departments using IoT
- **Implementation**: One profile per department or project
- **Benefits**: Cost allocation, resource isolation, and access control

### Development Environments
- **Scenario**: Software development with multiple environments
- **Implementation**: Separate profiles for dev, staging, and production
- **Benefits**: Environment isolation and controlled deployments

### Regional Operations
- **Scenario**: Global company with regional operations
- **Implementation**: Profile per geographical region
- **Benefits**: Data sovereignty, regional compliance, and local management

## Profile Architecture Best Practices

### Resource Planning
- **Capacity Planning**: Estimate resource needs for each profile
- **Scaling Strategy**: Plan for growth and resource expansion
- **Cost Optimization**: Monitor and optimize resource usage
- **Performance Monitoring**: Track profile performance metrics

### Security Considerations
- **Access Controls**: Implement proper team member permissions
- **Token Management**: Regular token rotation and access review
- **Data Isolation**: Ensure proper data separation between profiles
- **Audit Trails**: Monitor profile access and modifications

### Operational Management
- **Naming Conventions**: Use consistent profile naming standards
- **Documentation**: Document profile purposes and configurations
- **Backup Strategies**: Implement profile-specific backup procedures
- **Monitoring**: Set up alerting for profile-specific issues

## Advanced Profile Features

### Cost Allocation and Tracking
- **Per-Profile Billing**: Track costs individually for each profile
- **Resource Utilization**: Monitor service usage across profiles
- **Budget Management**: Set spending alerts and limits
- **Reporting**: Generate cost reports per profile

### Integration Capabilities
- **API Access**: Profile-specific API integration
- **External Systems**: Connect profiles to different external systems
- **Data Export**: Profile-specific data export capabilities
- **Webhooks**: Configure profile-specific webhooks and notifications

### Compliance and Governance
- **Data Residency**: Ensure data stays within required regions
- **Access Auditing**: Track who accesses each profile
- **Compliance Reporting**: Generate compliance reports per profile
- **Policy Enforcement**: Implement profile-specific policies

## Troubleshooting Common Issues

### Profile Access Problems
- Verify user has been added to profile team
- Check user permissions and roles
- Confirm user has activated TagoIO account
- Review profile sharing settings

### Transfer Issues
- Ensure source account has minimum required profiles
- Verify destination account email accuracy
- Check account plan compatibility
- Contact support for transfer status

### Resource Limit Issues
- Review current usage vs limits
- Consider upgrading profile resources
- Optimize resource utilization
- Monitor usage patterns

## Related Documentation

- [User Management](../users/user-management.md) - Managing profile team members
- [Access Management](../security/access-management.md) - Profile permission control
- [Account Tokens](../api/account-tokens.md) - API authentication
- [Statistics and Billing](../billing/statistics.md) - Cost tracking
- [Sharing Profiles](./sharing-profiles.md) - Team collaboration
- [Services Overview](../services/services-overview.md) - Available services

---

*Source URL: https://help.tago.io/portal/en/kb/articles/198-profiles*