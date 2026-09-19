---
title: "Kubernetes clusters"
description: "Creating k3s clusters on your own servers and running workloads on them."
status: draft
---

VS-HCI creates k3s clusters directly on the hosts it manages: one server node runs the
API server and etcd, and any number of agent nodes join as workers.

## Creating a cluster

<!-- TODO: fill in —
- naming the cluster, choosing the server (control plane) node
- choosing optional agent nodes at creation time
- how long creation takes
-->

## Adding and removing workers

<!-- TODO: fill in —
- joining another host as a worker
- draining and removing one
-->

## Applying manifests

<!-- TODO: fill in —
- the manifest editor in the console
- what happens on an invalid manifest
-->

## Getting a kubeconfig

<!-- TODO: fill in —
- where to download it, and which role can
- whether it reaches the API server through the virtual IP
-->

## Deleting a cluster

<!-- TODO: fill in —
- what is removed, and what is left on the hosts
-->
