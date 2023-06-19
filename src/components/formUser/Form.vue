<template>
  <div class="container">
    <br />
    <form @submit="handleSubmit">
      <input
        v-model="form.correo"
        type="email"
        placeholder="correo electronico"
      />
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

      <div v-if="!form.contraseñasIguales" class="error">
        Las contraseñas deben ser iguales
      </div>

      <br />
      <button type="submit" class="j">Crear Usuario</button>

      <br />
      <br />

      <button @click="volver" class="j">volver a iniciar sesion</button>
    </form>
  </div>
</template>

<script>
import { reactive, watch } from "vue";

import authendos from "../../autenticacion/authenticationForm.js";

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
      contraseñasIguales: false,
    });

    const handleSubmit = (event) => {
      event.preventDefault();

      if (form.contraseñasIguales === false || form.correo.length == 0) {
        return alert("contrañas no iguales");
      } else {
        authendos.correo = form.correo;
        authendos.contraseña = form.contraseña;
        return alert("usuario creado con exito");
      }
    };

    watch(
      () => [form.contraseña, form.repitacontraseña],
      ([contrasena, repitacontraseña]) => {
        form.contraseñasIguales = contrasena === repitacontraseña;
      }
    );

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
.error {
  color: red;
}
.j {
  border-radius: 10px;
}
</style>
