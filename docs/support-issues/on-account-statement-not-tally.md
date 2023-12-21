---
id: Support-issue-4
title: On Account Statement Not Tally With Credit Balance
sidebar_label: On Account Statement Not Tally With Credit Balance
---

```javascript
softwareSystem(s): HUB
container(s): 
client(s): SENTINEL
```

# On Account Statement Not Tally With Credit Balance

## Background Context

***

The on-account statement doesn't reconcile with the credit balance due to an Unfinalized Transaction in the Local Account DB.

* Possible long term solution:

    * Plan to list unfinalize localaccount transaction at ronpos watchtower for monitoring purposes

### Example Ticket

* [Clickup Ticket](https://app.clickup.com/t/862kbtj2g)


## Possible Causes

***

* Connection Issues

    * Pending Sample Logs for connection issue

## Prerequisites

***

### Investigation Requirements

* Access to Local Account DB
* Access to Hub Gateway DB
* Access to Mesh Central or PDB VPN
* MeshCentralRouter (if using Mesh Central)

### Resolution Steps

1. Connect to the Local Account DB and navigate to the transaction table.
2. Search for transactions with a status that is not finalized for the specific account:

    * Obtain the account ID in HOS from [this link](https://hos.sentinel.getslurp.com/franchise/localaccount#/local-account/223).
    * Use the query: `SELECT * FROM transactions WHERE user_id = '223' AND status != 'FINALIZED' LIMIT 10;`

3. If an unfinalized transaction is found, copy the transaction number and ID.
4. Connect to the hub-gw database, port forwarding it using MeshCentralRouter or PDB VPN.
5. Check the transactions table and search for the receipt number associated with the previously saved transaction number.
6. If the transactions are found, proceed to finalize the transaction to reconcile the statement:

    * Use this API to finalize (PUT): `https://hub.sentinel.getslurp.com/localaccount/preauth/{transaction.id}`
    * API request body:
    ```js
    {
        "items": [
            {
                "product_id": "106",
                "name": "Primax 95",
                "amount": 200,
                "quantity": 97.561,
                "unit_price": 2.05
            }
        ]
    }
    ```
    * Verify the amount and quantity before finalizing.
    * Recheck the on-account statement.

7. If the transaction is not found, proceed to clear the transaction to reconcile the statement:

    * Use the void API (PUT): `https://hub.sentinel.getslurp.com/localaccount/14257308`
    * Expected response: 204
    * Recheck the on-account statement.

## Investigation Steps

***

* Pending