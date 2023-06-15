<template>
  <div class="contenedor">
    <br />
    <div class="card">{{ anime.name }}</div>
    <img :src="anime.image" alt="" />
    <div>{{ anime.description }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anime: JSON.parse(this.$route.params.id),
    };
  },
};
</script>

<style scoped>
.contenedor {
  text-align: center;
  border: 2px solid gray;
  margin: 10px;
  border-radius: 10px;
}
.card {
  text-align: center;
  margin: 20px;
  border-radius: 5px;
  background-color: black;
  color: white;
}
img {
  width: 330px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
</style>
