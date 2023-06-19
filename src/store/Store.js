import { createStore } from "vuex";

const store = createStore({
  state: {
    correo: "",
    contrasena: "",
  },
  statedos: {
    correo: "",
    contraseña: "",
    repitacontraseña: "",
  },
  mutations: {
    setCorreo(state, correo) {
      state.correo = correo;
    },
    setContrasena(state, contrasena) {
      state.contrasena = contrasena;
    },
    setdoscorreo(statedos, correo) {
      statedos.correo = correo;
    },
    setdosContraseña(statedos, contraseña) {
      statedos.contrasena = contraseña;
    },
    setdosRepitaContraseña(statedos, repitacontraseña) {
      statedos.repitacontraseña = repitacontraseña;
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
