<template>
  <div class="home">

    <div class="card">
      <div class="card-header">
            <img alt="Vue logo" src="../assets/odontomil.jpg" />
    <img class="ml-2 mt-1" alt="Vue logo" src="../assets/odontodosis.png" />

    <!-- <HelloWorld msg="Farmacos"/> -->
      </div>
      <div class="card-body">
        <h5 class="card-title">Herramienta farmacologica linda</h5>
        <p class="card-text">
          Una aplicación de odontomilenial con mucho cariño pa todos los nenes del bloque
        </p>
        <a href="#" class="btn btn-primary">ir al instagram</a>
      </div>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { PharmaList } from '@/components/PharmaList.vue'
export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
