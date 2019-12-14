import Vue from 'vue'
import { plugin as VueStator, createStore } from 'vue-stator'
// import AuthService from '@/api/services/auth'

import login from '@/views/login/store'

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
  },
  modules: {
    login
  }
})
