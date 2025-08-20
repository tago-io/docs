# Custom Settings

Custom Settings is a powerful feature that enables you to create unique visualization preferences for your [end-users](../access-management/user-management) that goes beyond [TagoRUN](../overview)'s default settings. After configuring your custom settings, they will appear in your end-users' Account Settings.

With this feature, you can customize preferences to fit specific needs, such as selecting preferred units for visualizing temperature, distance, and other measurements in combination with Dynamic Formulas.

![Custom Settings in user interface](https://help.tago.io/galleryDocuments/edbsn1d8e1bddef4b4dd4b701b03d0f4177d66c370accb3f69af2764d9c81cae94c0d6b5bb4c3e92b0f8c85988268f641430a?inline=true)

## How It Works

To create your Custom Settings, first navigate to your [Run](https://admin.tago.io/run) and click on the Custom Settings tab. From there, you can configure the following fields:

![Custom Settings configuration](https://help.tago.io/galleryDocuments/edbsn30143e5a36344965f05238dc09a6ac48f3cdb81d10e781fd283f59d1a4f351e585d30c485b57c984ac3f895b5b3233ad?inline=true)

### Field Configuration Options

1. **Name**: the name of the field that will be displayed for your end-users.

2. **Type**: determines the type of field that the user will interact with.

3. **Tooltip**: the text that will display when the user hovers over the field.

4. **Required**: if you set the field as required, the user will not be able to save without selecting a preference.

5. **Field Options**: allows you to specify the options that the user can select. You must define a **Value** to be used with Dynamic Formulas and a **Label** that will be displayed for your end-users. Additionally, you can set a value as **Default**, which will be applied to new users. At least one option must be set as the default.

> **Important**: Keep in mind that the **Values** set in the **Field Options** are supposed to be unique since they are used as identifiers.

> **Info**: You can use a key from your [Dictionary](../dictionaries/multi-language) replace the text for the fields **Name**, **Tooltip** and **Label** in Field Options. Read more about [Using Dictionaries & Multi-language](../dictionaries/multi-language).

> **Caution**: After saving the options for a dropdown field, it's essential not to change the **Value** from **Field Options**. If you need to modify the **Value** or remove an option, you should update your users' preferences using the SDK or an Analysis.

Keep in mind that editing the options for a field will not automatically update the preferences that your users have already saved.

Once you have created your Custom Fields and deployed your updated [RUN](../overview), your users can select their preferences by navigating to the Visualization Preferences tab on their Account page.

## Field Types

### Dropdown/Select
- Provides a list of predefined options for users to choose from
- Most commonly used for unit preferences (Celsius/Fahrenheit, km/miles, etc.)
- Each option must have a unique value and display label

### Text Input
- Allows users to enter custom text values
- Useful for personalized settings like company names or user IDs
- Can be configured as required or optional

### Checkbox
- Simple on/off toggle for boolean preferences
- Perfect for enabling/disabling specific features
- Can be set to checked or unchecked by default

### Number Input
- Allows users to enter numeric values
- Can include minimum and maximum value constraints
- Useful for thresholds, limits, or quantity preferences

## Configuring Your Custom Settings

After setting up your Custom Fields, the next crucial step is to configure your widgets to utilize **Dynamic Formulas**. This feature allows you to apply formulas to your Custom Fields created through Custom Settings.

### Using Custom Settings with Dynamic Formulas

Dynamic Formulas enable widgets to automatically adjust their display based on user preferences:

1. **Access Widget Configuration**: Edit any widget in your dashboard
2. **Enable Dynamic Formula**: Look for the formula option in widget settings
3. **Reference Custom Settings**: Use the custom setting values in your formulas
4. **Test Functionality**: Verify that changes in user preferences affect widget display

### Example Use Cases

#### Temperature Unit Conversion
```javascript
// Custom Setting: temperature_unit (celsius, fahrenheit)
// Formula in widget:
if (user_setting.temperature_unit === 'fahrenheit') {
    return (value * 9/5) + 32;
} else {
    return value;
}
```

#### Distance Measurement
```javascript
// Custom Setting: distance_unit (km, miles)
// Formula in widget:
if (user_setting.distance_unit === 'miles') {
    return value * 0.621371;
} else {
    return value;
}
```

#### Language Preferences
```javascript
// Custom Setting: language (en, es, pt)
// Use with dictionaries for multilingual support
```

## Best Practices

### Design Considerations
- **Keep it Simple**: Don't overwhelm users with too many custom settings
- **Logical Grouping**: Group related settings together
- **Clear Labels**: Use descriptive names and helpful tooltips
- **Sensible Defaults**: Set defaults that work for most users

### Implementation Tips
- **Test Thoroughly**: Verify all combinations of settings work correctly
- **User Education**: Provide clear instructions on how to access and use custom settings
- **Backward Compatibility**: Plan for how to handle changes to existing settings
- **Performance**: Consider the impact of complex formulas on widget loading times

### Maintenance
- **Monitor Usage**: Track which settings are most used
- **User Feedback**: Collect feedback on setting usefulness
- **Regular Review**: Periodically review and clean up unused settings
- **Documentation**: Keep internal documentation of all custom settings

## Troubleshooting

### Common Issues

#### Settings Not Appearing
- Verify the TagoRUN deployment is updated
- Check user permissions and access rights
- Ensure settings are properly configured and saved

#### Formula Not Working
- Validate formula syntax and logic
- Check that custom setting values match formula expectations
- Test with different user preference combinations

#### Default Values Not Applied
- Confirm at least one option is marked as default
- Verify new user registration process
- Check existing user data for missing preferences

## Advanced Features

### Conditional Visibility
- Show/hide settings based on other setting values
- Create dynamic setting experiences
- Implement progressive disclosure for complex configurations

### Integration with External Systems
- Sync settings with external user management systems
- Use APIs to programmatically update user preferences
- Implement bulk setting updates for user groups

### Analytics and Reporting
- Track setting usage patterns
- Monitor user preference trends
- Generate reports on feature adoption

## Next Steps

- Learn about [Dynamic Formulas](https://help.tago.io/portal/en/kb/articles/formula#Dynamic_Formulas) for advanced widget customization
- Explore [User Management](../access-management/user-management) to understand user preferences
- Configure [Dictionaries](../dictionaries/multi-language) for multilingual support
- Set up [Analytics](./analytics-setup) to track custom setting usage
