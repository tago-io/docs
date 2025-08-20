# Security and Protection for RUN Users

With TagoRUN, you can provide actions and methods to increase your application's security and protection for your [Run users](../access-management/user-management), as well as make your application comply with the main laws regarding data privacy and security by providing your end-user safeguards to prevent inappropriate access to their personal data.

By accessing your [Run](https://admin.tago.io/run) module and selecting the tab 'Security and Protection', you will be able to implement and customize how the account delete requests will be processed, enable two-factor authentication, define the requirements for creating passwords, and protect your application against robot activities.

![Security and Protection settings](https://help.tago.io/galleryDocuments/edbsnf54bc44c0d38f869211a2222d308286289c69184855e8df1cf537ad0e6f75e3b35c91c7ba5a5f1a27e95a27bcfa5ee29?inline=true)

## Delete Request Process

Deleting end-user data is a significant decision for an application, and TagoIO wants to help you make the best choice. In doing so, you can define which processes the user must follow in order to delete their account.

You can choose to enable the following options:

1. **Send an email to the profile owner**: you can receive an e-mail and manually process the request through the [User Management](../access-management/user-management) module.

2. **Immediately delete user account**: you can consent to TagoIO to process the request and immediately delete the user account.

3. **Run an Analysis**: you can implement a script to analyze and process the requests using Analysis and our SDK.

> **Warning**: TagoIO will never remove any Run User data without your consent. To allow the immediate deletion of an end-user, you must activate the option 'Immediately delete user account'.

### Implementation Best Practices

#### Manual Review Process
- Set up email notifications for delete requests
- Establish a review timeline (e.g., 7-30 days)
- Create a verification process to confirm user identity
- Document the review and approval process

#### Automated Deletion
- Implement proper data backup before enabling
- Test the deletion process thoroughly
- Consider a grace period for account recovery
- Ensure compliance with data retention policies

#### Analysis-Based Processing
- Create custom logic for different user types
- Implement audit trails for compliance
- Add approval workflows for sensitive accounts
- Generate reports for deletion activities

## Two-Factor Authentication (2FA) for End-Users

Enhance the security of your end-users' accounts by implementing Two-Factor Authentication (2FA), which requires not only a password but also a second form of verification that only the user possesses or knows. Once 2FA is activated, users can navigate to their Account Settings to configure their preferred authentication method, similar to the Two-Factor Authentication setup available on Admin.

To enable Two-Factor Authentication, access the [Run module](https://admin.tago.io/run), go to the '**Security and Protection**' tab, and find the option labeled '**Do you want to enable Two-Factor Authentication (2FA)?**'

### Available Authentication Methods

The following authentication methods can be enabled:

1. **App Authenticator**
   - Google Authenticator
   - Microsoft Authenticator
   - Authy
   - Other TOTP-compatible apps

2. **SMS***
   - Text message verification codes
   - Works globally with mobile carriers
   - Requires phone number verification

3. **Email***
   - Email-based verification codes
   - Backup method for app authenticator
   - Useful for users without smartphones

Additionally, you can mandate that end-users configure at least one authentication method upon login, ensuring an added layer of security.

> **Info**: *Notice that each email or SMS sent to Run users will be counted as 1 transaction from the respective service. Make sure to allocate the right amount of these resources to your profile.

### 2FA Configuration Options

#### Mandatory 2FA
- Require all users to set up 2FA
- Force configuration on first login
- Block access until 2FA is configured
- Provide clear setup instructions

#### Optional 2FA
- Allow users to choose whether to enable 2FA
- Provide incentives for 2FA adoption
- Send periodic reminders about security benefits
- Make setup process easily accessible

#### Recovery Options
- Provide backup codes for account recovery
- Enable multiple authentication methods
- Implement admin override for locked accounts
- Create clear recovery procedures

## Password Strength

The strength of a password is a measure to define how hard it will be to gain access to an account through brute force or simply guessing. You can define mandatory password requirements for your Run users when they change or create a new account, and the following requirements are available:

1. **Must contain upper and lower case letters**
2. **Must contain a mix of letters and numbers**
3. **Must contain special characters (@, !, &, ...)**
4. **Minimum length required**

To customize the password requirements, navigate to the [Run module](https://admin.tago.io/run) and click on the '**Security and Protection**' tab. Then, locate the option labeled '**What password strength do you want to require?**'

### Password Policies

#### Basic Requirements
- Minimum 8 characters (recommended: 12+)
- Mix of uppercase and lowercase letters
- Include at least one number
- Include special characters

#### Advanced Requirements
- Prohibit common passwords
- Prevent password reuse (last 5-10 passwords)
- Implement password aging policies
- Check against known breach databases

#### User Experience Considerations
- Provide real-time password strength feedback
- Show clear requirements during registration
- Offer password generation suggestions
- Implement progressive enhancement

> **Info**: Just like other features within [TagoRUN](../overview), you can customize the appearance and sentences used for these features on mobile and on the web through the [Run Theme](./theme-customization) and [Dictionaries & Multi-language](../dictionaries/multi-language).

## User Session Management

You have the flexibility to determine the duration of your end user's session. Once a user signs in, their session will automatically expire after a specified period that you define, requiring them to re-authenticate. This feature is excellent for enhancing security by periodically prompting users to log in again, thereby reducing the risk of unauthorized access.

You can customize the login session by accessing the [Run module](https://admin.tago.io/run), navigating to the '**Security and Protection**' tab, and locating the option labeled '**How long should the user's session last?**'

You can set the session expiration to occur after a specific number of hours, days, weeks, or months, depending on your security requirements and user convenience.

### Session Duration Guidelines

#### High Security Applications
- 1-4 hours for sensitive data
- Require re-authentication for critical actions
- Implement activity-based session extension
- Log all session activities

#### Standard Applications
- 24 hours to 1 week
- Balance security with user convenience
- Consider user activity patterns
- Provide "Remember Me" options

#### Low Security Applications
- 1-4 weeks
- Focus on user convenience
- Monitor for suspicious activities
- Implement device-based trust

### Session Security Features

#### Activity Monitoring
- Track user activities and locations
- Detect unusual login patterns
- Send notifications for new device logins
- Implement concurrent session limits

#### Secure Session Handling
- Use secure, HTTPOnly cookies
- Implement proper session storage
- Encrypt session data
- Regular session cleanup

## Enabling Captcha

Safeguard your application from automated actions by implementing captcha tests during the Sign In and Sign Up processes. This helps differentiate between genuine human users and bots, thereby preventing malicious activities such as web scraping, spamming, and brute-force password attacks.

To activate CAPTCHA, go to the [Run module](https://admin.tago.io/run), click on the '**Security and Protection**' tab, and find the option labeled '**Do you want to enable captcha?**'

### Captcha Implementation

#### When to Use Captcha
- **Sign Up Process**: Prevent automated account creation
- **Sign In Process**: Protect against brute force attacks
- **Password Reset**: Prevent automated password reset abuse
- **Contact Forms**: Reduce spam submissions

#### Captcha Best Practices
- Use user-friendly captcha solutions
- Implement progressive captcha (show only when needed)
- Provide alternative verification methods
- Test accessibility for disabled users

#### Monitoring and Adjustment
- Track captcha completion rates
- Monitor failed attempts and patterns
- Adjust difficulty based on threat levels
- Provide fallback verification methods

## Additional Security Measures

### IP Address Restrictions
- Whitelist trusted IP addresses
- Block suspicious IP ranges
- Implement geo-blocking if needed
- Monitor login attempts by location

### Device Management
- Track and manage user devices
- Implement device registration
- Send notifications for new devices
- Allow users to manage trusted devices

### Activity Logging
- Log all user activities
- Monitor login patterns and failures
- Track data access and modifications
- Generate security reports

### Compliance and Privacy
- Implement GDPR compliance measures
- Provide data export capabilities
- Honor data deletion requests
- Maintain audit trails

## Security Monitoring and Response

### Threat Detection
- Monitor for unusual activity patterns
- Implement automated threat response
- Set up security alerts and notifications
- Regular security assessments

### Incident Response
- Create incident response procedures
- Establish communication protocols
- Implement account lockout procedures
- Provide user notification systems

### Regular Security Updates
- Keep security features updated
- Review and update security policies
- Conduct regular security training
- Stay informed about new threats

## Next Steps

- Configure [User Management](../access-management/user-management) with appropriate security roles
- Set up [Access Management](../access-management/access-management-overview) policies
- Implement [User Notifications](./user-notifications) for security events
- Review [Analytics Setup](./analytics-setup) for security monitoring
