<template>
  <div>
    <input type="text" v-model="input" class="s" />
    <button @click="submit" class="p">Enviar</button>
  </div>
  <div class="prueba" v-if="estado.name.length > 0">
    <div class="dos">
      <button class="b" @click="borrado">X</button>
      <div>{{ estado.name }}</div>
      <img :src="estado.image" alt="imagen" />
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const input = ref("");

    const estado = reactive({
      name: "",
      image: "",
    });

    const borrado = () => {
      (estado.name = ""), (estado.image = "");
    };

    const submit = () => {
      props?.data?.filter((e) => {
        if (input.value == e.name) {
          estado.name = e.name;
          estado.image = e.image;

          return e;
        }
      });
    };

    return {
      submit,
      input,
      estado,
      borrado,
    };
  },
};
</script>

<style scoped>
.prueba {
  display: flex;
  justify-content: center;
}
.dos {
  width: 200px;
  height: 300px;
  border: 3px solid blue;
  border-radius: 10px;
  margin-top: 10px;
}
img {
  width: 100%; /* Hace que la imagen ocupe todo el ancho del contenedor */
  height: 80%; /* Ajusta automáticamente la altura en proporción al ancho */
  object-fit: cover; /* Escala la imagen para llenar el contenedor */
}
.b {
  margin-right: 10px;
  border-radius: 10px;
}
.s {
  border-radius: 10px;
}
.p {
  border-radius: 10px;
}
</style>
