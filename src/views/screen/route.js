const screenList = () =>
  import(/* webpackChunkName: "page-screen-list" */ './list')
const screenText = () =>
  import(/* webpackChunkName: "page-screen-text" */ './text')

export default [
  {
    path: '/screen-list',
    name: 'screen-list',
    component: screenList
  },
  {
    path: '/screen-text',
    name: 'screen-text',
    component: screenText
  }
]
