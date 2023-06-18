<template>
  <form @submit="handleSubmit" class="text-center vh-100">
    <br /><br />
    <h6>Escribe cualquier correo y cualquier contraseña</h6>
    <h6>para visualizar cambios</h6>
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
  </form>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
import authState from "../../autenticacion/autenticacion";

export default {
  setup() {
    const isButtonDisabled = ref(false);
    const store = useStore();

    const correo = ref();
    const contrasena = ref();

    const handleSubmit = (event) => {
      event.preventDefault();

      // Llama a la mutación para actualizar el correo y la contraseña en la store
      store.commit("setCorreo", correo);
      store.commit("setContrasena", contrasena);
      isButtonDisabled.value = true;
      authState.user.correo = correo;
      authState.isAuthenticated = true;
    };

    return {
      correo,
      contrasena,
      handleSubmit,
      isButtonDisabled,
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
</style>
