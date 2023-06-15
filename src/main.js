import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { provideStore } from "./store/Store";

import Home from "./components/Home/Home.vue";
import Acerca from "./components/Acerca de/Acerca.vue";
import Sesion from "./components/iniciar sesion/Sesion.vue";
import Detalle from "./components/Detalle/Detalle.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { name: "general", path: "/", component: Home },
    { name: "detalle", path: "/detalle/:id", component: Detalle },
    { name: "acerca", path: "/acerca", component: Acerca },
    { path: "/sesion", component: Sesion },
  ],
});

const app = createApp(App);
app.use(router);
provideStore();
app.mount("#app");
