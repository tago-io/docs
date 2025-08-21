---
title: "LoRaWAN Publication of Environmental Measurements with a LoRa-E5 Module"
description: "This article explains how to publish environmental sensor measurements over LoRaWAN using a Grove LoRa‑E5 module and a NUCLEO-WB55 board, integrating with The Things Network (TTN) and TagoIO, and includes the required hardware and basic assembly steps."
tags: ["tagoio"]
---

This tutorial explains how to implement a LoRaWAN publication on The Things Network (TTN) with a TagoIO integration using a MicroPython driver for a Grove LoRa‑E5 module. It was originally posted in French at https://stm32python.gitlab.io/fr/docs/Micropython/grove/lora-e5 and credits Julien Terrier and Yannick Marietti.

To learn more about LoRa and LoRaWAN, consult this page (link to a general LoRa/LoRaWAN overview). For a deeper technical explanation, read the document by Sylvain Montagny (University of Savoie—Mont Blanc) (link to Sylvain Montagny's LoRa/LoRaWAN document). Additional references are available at the end of the full tutorial.

## Required materials and assembly

1. For the connected device (the NUCLEO‑WB55 board used in this tutorial), a Grove LoRa‑E5 module from Seeed Studio was chosen. The module uses the STM32WLE5JC System on Chip (SoC) from STMicroelectronics.
2. For the LoRaWAN gateway, the Things Indoor Gateway (TTIG) was chosen.

Minimum items:
- A TTIG LoRa‑WiFi gateway
- A Grove LoRa‑E5 module

Our connected device will consist of the following components:
1. A basic Grove extension board with its power switch set to the 3.3V position
2. A NUCLEO‑WB55 board
3. A Grove BME280 module (environmental sensor)

Assembly steps:
- Place the Grove extension board onto the NUCLEO board.
- Connect the BME280 module to an I2C connector on the Grove extension board.
- Mount the Grove LoRa‑E5 module on a UART connector (D9).
- Connect the Grove extension board to your computer using the NUCLEO board USB port.

## Firmware and MicroPython driver

To use the LoRa‑E5 module, this tutorial uses a MicroPython firmware built for the STM32WB series (stm32wb5x) with LoRa API support. The LoRa‑E5 MicroPython driver source and related documentation are available here: https://stm32python.gitlab.io/fr/docs/Micropython/grove/lora-e5

You will need the appropriate firmware and driver for the STM32WLE5JC-based module and instructions for flashing the NUCLEO board with the MicroPython image. (Refer to the linked MicroPython Grove LoRa‑E5 documentation for specific build and flashing steps.)

## Credits and original post

This tutorial is based on the original French post found at the stm32python GitLab pages (link above). All credit for the MicroPython driver and original instructions go to Julien Terrier and Yannick Marietti.

Note: Additional configuration steps for TTN, TagoIO integration, payload decoding, and references are available later in the full tutorial (not visible in this excerpt).