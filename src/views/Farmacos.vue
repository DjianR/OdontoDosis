<template>
  <div>
    <h1>Aquí esta la lista de farmacos</h1>
  </div>
</template>

<script>
export default {
  methods: {
    async consultarAPI() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const array = await data.json();
        console.log(array);
      } catch {}
    },
  },
  created:{
    this.consultarAPI()
  }
};
</script>

<style>
</style>