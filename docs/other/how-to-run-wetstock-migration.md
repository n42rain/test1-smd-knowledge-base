---
id: other-2
title: How to Run Wetstock Migration
sidebar_label: How to Run Wetstock Migration
---

# How to Run Wetstock Migration

## Prerequisites

***

* Access to Wetstock microservice and DB.


## Steps

***

1. Make changes to entity file.

2. Generate migration file using the command below. DDL statements will be generated in the migration file to sync with the updated entity.

```shell
    yarn typeorm migration:generate -n {nameOfFileToBeGenerated}

```

3. Remove DDL statements in the migration file that are not relevant to the current migration.

4. Migration is ran automatically when local server is started and during deployment pipeline.
