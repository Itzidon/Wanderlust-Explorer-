# Wanderlust Explorer

Multi-page travel experience platform built with Next.js, React, TypeScript and Tailwind CSS.

## Features

* Home page with hero section
* Experiences explorer
* Search experiences by title
* Filter by category
* Filter by destination
* Dynamic detail page
* Favorites page
* Profile page with favorite counter
* Responsive design
* Custom hook for filtering logic

---

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS

---

## Pages

### Home

`/`

Landing page with hero section and CTA button.

### Experiences

`/experiences`

Browse travel experiences.

Features:

* Search by title
* Category filter
* Destination filter
* URL synchronization

### Experience Detail

`/experiences/[id]`

Displays detailed information for each experience.

### Favorites

`/favorites`

Displays saved experiences.

### Profile

`/profile`

User profile simulation with favorite counter.

---

## Components

* Navbar
* ExperienceCard
* SearchBar
* FilterBar

---

## Hooks

### useExperiences

Custom hook used to manage filtering logic.

---

## Data

Dataset generated with 100 travel experiences.

Location:

src/data/experiences.ts

---

## Design References

Inspired by:

* Airbnb
* Booking
* GetYourGuide

---

## Getting Started

Install:

npm install

Run:

npm run dev

Open:

http://localhost:3000

---

## Author

Created by Itziar Dondiz
