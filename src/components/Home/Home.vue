<template>
  <div class="contenedor">
    <div p v-for="a in $root.animes" :key="a" class="card">
      <router-link
        :to="{ name: 'detalle', params: { id: JSON.stringify(a) } }"
        >{{ a.name }}</router-link
      >
      <!--      <img :src="a.image" alt="image" /> -->
    </div>
  </div>
</template>

<script></script>

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
  color: white;
}
img {
  width: 230px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
</style>
