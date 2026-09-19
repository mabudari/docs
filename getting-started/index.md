---
title: "What VS-HCI is"
description: "Hyperconverged infrastructure for your own hardware — compute, network and storage on the same servers, managed from one console."
status: published
---

VS-HCI turns a set of standard x86 servers into a single pool of compute, network
and storage, managed from one web console.

There is nothing to assemble: each server boots the VS-HCI installation medium,
answers a short wizard, and joins the cluster. Compute, networking and storage are
part of the same product — no separate SAN, no separate SDN controller, no per-host
configuration to maintain.

## What you can run

| | |
|---|---|
| **Virtual machines** | Create, clone from templates, start/stop/pause, reboot, live-migrate between servers, and resize CPU and memory while running. Browser-based VNC console and SSH terminal. |
| **Containers** | Docker containers managed alongside VMs — lifecycle, images, logs, inspection. |
| **Kubernetes** | Create k3s clusters on your servers, add worker nodes, apply manifests from the console. |
| **Snapshots** | Disk-only or memory+disk snapshots, taken on demand or on a schedule you define. |
| **Backups** | VM backup and restore to local disk, NFS, iSCSI or a remote SSH target. |

## Networking

Software-defined, spanning the whole cluster rather than configured server by server.

- **Fabrics** — isolated virtual networks (VRFs), each with its own logical switches,
  routers and address space.
- **Distributed switching** — one switch definition applied across every server, with
  VLAN-tagged port groups.
- **Routing and security** — logical routers, NAT, load balancers, and access control
  policies applied per network or per port group.
- **Physical uplinks** — link aggregation (bonds), VLAN trunks, static and policy routes.

A network change that would cut a server off is rolled back automatically if it is not
confirmed, so a mistake cannot lock you out of a host.

## Storage

- **Local pools** — directory and LVM pools on each server's own disks.
- **Replicated storage** — a storage fabric built on DRBD and LINSTOR keeps volumes
  mirrored across servers, so a VM survives the loss of the machine its disk lived on.
- **Exports** — publish capacity as iSCSI, NFS or SMB for systems outside the cluster.
- **Volumes** — provision, clone, snapshot and resize; attach to any VM.

## Security

- **Roles** — five of them: viewer, operator, administrator, super-administrator, and a
  dedicated role for API clients.
- **Two-factor authentication** — TOTP, using any standard authenticator app.
- **API keys** — for scripts and integrations, separate from user accounts.
- **Audit trail** — every create, update, delete and sign-in is recorded with the account,
  IP address and client.
- **Certificates** — each cluster generates its own certificate at first boot; replace it
  with one from your own authority through the console.

## Staying available

Run three controllers and management survives losing one. They elect an active
controller which owns the cluster's virtual IP; the others stand by with a continuously
replicated copy of the cluster's state. If the active controller fails, a standby takes
the IP and carries on — the console address does not change.

## Where to go next

- [Requirements]({{ '/getting-started/requirements/' | relative_url }}) — what each server needs.
- [Installing the first server]({{ '/getting-started/first-server/' | relative_url }}) — founding a cluster.
- [A tour of the console]({{ '/console/' | relative_url }}) — what each screen does.
