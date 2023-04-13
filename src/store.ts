import { createStore } from "vuex"

export interface State {
  user: string | null
}

export const store = createStore<State>({
  state: {
    user: null
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
    async loginUser({ commit }, userData: string) {
      commit("login", userData)
    },
    async logoutUser({ commit }) {
      commit("logout")
    }
  }
})
