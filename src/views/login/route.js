const login = () => import(/* webpackChunkName: "page-login" */ './')

export default [
  {
    path: '/login',
    name: 'login',
    component: login,
    meta: {
      auth: true
    }
  }
]
