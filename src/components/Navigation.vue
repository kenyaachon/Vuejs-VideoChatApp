<template>
  <!-- <div>
    <nav class="navbar navbar-expand bg-primary navbar-dark">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/">
          <span class="h2 pr-1">Video Chat</span>
          <span class="navbar-text small" v-if="!isUserLoggedIn">
            : Hi <span class="font-weight-bold text-white"> {{ currentUser }}</span>
          </span>
        </router-link>
        <div class="navbar-nav ml-auto">
          <router-link v-if="isUserLoggedIn" to="/login" class="nav-item nav-link"
            >log in</router-link
          >
          <router-link v-if="isUserLoggedIn" to="/register" class="nav-item nav-link"
            >register</router-link
          >

          <button v-else class="btn btn-primary" type="submit" @click="logoutUser">logout</button>
        </div>
      </div>
    </nav>
  </div> -->
  <v-card color="teal-darken-4" class="mx-auto navbar navbar-expand" max-width="448">
    <v-layout>
      <v-app-bar>
        <router-link class="navbar-brand" to="/">
          <span class="h2 pr-1">Video Chat</span>
          <span class="navbar-text small" v-if="!isUserLoggedIn">
            : Hi <span class="font-weight-bold text-white"> {{ currentUser }}</span>
          </span>
        </router-link>

        <div class="navbar-nav ml-auto">
          <router-link v-if="isUserLoggedIn" to="/login" class="nav-item nav-link"
            >log in</router-link
          >
          <router-link v-if="isUserLoggedIn" to="/register" class="nav-item nav-link"
            >register</router-link
          >

          <button v-else class="btn btn-primary" type="submit" @click="logoutUser">logout</button>
        </div>
      </v-app-bar>
    </v-layout>
  </v-card>
</template>

<script lang="ts">
import { getAuth, signOut } from "firebase/auth"
import { mapGetters } from "vuex"
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
    },
    ...mapGetters(["isUserLoggedIn"])
  },
  methods: {
    logoutUser() {
      const auth = getAuth()

      signOut(auth)
        .then(() => {
          console.log("signing out user", this.$store.state.user)
          this.$store.dispatch("logoutUser")
          // this.$router.replace("/login")
        })
        .catch(error => {
          console.error("error occured while signing out user", error)
        })
    }
  }
}
</script>
