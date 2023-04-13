<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
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
  }
}
</script>
