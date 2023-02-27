<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue"
import TheWelcome from "./components/TheWelcome.vue"
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it! Oh Yeah baby" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped lang="scss">
$primary: #5f2882;
@import "node_modules/bootstrap/scss/bootstrap";
</style>
