import Vue from 'vue'
import { plugin as VueStator, createStore } from 'vue-stator'
Vue.use(VueStator)

export default createStore({
  state: () => ({
    username: localStorage.getItem('username'),
    token: localStorage.getItem('token')
  }),
  actions: {
    async tokenCheck({ state, actions }) {},
    setUser({ state }, user) {},
    signOut() {}
  }
})
