const questions = () => import(/* webpackChunkName: "page-questions" */ './')
const questionsNew = () =>
  import(/* webpackChunkName: "page-questions-new" */ './new')

export default [
  {
    path: '/questions',
    name: 'questions',
    component: questions
  },
  {
    path: '/questions-new',
    name: 'questions-new',
    component: questionsNew
  }
]
