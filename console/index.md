---
title: "A tour of the console"
description: "What each area of the console is for, and how the screens relate to each other."
status: draft
---

The console is a single web application served by whichever controller currently holds
the cluster's virtual IP. Everything below is one navigation tree.

## The layout

<!-- TODO: fill in —
- the sidebar tree and what nests under what
- the top bar: cluster identity, active controller, account menu
- the theme picker
- keyboard shortcuts, if any
-->

## Real-time updates

Long operations run as tracked tasks with live progress, and the console updates as
they proceed. There is no page to refresh.

## Areas

| Area | What it covers |
|---|---|
| [Dashboard]({{ '/console/dashboard/' | relative_url }}) | Cluster-wide health and capacity at a glance |
| [Infrastructure]({{ '/console/infrastructure/' | relative_url }}) | Datacenters, availability zones, groups and hosts |
| [Approvals]({{ '/console/approvals/' | relative_url }}) | Servers waiting to be admitted to the fleet |
| [Virtual machines]({{ '/vms/' | relative_url }}) | VM lifecycle, templates, consoles |
| [Containers]({{ '/workloads/containers/' | relative_url }}) | Docker workloads |
| [Kubernetes]({{ '/workloads/kubernetes/' | relative_url }}) | k3s clusters |
| [Networks]({{ '/networking/' | relative_url }}) | Fabrics, switches, routing and policy |
| [Storage]({{ '/storage/' | relative_url }}) | Pools, volumes, replication and exports |
| [Tasks]({{ '/console/tasks/' | relative_url }}) | Everything currently running, and what it did |
| [Alerts]({{ '/monitoring/alerts/' | relative_url }}) | Threshold rules and the events they raised |
