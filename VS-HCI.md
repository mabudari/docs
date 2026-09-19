# VS-HCI

**Hyperconverged infrastructure for your own hardware.** VS-HCI turns a set of
standard x86 servers into a single pool of compute, network and storage, managed
from one web console.

There is nothing to assemble: each server boots the VS-HCI installation medium,
answers a short wizard, and joins the cluster. Compute, networking and storage
are part of the same product — no separate SAN, no separate SDN controller, no
per-host configuration to maintain.

---

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

- **Fabrics** — isolated virtual networks (VRFs), each with its own logical
  switches, routers and address space.
- **Distributed switching** — one switch definition applied across every server,
  with VLAN-tagged port groups.
- **Routing and security** — logical routers, NAT, load balancers, and access
  control policies applied per network or per port group.
- **Physical uplinks** — link aggregation (bonds), VLAN trunks, static and
  policy routes.

A network change that would cut a server off is rolled back automatically if it
is not confirmed, so a mistake cannot lock you out of a host.

## Storage

- **Local pools** — directory and LVM pools on each server's own disks.
- **Replicated storage** — a storage fabric built on DRBD and LINSTOR keeps
  volumes mirrored across servers, so a VM survives the loss of the machine its
  disk lived on.
- **Exports** — publish capacity as iSCSI, NFS or SMB for systems outside the
  cluster.
- **Volumes** — provision, clone, snapshot and resize; attach to any VM.

---

## Installing

1. **Boot the medium.** Write `vsos-hci-<version>-amd64.iso` to a USB stick and
   boot the server from it. The image carries the whole operating system — there
   is no package selection and no partitioning to answer.
2. **Answer the wizard.** Server name, administrator account, management
   interface and addressing, DNS and NTP. The wizard verifies the gateway and
   DNS before continuing.
3. **Choose the node's part.** The first server *founds* the cluster and prints a
   short join token. Every other server *joins* with that token, either as a
   **controller + host** (takes part in management and runs workloads) or as a
   **host only** (runs workloads).
4. **Approve it.** A joining server appears under **Approvals** in the console
   and is admitted by an administrator. Nothing joins the fleet unattended.

### Per server

| | |
|---|---|
| CPU | x86-64 with hardware virtualization (Intel VT-x or AMD-V) |
| RAM | 8 GB minimum |
| Disk | 160 GB minimum — the installer refuses to continue below this |
| Network | One management interface, reachable by the other servers |

---

## Using the console

The console is served over HTTPS at the cluster's virtual IP, or at the DNS name
you gave it during setup. Always use that address — never an individual server's
IP, which changes hands during a failover.

Sign in as `admin` with the shipped default password; the console requires you to
change it at first sign-in.

- **Roles** — five of them: viewer, operator, administrator,
  super-administrator, and a dedicated role for API clients.
- **Two-factor authentication** — TOTP, using any standard authenticator app.
- **API keys** — for scripts and integrations, separate from user accounts.
- **Audit trail** — every create, update, delete and sign-in is recorded with
  the account, IP address and client.
- **Certificates** — each cluster generates its own certificate at first boot;
  replace it with one from your own authority through the console.

Long operations (migrations, provisioning, upgrades) run as tracked tasks with
live progress, and the console updates as they proceed — there is no page to
refresh.

## Staying available

Run three controllers and management survives losing one. They elect an active
controller which owns the cluster's virtual IP; the others stand by with a
continuously replicated copy of the cluster's state. If the active controller
fails, a standby takes the IP and carries on — the console address does not
change.

Alerts can be set on any metric the cluster collects (CPU, memory, load, network,
disk I/O) and delivered by email, webhook or Slack.

## Updating

A release is a single signed file containing the entire operating system. Upload
it to the console, then apply it to the fleet from **Software**. The signature is
verified before anything is installed, and the upgrade is driven from one place
rather than server by server — including on networks with no internet access.

---

*Backup and restore are currently driven through the REST API; the console view
is informational. Everything else described here is available in the console.*
