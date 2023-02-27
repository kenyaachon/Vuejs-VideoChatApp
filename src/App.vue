<script lang="ts">
import Navigation from "@/components/Navigation.vue"

export default {
  components: {
    Navigation
  }
}
</script>

<template>
  <div id="app">
    <Navigation />

    <router-view />
  </div>
</template>

<style lang="scss">
$primary: #5f2882;
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
