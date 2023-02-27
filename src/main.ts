import { createApp } from "vue"
import { createRouter, createWebHistory } from "vue-router"
import App from "./App.vue"
import Home from "./components/Home.vue"
import Login from "./components/Login.vue"

import "./assets/main.css"

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/login", name: "Login", component: Login }
]

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

const app = createApp(App)

app.use(router)
app.mount("#app")
