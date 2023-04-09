<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome {{ user }}</p>
  </div>
</template>

<script lang="ts">
import { db } from "../backend/firebase"
import { collection, getDocs } from "firebase/firestore"
export default {
  name: "home",
  data: function () {
    return {
      user: "hello butkis"
    }
  },
  async mounted() {
    // db.collection("users")
    //   .doc("2BpRHmgdLtYQHOcwHtqU")
    //   .get()
    //   .then(snapshot => {
    //     this.user = snapshot.data().name
    //   })
    const querySnapshot = await getDocs(collection(db, "users"))
    console.log("the authorization worked")
    // not the most ideal, but since I only have document in the collection this
    // should work
    querySnapshot.forEach(doc => {
      this.user = doc.data().name
    })
  }
}
</script>
