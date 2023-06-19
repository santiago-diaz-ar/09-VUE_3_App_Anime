<template>
  <div>
    <br />
    <div class="row">
      <div class="col text-center">
        <h2 class=" ">{{ anime.name }}</h2>
        <div class="text-center">{{ anime.description }}</div>
      </div>
      <img :src="anime.image" alt="" class="col" />
    </div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
export default {
  setup() {
    const route = useRoute();
    return {
      anime: JSON.parse(route.params.id),
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
  margin-top: 35px;
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
  border-radius: 5rem;
}
</style>
