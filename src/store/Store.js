import { reactive, provide, inject } from "vue";

// Crea un objeto reactivo para almacenar el estado global
const createStore = () => {
  const state = reactive({
    usuario: "",
    contraseña: "",
  });

  return {
    state,
  };
};

// Provee el store en la aplicación
const provideStore = () => {
  const store = createStore();
  provide("store", store);
};

// Obtiene el store en los componentes
const useStore = () => {
  const store = inject("store");
  if (!store) {
    throw new Error(
      "No se ha encontrado el store. Asegúrate de llamar a provideStore en el componente raíz."
    );
  }
  return store;
};

export { provideStore, useStore };
