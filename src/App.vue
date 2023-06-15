<template>
  <!--   <header>
    <nav>
      <ul>
        <router-link :to="{ name: 'general' }">Informacion general</router-link>
        
        <router-link to="/acerca">Acerca de</router-link>
        <router-link to="/sesion">Modificar datos </router-link>
      </ul>
    </nav>
  </header> -->
  <Nav></Nav>

  <router-view></router-view>
</template>

<script>
import Home from "./components/Home/Home.vue";
import Nav from "./components/NavBar/NavBar.vue";
import prueba from "./components/Helpers/animedata.js";
import { provideStore } from "./store/Store";

export default {
  name: "App",
  async mounted() {
    provideStore();
    if (this.animes == 0) {
      this.animes = await prueba();
    }
  },
  components: {
    Home,
    Nav,
  },
  data() {
    return {
      animes: [],
    };
  },
};
</script>
<style scoped>
/* Estilos de la barra de navegación */
nav {
  background-color: #f2f2f2;
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 30px;
}

li {
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}
</style>
