---
title: "Snapshots"
description: "Point-in-time captures of a VM, taken by hand or on a schedule."
status: draft
---

## Disk-only and memory+disk

<!-- TODO: fill in —
- what each captures, and the trade-off
- how long each takes, and the pause a memory snapshot causes
-->

## Taking a snapshot

<!-- TODO: fill in —
- from the VM detail page
- naming and retention
-->

## Reverting

<!-- TODO: fill in —
- what reverting does to the running VM
- what happens to snapshots taken after the one you revert to
-->

## Deleting a snapshot

<!-- TODO: fill in —
- what deleting does to the disk chain
- how long it takes on a large chain
-->

> **Warning** — A snapshot is not a backup. It lives on the same storage as the VM.
> For copies that survive losing the pool, see [backups]({{ '/data-protection/backups/' | relative_url }}).
