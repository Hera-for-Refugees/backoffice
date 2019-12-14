const notifications = () =>
  import(/* webpackChunkName: "page-notifications" */ './')
const notificationsNew = () =>
  import(/* webpackChunkName: "page-notifications-new" */ './new')
const notificationsCustom = () =>
  import(/* webpackChunkName: "page-notifications-new" */ './custom')

export default [
  {
    path: '/notifications',
    name: 'notifications',
    component: notifications
  },
  {
    path: '/notifications-new',
    name: 'notifications-new',
    component: notificationsNew
  },
  {
    path: '/notifications-custom',
    name: 'notifications-custom',
    component: notificationsCustom
  }
]
