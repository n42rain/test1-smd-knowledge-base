---
id: Support-issue-2
title: FMR Not Tally With Fuel Sales
sidebar_label: FMR Not Tally With Fuel Sales
---

```javascript
softwareSystem(s): BOS
container(s): Wetstock Microservice, Cloud Report Microservice, Wetstock DB, Transaction Report Microservice, Transaction Report DB
```

# FMR Not Tally With Fuel Sales

## Background Context

***

* FMR data is from Wetstock DB which Fuel Sales data is from Transaction Report DB.
* Usually the issue is with FMR data.
* Different timezone when viewing Fuel Sales report as compared to viewing FMR report.
* Issue has a high change of reoccuring.
* Medium term solution:

    * Fix the issue with multiple fuel sales in 1 receipt not being processed in Wetstock.

* Possible long term solution:

    * Use data warehouse to query for both reports to ensure both tally.

### Example tickets

* [SmartSD:WO-0001209 FIMR not tally with fuel sales- SH Jalan Ampang](https://app.clickup.com/t/86ctxb9nc)

## Possible Causes

***

* Multiple fuel sales in 1 receipt which is not currently handled by Wetstock. Only the first line item is saved into Wetstock DB since receipt number is a unique index in the fuel sales table.
* Mismatch between FCC config and Wetstock config causing error when saving to Wetstock DB.


## Prerequisites

***

### To Investigate

* Read access to Tenant DB and Wetstock DB in affected environment.

    * query to get tank config in Wetstock DB
    * query to get failed jobs in the affected date range
    * query to get receipts with multiple fuels in Transaction Report DB

* Credentials to access BOS in affected environment.

* Details required:

    * outlet id - get from Tenant DB
    * relevant date range - get from ticket
    * tanks affected - get from ticket

### To Resolve

* Write access to Wetstock DB.
* sshuttle to connect to Wetstock DB from local Wetstock Microservice.
* Access to resync wetstock failed jobs script.
* AWS Account credentials in given environment to repush failed jobs to SQS.


## Investigation Steps

***

1. Try to replicate issue in affected environment similar to ticket.

2. Get the relevant details from to investigate section.

3. Check for multiple fuel sales in Transaction Report DB for the given outlet and date range. If there are multiple fuel sales, mark the ticket as blocked and link to this ticket.

4. Check the failed jobs table in Wetstock DB to see if there are any failed jobs for the outlet in the given date range.

5. Check the tank configuration in Wetstock to see if there are any tanks without attached hoses.

