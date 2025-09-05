---
title: "Analysis Runtime"
description: "Configure memory and monitor Python/Node.js runtime metrics for TagoIO analyses; optimize cost and performance."
tags: ["tagodeploy", "analysis"]
slug: /tagodeploy/project/analysis-runtime
---

# Analysis Runtime

The Analysis Runtime provides visibility and control over the resource usage and
performance metrics of your
[analysis](https://help.tago.io/portal/en/kb/articles/29-analysis-overview)
scripts within the TagoIO platform. Proper configuration and monitoring of
[analysis runtime](https://help.tago.io/portal/en/kb/articles/194-analysis-service)
parameters are essential for optimizing operational costs and maintaining system
performance. Analyses are billed primarily based on their execution duration and
the memory consumed during runtime.

## Memory Configuration

Memory allocation is a critical factor that directly impacts both the
performance and cost of your analyses. Each analysis execution is provisioned
with a configurable memory limit, which determines the maximum amount of RAM
available during runtime. Consuming more memory, especially when processing
large datasets or performing complex calculations, will result in higher costs.

- **Maximum Allocation:** The highest memory limit you can assign to an analysis
  is 10GB. This is intended for advanced analytics or workloads that require
  substantial in-memory processing.
- **Default Allocation:** By default, each analysis is allocated 512MB of
  memory. This configuration is typically sufficient for standard operations and
  applications that do not require intensive data processing.

Carefully assess the memory requirements of your analysis scripts. Allocate only
as much memory as needed to prevent unnecessary cost increases. Monitor memory
consumption patterns, especially after changes to data retrieval or processing
logic.

## Runtime Metrics

To help you manage and optimize your analyses, the platform provides real-time
metrics for both Python and Node.js runtimes:

### Invocation Count

This metric tracks the number of analysis executions initiated over a given
period. Monitoring invocation trends can help you identify usage patterns,
optimize scheduling, and anticipate scaling needs.

### Execution Duration

This metric records the average time (in seconds) taken for analyses to complete
their execution. Tracking duration helps you detect performance bottlenecks,
optimize script efficiency, and manage resource allocation more effectively.

## Cost and Performance Optimization

Since analysis billing is based on both execution duration and memory
consumption, it is important to:

- Regularly review runtime metrics to identify inefficiencies or unexpected
  resource usage.
- Tune memory allocation settings according to the actual requirements of your
  analyses.
- Refactor scripts to minimize execution time and avoid unnecessary data
  processing or retrieval.
- Set up alerts or monitoring thresholds to proactively manage costs and ensure
  stable operations.
