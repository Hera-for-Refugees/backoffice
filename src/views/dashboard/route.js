const dashboard = () => import(/* webpackChunkName: "page-dashboard" */ './')

export default [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard
  }
]
