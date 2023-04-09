<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col-10 col-md-10 col-lg-8 col-xl-7">
        <h4 class="display-4 text-primary mb-2">Video Chat</h4>
        <p class="lead">
          This app uses Firebase for real time communication and WebRTC to create video chats
          between multiple users, allowing you to create rooms for your meetings and invite
          attendes.
        </p>
        <router-link class="btn btn-outline-primary mr-2" to="/login">Log In</router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigationVue",
  props: {
    user: String
  }
}
</script>
