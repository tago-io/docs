---
title: "Widget Cache system"
description: "This article explains how the Widget Cache system improves dashboard performance by storing widget data and computed results on TagoIO servers, and how cached data is served and refreshed. It also points to where you can enable caching for individual widgets."
tags: ["tagoio", "widgets"]
---

The caching system optimizes the performance of your dashboards by storing widget data and any computations performed using [Data Analytics](../data-management/data-analytics). This allows future requests to be served faster by reusing results from earlier requests, speeding up load times and improving the overall responsiveness of your dashboard. Because less data needs to be queried, caching also reduces Dashboard data output consumption.

> **Note:** The caching system is mandatory when using [Data Analytics](../data-management/data-analytics).

## How It Works

When a widget is first loaded by any user, its data is fetched and stored in cache storage on TagoIO servers. Subsequent accesses to the same widget will retrieve the pre-fetched data from the cache, whether accessed through the [Admin](https://admin.tago.io/) or [Run portal](../../tagorun/tagorun-mobile-app). Each widget’s cache is enabled individually and is automatically refreshed after a specified expiration time (for example, 30 seconds or 1 hour).

For example, if you configure a widget to cache data for 10 minutes, the first time anyone accesses the Dashboard (via the Admin or Run portal) with the same visualization settings, the cache system will store the data on our servers for 10 minutes. Anyone accessing the dashboard within that 10-minute window will immediately receive the cached data without waiting for the API to query it again, resulting in faster response times. After the 10-minute period, if the dashboard is being viewed, the widget will reset its cache and update with fresh data.

This feature is particularly beneficial when widgets display complex or resource-intensive data, such as results from [Data Analytics](../data-management/data-analytics) functions.

## Enabling the cache system for your widget

To enable or configure caching for a specific widget, use the widget settings in the Dashboard editor. For step-by-step instructions, see [Enabling the cache system for your widget](../dashboards/dashboard-overview#widget-cache).

## Related documentation

- [Widgets Overview](../widgets)  
- [Data Analytics](../data-management/data-analytics)  
- [Displaying Units](../displaying-units)  
- [Frame Settings](../frame-settings)  
- Widget Cache system (this article)  
- [Formula](../formula)  
- [Reference Lines](../reference-lines)  
- [Multiple Axes in Chart Widgets](../widgets/multiple-axes-chart-widgets)  
- [Widget Header](../widgets/widget-header)  
- [Embedding Widgets to your website](../widgets/embedding-widgets-website)

If you need the exact internal URLs, refer to the corresponding articles in the TagoIO Help Center (links remain as the link text above).