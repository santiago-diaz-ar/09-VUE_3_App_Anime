import { createStore } from "vuex";

const store = createStore({
  state: {
    correo: "",
    contrasena: "",
  },
  mutations: {
    setCorreo(state, correo) {
      state.correo = correo;
    },
    setContrasena(state, contrasena) {
      state.contrasena = contrasena;
    },
  },
  getters: {
    getCorreo(state) {
      return state.correo;
    },
    getContrasena(state) {
      return state.contrasena;
    },
  },
});

export default store;
