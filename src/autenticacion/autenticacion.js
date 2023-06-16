import { reactive } from "vue";

// Crear el estado global
const authState = reactive({
  isAuthenticated: false,
  user: {
    correo: "",
    contraseña: "",
  },
});

export default authState;
