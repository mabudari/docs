---
title: "Snapshot policies"
description: "Taking snapshots on a schedule, and keeping the count under control."
status: draft
---

## Creating a policy

<!-- TODO: fill in —
- which VMs a policy applies to
- schedule, and whether memory is included
- what happens when a scheduled snapshot fails
-->

## Retention

<!-- TODO: fill in —
- how many snapshots are kept
- what is deleted first, and when
-->

## What a policy does not cover

A snapshot lives on the same storage as the VM. A policy protects against a bad change
inside the guest; it does not protect against losing the pool. For that, see
[backup and restore]({{ '/data-protection/backups/' | relative_url }}).
