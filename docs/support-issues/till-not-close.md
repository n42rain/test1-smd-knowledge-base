---
id: Support-issue-6
title: Till Not Close
sidebar_label: Till Closure Update Not Close
---

```javascript
softwareSystem(s): HUB
container(s): 
client(s): SENTINEL
```

# Till Closure Update Not Close

## Background Context

*** 

The Till Closure hasn't been updated in HOS.

### Example Ticket

* [E-service Ticket: 01911022/I-0443075 Till Closure Issue at PS LEBUH PUTERI (BANDAR PUTERI PUCHONG)](https://app.clickup.com/t/86ctw6xhu)

## Possible Causes

***

* External disruptions
* Hub version update

## Prerequisites

***

### Investigation Requirements

* Access to Hub Gateway DB
* Access to Mesh Central or PDB VPN
* MeshCentralRouter (if using Mesh Central)

### Resolution Steps

1. Establish a port forward to the hub gateway database and service using PDB VPN or MeshCentralRouter.
2. Navigate to the drawer_session collection and search for the provided sequence number (till number) from the ticket.
3. Copy the drawer_session ID.
4. call the internal reupload drawersession API to reupload tills to HOS:

    * `localhost:3000/internal/drawersession/{id}/upload`

5. Recheck the drawersession in HOS to confirm the till closed.


## Investigation Steps

***

* Access Mesh Central.
* Navigate to the following directory to download relevant logs:
`/home/centos/.sentinel/hub/logs`
* Download `http.log` and `debug.log` with timestamps close to when the issue occurred.
* Inspect the logs around the timestamp when the tills were supposed to close to determine the root cause.