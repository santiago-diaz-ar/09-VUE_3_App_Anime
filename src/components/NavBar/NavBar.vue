<template>
  <header>
    <nav>
      <ul>
        <router-link
          :to="{ name: 'general' }"
          class="nav-link"
          :class="{ active: isActive('/') }"
          >Informacion general</router-link
        >
        <!--    <router-link to="/favoritos">Favoritos</router-link> -->
        <router-link
          :to="{ name: 'acerca' }"
          class="nav-link"
          :class="{ active: isActive('/acerca') }"
          >Acerca de</router-link
        >

        <div v-if="authState.isAuthenticated">
          <router-link
            to="/sesion"
            class="nav-link"
            :class="{ active: isActive('/sesion') }"
            >{{ authState.user.correo }}</router-link
          >
        </div>
        <div v-else>
          <router-link
            to="/sesion"
            class="nav-link"
            :class="{ active: isActive('/sesion') }"
            >Iniciar sesion
          </router-link>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
import { useRoute } from "vue-router";
import authState from "../../autenticacion/autenticacion";

export default {
  setup() {
    const route = useRoute();

    const isActive = (routePath) => {
      return route.path === routePath;
    };
    return {
      authState,
      isActive,
    };
  },
};
</script>
<style scoped>
.render {
  border: 2px solid red;
}
nav {
  background-color: rgb(161, 161, 161);
  border-radius: 10px;
  margin-top: 10px;
  text-align: center;
  padding-top: 25px;
  padding-bottom: 15px;
  margin: 10px;
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
.nav-link {
  color: #000;
  margin-right: 10px;
}
.nav-link.active {
  color: #f00; /* Color activo */
}
</style>
