<template>soy el detalle de un farmacos id = {{ $route.params.id }} y  {{indA}}</template>

<script>
export default {
  data() {
    return {
      hola : this.$route.params.query
    }
  },
  props:{
    id : String,
    nombre: String,
    desc: String,
    cat: String,
    indA: String,
    indN: String
  },
  created() {
    console.log(this.id);
    console.log(this.nombre);

  },


}
</script>

<style>
</style>