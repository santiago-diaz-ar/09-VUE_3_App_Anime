<template>
  <div class="containerSearch">
    <Search :data="$root.animes" />
  </div>
  <div class="contenedor">
    <div p v-for="a in $root.animes" :key="a" class="card">
      <router-link
        class="prueba"
        :to="{ name: 'detalle', params: { id: JSON.stringify(a) } }"
      >
        <div>
          {{ a.name }}
        </div>
        <!-- <img :src="a.image" alt="image" /> -->
      </router-link>
    </div>
  </div>
</template>

<script>
import Search from "../Search/Search.vue";
export default {
  components: {
    Search,
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
.card {
  text-align: center;
  margin: 20px;
  border-radius: 5px;
  background-color: black;
  color: white;
  width: 14.5rem;
}
img {
  width: 230px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
.prueba {
  border: 2px solid black;
  white-space: pre-wrap;
  color: white;
}
.containerSearch {
  text-align: center;
}
</style>
