<template>
  <button @click="traerDATA">Recargar farmacos</button>
  <ul>
    <li v-for="(item, index) in farmacosArray" :key="item.index">
      <router-link :to="{name:'DetalleFarmaco', params:{id: index }}">
        {{item.mombre}}
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
        const data = await fetch("https://raw.githubusercontent.com/DjianR/OdontoDosis/master/db.json");
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
