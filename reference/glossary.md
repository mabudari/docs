---
title: "Glossary"
description: "The terms used throughout this documentation."
status: draft
---

<!-- Keep alphabetical. One sentence each — a definition, not an explanation; the
     explanation belongs on the page that owns the concept, and should be linked. -->

**Agent**
: The lightweight service running on every managed server, through which the controller
  drives that machine.

**Availability zone**
: <!-- TODO -->

**Controller**
: A server that takes part in the management plane. One controller is active at a time
  and owns the [virtual IP](#virtual-ip).

**Fabric**
: An isolated virtual network with its own switches, routers and address space. See
  [Fabrics]({{ '/networking/fabrics/' | relative_url }}).

**Host**
: A server that runs workloads. A server can be both a host and a controller.

**Join token**
: The single short secret a joining server presents — it covers both the HA cluster
  join and host enrolment. Issued on the founding server's summary screen.

**Port group**
: <!-- TODO -->

**Server group**
: <!-- TODO -->

**Storage fabric**
: The replicated storage layer. See [Replicated storage]({{ '/storage/replicated/' | relative_url }}).

**Task**
: A long-running operation with live progress. See [Tasks]({{ '/console/tasks/' | relative_url }}).

**Virtual IP**
: The address the console, the API and the agents all use. It moves to whichever
  controller is active, so it survives a failover.
