<template>
  <div class="container">
    <div class="notification is-primary">
      This container is <strong>centered</strong> on desktop and larger
      viewports.
    </div>
    <div class="buttons">
      <b-button>Normal</b-button>
      <b-button disabled>Disabled</b-button>
      <b-button loading>Loading</b-button>
      <b-button rounded>Rounded</b-button>
      <b-button focused>Focused</b-button>
      <b-button hovered>Hovered</b-button>
      <b-button selected>Selected</b-button>
      <b-button active>Active</b-button>
    </div>
    <div class="buttons">
      <b-button type="is-primary" expanded>Soy un farmaco</b-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "PharmaList",
};
</script>

<style>
</style>