<template>
  <v-card class="mx-auto" variant="outlined" min-width="455" elevation="12">
    <v-card-title class="text-center"> Log In</v-card-title>
    <v-container>
      <v-form @submit.prevent="login">
        <v-text-field
          required
          label="Email"
          v-model="email"
          :error-messages="v$.email.$errors.map(e => e.$message)"
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
        >
        </v-text-field>
        <v-text-field
          required
          label="Password"
          type="password"
          v-model="password"
          :error-messages="v$.password.$errors.map(e => e.$message)"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
        >
        </v-text-field>
        <v-btn class="me-4" type="submit"> Log in </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useVuelidate } from "@vuelidate/core"
import { required, email } from "@vuelidate/validators"

const auth = getAuth()
export default {
  name: "LoginVue",
  data() {
    return {
      email: "",
      password: "",
      error: null
    }
  },
  methods: {
    login() {
      const info = {
        email: this.email,
        password: this.password
      }

      signInWithEmailAndPassword(auth, info.email, info.password)
        .then(userCredential => {
          // Signed in
          console.log("this user has been signed in", userCredential)
          // this.$store.dispatch("loginUser", userCredential.user.displayName)
          this.$store.dispatch("loginUser", userCredential.user)
          this.$router.replace("/")
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          console.error("failed to login in user", errorCode, errorMessage)
          this.error = error.message
        })
    }
  },
  setup() {
    return {
      v$: useVuelidate()
    }
  },
  validations() {
    return {
      email: { required, email },
      password: { required }
    }
  }
}
</script>

<style scoped>
.form-text {
  color: black;
}

/* .v-card {
  background-color: grey;
} */
</style>
