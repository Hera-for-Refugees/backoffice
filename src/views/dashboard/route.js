const dashboard = () => import(/* webpackChunkName: "page-dashboard" */ './')

export default [
  {
    path: '/',
    name: 'dashboard',
    component: dashboard
  }
]
