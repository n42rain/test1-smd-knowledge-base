---
id: Support-issue-5
title: Pump Test Not Recorded in HOS
sidebar_label: Pump Test Not Recorded in HOS
---

```javascript
softwareSystem(s): BOS
container(s): Cloud Repository
```

# FMR Not Tally With Fuel Sales

## Background Context

***

* Record pump test does not found in fuel report table

### Example tickets

* [E-service: 01943624/I-0448622 pump test not recorded in HOS - PS JALAN PUJUT - LUTONG](https://app.clickup.com/t/86cu0j6fx)

## Possible Causes

***

* Data pump test is not resync.

## Prerequisites

***

### To Investigate

* After investigating the issue, found issue is due to pump test not recorded in fuel report table.
* Need to resync manually due to bug

### To Resolve

* Just run command `php artisan pump-test`
* `php artisan pump-test <franchise_id> --oid=<outlet_id> --start='<start_date>' --end='<end_date>'`

## Investigation Steps

***

1. Try to replicate issue in affected environment similar to ticket.

2. Get the relevant details from [to investigate section](https://gitlab.teratotech.com/ronpos/technical-documentation/-/blob/main/knowledge-base/support-issues/pump-test-not-recorded-in-hos.md?ref_type=heads#to-investigate).

3. Check for multiple fuel sales in Transaction Report DB for the given outlet and date range. If there are multiple fuel sales, mark the ticket as blocked and link to this [ticket](https://app.clickup.com/t/862k9d35b).

4. Check the failed jobs table in Wetstock DB to see if there are any failed jobs for the outlet in the given date range.

5. Check the tank configuration in Wetstock to see if there are any tanks without attached hoses.
