<script lang="ts">
import Navigation from "@/components/Navigation.vue"
import { db } from "./backend/firebase"
import { collection, getDocs } from "firebase/firestore"
export default {
  name: "App",
  data: function () {
    return {
      user: ""
    }
  },
  async mounted() {
    const querySnapshot = await getDocs(collection(db, "users"))
    console.log("the authorization worked")
    // not the most ideal, but since I only have document in the collection this
    // should work
    querySnapshot.forEach(doc => {
      this.user = doc.data().name
    })
  },
  components: {
    Navigation
  }
}
</script>

<template>
  <div id="app">
    <Navigation />

    <router-view :user="user" />
  </div>
</template>

<style lang="scss">
$primary: #5f2882;
@import "../node_modules/bootstrap/scss/bootstrap";
</style>
