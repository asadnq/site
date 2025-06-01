---
title: 'Foodlama browser extension'
description: 'Developed a browser extension that helps users with dietary prefernce to grocery shopping online'
techStackIds:
  [
    'browser-extension',
    'react',
    'ts',
    'jest',
    'express-js',
    'mongo-db',
    'firebase',
  ]
relatedCompanies: ['foodlama', 'cloud-thought']
startDate: '2021-06-01'
---

## Overview

Foodlama is a start-up focused on improving shopping experience for people with dietary preferences. It was [chosen by Google for 2022 Startups black founders fund](https://startupsmagazine.co.uk/article-foodlama-chosen-google-2022-startups-black-founders-fund).

## Key Features

- 🛍 **Supports Multiple Retailers** – Shop across various retailers.
- 👤 **Customizable Profiles** – Personalize the shopping experience to match users' dietary needs.
- 🏷 **Dietary Preference Labeling** – Instantly identify products that align with dietary preferences.
- ⭐ **Smart Recommendations** – Receive tailored product suggestions based on users' diets.

## Challenges & Solutions

### Supporting multiple retailers

_Foodlama works by updating the interface of the retailers site. For example, it adds a label on top of a food product to indicate whether it is suitable with user's dietary preferences. Each retailer has its own interface and UI, so we had to build a custom solution for each retailer._

**Solution** To minimize the effort, we modularized the code and created a layer that's specific to each retailer. With this approach, we were able to support multiple retailers with minimal effort by creating a new connector for each retailer.

### Gathering and labelling ingredients data

_We couldn't find any public data or APIS of ingredients and their relation to dietary preferences._

**Solution**: We scrapped the ingredients from retailer websites and labelled their compatibility with the supported dietary preferences. We also built an internal tool to review and help us to label the data.

> **Notes**: We built this before the widespread of LLM such as ChatGPT. If I were to build this again, I would use RAG (Retrieval Augmented Generation) to generate the data.

## Contributions

- Led the developers team, responsible for planning and requirement gathering.
- Architected the project.
- Developed the custom connector for each retailer.
- Implemented the core analysis function which is used to determine the compatibility of ingredients with dietary preferences.
- Continuously improve the core analysis function by testing it against more products and refining the data.

## Outcome

- We were able to support 3 retailers (ASDA, Tesco, and Ocado)
- We supported 22 dietary preferences:
  1. Mammals-Free
  2. Palm-Kernel-Oil Free
  3. Palm-Oil Free
  4. Poultry Free
  5. Vegan Vegetarian
  6. Celery allergy
  7. Eggs allergy
  8. Fish allergy
  9. Gluten allergy
  10. Lupin allergy
  11. Milk allergy
  12. Mustard allergy
  13. Peanuts allergy
  14. Sesame-seeds allergy
  15. Shellfish allergy
  16. Soy allergy
  17. Tree nuts allergy
  18. Sulphites allergy
  19. Caffeine intolerance
  20. Dairy intolerance
  21. Fructose intolerance
  22. Lactose intolerance
