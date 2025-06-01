---
title: 'Coursegate (now Grumpy Royale)'
description: 'Developed a browser extension that helps users with dietary prefernce to grocery shopping online'
techStackIds: ['flutter', 'firebase', 'reactive-x']
relatedCompanies: ['cofoundery']
startDate: '2020-01-04'
---

## overview

Coursegate was an education app that provide k-12 courses and quizzes. This project pivoted into a coding learning platform named Grumpy Royal.

## Key Features

- 📚 **Courses & Quizzes** – Explore a variety of courses and interactive quizzes, all within the app.
- 👤 **Multiple Profiles** – Create and manage multiple profiles to track individual progress separately.
- 🌐 **Multi-Language Support** – Effortlessly switch between languages for a seamless learning experience.

## challenges & solutions

I'm working on an existing codebase, the challenges included here are some of my refactorings result.

### Inefficient data streaming

_The app made abundant connections to firestore streaming, which causes a performance problem and increased bill in Firebase._

**Solution**: The solution was to cache the streaming connection so they can be reused. This refactoring **dropped the number of created connections by 10 times**.

### Improving code architecture

_The codebase was not well-structured, making it difficult to maintain and extend._

**Solution**: We refactored the codebase by extracting reusable widgets, and adopt a well-defined state management pattern.

## outcome

Refactored the codebase Implemented various features such as video player and quizzes.
