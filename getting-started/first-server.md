---
title: "Installing the first server"
description: "Booting the medium, answering the wizard, and founding the cluster."
status: draft
---

The first server you install *founds* the cluster. It prints a join token on its
summary screen; every other server uses that token to join.

## The shape of an install

1. **Boot the medium.** Write `vsos-hci-<version>-amd64.iso` to a USB stick and boot the
   server from it. The image carries the whole operating system — there is no package
   selection and no partitioning to answer.
2. **Answer the wizard.** Server name, administrator account, management interface and
   addressing, DNS and NTP. The wizard verifies the gateway and DNS before continuing.
3. **Choose the node's part.** This first server founds the cluster and prints a short join
   token. Every other server [joins with that token]({{ '/getting-started/adding-servers/' | relative_url }}).
4. **Sign in.** The console comes up on the virtual IP — see [First sign-in]({{ '/getting-started/first-sign-in/' | relative_url }}).

## Booting the medium

<!-- TODO: fill in — boot menu, firmware settings, what the installer does unattended. -->

## The wizard

The installer asks for the node's identity, its network and its role, and nothing else.
There is no package selection and no partitioning question.

### Identity

<!-- TODO: fill in — server name, administrator (SSH) username and password. Note that
     the service account name is reserved and cannot be reused. -->

### Network

<!-- TODO: fill in — management interface, VLAN id and tagging mode, static or DHCP,
     CIDR, gateway, DNS, FQDN, NTP. Mention the gateway/DNS verification screen. -->

### Role

<!-- TODO: fill in — founding a cluster vs joining one; the console name that resolves
     to the virtual IP; node priority (lower wins the election); the generated token. -->

## The summary screen

<!-- TODO: fill in — what is shown, and specifically: write down the join token. -->

## After the first boot

<!-- TODO: fill in — how long the first boot takes, and how to tell it is ready. -->
