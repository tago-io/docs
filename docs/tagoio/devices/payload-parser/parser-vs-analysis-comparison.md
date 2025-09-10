---
title: "Parser vs. Analysis Comparison"
description: "This article explains the differences between TagoIO's Payload Parser and Analysis, summarizing capabilities, limits, and built-in features to help choose the right option for processing device payloads."
tags: ["tagoio", "analysis"]
---

The [Payload Parser](/docs/tagocore/resources/device/payload-parser.md) was created to
handle raw payloads sent by devices in order to extract measured variables or
execute simple operations. The [Analysis](/docs/tagoio/analysis/) feature is
more powerful — it includes access to [Devices](/docs/tagoio/devices/) and
external services, but there is a cost to run analyses. Payload Parser uses a
simple JavaScript engine developed by TagoIO to be easy, lightweight, and free.

## Comparison

| Features                    |               Payload Parser |                                       Analysis |
| --------------------------- | ---------------------------: | ---------------------------------------------: |
| Code size limit             |                         64kb |                                            5MB |
| Language                    |     Simple JavaScript syntax |                     Full JavaScript and others |
| Async                       |                           No |                                            Yes |
| Sync                        |                          Yes |                                            Yes |
| Allows custom functions     |                          Yes |                                            Yes |
| Allows external integration |                           No |                                            Yes |
| Allows requires/imports     | No (only built-in functions) |                                            Yes |
| Console log or context      |       Yes (Device Inspector) |                                            Yes |
| Timeout                     |                     1,000 ms |                                         Custom |
| Try/Catch                   |  No — an error stops parsing |                                            Yes |
| Predefined variables        |                          msg |                 device, context, scope, result |
| Needs Action to trigger it  |                           No |                                            Yes |
| Cost of the service         |                         Free | [Check out /pricing](https://tago.io/pricing/) |

## Notes

- Payload Parser is intended for lightweight parsing and basic operations
  directly on incoming device payloads.
- Analysis offers broader capabilities (access to devices, external services,
  larger code size, and more advanced error handling), suitable for more complex
  workflows.
- Use the [Payload Parser](/docs/tagocore/resources/device/payload-parser.md) for simple,
  free parsing needs and [Analysis](/docs/tagoio/analysis/) when you need
  external integration, advanced JavaScript features, or persistence across
  executions.
