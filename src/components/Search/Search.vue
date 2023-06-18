<template>
  <div>
    <input type="text" v-model="capturaInput" />
    <button @click="submit">Enviar</button>
  </div>
  <div>
    {{ submit() }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["data"],
  setup(props) {
    const capturaInput = ref("");

    const submit = () => {
      const prueba = props.data.map((a) => {
        if (a.name === capturaInput.value) {
          return a;
        } else {
          return {
            nada: "anime no existe",
          };
        }
      });
      return prueba;
    };

    return {
      capturaInput,
      submit,
    };
  },
};
</script>
