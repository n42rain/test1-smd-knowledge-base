---
id: Support-issue-7
title: Profit Report not Tally
sidebar_label: Profit Report not Tally
---

```javascript
softwareSystem(s): HUB
container(s): 
client(s): SENTINEL
```

# Profit Report not Tally

## Background Context

***

The inventory report has not tally data.

### Example Ticket

* E-Service: 01851349/I-0432646 Profit report not tally - PS Bandar Sri Sendayan

## Possible Causes

***

* It is possible that some data has been deleted or lost, causing a mismatch between the profit report and sales category quantities.


## Prerequisites

***

### Investigation Requirements

* Access to Inventory Report Database

* Access to Inventory Database

* SSH access to the Inventory Report (can ask afifi to get the ip address of the inventory report) (invreport.sentinel.getslurp.com)

### To Resolve


1. **Create a new tmux session**: Use `tmux new -t outletids_month_year`.


2. **Run the following command**:

```python
php artisan migrate:activities franchise id(1) type (5) startId(usually 1) — oids=44 —date=11,2023
   php artisan migrate:activities 1 5 1 — oids=44 —date=11,2023
```

Upon successful execution, perform these checks:

>          1. **Check the 'activities' table from invreport** :

```SQL
SELECT COUNT(*)
FROM `invreport`.`activities`
WHERE outlet_id = 44
AND franchise_id = 1
AND committed_at = '2023-11-01 00:00:00'
AND type = 5
ORDER BY `movement_product_id`
LIMIT 300 OFFSET 0;

```

>           2. **Verify the 'stock_movement_product' table** in the inventory database:

```SQL
SELECT COUNT(*)
FROM stock_movements
JOIN stock_movement_products ON stock_movement_id = stock_movements.id
WHERE franchise_id = 1
AND outlet_id = 44
AND type = 5
AND settled_at = '2023-11-01 00:00:00'
AND stock_movements.deleted_at IS NULL
AND stock_movement_products.deleted_at IS NULL;
```

To ensure data consistency for other types, cross-check the row count:

```SQL
SELECT COUNT(*)
FROM stock_movements
JOIN stock_movement_products ON stock_movement_id = stock_movements.id
WHERE franchise_id = 1
AND outlet_id = 44
AND type = 1
AND settled_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND stock_movements.deleted_at IS NULL
AND stock_movement_products.deleted_at IS NULL;
```

After data transfer completion, proceed with migrating profit data:

**Run**:

```python
php artisan generate:profit 1 0 0 0 --startRange=11,2023 --endRange=11,2023 --oids=44
```

or

```python
php artisan generate:profit 1 44 11 2023
```

This command refreshes the 'profit' table by deleting old data and inserting new data. Wait for completion and verify the profit report.

If discrepancies persist with minimal differences:

1. **Check inventory costs for negative quantities.**

If the tally remains off, there might be missing data. Cross-check 'transactions' in the inventory with 'stock_transactions' in the inventory report:

```sql
SELECT COUNT(*)
FROM stock_transactions
JOIN stocks ON stock_id = stocks.id
WHERE franchise_id = 1
AND outlet_id = 44
AND deducted_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND stock_transactions.deleted_at IS NULL;
 
SELECT COUNT(*)
FROM transactions
WHERE outlet_id = 44
AND franchise_id = 1
AND transaction_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND type = 1;
```

## Investigation Steps

***

### To Check After Migrate Activities

1. **Check the 'activities' table from invreport**:

```sql
SELECT COUNT(*)
FROM `invreport`.`activities`
WHERE outlet_id = 44
AND franchise_id = 1
AND committed_at = '2023-11-01 00:00:00'
AND type = 5
ORDER BY `movement_product_id`
LIMIT 300 OFFSET 0;
```

2. **Verify the 'stock_movement_product' table** in the inventory database:

```sql
SELECT COUNT(*)
FROM stock_movements
JOIN stock_movement_products ON stock_movement_id = stock_movements.id
WHERE franchise_id = 1
AND outlet_id = 44
AND type = 5
AND settled_at = '2023-11-01 00:00:00'
AND stock_movements.deleted_at IS NULL
AND stock_movement_products.deleted_at IS NULL;
```

To ensure data consistency for other types, cross-check the row count:

```sql
SELECT COUNT(*)
FROM stock_movements
JOIN stock_movement_products ON stock_movement_id = stock_movements.id
WHERE franchise_id = 1
AND outlet_id = 44
AND type = 1
AND settled_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND stock_movements.deleted_at IS NULL
AND stock_movement_products.deleted_at IS NULL;
```

### To Check After Migrate Profit (Part 1)

Check inventory costs for any negative quantities. If discrepancies persist, cross-verify 'transactions' in the inventory with 'stock_transactions' in the inventory report:

```SQL
SELECT COUNT(*)
FROM stock_transactions
JOIN stocks ON stock_id = stocks.id
WHERE franchise_id = 1
AND outlet_id = 44
AND deducted_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND stock_transactions.deleted_at IS NULL;
 
SELECT COUNT(*)
FROM transactions
WHERE outlet_id = 44
AND franchise_id = 1
AND transaction_at BETWEEN '2023-11-01 00:00:00' AND '2023-11-30 23:59:59'
AND type = 1;
```

### To Check After Migrate Profit (Part 2)

Check stock received to ensure stock movement data is consistent across inventory and inventory report databases.

```SQL
SELECT COUNT(*)
FROM `invreport`.`activities`
WHERE outlet_id = 965
AND franchise_id = 1
AND committed_at >= '2023-08-01 00:00:00'
AND committed_at <= '2023-08-31 23:59:59'
AND type = 6
ORDER BY `movement_product_id`
LIMIT 300 OFFSET 0;

SELECT COUNT(*)
FROM stock_movements
JOIN stock_movement_products ON stock_movement_id = stock_movements.id
WHERE franchise_id = 1
AND outlet_id = 965
AND type = 6
AND settled_at BETWEEN '2023-08-01 00:00:00' AND '2023-08-31 23:59:59'
AND stock_movements.deleted_at IS NULL
AND stock_movement_products.deleted_at IS NULL;
```

### To Check if stock not reflect still after migrate profit

Run command:

```python
php artisan migrate:stocks 1 —oids=819 —startId=latestID
```

-> To synchronize stock with inventory ms

Run migrate profit again:

```python
php artisan generate:profit 1 0 0 0 --startRange=11,2023 --endRange=11,2023 --oids=44
```

### To Check if there were undefined products in profit reports

Resync 'product_tag' with 'tags':

```python
# Migrate tags
php artisan migrate:tags 1

# Migrate product tags
php artisan migrate:producttag 1

# Migrate products
php artisan migrate:products 1

# Migrate product spesific Id 
php artisan migrate:products 1 --productId=1
```

Then rerun migrate profit again:

```python
php artisan generate:profit 1 0 0 0 --startRange=11,2023 --endRange=11,2023 --oids=44
```


