<template>
  <div class="contenedor">
    <div p v-for="a in $root.animes" :key="a" class="card">
      <router-link
        class="nav-link"
        :class="{ active: isActive('/detalle') }"
        :to="{ name: 'detalle', params: { id: JSON.stringify(a) } }"
        ><div>{{ a.name }}</div>
        <img :src="a.image" alt="image" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();

    const isActive = (routePath) => {
      return route.path === routePath;
    };
    return {
      isActive,
    };
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  text-align: center;

  margin: 20px;
  border-radius: 5px;
  background-color: black;
  color: red;
  width: 14.5rem;
}
img {
  width: 230px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
.nav-link {
  color: white;
  margin-right: 10px;
}
.nav-link.active {
  color: #f00; /* Color activo */
}
</style>
