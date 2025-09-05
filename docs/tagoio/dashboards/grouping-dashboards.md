---
title: "Grouping Dashboards"
description: "This article explains how to group related dashboards in TagoIO using dashboard tags and how to configure up to three grouping levels so dashboards appear organized in the sidebar."
tags: ["tagoio", "dashboards"]
---
You can group related dashboards using dashboard tags. Use the dashboard settings to create tags (key/value pairs) and then select those tag keys to define grouping levels. Dashboards will be grouped in the sidebar using the chosen tag keys and their values.

## Steps to group dashboards

1. Open the dashboard you want to group and click the gear icon to edit it (Dashboard > gear icon).

2. Go to the "Tags" section and create the tags you need. Tags are key/value pairs that appear as custom columns in the dashboard list.
   - Example keys and values:  
     - Key: country — Value: USA  
     - Key: state — Value: California  
     - Key: city — Value: Los Angeles
     
   ![Tags and Tag Values in Dashboard Settings](/docs_imagem/tagoio/grouping-dashboards-2.png)

3. In the "Group dashboards using Tags" section, select the Tag Key to be used for each grouping level (Level 1, Level 2, Level 3). You can include the tag in Run users by toggling the corresponding switch.

   ![Group dashboards using Tags configuration (select keys for level 1, 2, 3 and include-in-Run-users toggles)](/docs_imagem/tagoio/grouping-dashboards-2.png)

## Notes and behavior

- To create sub-levels, repeat the selection procedure for each level. It is possible to create up to three grouping levels.
- After configuring grouping, dashboards will be grouped in the sidebar according to the selected tag keys and their values.
- If you delete a tag that is used for grouping, any sub‑levels that depend on that tag will be removed as well.
- When you share a grouped dashboard, the grouping will be visible on the shared account’s list of dashboards.