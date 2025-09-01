---
title: "Analysis Service"
description: "This article explains how Analysis runtime is counted against a Profile limit in TagoIO, how to estimate monthly runtime, and which scripts are included in the accounting."
tags: ["tagoio", "analysis"]
---
## Overview

Every time an Analysis runs one script, its runtime duration (measured in 1-second increments) is counted against the limit in that specific Profile. This limit defines the total available runtime your Analyses can use inside TagoIO.

## Example

For example, if you have one Analysis that runs every day for 2 minutes and another that runs on only one day of the month for 5 minutes, you would need:

```
2 * 30 + 5 = 65 minutes/month
```

to run your Analyses. It is safer to add some extra time to account for time variation or for cases where your script becomes slower as it parses more data.

## Which scripts are counted

Only scripts that are configured to run on TagoIO are counted. Scripts that run from "External" do not count.

![Run this script from options (TagoIO / External)](/docs_imagem/tagoio/analysis-service-2.png)

:::note

If this limit is exceeded, no scripts in that Profile will be executed for the rest of the month.

:::