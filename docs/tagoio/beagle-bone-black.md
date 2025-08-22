---
title: "Beagle Bone Black"
description: "This short tutorial explains how to integrate a BeagleBone Black (BBB) board with TagoIO, demonstrating how to send a digital input status to a dashboard and configure an Action to email when the switch closes."
tags: ["tagoio"]
---

![BeagleBone Black board](/docs_imagem/tagoio/beagle-bone-black-2.jpg)

## Overview
This simple tutorial uses the BeagleBone Black (BBB) board to demonstrate key principles for integrating your solution with TagoIO. Beyond connecting the BBB to the cloud, you will learn how to structure and reuse this code in your own application.

## Example: sending a digital input status
In this example, the BBB will send the status of a digital input to TagoIO. The input status will be visualized on a dashboard. Using the [Actions](../actions/actions) capability, you can configure the system to send an email whenever the switch changes to the closed state.