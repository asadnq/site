---
title: 'Coursegate (now Grumpy Royale)'
description: 'Developed a browser extension that helps users with dietary prefernce to grocery shopping online'
techStackIds: ['flutter', 'firebase', 'reactive-x']
relatedCompanies: ['cofoundery']
startDate: '2020-01-04'
---

## overview

Coursegate was an education app that provide k-12 courses and quizzes. This project pivoted into a coding learning platform named Grumpy Royal.

## challenges & solutions

I'm working on an existing codebase, the challenges included here are some of my refactorings result.

### inefficient data streaming

The app made abundant connections to firestore streaming, which causes a performance problem and increased bill in Firebase

The solution was to cache the streaming connection so they can be reused. This refactoring drops the number of created connections by 10 times.

## outcome

Refactored the codebase Implemented various features such as video player and quizzes.
