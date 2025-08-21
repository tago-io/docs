---
title: "Google Analytics"
description: "This article explains how to integrate a RUN application with Google Analytics, obtain the Measurement ID, and use it in TagoIO to track users and gather insights."
tags: ["tagoio"]
---

You can integrate your RUN application with Google Analytics to track users and obtain actionable insights. Google Analytics lets you analyze in-depth details about your RUN users and provides data to help improve your solution. All you need from Google Analytics is the Measurement ID to add to your RUN setup (see [Measurement ID](link-to-RUN-setup)).

## How to integrate Google Analytics with TagoIO

To integrate, follow these steps:

1. Create a Google Analytics account at https://analytics.google.com/.  
2. Set up an Analytics property and a data stream for your website and/or app. You can follow Google’s setup guide: [GA4] Set up Analytics for a website and/or app - Analytics Help (link-to-ga4-setup).  
3. Copy the Measurement ID from the web stream details in Google Analytics.

<!-- Image placeholder removed for build -->

Notes:
- The Measurement ID is required in the RUN setup to enable analytics collection.
- If you installed tags recently and data collection does not appear active, wait up to 48 hours and verify your tag installation in Google Analytics.