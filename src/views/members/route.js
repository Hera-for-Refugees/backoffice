const members = () => import(/* webpackChunkName: "page-members" */ './')

export default [
  {
    path: '/members',
    name: 'members',
    component: members
  }
]
