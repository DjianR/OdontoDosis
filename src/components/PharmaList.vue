<template>
  <ul>
    <li v-for="(item, index) in farmacosArray" :key="item.index">
      <router-link
        :to="{
          name: 'DetalleFarmaco',
          params: {
            id: index,
            nombre: item.nombre,
            desc: item.descripción,
            indA: item.indA,
            indN: item.indN,
            cat: item.cat
          },
        }"
      >
        {{ item.nombre }}
      </router-link>
    </li>
  </ul>
  <button @click="traerDATA">Recargar farmacos</button>
  <button @click="vamos">ir al primero</button>
</template>

<script>
export default {
  name: "PharmaList",
  data() {
    return {
      farmacosArray: [],
    };
  },
  created() {
    this.traerDATA();
  },
  methods: {
    vamos() {
      this.$router.push({
        name: "DetalleFarmaco",
        params: {
          id: 1,
          farmaco: { nombre: "soy un farmaquito", id: "1" },
        },
      });
    },
    holi() {
      console.log("holi");
    },
    async traerDATA() {
      try {
        const data = await fetch(
          "https://raw.githubusercontent.com/DjianR/OdontoDosis/master/db.json"
        );
        const array = await data.json();
        console.log(array);
        this.farmacosArray = array;
      } catch {}
    },
  },
};
</script>

<style>
</style>
