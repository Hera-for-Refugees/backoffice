import Vue from 'vue'
import VueRouter from 'vue-router'
import token_check from './token-check'

import login from '@/views/login/route'
import dashboard from '@/views/dashboard/route'
import members from '@/views/members/route'
import vaccinate from '@/views/vaccinate/route'
import notification from '@/views/notification/route'
import blog from '@/views/blog/route'
import categories from '@/views/categories/route'
import questions from '@/views/questions/route'
import screen from '@/views/screen/route'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...login,
    ...dashboard,
    ...members,
    ...vaccinate,
    ...notification,
    ...blog,
    ...categories,
    ...questions,
    ...screen,
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
