<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/odontomil.jpg" />
    <PharmaList/>
    <!-- <HelloWorld msg="Farmacos"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { PharmaList } from '@/components/PharmaList.vue'
import PharmaList from '../components/PharmaList.vue';
// import Autocomplete from '@trevoreyre/autocomplete-vue'

export default {
  name: "Home",
  components: {
    HelloWorld,
    PharmaList

  },
};
</script>
