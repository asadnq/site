---
title: 'Spacetoon Go Website Redesign'
description: 'Led the redesign and development of the Spacetoon Go web platform, enhancing UI/UX, performance, and responsiveness for a modern user experience.'
techStackIds:
  ['react', 'ts', 'tailwind-css', 'next-js', 'rudderstack', 'turbo-repo']
relatedCompanies: ['spacetoon-go', 'cofoundery']
startDate: '2025-01-01'
---

## Overview

Spacetoon Go Web Redesign is a complete rebuild of the platform, featuring a new brand identity, improved UX, and a modernized tech stack. This project comes with a new set of features from payments to streaming, making it possible for users to enjoy the best of Spacetoon Go in a web browser.

## Key Features

- 🌟 **New Brand Identity** – Updated UI to align with the refreshed Spacetoon Go branding
- ⚡ **Performance Optimization** – Faster load times and improved responsiveness
- 📱 **Mobile-First Design** – Optimized for seamless cross-device experiences
- 🌐 **Multilingual Support** – Built with internationalization in mind

## Challenges & Solutions

### Ensuring user events correctness

_Ensuring captured user events are valid, i.e. the event is fired under the correct circumstance and with the correct parameters._

**Solution**: We parse event parameters, and added assertion fields to ensure the event is valid.

### Improving web app performance

_Having a better performance improvement is one of our goals in rewriting the web-app._

**Solution**: We render most of the components on the server-side, and only hydrate the client-side when needed.

### Module reusability

_The new Spacetoon Web consists of multiple applications, and we need to ensure that the codebase is modular and reusable._

**Solution**: We created a monorepo with shared codebase, and used Turbo Repo to manage the codebase.

## My Contributions

- Led the developers team, responsible for planning and requirement gathering.
- Design the architecture of the project.
- Integrating TAP payment to the platform.
- Implemented the new UI/UX design.

## Outcome

🚀 Successfully launched the new platform to Turkey region.
