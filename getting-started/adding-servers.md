---
title: "Adding servers"
description: "Joining a server to an existing cluster, as a controller or a host."
status: draft
---

Additional servers boot the same medium and answer the same wizard. At the role step
they join the running cluster instead of founding one.

## Joining as a controller or a host

| Choice | What it does |
|---|---|
| **Controller + host** | Joins the high-availability cluster *and* runs workloads. |
| **Host only** | Runs workloads. Does not take part in management. |

<!-- TODO: fill in — when to choose each, and the recommended controller count. -->

## What the joining server needs

<!-- TODO: fill in — the cluster virtual IP, and the join token from the first server's
     summary screen. Note that one token covers both the HA join and host enrolment. -->

## Approving the server

A joining server does not enter the fleet on its own. It appears under **Approvals** in
the console and is admitted by an administrator.

<!-- TODO: fill in — where Approvals is, what is shown about a pending node, and how to
     admit or reject one. -->

## Removing a server

<!-- TODO: fill in — draining workloads, then removing the host from the inventory. -->
