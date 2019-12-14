const categories = () => import(/* webpackChunkName: "page-categories" */ './')
const categoriesNew = () =>
  import(/* webpackChunkName: "page-categories-new" */ './new')

export default [
  {
    path: '/categories',
    name: 'categories',
    component: categories
  },
  {
    path: '/categories-new',
    name: 'categories-new',
    component: categoriesNew
  }
]
