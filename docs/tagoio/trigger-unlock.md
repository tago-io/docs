---
title: "Trigger Unlock"
description: "This article explains the Trigger Unlock feature in TagoIO, how it prevents repeated action executions by locking triggers, and when a locked trigger is allowed to execute again. It also notes that the feature is available only for Trigger by Variable."
tags: ["tagoio"]
---

Trigger Unlock is a feature that allows users to define specific conditions under which an action, once locked, can be unlocked and allowed to execute again. This locking mechanism safeguards against repetitive or unwanted triggers, ensuring that actions occur only when truly necessary. Before using Trigger Unlock, familiarize yourself with [Trigger Conditions](actions/actions#trigger-conditions).

This feature is available exclusively for the trigger type: [Trigger by Variable](trigger-by-variable).

## How It Works

By default, when a Trigger Condition is met, the corresponding action typically executes immediately. However, if Trigger Unlock conditions are also defined, the action first enters a "locked" state upon meeting the initial Trigger Condition. This lock prevents the action from being triggered again until the specified unlock conditions are met. This mechanism is particularly useful when an action should only occur once under certain circumstances and be allowed to trigger again after other conditions are satisfied.

Thus, each time a Trigger Condition is met, the trigger is locked if there is at least one Trigger Unlock condition defined. If Trigger Conditions are met but there are no Trigger Unlock conditions, the action will not get locked.

<!-- Image placeholder removed for build -->