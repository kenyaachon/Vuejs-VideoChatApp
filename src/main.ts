import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"
import RegisterView from "./components/Register.vue"
import RoomView from "./components/Room.vue"
import { store } from "./store"

import "./assets/main.css"

const routes = [
  { path: "/", name: "Home", component: Home, props: true },
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: RegisterView },
  { path: "/rooms", name: "Rooms", components: RoomView }
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

// Vuetify

import "vuetify/styles"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

const vuetify = createVuetify({
  components,
  directives
})

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.mount("#app")
