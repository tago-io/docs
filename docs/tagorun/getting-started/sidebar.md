# Sidebar

The sidebar on the left side of your Run application is very important for end users to navigate between dashboards. You can create buttons for quick access, and not only to open dashboards but also to open other pages or even connect a new Wi-Fi device.

You can customize your sidebar settings by accessing the [Run](https://admin.tago.io/run) module, and selecting the **Sidebar** tab.

![Sidebar configuration](https://help.tago.io/galleryDocuments/edbsn046c50b6f41a27bac08827cc50dee9b9e1a9b15179970926f40dde08bacead6c1a44e3adb61b26c2d59e7011b3cb289e?inline=true)

> **Note**: It is possible to modify the appearance of your sidebar with your own color palette. Learn more about [Run Themes](./theme-customization).

## Dashboard Search Bar and Sorting Options

The Dashboard Search feature enhances the end-user experience by providing a search functionality and sorting options for dashboards within the Run portal panel.

![Dashboard search](https://help.tago.io/galleryDocuments/edbsn2ae0e75abd2400efb60282b67a6606415d8b29ecc595af530a96705ebb7cc8d02e1a3c7b2f4b673867551082694dc1de?inline=true)

To enable the search bar, toggle the option "**Enable dashboard search**," and a new section will be added to the Run portal.

You can customize the search bar section label by entering the desired text. If left blank, the default label will be "Dashboards." Additionally, you can use a KEY defined in your dictionary to dynamically translate the text to your end-users' language. Learn more about [Using Dictionaries & Multi-language](../dictionaries/multi-language).

## Logo Button

You can define what happens when your end-user clicks on your logo or what message is displayed when the mouse is over.

### 1. Tooltip

To display a tooltip over your logo, you need to write a text in the field **Button tooltip.**

![Logo tooltip](https://help.tago.io/galleryDocuments/edbsn42d5ac12bbd5138f53c31f3ef1aaf6d1cba45d953ed38e43c83f26bd4b8e30e6704b262f6b4b51606e6ce9ac1127993c?inline=true)

> **Info**: Notice that you can use a KEY defined in your [Dictionary](../dictionaries/multi-language) to display a text that will be substituted according to the languages available for your end-users.

### 2. Button Action

By default, when an end-user click on your logo, he will be redirected to your [Run URL domain](./branding-deployment), but you can customize what happen after clicking on it. The actions can be the following:

1. **Open Dashboard**: it will open the dashboard you select from a list of your current ones. The Run user must have access to this dashboard in order to visualize it; otherwise, nothing will happen. Read more about [Access Management](../access-management/access-management-overview).

2. **Show iFrame**: this button opens an external link inside the Run application, keep in mind the page must be embeddable.

3. **Show HTML file content**: it opens a custom HTML file that can be displayed inside the portal (e.g hosted in Files).

4. **Open external link**.

## Sidebar Buttons

You can add buttons to your sidebar so you end-users can quickly navigate between dashboards, pages or scan a new Wi-Fi device.

![Sidebar buttons](https://help.tago.io/galleryDocuments/edbsn435b64f09c842f1c6cffc57f8144ebc46ad95d2dac5ab075150834060585a9dec89f69fe09106e894bd8dd2b8b5389f6?inline=true)

> **Note**: Dashboards that are used as buttons are automatically hidden from the dashboard list on the sidebar. This makes the interface of your [Run](../overview) portal cleaner, avoiding the same dashboard from appearing twice in the list of dashboards and as a sidebar button.

### 1. Label

You can define the text that will be displayed under the icon.

### 2. Icon

Select an Icon from our list or add yours using an URL to your SVG file. You can also change the color that better fits your project style.

### 3. Action

When you create a new button, by default it will be disabled and won't be displayed in your Run portal. However, you can change what will happen when your end-user clicks on it. The actions available are the following:

1. **Disabled**: remove the button from your Run application.

2. **Open dashboard**: this will open the dashboard you select from a list of your current ones. The Run user must have access to this dashboard in order to visualize it; otherwise, nothing will happen. Read more about [Access Management](../access-management/access-management-overview).

3. **Show iFrame**: it opens an external link inside the Run application, keep in mind the page must be embeddable.

4. **Show HTML file content**: it opens a custom HTML file that can be displayed inside the portal (e.g hosted in Files).

5. **Open external link**.

6. **Open Setup Wi-Fi Device**: initiate the process of connecting an Wi-Fi device. You must first activate this option by navigating to the [Run](https://admin.tago.io/run) module, selecting the **Mobile Features** tab, and then choosing the **Setup Wi-Fi device** option to activate it.

### 4. Platform

This option lets you select where to display the button: on Desktop, Mobile, or both. After you make a selection, the button will only be visible on the chosen platform(s). For example, if you access TagoRUN on your mobile device browser, TagoRUN will treat it as a mobile platform.

### 5. Break Line

You can customize the number of buttons per line. By clicking on the slider, you can either move the button to a new line or switch it off to place multiple buttons on the same line.

> **Note**: You can have up to three buttons arranged side by side.

### 6. Visibility Conditions

By default, every button you create will be displayed for all users; however, let's say you want to add a button called "Admin Settings" which should be available only for end-users with administrator access, you can do that by setting a visibility condition.

You can define who should see a button by clicking on the little eye icon and adding a new visibility condition using user Tags. Read more about [configuring Tags for end-users](../access-management/access-management-overview).

## Next Steps

- Learn about [Navigation Bar](./navigation-bar) customization
- Explore [Theme Customization](./theme-customization) options
- Set up [Custom Settings](./custom-settings) for your application
- Configure [User Management](../access-management/user-management) and permissions
