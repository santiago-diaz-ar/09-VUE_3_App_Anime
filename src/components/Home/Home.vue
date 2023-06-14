<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const responseData = ref(null);
const isLoading = ref(false);
const error = ref(null);

const fetchData = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(
      "https://api.rawg.io/api/platforms?key=bb66399c2b3b43f1b33263d6135fa4ba"
    );
    responseData.value = response.data.results;
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
};

onMounted(fetchData);
</script>

<template>
  <div>
    <div v-if="isLoading">Cargando...</div>
    <div v-else-if="error">Ha ocurrido un error: {{ error }}</div>
    <div v-else>
      <!-- Mostrar los datos de la respuesta de la API aquí -->
      <div class="contenedor">
        <div class="card" v-for="item in responseData" :key="item.id">
          <div>{{ item.name }}</div>
          <img :src="item.image_background" />
          <div>total games: {{ item.games.length }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

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
