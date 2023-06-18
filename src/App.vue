<template>
  <Nav></Nav>
  <router-view></router-view>
</template>

<script>
import { ref, onMounted } from "vue";
import Nav from "./components/NavBar/NavBar.vue";
import prueba from "./components/Helpers/animedata.js";
import Search from "./components/Search/Search.vue";

export default {
  //vue 2
  /* name: "App",
  async mounted() {
    console.log();
    if (this.animes.length === 0) {
      this.animes = await prueba();
    }
  },
  components: {
    Nav,
  },
  data() {
    return {
      animes: [],
    };
  }, */

  name: "App",
  components: {
    Nav,
    Search,
  },
  setup() {
    const animes = ref([]);
    onMounted(async () => {
      if (animes.value.length === 0) {
        animes.value = await prueba();
      }
    });
    return {
      animes,
    };
  },
};
</script>

<style scoped></style>
