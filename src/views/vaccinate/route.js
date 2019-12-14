const vaccinate = () => import(/* webpackChunkName: "page-vaccinate" */ './')

export default [
  {
    path: '/vaccinate',
    name: 'vaccinate',
    component: vaccinate
  }
]
