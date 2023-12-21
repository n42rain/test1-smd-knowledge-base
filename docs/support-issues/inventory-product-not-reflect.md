---
id: Support-issue-3
title: Product Not Reflect on IWC
sidebar_label: Product Not Reflect on IWC
---

```javascript
softwareSystem(s): BOS
container(s): Inventory Repository
client(s): SENTINEL
```

# Product Not Reflect on IWC

## Background Context

***

* Handover product from old station to new station
* When user import data in inventory using migrate function in stock level page, the data is not reflect on database.
* The queue is not error


### Example tickets

* [Product Not Reflect on IWC - Sentinel - PS Batas Paip](https://app.clickup.com/t/86cu130b5)

## Possible Causes

***

* We have not found the root cause yet.

## Prerequisites

***

### To Investigate

* Check table inventory_cost on Inventory Microservice
* Need to check by Outlet Id and Franchise Id

### To Resolve

* Insert manually on database

* Query inventory data from Old station. Query select the old station data by `franchise_id`, `outlet_id`, and `date`
* Sync new station to get the same product_id but different stock. So, we need query the `stocks` table to get the stock and mapping to insert on `stock_movement_products` table
* Because, to store data in `inventory_cost` table. We need data on `stock_movement` and `stock_movement_products` tables.
* Join query from `inventory_cost` and `stocks` table, to get the stock.
* Create new row on `stock_movement` to get the new `stock_movement.id`.
* After we get the data `stocks` and `stock_movement.id`. Insert data to `stock_movement_products` table (Suggestion to export csv file to import)
* Run command to generate `inventory_cost` `php artisan generate:inventorycost franchise_id month year outlet_id`
e.g
`php artisan generate:inventorycost 44 11 2023 263`

## Investigation Steps

***

1. Access the Inventory Microservice Database for the environment.
2. Check `inventory_cost` table filter by `outlet_id`, `franchise_id`, `date`.