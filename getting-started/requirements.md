---
title: "Requirements"
description: "What each server needs before you boot the installation medium."
status: published
---

## Per server

| | |
|---|---|
| CPU | x86-64 with hardware virtualization (Intel VT-x or AMD-V) |
| RAM | 8 GB minimum |
| Disk | 160 GB minimum — the installer refuses to continue below this |
| Network | One management interface, reachable by the other servers |

> **Note** — The disk minimum is enforced by the installer, not a recommendation. A
> server with less will not get past the disk step.

## Cluster shapes

VS-HCI installs in two shapes from the same medium.

- **A single node.** One server, self-contained. Everything works except controller
  failover, which needs peers.
- **A cluster.** Three controllers give you a management plane that survives losing
  one of them; any number of additional hosts run workloads only.

## Network

<!-- TODO: fill in —
     - management network: what it carries, whether it can be shared with workloads
     - VLAN requirements for the management interface (access vs trunk)
     - the virtual IP: which subnet it must sit in, DNS name
     - ports that must be open between servers, and from clients
     - NTP and DNS reachability
-->

## Browser

<!-- TODO: fill in — supported browsers and versions for the console. -->
