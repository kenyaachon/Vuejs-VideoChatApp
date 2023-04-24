<template>
  <v-card
    class="mx-auto text-center"
    min-width="344"
    min-height="200"
    variant="outlined"
    elevation="12"
  >
    <v-card-title> <h2>Add Room</h2> </v-card-title>
    <v-container>
      <v-row>
        <v-text-field v-model="roomName" label="Room Name"></v-text-field>
        <v-btn @click="addRoom" class="ma-2" color="blue" icon="mdi-home"><h2>+</h2></v-btn>
      </v-row>
      <v-alert v-if="showSuccess" color="success" closable title="status"> </v-alert>
      <v-alert v-if="showError" color="error" closable title="status"> </v-alert>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { FirebaseError } from "firebase/app"
import { db } from "../backend/firebase"
import { doc, setDoc, serverTimestamp, collection } from "firebase/firestore"
export default {
  name: "RoomView",
  data() {
    return {
      roomName: null,
      isSuccess: false,
      isError: false
    }
  },
  methods: {
    addRoom: async function () {
      const userUID = this.$store.state.user?.uid as string
      await setDoc(doc(collection(db, "users", userUID, "rooms")), {
        name: this.roomName,
        createdAt: serverTimestamp()
      })
        .then(() => {
          this.isSuccess = true
        })
        .catch(error => {
          console.log("error while adding the room", error)
          this.isError = true
        })
    }
  },
  computed: {
    showSuccess() {
      return this.isSuccess
    },
    showError() {
      return this.isError
    }
  }
}
</script>

<style scoped>
.v-row {
  padding-left: 1%;
}

/* .v-btn {
  color: white !important;
} */
</style>
