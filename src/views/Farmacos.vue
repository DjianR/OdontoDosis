<template>
<div class="card ml-3 mr-3">
  <div class="card-header">
    Versión de prueba 0.1
  </div>
  <div class="card-body">
    <h5 class="card-title">Fármacos disponibles</h5>
    <p class="card-text">La lista de farmacos irá creciendo a medida que se avance en el prototipo de este sitio. Gracias por la paciencia.</p>
  </div>
  
  </div>
  <PharmaList />
    
  </template>
<script>
import PharmaList from '../components/PharmaList.vue';

export default {
  name : 'Farmacos',
  components: {
    PharmaList
  },
};
</script>

<style>
</style>