import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import MealDetail from "../views/MealDetail.vue";
const routes = [{
    path: "/",
    alias: "/home",
    name: "home",
    component: Home
}, { path: "/meal/:id", name: "meal-detail", component: MealDetail }
];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;