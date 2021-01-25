<template>
  <div>
    <h1>Aquí esta la lista de farmacos</h1>
    <PharmaList />
  </div>
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