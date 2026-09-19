---
title: "Replicated storage"
description: "The storage fabric: volumes mirrored across servers so a VM survives losing a host."
status: draft
---

VS-HCI builds replicated storage on DRBD and LINSTOR. A volume in the storage fabric
exists on more than one server, so the loss of one machine does not take the data with
it.

## Building a storage fabric

<!-- TODO: fill in —
- which hosts take part, and the minimum count
- the backing pool on each node
- the fabric virtual IP
-->

## Replication and placement

<!-- TODO: fill in —
- how many copies a volume gets
- how replicas are placed across hosts
- what happens when a node is added
-->

## Failure and recovery

<!-- TODO: fill in —
- what a degraded volume looks like
- how a replica is rebuilt, and how long it takes
- what to do when a node is gone for good
-->

## Interaction with live migration

<!-- TODO: fill in —
- why replicated volumes make migration straightforward
-->
