---
title: "Google Analytics"
description: "This article explains how to integrate a RUN application with Google Analytics, obtain the Measurement ID, and use it in TagoIO to track users and gather insights."
tags: ["tagoio"]
---
You can integrate your RUN application with Google Analytics to track users and obtain actionable insights. Google Analytics lets you analyze in-depth details about your RUN users and provides data to help improve your solution.The tool can provide valuable insights to help you improve your solution based on real data.

All you need from Google Analytics is the [Measurement ID](https://support.google.com/analytics/answer/12270356?hl=en#:~:text=A%20Measurement%20ID%20is%20an,same%20as%20your%20destination%20ID) to add to your RUN setup.

## How to integrate Google Analytics with TagoIO

To integrate, follow these steps:

1. Create a Google Analytics account at https://analytics.google.com/.  

2. Set up an Analytics property and a data stream for your website and/or app. You can follow Google’s setup guide: [Set up Analytics for a website and/or app - Analytics Help](https://support.google.com/analytics/answer/9304153).  

3. Copy the Measurement ID from the web stream details in Google Analytics.  

4. Back to TagoIO, go to your [RUN setup page](https://admin.tago.io/run), under **Session Integration > User Engagement**, paste the key into the *Google Analytics ID* field and save.

You are ready to track the visitors (your RUN users) using Google Analytics!

Notes:
- The Measurement ID is required in the RUN setup to enable analytics collection.
- If you installed tags recently and data collection does not appear active, wait up to 48 hours and verify your tag installation in Google Analytics.