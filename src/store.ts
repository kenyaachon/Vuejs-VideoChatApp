import { createStore } from "vuex"

export interface State {
  user: string
}

export const store = createStore<State>({
  state() {
    return {
      user: ""
    }
  },
  mutations: {
    login(state, user) {
      state.user = user
    },
    logout(state) {
      state.user = ""
    }
  },
  actions: {
    async loginUser({ commit }, userData: string) {
      commit("login", userData)
    },
    async logoutUser({ commit }) {
      commit("logout")
    }
  }
})
