---
title: "Python SDK"
description: "This article provides quick installation and usage instructions for the TagoIO Python SDK, plus guidance on using remote imports within Python Analyses."
tags: ["tagoio"]
---
You can access the full SDK documentation at: https://py.sdk.tago.io/

## Installation

Install the Python SDK with pip:

```bash
pip install tagoio-sdk
```

## Quick Start

Basic example to access your account and list devices. Replace "your-token" with your account token:

```python
from tagoio_sdk import Account

account = Account({"token": "your-token"})
devices = account.devices.list()
print(devices)
```

## Remote Imports in Analysis

Python Analyses support remote imports. Import packages directly in your analysis script and they will be installed at runtime. Example imports:

```python
from tagoio_sdk import Analysis
from pandas import DataFrame
import requests
```

When executing requests to TagoIO, you will have a limit on the number of requests that can be made during a certain time period. Read more about our [Rate Limits](/docs/tagoio/profiles/services/rate-limits-hard-limits.md).

<!-- Image placeholder removed for build -->
