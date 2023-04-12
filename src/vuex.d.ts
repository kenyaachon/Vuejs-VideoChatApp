import { Store } from "vuex"

declare module "@vue/runtime-core" {
  // our own store store state
  interface State {
    user: string
  }

  // provide typings for `this.$store
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
