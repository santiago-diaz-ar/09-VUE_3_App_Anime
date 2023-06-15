<template>
  <div class="contenedor">
    <div p v-for="a in animes" :key="a" class="card">
      <router-link
        :to="{ name: 'detalle', params: { id: JSON.stringify(a) } }"
        >{{ a.name }}</router-link
      >
      <img :src="a.image" alt="image" />
    </div>
  </div>
</template>

<script>
import prueba from "../Helpers/animedata";
export default {
  async mounted() {
    this.animes = await prueba();
  },
  data() {
    return {
      animes: [],
    };
  },
  //ya no es necesario el methods aca por que me importa la funcion desde otro archivo
  /*  methods: {
    getAnime: async function () {
      this.animes = await fetch(
        "https://kitsu.io/api/edge/trending/anime?limit=2"
      ).then((res) => res.json());
      console.log(this.animes);
    },
  }, */
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
  color: white;
}
img {
  width: 230px;
  height: 250px;
  object-fit: cover;
  border-radius: 2px;
}
</style>
