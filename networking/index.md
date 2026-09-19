---
title: "Networking"
description: "Software-defined networking across the whole cluster, rather than per host."
status: draft
---

Networking in VS-HCI is defined once for the cluster and applied to every host. You
do not configure bridges on individual servers.

## The pieces

| | |
|---|---|
| [Fabrics]({{ '/networking/fabrics/' | relative_url }}) | Isolated virtual networks (VRFs), each with its own address space |
| [Distributed switches]({{ '/networking/distributed-switches/' | relative_url }}) | One switch definition applied across every host, with VLAN port groups |
| [Routing and NAT]({{ '/networking/routing-and-nat/' | relative_url }}) | Logical routers, NAT rules and load balancers |
| [Security policies]({{ '/networking/security-policies/' | relative_url }}) | Access control on a network or a port group |
| [Uplinks and bonds]({{ '/networking/uplinks-and-bonds/' | relative_url }}) | The physical side: aggregation, trunks, routes |

## The rollback guard

A network change that would cut a host off is reverted automatically if it is not
confirmed in time. This is why a mistyped gateway costs you a wait rather than a trip
to the rack.

<!-- TODO: fill in —
- the confirmation window and how to confirm a change
- what a rolled-back change looks like in the console
-->
