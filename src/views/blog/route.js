const blog = () => import(/* webpackChunkName: "page-blog" */ './')
const blogNew = () => import(/* webpackChunkName: "page-blog-new" */ './new')

export default [
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/blog-new',
    name: 'blog-new',
    component: blogNew
  }
]
