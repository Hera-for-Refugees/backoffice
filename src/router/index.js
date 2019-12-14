import Vue from 'vue'
import VueRouter from 'vue-router'
import token_check from './token-check'

import login from '@/views/login/route'
import dashboard from '@/views/dashboard/route'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...login,
    ...dashboard,
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '*',
      redirect: '/'
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})

router.beforeEach(token_check)

export default router
