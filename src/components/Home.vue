<template>
  <v-card class="mx-auto" min-width="344" min-height="200" variant="outlined" elevation="12">
    <v-card-item>
      <h4 class="display-4 text-primary mb-2">Video Chat</h4>
      <p class="lead">
        This app uses Firebase for real time communication and WebRTC to create video chats between
        multiple users, allowing you to create rooms for your meetings and invite attendes.
      </p>
    </v-card-item>

    <v-card-item class="text-center">
      <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>

      <router-link class="btn btn-outline-primary mr-2" to="/register">Register</router-link>
    </v-card-item>
  </v-card>
</template>

<script lang="ts">
export default {
  name: "HomeView",
  props: {
    user: String
  },
  computed: {
    currentUser() {
      console.log("this is the current user", this.$store.state.user)
      return this.$store.state.user
    }
  }
}
</script>

<style scoped>
/* .v-card {
  background: red;
} */
</style>
