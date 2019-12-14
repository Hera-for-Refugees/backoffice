export default (to, from, next) => {
  const isAuthPage = to.matched.some(record => record.meta.auth)
  const token = localStorage.getItem('token')

  if (token) {
    if (isAuthPage) {
      return next('/')
    }
    next()
  } else {
    if (!isAuthPage) {
      return next('/auth-login')
    }
    next()
  }
}
