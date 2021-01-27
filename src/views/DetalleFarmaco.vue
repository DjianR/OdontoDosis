<template>
<div class="card text-center">
  <div class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a class="nav-link active" >info</a>
      </li>

    </ul>
  </div>
  <div class="card-body">
    <h5 class="card-title">{{nombre}}</h5>
    <p class="card-text">Categoría: {{cat}}</p>
    <p class="card-text">{{desc}}</p>
    <p class="card-text">{{indA}}</p>
    <p class="card-text">{{indN}}</p>
    <a href="#" class="btn btn-primary">Calculadora</a>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    id: String,
    nombre: String,
    desc: String,
    cat: String,
    indA: String,
    indN: String,
  },

  created() {
    console.log(this.id);
    console.log(this.nombre);
  },
};
</script>

<style>
</style>