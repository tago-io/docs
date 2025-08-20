# Navigation Bar

The navigation bar is a section of your [Run portal](../overview) that allows your end-user to easily navigate between pages and access their account information. The bar is located on the top of your run portal for convenient visibility, and can be customized to match your brand identity by incorporating your own logo, selecting the desired color scheme for the bar, text, and icons, and even adding extra items to the user menu.

![Navigation bar example](https://help.tago.io/galleryDocuments/edbsnaa27330731d38c92dec43376015ce450b94a267fc22aba92cb4b5ce5c1413606b25c975946e740cdb082cb3b3b337c18?inline=true)

## Your Logo & Colors

You can add your company's logo by accessing the [Run](https://admin.tago.io/run) module and inserting the URL of your image in the **Main Configuration** section. This will apply your logo to the navigation bar and signup pages. For more advanced customization, you can set a distinct logo for your navigation bar or implement dynamic logos based on Run User Tags.

The color scheme for the bar, text, and icons can be configured in the **Theme** section of your Run. Discover more about [Run Themes](./theme-customization) and their capabilities.

> **Info**: You can upload the image files for the logo on TagoIO's file storage service.

### Implementing Dynamic Logos

Create a personalized experience for different [Users](../access-management/user-management) groups or roles by displaying unique logos in the navigation bar with the help of the Tags System.

To implement dynamic logos, navigate to the [Run module](https://admin.tago.io/run) > Navigation Bar > Navigation Bar Logo and enable the '**Use dynamic logo**' option. Upon activation, a new '**Tag Match**' field will appear, allowing you to specify a tag Key that corresponds to the custom logo URL.

![Dynamic logo configuration](https://help.tago.io/galleryDocuments/edbsne17012da75d203e92f8246d4c4a425065077276db63339f16978d1e8280249554478fc12255dfae72ca2410053b0e36a?inline=true)

Your existing end-user tags will be displayed here. If you haven't created a tag containing your logo image URL, you can do so by accessing the [User](https://admin.tago.io/usermanagement) module and adding the appropriate tag to your end-users.

![User tag configuration](https://help.tago.io/galleryDocuments/edbsn704b33d6adef6a2298cdbefab415594f4a9037eba7c53368cef18a999d9f65249e37f39d1e4b9ced515a61c2a059593c?inline=true)

For users without a matching tag key, the logo specified in the '**Default Logo URL**' field will be displayed, ensuring consistent branding across all user experiences.

## User Menu

The user menu is available to signed-in users and work as a central hub for accessing their account settings, preferences, and signing out from the Run portal. Although, you can configure it to have additional items, ranging from simple text (such as a version number for your application) to incorporating external links or links to specific dashboards within your application.

To add new items to your user menu, navigate to your [Run](https://admin.tago.io/run) module and select the **Navigation Bar** tab.

![User menu configuration](https://help.tago.io/galleryDocuments/edbsn3d6a0882f1e1c9aee7fb9df789bc92dedd4b70303e50431d6b41b24095432b3d5b554ee33a0466c753aaaedd6945e2be?inline=true)

You can customize the following options when adding a new item to your bar:

1. **Label**: the name of the option that will be displayed for your end-users.

2. **Icon**: choose the icon along with its color, which will be displayed next to the option.

3. **Type**: determines the type of field the user will interact with.

4. **Alignment**: choose the text alignment direction for the item.

5. **Visibility options (eye icon)**: allows you to restrict certain items to specific users using the Tag System associated with the [Access Management](../access-management/access-management-overview) feature.

Once you have configured your user menu and deployed your updated RUN, your users can see the menu items that they have permission to view when signed in.

> **Info**: You can use a key from your [Dictionary](../dictionaries/multi-language) to replace the text for the Label. Read more about [Using Dictionaries & Multi-language](../dictionaries/multi-language).

## Best Practices

### Logo Guidelines
- Use high-resolution images for crisp display
- Ensure your logo works well with your chosen color scheme
- Test logo visibility across different devices and screen sizes
- Consider using SVG format for scalability

### User Menu Design
- Keep menu items relevant and useful for end-users
- Use clear, descriptive labels for menu items
- Group related items logically
- Test visibility conditions thoroughly

### Color Scheme
- Maintain good contrast for accessibility
- Ensure text remains readable with your chosen colors
- Test your theme across different browsers
- Consider both light and dark mode preferences

## Next Steps

- Configure your [Sidebar](./sidebar) for optimal navigation
- Set up [Theme Customization](./theme-customization) for consistent branding
- Learn about [Custom Settings](./custom-settings) for advanced configuration
- Explore [User Management](../access-management/user-management) and access controls
