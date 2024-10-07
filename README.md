# Shiny Barnacle - Blackjack Game

Welcome to **Shiny Barnacle**, a fun and interactive Blackjack game built with Vue 3 and TypeScript!

## Table of Contents

- [Introduction](#introduction)
- [Project Setup](#project-setup)
- [Game rules](#game-rules)

## Introduction

Shiny Barnacle is a simple yet engaging Blackjack game where you can play against the dealer. The game follows the standard rules of Blackjack, providing a great way to practice your skills or just have some fun.

## Project Setup

To get started with the project, follow these steps:

### Install Dependencies

```bash
npm install
```

### Compiles and Hot-Reloads for Development

```bash
npm run serve
```

### Compiles and Minifies for Production

```bash
npm run build

## Game Rules

### Deck
- **One deck of 54 cards** is used (suits don't matter).
- In casinos, up to **8 decks** are used, but we use one for simplicity.

### Card Values
- **Cards 2-10**: Face value (2-10 points).
- **Face cards** (Jack, Queen, King): 10 points.
- **Ace**: 11 points or 1 point (whichever keeps the total below or equal to 21).

### Dealing
- Each **player receives two cards** face-up.
- The **dealer receives one card** face-up.

### Objective
- Get as **close to 21 points** as possible without exceeding it.
- If a player goes **over 21**, they **lose automatically**.

### Gameplay
- Players decide whether to **"Hit"** (take another card) or **"Stand"** (keep their cards).
- After each card, players reassess whether to continue or stop.
- Once the player stands, the **dealer draws cards** until reaching at least **17 points**.

### Winning
- The **player wins** if they have more points than the dealer without exceeding 21.
- The **dealer wins** if they have more points or if the player **busts** (goes over 21).
```
