<template>
  <nav>
    <ul>
      <li><a href="#">Informacion general</a></li>
      <li><a href="#">Favoritos</a></li>
      <li><a href="#">Acerca de</a></li>
      <li><a href="#">Loguear</a></li>
    </ul>
  </nav>
</template>

<script setup>
// Importa los elementos necesarios de Vue
import { defineComponent } from "vue";

// Define el componente
const Navbar = defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
/* Estilos de la barra de navegación */
nav {
  background-color: #f2f2f2;
  padding: 10px;
}

ul {
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
