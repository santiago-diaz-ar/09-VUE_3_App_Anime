<template>
  <div class="container-fluid text-center mt-5">
    <div class="row">
      <div class="col">
        <p class="">
          Soy un desarrollador web full stack y desarrollador móvil con
          experiencia en React Native. Mi pasión es crear soluciones digitales
          eficientes y atractivas que combinen lo mejor de las aplicaciones web
          y móviles. Con habilidades sólidas en HTML, CSS y JavaScript, puedo
          crear sitios web modernos y responsivos que brinden una excelente
          experiencia de usuario en cualquier dispositivo. También tengo
          experiencia en el desarrollo de aplicaciones móviles utilizando React
          Native, lo que me permite crear aplicaciones nativas para iOS y
          Android. Si estás buscando un profesional versátil en el desarrollo
          web y móvil, estoy aquí para ayudarte. Podemos discutir tus ideas y
          trabajar juntos para crear soluciones digitales que cumplan con tus
          necesidades y objetivos. No dudes en contactarme para discutir tu
          proyecto. Estaré encantado de ser parte de tu éxito y brindarte mi
          experiencia en el desarrollo web full stack y en el desarrollo móvil
          con React Native. Espero tener la oportunidad de trabajar contigo y
          convertir tus ideas en realidad. ¡Contáctame hoy mismo y comencemos a
          construir algo grandioso juntos!
        </p>
      </div>
      <div class="col">
        <img :src="imagen" alt="" class="img" />
      </div>
    </div>
  </div>
</template>

<script setup>
import imagen from "../../assets/uno.jpg";
import "bootstrap/dist/css/bootstrap.css";
</script>

<style scoped>
.p {
  border: 2px solid red;
  text-align: center;

  align-items: center;
}
.img {
  width: 320px;
  height: 320px;
  border-radius: 200px;
}
</style>
