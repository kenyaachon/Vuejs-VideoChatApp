import type { User } from "firebase/auth"
import { createStore } from "vuex"

export interface State {
  user: User | null
}

export const store = createStore<State>({
  state: {
    user: null
  },
  getters: {
    isUserLoggedIn(state) {
      return state.user === null ? true : false
    }
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = null
    }
  },
  actions: {
    async loginUser({ commit }, userData: User) {
      console.log("the payload being passed", userData)
      commit("login", userData)
    },
    async logoutUser({ commit }) {
      commit("logout")
    }
  }
})
