# 🍽️ Vue Meals Finder

A simple recipe browsing app built with **Vue 3 + Vite** and [TheMealDB API](https://www.themealdb.com/api.php).  
Users can:
- 🔍 Search meals by name
- 🏷️ Filter meals by category
- 📖 View detailed meal instructions
- ▶️ Watch YouTube recipe videos

---

## 🚀 Features

- **Search Bar** → Search meals by text input
- **Category Filter** → Choose a meal category (Seafood, Beef, etc.)
- **Meal Cards** → Display meals in a responsive grid
- **Meal Detail Page** → Show instructions, category, area, and video link
- **Responsive UI** → Tailwind CSS styling

---

## 📂 Project Structure

src/
├── assets/ # Static assets (if any)
├── components/ # Reusable components
│ ├── Card.vue # Single meal card
│ ├── SearchBar.vue # Search input
│ ├── CategoryFilter.vue # Dropdown category filter
│ └── MealDetail.vue # Meal details page
├── pages/
│ ├── Home.vue # Search + filter + meal list
│ └── Meal.vue # Wraps MealDetail component
├── App.vue # Root app with <RouterView/>
├── main.js # Vue app entry point
└── router/ # Vue Router config


---

## 🛠️ Tech Stack

- [Vue 3](https://vuejs.org/) with `<script setup>`
- [Vite](https://vitejs.dev/) for bundling
- [Vue Router](https://router.vuejs.org/) for navigation
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Axios](https://axios-http.com/) for API requests
- [TheMealDB API](https://www.themealdb.com/api.php) as the data source

