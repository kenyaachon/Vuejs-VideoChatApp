import type { User } from "firebase/auth"
import { Store } from "vuex"

declare module "@vue/runtime-core" {
  // our own store store state
  interface State {
    user: User | null
  }

  // provide typings for `this.$store
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
