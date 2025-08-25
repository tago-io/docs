---
sidebar_position: 3
title: Type
slug: /tagocore/action/type
---

# Action Type

Action types define what you want to perform when an Action is triggered.

## Run Analysis Script

Actions have the power to run [Analysis](/docs/tagocore/analysis) scripts. This is a very powerful feature, as it gives you more flexibility on the type of operation you can perform.

## Post data to HTTP End-Point

This action can send a POST request directly to an endpoint defined by you. When the Action is triggered, it will send a POST the JSON received (as defined by the variable in the Trigger) to the configured HTTP endpoint address.
