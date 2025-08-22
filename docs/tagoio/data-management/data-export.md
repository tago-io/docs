---
title: "Data Export"
description: "This article explains the available options for exporting device data in TagoIO, and provides step-by-step instructions for exporting data from a device page, including available export options and important quota considerations."
tags: ["tagoio"]
---
At TagoIO, you can export device data in several ways: directly from the Admin panel on a device's page, via the [API](../api/api-overview), or from [Widgets](../widgets/widgets-overview) in either the Admin panel or the [TagoRun portal](../../tagorun/tagorun-mobile-app). Exporting data consumes your [Data Output](/tagoio/services/data-output-service) service quota.

Here's how to use each export source:

## From the device page

Access this feature in the Admin panel under the [Device module](../devices/devices). Select a device and open the "Data" tab. Before exporting, use the filtering options to refine the data you need and avoid unnecessary consumption of your Data Output quota. Learn more in [Filtering Variables](/tagoio/data-management/filtered-variables).

To export, click the "Export" button in the top-right corner. The export dialog provides the following options:

- **Columns** — choose which columns to include in the export:
  - ID
  - Variable
  - Value
  - Group
  - Location
  - Metadata
  - Time
- **File format** — select the export file format (for example: CSV or JSON).
- **Amount of records** — enter the number of records to export, or select the "All data" option to export all available records (the example shows "All data (~157K)").
- A reminder that "Export data will consume your Data Output service."
- **Export button** — located at the bottom-right of the dialog to start the export.

> **Note:** For immutable devices that group data into chunks, you can also export data in chunks. Learn more about exporting data chunks here: [Chunk Management](/tagoio/data-management/chunk-management).

<!-- Image placeholder removed for build -->

Notes:
- Use filtering options on the device "Data" tab to limit the exported data and reduce Data Output quota usage.
- Some widgets within the dashboard offer the capability to export the data they present. This feature is not available for all widgets; check by clicking the three dots in the widget's header.
- For instructions on exporting from Widgets or via the API, refer to the corresponding sections: From Widgets ([../widgets/widgets-overview]) and Using our API ([../api/api-overview]).