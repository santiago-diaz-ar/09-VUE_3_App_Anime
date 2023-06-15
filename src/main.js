import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";

import Home from "./components/Home/Home.vue";
import Favorite from "./components/Favoritos/Favoritos.vue";
import Acerca from "./components/Acerca de/Acerca.vue";
import Sesion from "./components/iniciar sesion/Sesion.vue";
import Detalle from "./components/Detalle/Detalle.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "general", path: "/", component: Home },
    { name: "acerca", path: "/acerca", component: Acerca },
    { path: "/sesion", component: Sesion },
    { name: "detalle", path: "/detalle/:id", component: Detalle },
  ],
});

createApp(App).use(router).mount("#app");
