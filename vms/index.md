---
title: "Virtual machines"
description: "Running KVM guests on the cluster — lifecycle, placement and what the console exposes."
status: draft
---

VS-HCI runs KVM/QEMU guests. Everything on this page is done from the console or the
REST API; there is no per-host configuration to edit.

## Lifecycle

| Action | Notes |
|---|---|
| Create | From scratch, from an ISO, or [from a template]({{ '/vms/templates/' | relative_url }}) |
| Start / Stop | |
| Pause / Resume | |
| Reboot | |
| [Live migrate]({{ '/vms/live-migration/' | relative_url }}) | Move a running VM to another host |
| [Resize]({{ '/vms/resizing/' | relative_url }}) | Change CPU and memory, while running |
| [Snapshot]({{ '/vms/snapshots/' | relative_url }}) | Disk-only, or memory and disk |
| Delete | |

## In this section

- [Creating a VM]({{ '/vms/creating/' | relative_url }})
- [Templates]({{ '/vms/templates/' | relative_url }})
- [Console and terminal]({{ '/vms/console-access/' | relative_url }})
- [Live migration]({{ '/vms/live-migration/' | relative_url }})
- [Snapshots]({{ '/vms/snapshots/' | relative_url }})
- [Resizing CPU and memory]({{ '/vms/resizing/' | relative_url }})
