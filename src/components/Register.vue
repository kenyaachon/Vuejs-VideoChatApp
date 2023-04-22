<template>
  <!-- <div>
    <form class="mt-3" @submit.prevent="register">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <div class="card bg-light">
              <div class="card-body form-text">
                <h3 class="font-weight-light mb-3">Register</h3>
                <section class="form-group">
                  <div class="col-12 alert alert-danger px-3" v-if="error">{{ error }}</div>
                  <label class="form-control-label sr-only" for="displayName">Display name</label>
                  <input
                    required
                    class="form-control"
                    type="text"
                    id="displayName"
                    placeholder="Display Name"
                    v-model="displayName"
                  />
                </section>
                <section class="form-group">
                  <label class="form-control-label sr-only" for="Email">Email</label>
                  <input
                    required
                    class="form-control"
                    type="email"
                    id="email"
                    placeholder="Email"
                    v-model="email"
                  />
                </section>
                <div class="form-row">
                  <section class="col-sm-6 form-group">
                    <input
                      required
                      class="form-control"
                      type="password"
                      placeholder="Password"
                      v-model="password"
                    />
                  </section>
                  <section class="col-sm-6 form-group">
                    <input
                      required
                      class="form-control"
                      type="password"
                      placeholder="Repeat Password"
                      v-model="passwordTwo"
                    />
                  </section>
                </div>
                <div class="form-group text-right mb-0">
                  <button class="btn btn-primary" type="submit">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p class="text-center mt-2">
        or
        <router-link to="/login">log in</router-link>
      </p>
    </form>
  </div> -->
  <v-card class="mx-auto" variant="outlined" min-width="455" elevation="12">
    <v-card-title> Register New User</v-card-title>
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
              this.$store.dispatch("loginUser", info.displayName)
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
