<template>
  <header>
    <nav>
      <ul>
        <router-link :to="{ name: 'general' }">Informacion general</router-link>
        <router-link to="/favoritos">Favoritos</router-link>
        <router-link to="/acerca">Acerca de</router-link>
        <router-link to="/sesion">Iniciar sesion</router-link>
      </ul>
    </nav>
  </header>
  <main><router-view></router-view></main>
</template>

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
