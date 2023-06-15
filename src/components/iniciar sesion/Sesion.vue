<template>
  <div>
    <input type="text" v-model="store.state.usuario" placeholder="Usuario" />
    <input
      type="password"
      v-model="store.state.contraseña"
      placeholder="Contraseña"
    />
    <button @click="login">Iniciar sesión</button>
  </div>
</template>

<script>
import { useStore } from "../../store/Store";

export default {
  setup() {
    const store = useStore();

    const login = () => {
      const { usuario, contraseña } = store.state;
      // Realizar lógica de autenticación o cualquier acción necesaria
      console.log("Usuario:", usuario);
      console.log("Contraseña:", contraseña);
    };

    return {
      store,
      login,
    };
  },
};
</script>
