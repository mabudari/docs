---
title: "Certificates"
description: "Replacing the cluster's self-signed certificate with one from your own authority."
status: draft
---

Each cluster generates its own certificate at first boot. It works, but browsers do not
trust it, so most sites replace it.

## Generating a signing request

<!-- TODO: fill in —
- where the CSR is generated
- the subject and SAN entries it must carry — including the console name
-->

## Installing a signed certificate

<!-- TODO: fill in —
- uploading the certificate and its chain
- whether a restart is needed, and what it interrupts
-->

## The cluster CA

<!-- TODO: fill in —
- distributing the cluster CA to clients that keep the generated cert
- where the CA file lives
-->

## Renewal

<!-- TODO: fill in —
- expiry warnings
- replacing a certificate before it expires
-->
