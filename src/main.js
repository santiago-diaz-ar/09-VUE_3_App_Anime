import { createApp } from "vue";
import cors from "cors";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import Home from "./components/Home/Home.vue";
import Acerca from "./components/Acerca de/Acerca.vue";
import Sesion from "./components/iniciar sesion/Sesion.vue";
import Detalle from "./components/Detalle/Detalle.vue";

import store from "./store/Store.js";

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

app.use(store);
app.use(cors);
app.mount("#app");
