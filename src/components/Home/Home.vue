<template>
  <div></div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import axios from "axios";

const state = reactive({
  responseData: null,
});

onMounted(async () => {
  try {
    const response = await axios.get(
      "https://kitsu.io/api/edge/trending/anime?limit=10"
    );
    state.responseData = response.data;
    console.log(state.responseData);
  } catch (error) {
    console.error(error);
  }
});
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
  color: white;
}
img {
  width: 230px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
</style>
