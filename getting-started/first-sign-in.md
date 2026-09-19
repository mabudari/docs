---
title: "First sign-in"
description: "Reaching the console, signing in, and the first things to change."
status: published
---

## Reaching the console

The console is served over HTTPS at the cluster's virtual IP, or at the DNS name you
gave it during setup.

> **Warning** — Always use that address, never an individual server's IP. The virtual
> IP changes hands during a failover; a physical address does not follow it.

## Signing in

Sign in as `admin` with the shipped default password. The console requires you to
change it at first sign-in.

<!-- TODO: fill in — the default password, or a pointer to where it is issued. -->

## The certificate

Each cluster generates its own certificate at first boot, so the first visit warns
about an unknown issuer. Replace it with one from your own authority through the
console.

<!-- TODO: fill in — how to install the cluster CA on a client. -->

## First things to do

1. Change the administrator password.
2. [Enrol two-factor authentication]({{ '/administration/two-factor/' | relative_url }}).
3. [Create accounts]({{ '/administration/users-and-roles/' | relative_url }}) for the people who need
   them, with the smallest role that fits.
4. [Replace the certificate]({{ '/administration/certificates/' | relative_url }}).
5. [Set alert thresholds]({{ '/monitoring/alerts/' | relative_url }}) so the cluster tells you about
   trouble.
