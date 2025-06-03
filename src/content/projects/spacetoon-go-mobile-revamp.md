---
title: 'Spacetoon Go new mobile app'
description: 'Developed a new mobile app for Spacetoon Go, enhancing UI/UX, performance, and responsiveness for a modern user experience.'
techStackIds: ['flutter', 'graphql', 'melos', 'rudderstack']
relatedCompanies: ['spacetoon-go', 'cofoundery']
startDate: '2024-09-01'
color: azure
---

## Overview

This project is a complete rebuild of the platform, featuring a new brand identity, improved UX, and a modernized tech stack, aiming to improve the extensibility and scalability of the platform.

## Key Features

- 🌟 **New Brand Identity** – Updated UI to align with the refreshed Spacetoon Go branding
- 🔍 **Enhanced Search & Navigation** – Users can find content more easily
- 🌐 **Multilingual Support** – Built with internationalization in mind
- 📱**Multi platform support** – Built for seamless cross-device experiences on Android, iOS, Google TV, TvOS, and TizenOS

## Challenges & Solutions

### Module reusability

_The new Spacetoon Web consists of multiple applications, and we need to ensure that the codebase is modular and reusable._

We used Melos to manage the codebase, and created a monorepo with shared codebase. This allowed us to reuse code across multiple applications, making it easier to maintain and scale.

### Player widget refactoring

_As we extend the functionality of the mobile app, we realized that the player widget was not flexible enough._

We refactored the player widget to support various content types by making the widgets to be more granullar and composable.

## My Contributions

- Developed various features such as favorite list, content browsing, and video player
- Developed internal libraries such as graphql and internal libraries
- Helped the refactoring of video player widget to support various content types

## Outcome

Launched the new Spacetoon Go mobile app to Turkey region.
