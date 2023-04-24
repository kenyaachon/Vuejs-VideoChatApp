<template>
  <v-card class="mx-auto" variant="outlined" min-width="455" elevation="12">
    <v-card-title class="text-center"> Register New User</v-card-title>
    <v-container>
      <v-form @submit.prevent="register">
        <v-text-field
          required
          label="Display Name"
          v-model="displayName"
          :error-messages="v$.displayName.$errors.map(e => e.$message)"
          @input="v$.displayName.$touch"
          @blur="v$.displayName.$touch"
        >
        </v-text-field>
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
          v-model="password"
          :error-messages="v$.password.$errors.map(e => e.$message)"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
        >
        </v-text-field>
        <v-text-field
          required
          label="Enter Password Again"
          v-model="passwordTwo"
          :error-messages="v$.passwordTwo.$errors.map(e => e.$message)"
          @input="v$.passwordTwo.$touch"
          @blur="v$.passwordTwo.$touch"
        >
        </v-text-field>
        <v-btn class="me-4" type="submit"> Register </v-btn>
      </v-form>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { useVuelidate } from "@vuelidate/core"
import { required, email, sameAs, and, minLength } from "@vuelidate/validators"
const auth = getAuth()

export default {
  name: "RegisterView",
  data() {
    return {
      email: "",
      displayName: "",
      password: "",
      passwordTwo: "",
      error: ""
    }
  },
  methods: {
    register() {
      const info = {
        email: this.email,
        password: this.password,
        displayName: this.displayName
      }
      if (this.password === this.passwordTwo) {
        createUserWithEmailAndPassword(auth, info.email, info.password)
          .then(userCredential => {
            // Signed in
            const user = userCredential.user
            // ...
            console.log("the user logged in", user)

            updateProfile(user, { displayName: info.displayName }).then(() => {
              this.$store.dispatch("loginUser", user)
              this.$router.replace("/")
            })
          })
          .catch(error => {
            const errorCode = error.code
            const errorMessage = error.message

            console.error("the error while registering the user", errorCode, errorMessage)
            this.error = errorMessage
            // ..
          })
      } else {
        this.error = "Passwords do not match"
      }
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
      password: {
        and: and(required, minLength(10))
      },
      passwordTwo: {
        sameAs: sameAs(this.password)
      },
      displayName: { required }
    }
  }
}
</script>
