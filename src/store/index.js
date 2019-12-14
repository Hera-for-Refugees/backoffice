import Vue from 'vue'
import { plugin as VueStator, createStore } from 'vue-stator'
import Service from '@/utils/service'
Vue.use(VueStator)

export default createStore({
  state: () => ({
    token: localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user'))
  }),
  actions: {
    async tokenCheck({ state, actions }) {
      try {
        if (!state.token || !state.user) throw { Message: 'Empty user' }
        const { data } = await Service.get(`/users/${state.user.id}`)
        actions.setUser(data)
      } catch (error) {
        actions.signOut()
        throw error
      }
    },
    setUser({ state }, { token, user }) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user = user
      if (token) {
        state.token = token
        localStorage.setItem('token', token)
      }
    },
    signOut() {
      localStorage.clear()
    }
  }
})
