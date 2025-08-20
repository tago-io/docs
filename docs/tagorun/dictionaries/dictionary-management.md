# Dictionary Management

The innovative dictionary feature from TagoIO provides more possibilities to improve your application by allowing you to edit any messages in your dashboards and to provide your solution in any language.

![Dictionary and Multi-Language feature](https://cdn.elev.io/file/uploads/VkSrjeSoWpdg7LeGdh2jKUEagxh0dd_cO83j6HUV_6s/9b62_HrP9wyDwF0EnX0n4lUfi1FcHl8_sjcWt3GQCCI/Dictionary%20and%20Multi-Language%20Final%204k-yjY.png)

## Overview

Dictionary management in TagoRUN enables you to create multilingual applications and customize text throughout your entire platform. This powerful feature allows you to translate and customize any text that appears in dashboards, widgets, variables, and your RUN application, including the mobile app.

## Core Capabilities

### Translate Text Messages to Any Language

Basically, any texts present in dashboard frames, inside widgets, variables, and your RUN application (including the mobile app) can be substituted by the dictionary. You can create your own dictionary by editing fields (key & value) for the languages you want to make available for your end-users.

#### Supported Text Elements
- **Dashboard Titles and Descriptions**: All dashboard metadata
- **Widget Labels and Content**: Text within all widget types
- **Variable Names and Units**: Data presentation elements
- **Navigation Elements**: Menu items, buttons, and links
- **System Messages**: Error messages, notifications, and alerts
- **Form Fields**: Input labels, placeholders, and validation messages

#### Language Support
- **Unlimited Languages**: Support for any language or locale
- **Unicode Support**: Full support for special characters and symbols
- **Right-to-Left (RTL)**: Support for Arabic, Hebrew, and other RTL languages
- **Regional Variants**: Different variations of the same language (e.g., en-US, en-GB)

### Customize Texts for the Same Language

As you can customize any texts, it is possible to simply use the Dictionary to customize messages for even a single language. For example, if you wish to change the default message shown in the tooltip 'Enter full screen' in your [RUN](../overview) application, you can edit the value associated with the key `ENTER_FULLSCREEN` to something like 'Click here to switch to full screen'.

#### Use Cases for Single Language Customization
- **Brand-Specific Terminology**: Use your company's specific terms
- **Industry Jargon**: Adapt language for specific industries
- **User-Friendly Labels**: Simplify technical terms for end-users
- **Regional Preferences**: Adapt to local language preferences

## Dictionary Structure

### Keys and Values

#### Key Naming Conventions
- **Uppercase**: Use uppercase letters for consistency
- **Underscores**: Separate words with underscores
- **Descriptive**: Make keys self-explanatory
- **Hierarchical**: Use dots for grouping related keys

```javascript
// Examples of good key naming
DASHBOARD_TITLE
USER_PROFILE_EMAIL
BUTTON_SAVE_CHANGES
ERROR_INVALID_PASSWORD
WIDGET_TEMPERATURE_UNIT
```

#### Value Management
- **Placeholder Support**: Use placeholders for dynamic content
- **HTML Support**: Basic HTML formatting in values
- **Variable Substitution**: Include variables in text values
- **Conditional Text**: Different text based on conditions

```javascript
// Examples of value formats
{
  "WELCOME_MESSAGE": "Welcome, {username}!",
  "ITEMS_COUNT": "You have {count} items",
  "LAST_UPDATE": "Last updated: {date}",
  "TEMPERATURE_READING": "{value}°{unit}"
}
```

### Slugs and Organization

Also, because a 'Slug' is associated with each dictionary, it is possible to substitute the same data with different texts using '#' instead of the text directly, by using the format `#slug.key#`

> **Example**: You can show a title in a widget for a certain group of users using `#DIC1.TITLE#`, and another to others users using `#DIC2.TITLE#`. In this case, the values associated with the key TITLE would be different for the dictionaries DIC1 and DIC2.

#### Slug Best Practices
- **Short and Meaningful**: Keep slugs concise but descriptive
- **Consistent Naming**: Use consistent naming patterns
- **Environment-Specific**: Different slugs for different environments
- **User-Group Specific**: Separate dictionaries for different user groups

```javascript
// Examples of slug organization
DEFAULT       // Default dictionary for all users
ADMIN         // Dictionary for administrator users
CUSTOMER      // Dictionary for customer-facing content
MOBILE        // Dictionary specific to mobile application
ES            // Spanish language dictionary
FR            // French language dictionary
```

## Creating and Managing Dictionaries

### Dictionary Creation Process

#### 1. Planning Phase
- **Content Audit**: Identify all text that needs translation
- **Language Requirements**: Determine which languages to support
- **User Segmentation**: Decide if different user groups need different dictionaries
- **Key Structure**: Plan the key naming convention

#### 2. Development Phase
- **Key Definition**: Create comprehensive key lists
- **Content Creation**: Develop content for each language
- **Quality Assurance**: Review translations for accuracy
- **Testing**: Test dictionary functionality thoroughly

#### 3. Deployment Phase
- **Gradual Rollout**: Deploy languages incrementally
- **User Feedback**: Collect feedback on translations
- **Refinement**: Improve based on user input
- **Maintenance**: Establish ongoing maintenance processes

### Dictionary Configuration

#### Language Settings
```javascript
// Example dictionary configuration
{
  "slug": "EN_US",
  "name": "English (United States)",
  "locale": "en-US",
  "fallback": "DEFAULT",
  "active": true,
  "keys": {
    "WELCOME_MESSAGE": "Welcome to our platform!",
    "LOGIN_BUTTON": "Sign In",
    "LOGOUT_BUTTON": "Sign Out"
  }
}
```

#### Fallback Strategy
- **Default Fallback**: Always have a default dictionary
- **Language Fallback**: Fall back to primary language if translation missing
- **Key Fallback**: Show key name if value is missing
- **Error Handling**: Graceful handling of missing translations

### Import and Export

#### Bulk Operations
- **CSV Import/Export**: Work with spreadsheet applications
- **JSON Import/Export**: Programmatic dictionary management
- **Translation Memory**: Reuse existing translations
- **Batch Updates**: Update multiple keys simultaneously

#### Integration with Translation Services
- **Professional Translation**: Export for professional translation services
- **Machine Translation**: Integration with automated translation services
- **Collaborative Translation**: Tools for distributed translation teams
- **Version Control**: Track changes and manage versions

## Implementation Strategies

### Text Replacement Syntax

#### Basic Replacement
```html
<!-- Original text -->
<span>Dashboard</span>

<!-- Dictionary replacement -->
<span>#DEFAULT.DASHBOARD_TITLE#</span>
```

#### Dynamic Content
```html
<!-- With variables -->
<span>#DEFAULT.WELCOME_USER#{username}#</span>

<!-- With conditions -->
<span>#DEFAULT.ITEMS_COUNT#{count > 1 ? 'items' : 'item'}#</span>
```

#### Widget Integration
```javascript
// In widget configuration
{
  "title": "#DEFAULT.TEMPERATURE_WIDGET#",
  "unit": "#DEFAULT.CELSIUS_UNIT#",
  "tooltip": "#DEFAULT.TEMPERATURE_TOOLTIP#"
}
```

### User Language Detection

#### Automatic Detection
- **Browser Language**: Detect from browser settings
- **IP Geolocation**: Determine language from location
- **Previous Selection**: Remember user's language choice
- **Account Settings**: Use language from user profile

#### Manual Selection
- **Language Switcher**: UI element for language selection
- **Profile Settings**: Language preference in user settings
- **URL Parameters**: Language selection via URL
- **Admin Override**: Administrative language assignment

### Performance Optimization

#### Caching Strategies
- **Client-Side Caching**: Cache dictionaries in browser
- **Server-Side Caching**: Cache compiled dictionaries
- **CDN Distribution**: Distribute dictionaries via CDN
- **Lazy Loading**: Load only required language dictionaries

#### Bundle Optimization
- **Tree Shaking**: Include only used dictionary keys
- **Compression**: Compress dictionary files
- **Chunking**: Split large dictionaries into smaller chunks
- **Progressive Loading**: Load critical keys first

## Advanced Features

### Dynamic Dictionaries

#### Runtime Updates
- **Hot Reloading**: Update dictionaries without restart
- **A/B Testing**: Test different text versions
- **Personalization**: Customize text for individual users
- **Content Management**: Update content through admin interface

#### API Integration
```javascript
// Update dictionary via API
await updateDictionary({
  slug: 'DEFAULT',
  key: 'WELCOME_MESSAGE',
  value: 'Welcome to our updated platform!'
});
```

### Contextual Translation

#### Smart Pluralization
```javascript
// Handle different plural forms
{
  "ITEMS_COUNT": {
    "0": "No items",
    "1": "One item", 
    "many": "{count} items"
  }
}
```

#### Gender and Context
```javascript
// Handle gender-specific translations
{
  "WELCOME_USER": {
    "male": "Welcome, Mr. {name}",
    "female": "Welcome, Ms. {name}",
    "other": "Welcome, {name}"
  }
}
```

### Analytics and Monitoring

#### Usage Tracking
- **Translation Coverage**: Track which keys are translated
- **Language Popularity**: Monitor most-used languages
- **Missing Translations**: Identify untranslated content
- **Performance Impact**: Monitor dictionary loading performance

#### Quality Metrics
- **Translation Quality**: Track translation accuracy
- **User Feedback**: Collect feedback on translations
- **Error Rates**: Monitor translation-related errors
- **Completion Rates**: Track translation completeness

## Best Practices

### Content Strategy

#### Writing for Translation
- **Clear Language**: Use simple, unambiguous language
- **Avoid Idioms**: Idioms don't translate well
- **Consider Length**: Text length varies between languages
- **Cultural Sensitivity**: Be aware of cultural differences

#### Consistency
- **Style Guides**: Maintain consistent style across languages
- **Terminology**: Use consistent terminology
- **Voice and Tone**: Maintain brand voice in all languages
- **Update Coordination**: Keep all languages synchronized

### Technical Implementation

#### Code Organization
```javascript
// Good: Organized dictionary structure
const dictionary = {
  navigation: {
    HOME: 'Home',
    DASHBOARD: 'Dashboard',
    SETTINGS: 'Settings'
  },
  forms: {
    SAVE: 'Save',
    CANCEL: 'Cancel',
    REQUIRED_FIELD: 'This field is required'
  }
};
```

#### Error Handling
```javascript
// Robust translation function
function translate(key, fallback = null) {
  try {
    return dictionary[key] || fallback || key;
  } catch (error) {
    console.warn(`Translation missing for key: ${key}`);
    return fallback || key;
  }
}
```

### Maintenance and Updates

#### Regular Reviews
- **Content Audits**: Regular review of all translations
- **User Feedback**: Incorporate user suggestions
- **Cultural Updates**: Update content for cultural changes
- **Technical Updates**: Keep up with platform changes

#### Version Management
- **Change Tracking**: Track all dictionary changes
- **Rollback Capability**: Ability to revert problematic changes
- **Testing Procedures**: Test all changes before deployment
- **Documentation**: Document all changes and reasons

## Troubleshooting

### Common Issues

#### Missing Translations
1. **Check Key Names**: Verify exact key spelling
2. **Verify Dictionary**: Ensure dictionary is loaded
3. **Fallback Testing**: Test fallback mechanisms
4. **Cache Clearing**: Clear cached dictionaries

#### Performance Problems
1. **Bundle Size**: Check dictionary bundle sizes
2. **Loading Time**: Monitor dictionary loading performance
3. **Memory Usage**: Monitor memory consumption
4. **Network Impact**: Optimize network requests

#### Display Issues
1. **Character Encoding**: Ensure proper UTF-8 encoding
2. **Font Support**: Verify fonts support all characters
3. **Layout Issues**: Check text length impact on layout
4. **RTL Support**: Test right-to-left language display

### Debugging Tools

#### Development Tools
- **Dictionary Inspector**: Tool to view current dictionaries
- **Translation Tester**: Test translations in real-time
- **Performance Monitor**: Monitor dictionary performance
- **Coverage Reporter**: Track translation coverage

#### Testing Strategies
- **Automated Testing**: Test dictionary functionality automatically
- **Visual Regression**: Test for layout issues
- **Internationalization Testing**: Test with various languages
- **User Acceptance Testing**: Test with native speakers

## Integration with TagoRUN Features

### User Interface Elements

#### Navigation Components
- **Menu Items**: Translate all navigation elements
- **Breadcrumbs**: Dynamic breadcrumb translations
- **Page Titles**: Localized page titles
- **Button Labels**: All button text

#### Dashboard Components
- **Widget Titles**: All widget headers and titles
- **Chart Labels**: Axis labels, legends, tooltips
- **Data Labels**: Unit labels, status messages
- **Help Text**: Tooltips and help information

### Mobile Application

#### App Interface
- **Screen Titles**: All mobile screen titles
- **Navigation**: Mobile navigation elements
- **Forms**: All form labels and validation messages
- **Notifications**: Push notification content

#### Offline Support
- **Cached Translations**: Cache translations for offline use
- **Sync Strategy**: Synchronize updates when online
- **Storage Management**: Efficiently store translations locally
- **Update Mechanism**: Update cached translations

## Next Steps

To implement effective dictionary management:

1. **Content Planning**: Identify all text requiring translation
2. **Dictionary Design**: Design your dictionary structure
3. **Translation Strategy**: Develop comprehensive translation strategy
4. **Implementation**: Implement dictionary functionality
5. **Testing and Optimization**: Test thoroughly and optimize performance

For more detailed information, see:
- [Using Dictionaries & Multi-language](./multi-language)
- [Import & Export for Dictionary](https://help.tago.io/portal/en/kb/articles/497-import-export-for-dictionary)
- [Navigation Bar](../getting-started/navigation-bar) integration
- [Custom Settings](../getting-started/custom-settings) with dictionaries
