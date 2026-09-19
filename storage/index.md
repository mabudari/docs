---
title: "Storage"
description: "Local pools, replicated volumes, and exports for systems outside the cluster."
status: draft
---

Storage is part of the same product as compute: the disks in your servers are the
cluster's storage, and a volume can be mirrored across servers so a VM survives losing
the machine its disk lived on.

## The pieces

| | |
|---|---|
| [Pools]({{ '/storage/pools/' | relative_url }}) | Directory and LVM pools on each server's own disks |
| [Volumes]({{ '/storage/volumes/' | relative_url }}) | Provision, clone, snapshot, resize, attach |
| [Replicated storage]({{ '/storage/replicated/' | relative_url }}) | Volumes mirrored across servers |
| [Exports]({{ '/storage/exports/' | relative_url }}) | Publish capacity as iSCSI, NFS or SMB |

## Choosing between local and replicated

<!-- TODO: fill in —
- when local capacity is the right answer
- what replication costs in capacity and write latency
- which one live migration needs
-->
