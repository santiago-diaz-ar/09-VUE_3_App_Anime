<template>
  <form @submit="handleSubmit">
    <input
      v-model="correo"
      type="email"
      placeholder="Correo electrónico"
      required
    />
    <input
      v-model="contrasena"
      type="password"
      placeholder="Contraseña"
      required
    />
    <button type="submit">Iniciar sesión</button>
  </form>
</template>

<script>
import { useStore } from "vuex";
import authState from "../../autenticacion/autenticacion";

export default {
  setup() {
    const store = useStore();

    const correo = "example@example.com";
    const contrasena = "contrasena123";

    const handleSubmit = (event) => {
      event.preventDefault();

      // Llama a la mutación para actualizar el correo y la contraseña en la store
      store.commit("setCorreo", correo);
      store.commit("setContrasena", contrasena);

      authState.user.correo = correo;
      authState.isAuthenticated = true;
    };

    return {
      correo,
      contrasena,
      handleSubmit,
    };
  },
};
</script>
