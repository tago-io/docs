# Using Dictionaries & Multi-language

Dictionaries in TagoRUN enable you to create multi-language applications and customize text throughout your platform. This powerful feature allows you to provide localized experiences for users in different regions and languages, as well as customize terminology to match your brand and industry.

## Overview

Dictionaries provide:
- **Multi-language Support**: Translate your application into multiple languages
- **Custom Terminology**: Use industry-specific or branded terminology
- **Dynamic Text Replacement**: Automatically replace text based on user preferences
- **Centralized Text Management**: Manage all text content from one location
- **Real-time Updates**: Changes take effect immediately across your application

## Key Features

### Language Support
- **Multiple Languages**: Support for dozens of languages
- **Right-to-Left (RTL)**: Support for Arabic, Hebrew, and other RTL languages
- **Regional Variants**: Different variants of the same language (e.g., US vs. UK English)
- **Custom Languages**: Create custom language variants for specific needs

### Text Customization
- **UI Elements**: Buttons, labels, menus, and navigation items
- **Messages**: Error messages, notifications, and system alerts
- **Content**: Dashboard titles, widget labels, and descriptions
- **Templates**: Email templates and communication text

### Dynamic Content
- **User Preferences**: Automatic language selection based on user settings
- **Browser Detection**: Detect user language from browser settings
- **Fallback Languages**: Graceful fallback when translations are missing
- **Context-Sensitive**: Different translations for different contexts

## Creating Dictionaries

### Dictionary Structure
Each dictionary contains:
- **Language Code**: Standard language code (e.g., en, es, fr, de)
- **Region Code**: Optional region specification (e.g., en-US, en-GB)
- **Key-Value Pairs**: Translation mappings for each text element
- **Categories**: Organized groups of related translations

### Dictionary Creation Process
1. **Plan Your Languages**: Determine which languages you need to support
2. **Identify Text Elements**: Catalog all text that needs translation
3. **Create Base Dictionary**: Start with your primary language
4. **Add Translations**: Create translations for each target language
5. **Test and Refine**: Test translations in context and refine as needed

## Dictionary Management

### Creating a New Dictionary
1. **Access Dictionary Settings**: Go to the Dictionaries section in TagoRUN admin
2. **Create Dictionary**: Click "New Dictionary" or similar button
3. **Set Language**: Choose the target language and region
4. **Add Translations**: Enter key-value pairs for each text element
5. **Activate**: Enable the dictionary for use in your application

### Managing Translations
- **Import/Export**: Use CSV or JSON files for bulk translation management
- **Version Control**: Track changes and maintain translation history
- **Collaboration**: Allow translators to work on specific language sets
- **Quality Assurance**: Review and approve translations before publishing

### Translation Keys
```json
{
  "login.button": "Sign In",
  "login.username": "Username",
  "login.password": "Password",
  "dashboard.title": "Dashboard",
  "menu.devices": "Devices",
  "menu.analytics": "Analytics",
  "error.invalid_credentials": "Invalid username or password",
  "notification.data_updated": "Data has been updated successfully"
}
```

## Implementation

### Setting Up Multi-language Support
1. **Enable Dictionaries**: Activate dictionary support in TagoRUN settings
2. **Create Language Files**: Set up dictionary files for each language
3. **Configure Default Language**: Set the primary/fallback language
4. **Test Translations**: Verify translations appear correctly
5. **Deploy**: Make languages available to users

### User Language Selection
- **Automatic Detection**: Detect language from browser settings
- **User Preferences**: Allow users to manually select language
- **Profile Settings**: Save language preference in user profile
- **Session Storage**: Remember language choice during session

### Dynamic Text Replacement
TagoRUN automatically replaces text using:
- **Template Variables**: `{{dictionary.key}}` in templates
- **JavaScript API**: Programmatic access to dictionary values
- **Widget Integration**: Automatic translation in widgets and dashboards
- **Email Templates**: Translated email communications

## Best Practices

### Translation Quality
- **Professional Translation**: Use professional translators for important content
- **Cultural Adaptation**: Adapt content to local cultural norms
- **Consistency**: Maintain consistent terminology across the application
- **Context**: Provide context to translators for accurate translations

### Technical Considerations
- **Character Sets**: Ensure proper encoding for all languages
- **Text Length**: Account for text expansion in different languages
- **Layout**: Consider layout changes for RTL languages
- **Fonts**: Use fonts that support all required character sets

### Maintenance
- **Regular Updates**: Keep translations current with application changes
- **User Feedback**: Collect feedback on translation quality
- **Testing**: Regularly test all languages for functionality
- **Performance**: Monitor performance impact of large dictionaries

## Advanced Features

### Contextual Translations
- **Pluralization**: Handle singular/plural forms correctly
- **Gender**: Support for gendered languages
- **Formality**: Different levels of formality (formal/informal)
- **Professional vs. Consumer**: Different terminology for different audiences

### Integration with External Services
- **Translation APIs**: Integration with Google Translate, Microsoft Translator
- **Translation Management**: Integration with professional translation services
- **Content Management**: Sync with external content management systems
- **Localization Platforms**: Integration with localization workflow tools

## Custom Terminology

### Industry-Specific Terms
- **Medical**: Medical device terminology
- **Industrial**: Manufacturing and industrial terms
- **Retail**: Retail and e-commerce language
- **Agriculture**: Agricultural and farming terminology

### Brand Customization
- **Product Names**: Use your product names instead of generic terms
- **Company Terminology**: Use company-specific language
- **Marketing Language**: Align with marketing messaging
- **Legal Requirements**: Meet regulatory language requirements

## Mobile App Integration

### Mobile Dictionary Support
- **App Localization**: Translate mobile app interface
- **Dynamic Updates**: Push dictionary updates to mobile apps
- **Offline Support**: Cache translations for offline use
- **Platform Integration**: Native iOS and Android localization support

## Troubleshooting

### Common Issues

#### Missing Translations
- **Fallback Handling**: Ensure proper fallback to default language
- **Key Validation**: Check that all translation keys are present
- **Cache Issues**: Clear cache when translations don't appear
- **File Format**: Verify dictionary file format is correct

#### Display Problems
- **Character Encoding**: Ensure proper UTF-8 encoding
- **Font Support**: Verify fonts support required characters
- **Layout Issues**: Check for text overflow or layout breaks
- **RTL Support**: Verify right-to-left language display

#### Performance Issues
- **Dictionary Size**: Optimize large dictionary files
- **Caching**: Implement proper caching strategies
- **Loading Speed**: Minimize dictionary loading time
- **Memory Usage**: Monitor memory usage with large dictionaries

## Example Dictionary

### English Dictionary (en-US)
```json
{
  "app.title": "IoT Dashboard",
  "navigation.home": "Home",
  "navigation.devices": "Devices",
  "navigation.analytics": "Analytics",
  "navigation.settings": "Settings",
  "buttons.save": "Save",
  "buttons.cancel": "Cancel",
  "buttons.delete": "Delete",
  "messages.saved": "Changes saved successfully",
  "messages.error": "An error occurred"
}
```

### Spanish Dictionary (es-ES)
```json
{
  "app.title": "Panel IoT",
  "navigation.home": "Inicio",
  "navigation.devices": "Dispositivos",
  "navigation.analytics": "Análisis",
  "navigation.settings": "Configuración",
  "buttons.save": "Guardar",
  "buttons.cancel": "Cancelar",
  "buttons.delete": "Eliminar",
  "messages.saved": "Cambios guardados exitosamente",
  "messages.error": "Ha ocurrido un error"
}
```

## Next Steps

1. **Plan Your Languages**: Determine which languages your users need
2. **Create Base Dictionary**: Start with your primary language
3. **Add Translations**: Begin with the most commonly used text elements
4. **Test Implementation**: Verify translations work correctly
5. **Gather Feedback**: Collect user feedback on translation quality
6. **Expand Coverage**: Gradually add more languages and complete translations

Related Topics:
- [User Management](../access-management/user-management)
- [Branding and Deployment](../getting-started/branding-deployment)
- [Theme Customization](../getting-started/theme-customization)
- [Mobile App Integration](../getting-started/mobile-app)

Dictionaries and multi-language support help you create truly global applications that serve users in their preferred language and terminology.