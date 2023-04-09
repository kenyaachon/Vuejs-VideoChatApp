<template>
  <div class="mt-3">
    <div class="text-center">
      Welcome <span class="font-weight-bold text-info"> {{ user }}</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomeView",
  props: {
    user: String
  }
}
</script>
