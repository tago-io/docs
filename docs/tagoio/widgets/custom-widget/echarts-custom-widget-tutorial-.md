---
title: "ECharts Custom Widget Tutorial "
description: "This article explains how to create a Ring Gauge custom widget for TagoIO using the ECharts library, and outlines the three main steps: setting up your development environment, implementing the widget components, and deploying the widget to TagoIO Files."
tags: ["tagoio", "widgets", "tutorial"]
---
In this tutorial, we will guide you through creating a Ring Gauge custom widget that displays multiple variables simultaneously in an interesting format.

To achieve this, we leverage the [ECharts library](https://echarts.apache.org/), a robust and highly customizable charting library that simplifies the development of interactive and visually appealing data visualizations. Using ECharts can significantly speed up development and help ensure the custom widget is both efficient and aesthetically pleasing.

<!-- Image placeholder removed for build -->

This tutorial is structured into three comprehensive sections to facilitate a smooth learning experience:

1. Installing Dependencies and Setting Up Your Development Environment: Walk through the initial setup, including installing necessary dependencies and configuring your environment so you have everything needed to get started.
2. Key Components of Your Custom Widget: Explanation and examples of the main building blocks of the widget, including `widget.tsx` and `widget.view.tsx`, to implement core functionality and visual layout.
3. Deploying your Custom Widget Code to TagoIO Files: Steps to deploy your widget code to the TagoIO Files section so it can be used within the platform.

## Installing Dependencies and Setting Up Your Development Environment
We will walk you through the initial setup, including installation of required dependencies and configuration of your development environment. This ensures you have the tools and libraries needed for building and testing the Ring Gauge widget.

### Prerequisites

Before you begin, ensure you have the following:

- **A TagoIO account**: You need an active TagoIO account to access the dashboard and deploy custom widgets. Click [here](https://admin.tago.io/signup) to create your account.
- **Basic knowledge of TagoIO**: Familiarize yourself with TagoIO's platform and understand the basics of creating and managing dashboards. Click [here](https://tago.io/learning-center) to access our Learning Center and check out our training modules.
- **Node.js and npm**: Ensure you have Node.js and npm (Node Package Manager) installed on your machine.
- **React knowledge**: Basic familiarity with React is necessary as you will be using it to create custom widgets.

### Download the Project Repository

First, download the project repository from GitHub. This repository contains the template and initial setup for creating custom widgets using React, HTML, and CSS.

1. [Custom Widget Repository](https://github.com/tago-io/custom-gauge-tutorial)

You can clone it with Git or download it as a ZIP file and extract it to your desired location:

```bash
git clone https://github.com/tago-io/custom-widget-typescript-template.git
```

### Install Dependencies

Next, install all the dependencies used in the project. These dependencies are essential for the project to function correctly.

Using NPM, run the following command to install all dependencies:

```bash
npm install
```

The libraries used include:

- **TagoIO Custom-widget** – provides the necessary tools and functions to create custom widgets for TagoIO dashboards.
- **Luxon** – a library for working with dates and times in JavaScript, along with its TypeScript type definitions (`@types/luxon`).
- **ECharts** – a powerful and flexible charting library for creating interactive charts.

### Port Forward to Allow TagoIO to Access Your Code

To view your custom widget in the TagoIO dashboard during development, you need to set up port forwarding. This allows TagoIO to access your local development server.

1. Launch Visual Studio Code and open your project folder.
2. Click on **Terminal** → **New Terminal**.
3. In the terminal, type `npm start` and press Enter.  
   The command will start the local server hosting your custom widget. Copy the port number from the terminal output (e.g., `localhost:3000`).
4. Above the terminal window, click on **Ports**, then **Forward Port**.
5. Enter the port number you noted in step 3 and press Enter.
6. Right‑click on the newly created port forward, select **Change Visibility**, and set it to **Public**.
7. Copy the URL provided; you will need to add this URL to the custom widget in your TagoIO dashboard.

### Create the Custom Widget in Your Dashboard

Once you have set up port forwarding, create the custom widget so that you can see what you're developing:

1. Go to your TagoIO admin panel.
2. Select a dashboard where you would like to add the custom widget.
3. Create a new widget and, in the **URL & Parameters** section, add your local development server URL.
4. Click on **Configure Parameters** and enable `show_time`. When this is enabled, it will display the last time the variable was received.

By following these steps, you will have your custom widget up and running in your TagoIO dashboard.

## Key Components of Your Custom Widget
This section covers the main components required to build the widget and how they interact:

- `widget.tsx` — contains the widget logic, data handling, and integration points with TagoIO.
- `widget.view.tsx` — contains the UI rendering using ECharts (or other front‑end code) and handles the visual layout.

### `widget.view.tsx`: Managing State and Callbacks

The `widget.view.tsx` file handles two main tasks:

1. **State Management** – keeps the internal state in sync with TagoIO, both in the Admin and RUN environments.
2. **Callbacks** – provides functions that the presentational component can use from the Custom Widget Library.

Key callbacks include:

- `window.TagoIO.ready()` – starts communications with TagoIO.
- `window.TagoIO.onStart()` – creates the widget’s structure and prepares it to receive data.
- `window.TagoIO.onRealtime()` – receives device data to display on the widget.
- `window.TagoIO.onSyncUserInformation()` – receives user data for formatting.

At the end of the `useEffect` function, these properties are returned to the widget itself located within `widget.tsx`.

### `widget.tsx`: Rendering and Data Conversion

The `widget.tsx` file is in charge of showing the custom widget’s interface. It uses the widget’s configuration settings and data from variables and resources, and employs handlers provided by the view component.

Key responsibilities:

1. **Define Widget Properties** – include:
   - `data`: The data fetched from the API.
   - `showTime`: A parameter to determine if the time should be displayed.
   - `userSettings`: User‑specific settings such as date and time format.
2. **Create the Widget Component** – handles rendering logic, memoizes data, formats it according to user settings, initializes the chart, and manages window resize events.
3. **Handle Loading State** – displays a “loading” message if data is not available.
4. **Render the Widget** – ensures the gauge chart occupies the full available space.

## Deploying your Custom Widget Code to TagoIO Files
Once your widget is ready and tested locally, this section explains how to upload and deploy the widget files to the TagoIO Files area so your custom widget becomes available in the platform.

### Creating the Custom Widget Folder and Getting Your Profile ID

1. **Create a Folder in TagoIO Files**  
   - Go to your TagoIO Admin panel → **Files** module → create a new folder (e.g., `ring-gauge-widget`).

2. **Retrieve Your Profile ID**  
   - Click on your account image in the top right corner → **My Account** → select the profile you are using → click **More** to find your profile ID and save it.

### Modify the `package.json` File for Your Use Case

Open the project folder’s `package.json` file, locate the `build` line, and replace:

- The placeholder profile ID with your own.
- The default folder name with the folder you created in TagoIO Files.

Example snippet (replace placeholders accordingly):

```json
"scripts": {
  "build": "react-scripts build --profileId YOUR_PROFILE_ID --outputPath dist/your-folder-name"
}
```

### Building and Deploying Your Custom Widget Code

1. In your terminal, run:

   ```bash
   npm run build
   ```

2. After the build completes, open the `dist` folder.
3. Copy all `.js`, `.css`, and `.html` files (ignore any files ending with `.map`) into the folder you created in TagoIO Files.

### Updating the Widget URL

Finally, paste the new URL of your widget (the one pointing to the files you just uploaded) into the custom widget configuration in your dashboard. This replaces the local development server URL and completes the deployment process.

With these steps completed, your Ring Gauge custom widget is fully deployed and ready for use within TagoIO dashboards.