---
title: "Navigation bar"
description: "This article explains what the navigation bar in your Run portal is, where it appears, and how to customize its logo and colors to match your brand."
tags: ["tagoio"]
---
The navigation bar is a section of your Run portal that lets end users easily navigate between pages and access their account information. The bar appears at the top of the Run portal for convenient visibility and can be customized to match your brand by adding your logo, choosing colors for the bar, text, and icons, and adding extra items to the user menu.

<!-- Image placeholder removed for build -->

## Your logo & colors

You can add your company's logo by accessing the [Run module](https://admin.tago.io/run) and inserting the URL of your image in the **Main Configuration** section. This will apply the logo to the navigation bar and to signup pages. For more advanced customization, you can set a distinct logo for the navigation bar or implement dynamic logos based on [Run User Tags](/docs/tagoio/getting-started/tags-system.md)

### Color scheme

The color scheme for the bar, text, and icons can be configured in the **Theme** section of your Run. Discover more about [Run Themes](/docs/tagoio/tagorun/getting-started/run-theme.md) and their capabilities.

### Implementing dynamic logos

Create a personalized experience for different user groups or roles by displaying unique logos in the navigation bar with the help of the [Tags System](/docs/tagoio/getting-started/tags-system.md).

1.  Navigate to the **Run module** → *Navigation Bar* → *Navigation Bar Logo* and enable the **Use dynamic logo** option.
2.  A new **Tag Match** field will appear, allowing you to specify a [tag key](/docs/tagoio/getting-started/tags-system.md) that corresponds to the custom logo URL.
3.  Existing end‑user tags will be displayed here. If you haven’t created a tag containing your logo image URL, you can do so by accessing the **User** module and adding the appropriate tag to your end‑users.
4.  For users without a matching tag key, the logo specified in the **Default Logo URL** field will be displayed, ensuring consistent branding across all user experiences.

### User menu customization

The user menu is available to signed-in users and works as a central hub for accessing their account settings, preferences, and signing out from the Run portal. You can configure it to have additional items, ranging from simple text (such as a version number for your application) to incorporating external links or links to specific dashboards within your application.

To add new items to your user menu:

1.  Navigate to your **Run module** and select the **Navigation Bar** tab.
2.  Click *Add new item* and configure the following options:
    - **Label:** the name of the option that will be displayed for your end‑users.
    - **Icon:** choose the icon along with its color, which will be displayed next to the option.
    - **Type:** determines the type of field the user will interact with.
    - **Alignment:** choose the text alignment direction for the item.
    - **Visibility options** (eye icon): allows you to restrict certain items to specific users using the [Tag System](/docs/tagoio/getting-started/tags-system.md) associated with the [Access Management](/docs/tagoio/tagorun/access-management/) feature.

Once you have configured your user menu and deployed your updated Run, your users can see the menu items that they have permission to view when signed in.
