# Single Sign-On (SSO)

By using TagoRUN's **Single Sign-On (SSO)** integration, end-users are allowed to sign in to your RUN application using the credentials from your own trusted user database. This database is provided by third-party services such as Okta, Auth0, Microsoft Azure AD, OneLogin, PingIdentity, Google Workspace, and several other identity providers.

## Overview

SSO integration provides:
- **Seamless Authentication**: Users log in once and access all applications
- **Enhanced Security**: Centralized authentication and security policies
- **Reduced Password Fatigue**: Fewer passwords for users to remember
- **Centralized User Management**: Manage users from your existing identity provider
- **Compliance**: Meet enterprise security and compliance requirements

## Supported Identity Providers

### Enterprise Providers
- **Microsoft Azure AD**: Enterprise-grade identity and access management
- **Okta**: Leading cloud identity provider
- **OneLogin**: Comprehensive identity and access management
- **PingIdentity**: Enterprise identity solutions
- **Auth0**: Flexible identity platform for developers

### Cloud Providers
- **Google Workspace**: Google's suite of business applications
- **Amazon AWS SSO**: AWS's identity service
- **Salesforce**: CRM-integrated identity management
- **Office 365**: Microsoft's cloud productivity suite

### Standards-Based
- **SAML 2.0**: Industry-standard protocol
- **OAuth 2.0**: Authorization framework
- **OpenID Connect**: Authentication layer on OAuth 2.0
- **LDAP**: Lightweight Directory Access Protocol

## How SSO Works with TagoRUN

```
User → Identity Provider → Authentication → TagoRUN Application → Access Granted
```

1. **User Initiates Login**: User attempts to access your TagoRUN application
2. **Redirect to Identity Provider**: TagoRUN redirects to your configured SSO provider
3. **Authentication**: User authenticates with their corporate credentials
4. **Token Exchange**: Identity provider sends authentication token to TagoRUN
5. **Access Granted**: User gains access to TagoRUN application with appropriate permissions

## Configuration Process

### Prerequisites
- Active TagoRUN deployment
- Access to your identity provider's admin console
- Administrative permissions in both systems
- SSL certificate for secure communication

### Step 1: Configure Identity Provider
1. **Create Application**: Add TagoRUN as a new application in your identity provider
2. **Set Callback URLs**: Configure redirect URLs for TagoRUN
3. **Define User Attributes**: Map user attributes (name, email, roles)
4. **Generate Certificates**: Create or upload necessary SSL certificates
5. **Assign Users**: Determine which users can access the application

### Step 2: Configure TagoRUN
1. **Access SSO Settings**: Go to the SSO configuration in TagoRUN admin panel
2. **Import Provider Settings**: Upload or enter identity provider configuration
3. **Map User Attributes**: Define how user attributes map to TagoRUN roles
4. **Test Configuration**: Verify SSO is working correctly
5. **Enable for Users**: Activate SSO for your user base

### Step 3: User Management
1. **Synchronize Users**: Import or sync users from identity provider
2. **Assign Roles**: Map identity provider roles to TagoRUN permissions
3. **Test Access**: Verify users can log in successfully
4. **Monitor Usage**: Track SSO login attempts and success rates

## SAML Configuration

### Required SAML Attributes
- **NameID**: Unique user identifier (usually email)
- **Email**: User's email address
- **FirstName**: User's first name
- **LastName**: User's last name
- **Groups**: User's group memberships (optional)

### SAML Settings
```xml
<!-- Example SAML Response -->
<saml:Assertion>
  <saml:AttributeStatement>
    <saml:Attribute Name="email">
      <saml:AttributeValue>user@company.com</saml:AttributeValue>
    </saml:Attribute>
    <saml:Attribute Name="firstName">
      <saml:AttributeValue>John</saml:AttributeValue>
    </saml:Attribute>
    <saml:Attribute Name="lastName">
      <saml:AttributeValue>Doe</saml:AttributeValue>
    </saml:Attribute>
  </saml:AttributeStatement>
</saml:Assertion>
```

## Auth0 Configuration Example

### Auth0 Setup
1. **Create Application**: New Regular Web Application
2. **Configure URLs**:
   - Allowed Callback URLs: `https://yourdomain.run.tago.io/auth/callback`
   - Allowed Logout URLs: `https://yourdomain.run.tago.io/logout`
3. **Configure Connections**: Enable desired social/enterprise connections
4. **User Management**: Import or create users in Auth0
5. **Rules**: Create rules for user attribute mapping

### TagoRUN Auth0 Configuration
1. **Domain**: Your Auth0 domain (e.g., `yourcompany.auth0.com`)
2. **Client ID**: Application client ID from Auth0
3. **Client Secret**: Application client secret from Auth0
4. **Callback URL**: TagoRUN callback URL for Auth0

## User Provisioning

### Just-in-Time (JIT) Provisioning
- **Automatic User Creation**: Users created on first login
- **Attribute Mapping**: User attributes populated from identity provider
- **Role Assignment**: Automatic role assignment based on groups
- **Profile Updates**: User profiles updated on each login

### Pre-Provisioning
- **Bulk Import**: Import users before they log in
- **Manual Assignment**: Manually assign roles and permissions
- **Validation**: Verify user accounts before activation
- **Communication**: Notify users about account creation

## Security Considerations

### Best Practices
- **Use HTTPS**: Always use SSL/TLS for secure communication
- **Certificate Validation**: Verify SSL certificates properly
- **Token Expiration**: Configure appropriate token lifetimes
- **Logout Handling**: Implement proper logout procedures
- **Audit Logging**: Track all authentication events

### Common Security Issues
- **Certificate Problems**: Expired or invalid SSL certificates
- **Misconfigured URLs**: Incorrect callback or logout URLs
- **Attribute Mapping**: Improper user attribute mapping
- **Session Management**: Poor session timeout handling
- **Token Security**: Insecure token storage or transmission

## Troubleshooting

### Common Issues

#### Authentication Failures
- **Check URLs**: Verify all callback and logout URLs are correct
- **Validate Certificates**: Ensure SSL certificates are valid and trusted
- **Review Logs**: Check both TagoRUN and identity provider logs
- **Test Connectivity**: Verify network connectivity between systems

#### User Provisioning Issues
- **Attribute Mapping**: Check user attribute mapping configuration
- **Role Assignment**: Verify role mapping rules are correct
- **User Status**: Check if users are active in identity provider
- **Permissions**: Verify users have permission to access the application

#### Configuration Problems
- **Domain Settings**: Ensure domain settings are correct
- **Client Credentials**: Verify client ID and secret are accurate
- **Protocol Settings**: Check SAML/OAuth protocol configuration
- **Metadata**: Ensure metadata files are current and accessible

## Monitoring and Maintenance

### Monitoring
- **Login Success Rates**: Track successful vs. failed login attempts
- **User Activity**: Monitor user access patterns
- **System Performance**: Track SSO response times
- **Error Rates**: Monitor authentication error frequency

### Maintenance
- **Certificate Renewal**: Keep SSL certificates current
- **User Synchronization**: Regularly sync user data
- **Configuration Updates**: Update settings as needed
- **Testing**: Regularly test SSO functionality

## Benefits

### For Users
- **Single Login**: One set of credentials for all applications
- **Faster Access**: Quick login to TagoRUN applications
- **Consistent Experience**: Familiar login process
- **Password Security**: Fewer passwords to manage

### For Administrators
- **Centralized Management**: Manage users in one place
- **Enhanced Security**: Enterprise-grade authentication
- **Compliance**: Meet regulatory requirements
- **Reduced Support**: Fewer password-related support requests

## Next Steps

1. **Choose Provider**: Select your preferred identity provider
2. **Plan Implementation**: Design your SSO architecture
3. **Configure Systems**: Set up both identity provider and TagoRUN
4. **Test Thoroughly**: Validate functionality with test users
5. **Train Users**: Provide guidance on the new login process
6. **Monitor**: Track usage and performance after deployment

For detailed configuration guides:
- [Auth0 SSO Configuration](https://help.tago.io/portal/en/community/topic/auth0-sso-configuration)
- [User Management](../access-management/user-management)
- [Security Best Practices](../access-management/security-protection)
- [Access Management Overview](../access-management/access-management-overview)

SSO integration provides a professional, secure, and user-friendly authentication experience for your TagoRUN deployment.