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

      <div>
        <div v-for="item in responseData" :key="item.id">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div {
  text-align: center;
  border: 1px solid red;
  display: flex;
  flex-wrap: wrap;
  width: 70px;
  height: 70px;
}
</style>
