---
title: "Blueprint Dashboard"
description: "This article explains the Blueprint Dashboard in TagoIO, describing how it links widgets to multiple devices for scalable applications, how to configure multiple blueprint slots, and how data scope works across slots."
tags: ["tagoio", "dashboards"]
sidebar_position: 1
keywords: [tagoio, iot, dashboard, blueprint, widgets, scalability, multiple devices]
---

Blueprint is a type of [Dashboard](/docs/tagoio/dashboards/) that links [widgets](/docs/tagoio/widgets/) to devices dynamically. The same dashboard can serve hundreds of users, each seeing their own data, **without creating separate dashboards per user or device**.

![Illustration of a Blueprint Dashboard linking widgets to multiple devices](/docs_imagem/tagoio/blueprint-dashboard-2.gif)

## Concepts

### Blueprint Devices

[Blueprint Devices](/docs/tagoio/devices/blueprint-devices-entities.md) are placeholders in the dashboard configuration. Each blueprint slot resolves to a real device at runtime, chosen from a dropdown menu at the top of the dashboard. Changing the selection reloads the data for every widget that uses that slot.

You can add up to 20 blueprint slots per dashboard. Each slot is independent: changing one does not affect the others.

![Blueprint device selector](/docs_imagem/tagoio/1592330671692-dtA.png)

:::note

Blueprint Entities work the same way but use [Entities](/docs/tagoio/getting-started/entities.md) as data sources instead of devices. Not all widgets support entities — check the widget's data-source picker to see if it appears as an option.

:::

### How slot resolution works

When a user opens the dashboard and picks a device from a slot's dropdown, TagoIO queries that device's data for every widget bound to that slot. Two slots bound to different tag filters resolve to different devices. Widgets bound to Slot A never pull data from the device selected in Slot B.

---

## Setting up multiple blueprint slots

This section walks through configuring a dashboard with two independent blueprint slots.

### 1. Tag your devices

Blueprint slots filter devices by [tag key and value](/docs/tagoio/getting-started/tags-system.md). Decide on a tag scheme before creating the slots.

Example: a facility monitoring system with 4 devices, where one slot shows pump device data and another shows compressor device data.

| Device       | Tag key | Tag value    |
| ------------ | ------- | ------------ |
| Pump A       | `type`  | `pump`       |
| Pump B       | `type`  | `pump`       |
| Compressor 1 | `type`  | `compressor` |
| Compressor 2 | `type`  | `compressor` |

Apply these tags to your devices under [**Devices**](/docs/tagoio/devices) **> (select device) > Tags**.

### 2. Create the blueprint slots

Open the dashboard's edit page and go to [**Blueprint Settings**](/docs/tagoio/devices/blueprint-devices-entities.md). Add one entry for each slot:

**Slot 1 (pump data):**

- **Type:** Blueprint Device
- **Identifier:** `Pump`
- **Tag Key:** `type`
- **Tag Value:** `pump`

**Slot 2 (compressor data):**

- **Type:** Blueprint Device
- **Identifier:** `Compressor`
- **Tag Key:** `type`
- **Tag Value:** `compressor`

The Identifier is the name that appears in the widget data-source picker, so choose something that makes the distinction clear.

### 3. Bind widgets to slots

Open a [widget's](/docs/tagoio/widgets/) settings and go to the data source section. You will see a dropdown that lists your blueprint identifiers (`Pump`, `Compressor`). Assign each widget to the slot that matches its data.

Widgets bound to `Pump` will show data from whichever pump device the user selects. Widgets bound to `Compressor` will show data from the selected compressor device. The two selections are independent.

---

## End-to-end example: water treatment facility

**Goal:** one dashboard showing pump pressure and tank level from two separate devices, selectable at runtime.

**Devices:**

| Device name | Variables               | Tag         |
| ----------- | ----------------------- | ----------- |
| Main Pump   | `pressure`, `flow_rate` | `type=pump` |
| Tank 1      | `level`, `temperature`  | `type=tank` |

**Blueprint slots:**

| Identifier | Tag Key | Tag Value |
| ---------- | ------- | --------- |
| Pump       | `type`  | `pump`    |
| Tank       | `type`  | `tank`    |

**Widget layout:**

| Widget                   | Data source | Variable      |
| ------------------------ | ----------- | ------------- |
| Gauge (Pump Pressure)    | Pump        | `pressure`    |
| Line chart (Flow Rate)   | Pump        | `flow_rate`   |
| Gauge (Tank Level)       | Tank        | `level`       |
| Thermometer (Water Temp) | Tank        | `temperature` |

After setup, the operator can switch between pump devices (Main Pump, Backup Pump, etc.) using the Pump dropdown and between tanks using the Tank dropdown. Each switch reloads only the widgets bound to that slot.

:::tip

To extend this dashboard to multiple facilities, add a third blueprint slot for the facility itself. [Tag](/docs/tagoio/getting-started/tags-system.md) every device with a `facility_id` value (for example, `facility_id=site_a`), then add `facility_id` as a tag filter on the Pump and Tank slots. The operator selects the facility first, then picks the pump and tank from the devices tagged to that facility.

:::
