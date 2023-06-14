import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home/Home.vue";
import Favorite from "./components/Favoritos/Favoritos.vue";
import Acerca from "./components/Acerca de/Acerca.vue";
import Sesion from "./components/iniciar sesion/Sesion.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/general", component: Home },
    { path: "/favoritos", component: Favorite },
    { path: "/acerca", component: Acerca },
    { path: "/sesion", component: Sesion },
  ],
});

createApp(App).use(router).mount("#app");
