---
title: "How high availability works"
description: "Controllers behind a virtual IP, and the replicated state behind them."
status: draft
---

Run three controllers and management survives losing one of them.

## The virtual IP

The controllers elect an active one, which owns the cluster's virtual IP. The console,
the API and the host agents all address that IP — never a physical one.

<!-- TODO: fill in —
- which interface carries the VIP
- how the election picks an active controller, and what priority means
- how quickly a move is noticed
-->

## Replicated state

The active controller replicates the cluster's state to the standbys continuously, so
a failover lands on a node that already knows everything.

<!-- TODO: fill in —
- the replication interval
- how to tell a standby is current
-->

## What HA does and does not cover

<!-- TODO: fill in —
- HA covers the control plane — say plainly what happens to running VMs
- what host-level failure does to workloads, and what replicated storage adds
-->
