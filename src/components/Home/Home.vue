<template>
  <div><h1>EN DESARROLLO</h1></div>

  <router-link :to="{ name: 'detalle', params: { id: 123 } }"
    >Detalle</router-link
  >
</template>

<script setup></script>

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
