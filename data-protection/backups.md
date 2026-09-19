---
title: "Backup and restore"
description: "Copying a VM somewhere it survives losing the cluster, and bringing it back."
status: draft
---

> **Note** — Backup jobs are driven through the REST API today. The console's Backups
> page is informational.

## Targets

A backup can be written to local disk on the host, or exported to an NFS, iSCSI or
remote SSH target.

<!-- TODO: fill in —
- configuring each target type
- credentials, and where they are stored
-->

## Creating a backup

```
POST /api/vms/:id/backup
```

<!-- TODO: fill in —
- the request body and its options
- full vs incremental, if both exist
- how to follow the resulting task
-->

## Restoring

```
POST /api/backups/:id/restore
```

<!-- TODO: fill in —
- restoring in place vs to a new VM
- what the restored VM keeps: identity, MAC, placement
-->

## Scheduling

<!-- TODO: fill in —
- how to run backups on a schedule today
- what the console will cover when the page lands
-->
