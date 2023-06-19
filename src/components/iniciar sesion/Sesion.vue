<template>
  <div class="ocho" v-if="vista.sentencia">
    <!--     <Form /> -->
    <Form :data="vista" />
  </div>
  <div v-else>
    <br />/
    <form @submit="handleSubmit" class="text-center vh-100">
      <br /><br />

      <br /><br />
      <input
        :disabled="isButtonDisabled"
        v-model="correo"
        type="email"
        placeholder="Correo electrónico"
        required
      />
      <br />
      <br />
      <input
        :disabled="isButtonDisabled"
        v-model="contrasena"
        type="password"
        placeholder="Contraseña"
        required
      />
      <br /><br />

      <button type="submit" :disabled="isButtonDisabled" class="boton">
        Iniciar sesión
      </button>
      <br />
      <br />
      <button @click="vista.sentencia = true" class="j">Crear Usuario</button>
    </form>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, reactive } from "vue";
import authState from "../../autenticacion/autenticacion.js";
import dos from "../../autenticacion/authenticationForm.js";

import Form from "../formUser/Form.vue";

export default {
  components: {
    Form,
  },
  setup() {
    const vista = reactive({
      sentencia: false,
    });

    const isButtonDisabled = ref(false);
    const store = useStore();

    const correo = ref();
    const contrasena = ref();

    const handleSubmit = (event) => {
      event.preventDefault();

      if (
        (dos.correo === correo.value) &
        (dos.contraseña === contrasena.value)
      ) {
        console.log(dos.contraseña);
        store.commit("setCorreo", correo);
        store.commit("setContrasena", contrasena);
        isButtonDisabled.value = true;
        authState.user.correo = correo;
        authState.isAuthenticated = true;
        return alert("INICIO DE SESION EXITOSO");
      } else {
        return alert("DATOS NO COINCIDES O USUARIO NO CREADO ");
      }

      // Llama a la mutación para actualizar el correo y la contraseña en la store
    };

    return {
      correo,
      contrasena,
      handleSubmit,
      isButtonDisabled,
      vista,
      dos,
    };
  },
};
</script>

<style scoped>
.form {
  border: 2px solid red;
  text-align: center;
}
.boton {
  border-radius: 10px;
}
.ocho {
  margin-top: 7rem;
  text-align: center;
}
.j {
  border-radius: 10px;
}
</style>
