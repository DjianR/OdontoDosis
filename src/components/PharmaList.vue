<template>

  <ul class="list-group ml-3 mr-3" >
    <li v-for="(item, index) in farmacosArray" :key="item.index" class="list-group-item">
      <router-link
        :to="{
          name: 'DetalleFarmaco',
          params: {
            id: index,
            nombre: item.nombre,
            desc: item.desc,
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
  <button class="mt-3 btn btn-primary" @click="traerDATA">Recargar farmacos</button>
  <!-- <button @click="vamos">ir al primero</button> -->
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
