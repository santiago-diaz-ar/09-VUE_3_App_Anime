import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    comment: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
