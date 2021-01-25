<template>
  <button @click="traerDATA">Recargar farmacos</button>
  <ul>
    <li v-for="(item) in farmacosArray" :key="item.id">
      <router-link :to="{name:'DetalleFarmaco', params:{id: item.id }}">
        {{item.title}}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "PharmaList",
  data() {
    return {
      farmacosArray : []
    }
  },

  methods: {
    holi() {
      console.log("holi");
    },
    async traerDATA() {
      try {
        const data = await fetch("https://jsonplaceholder.typicode.com/posts");
        const array = await data.json();
        console.log(array);
        this.farmacosArray = array;
      } catch {}
    },
  },
  create() {
    this.traerDATA();
  },
};
</script>

<style>
</style>
