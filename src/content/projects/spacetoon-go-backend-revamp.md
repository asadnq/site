---
title: 'Spacetoon Go Backend rewrite'
description: 'Architected a new backend system for Spacetoon Go, enhancing scalability, security, and API performance to support the next generation of the platform.'
techStackIds:
  [
    'nest-js',
    'apollo-graphql',
    'ts',
    'nx',
    'node-js',
		'docker',
		'postgresql',
		'redis',
    'apollo-supergraph',
		'mongo-db',
  ]
startDate: '2022-11-01'
color: azure
---

## Overview

The first component of the Spacetoon Go that we rewrite is the backend. This project aims to enhance scalability, extensibility, and security, while improving API performance and reducing the complexity of the codebase.

## Key Features

- 📈 **Scalable Architecture** – Designed with a microservices approach, ensuring effortless scalability and smooth deployments.
- 🔌 **Extensible API** – Powered by Apollo GraphQL, enabling flexible extensions and seamless customization.
- 🔐 **Authentication & Authorization** – Secured with [Supabase Gotrue](https://github.com/supabase/auth), offering robust user authentication and access control.
- 🏗️ **Modular & Extensible** – Built on Nx monorepo, allowing for streamlined development, easy customization, and scalability.

## Challenges & Solutions

### Redesigning the new database schema

_The existing schema is lacking of documentation and is difficult to understand. It also unnecessarily complicates the codebase._

We redesigned the new database schema to be more modular and normalized, making it easier to extend and maintain.

### Interoperability with the existing clients

_We're aiming to deploy the new backend system to a new region, and we need to ensure that the existing clients can still communicate with the new system without making any changes on the client side._

We developed a layer called **transformer** which transforms the legacy API request and response to be compatible with the new system.

## My Contributions

- Designed the new database schema
- Implemented the transformer layer of various services
- Contributed to the development and bugfixes of various services

## Outcome

Successfully deployed the new backend system while allowing the existing clients to communicate with the new system.
