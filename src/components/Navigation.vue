<template>
  <div>
    <nav class="navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <span class="h2 pr-1">Video Chat</span>
          <span class="navbar-text small">
            : Hi <span class="font-weight-bold text-white"> {{ currentUser }}</span>
          </span>
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link to="/login" class="nav-item nav-link">log in</router-link>
          <router-link to="/register" class="nav-item nav-link">register</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
export default {
  name: "NavigationVue",
  // props: {
  //   user: String
  // },
  data() {
    return {}
  },
  computed: {
    currentUser() {
      console.log("this is the current user", this.$store.state.user)
      return this.$store.state.user
    }
  }
}
</script>
