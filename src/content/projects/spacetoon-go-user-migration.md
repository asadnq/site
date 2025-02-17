---
title: 'Spacetoon Go User Migration'
description: 'Migrated users from the old database to the new database, ensuring seamless data transfer and maintaining data integrity.'
	techStackIds: ['ts', 'node-js', 'postgres', 'airflow', 'python']
relatedCompanies: ['spacetoon-go', 'cofoundery']
startDate: '2023-04-01'
---

## Overview

This project aimed to migrate all users from the old database to the new one. The migration process involved transferring and mapping data from the old platform to the new one, ensuring a smooth transition for all users and maintaining data integrity.

## Challenges & Solutions

### Challenge: Lack of Documentation

The legacy database has barely any documentation and have unclean structure that most of the time we can't immediately tell most columns' purpose.

✅ **Solution**:

- We created a documentation for the database, which we constructed by reading the codebase.

### Challenge: Data inconsistency

We discovered some columns in the old database had different types or structures from one date to another, causing data inconsistency and errors during the migration process. Because of this, we couldn't be sure whether we have mapped every column correctly.

✅ **Solution**:

- We ran a set of simulations on staging environment to test the large chunk of data transfer and mapping, making sure we have mapped every column correctly.
- We ran migration for non-subscriber users first, and then migrated subscribers afterwards. This way, the majority of the errors would be caught during the migration of free users first, which were easier to fix.

### Challenge: Gradual Migration

To make sure both the legacy system and the new system are working correctly, we had to migrate the data gradually.

✅ **Solution**:

- We keep both the legacy and the new system running and rerouting each request to the corresponding system.

## My Contributions

- Developed the migration script from the ground up using Typescript
- Defining the flow of data transfer and mapping
- Planning and conducting migration simulations
- Monitoring the migration process

## Outcome

Successfully migrated 7.5M users from the legacy database to the new one
