const login = () => import(/* webpackChunkName: "page-login" */ './')
const verify = () => import(/* webpackChunkName: "page-login" */ './verify')

export default [
  {
    path: '/auth-login',
    name: 'login',
    component: login,
    meta: {
      auth: true
    }
  },
  {
    path: '/auth-verify',
    name: 'verify',
    component: verify,
    meta: {
      auth: true
    }
  }
]
