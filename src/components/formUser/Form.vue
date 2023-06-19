<template>
  <div class="container">
    <form @submit="handleSubmit">
      <input v-model="form.correo" type="text" placeholder="correo" />
      <br />
      <br />
      <input
        v-model="form.contraseña"
        type="text"
        name=""
        id=""
        placeholder="contraseña"
      />
      <br />
      <br />
      <input
        v-model="form.repitacontraseña"
        type="text"
        name=""
        id=""
        placeholder="Repita contraseña"
      />
      <br />
      <br />
      <button type="submit">Crear Usuario</button>

      <br />
      <br />

      <button @click="volver">volver a iniciar sesion</button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const volver = () => {
      props.data.sentencia = false;
    };

    const form = reactive({
      correo: "",
      contraseña: "",
      repitacontraseña: "",
    });

    const prueba = () => {
      if (form.contraseña != form.repitacontraseña) {
        return false;
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();

      const data = prueba();
    };
    return {
      handleSubmit,
      form,
      volver,
    };
  },
};
</script>

<style scoped>
.container {
  text-align: center;
  height: 100%;
}
</style>
