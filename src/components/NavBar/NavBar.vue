<template>
  <header>
    <nav>
      <ul>
        <router-link :to="{ name: 'general' }">Informacion general</router-link>
        <!--    <router-link to="/favoritos">Favoritos</router-link> -->
        <router-link :to="{ name: 'acerca' }">Acerca de</router-link>

        <div>
          <p v-if="showText" class="condicion">
            <router-link to="/sesion">Iniciar sesion </router-link>
          </p>
          <p v-else>
            <router-link to="/sesion">Javier santiago diaz arcila </router-link>
          </p>
        </div>
      </ul>
    </nav>
  </header>
  <main></main>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const showText = ref(true);

    const toggleText = () => {
      showText.value = !showText.value;
    };

    return {
      showText,
      toggleText,
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
.condicion {
}
</style>
