// import store from '@/store'

export default (to, from, next) => {
  // const isAuthPage = to.matched.some(record => record.meta.auth)

  // if (store.$state.token) {
  //   if (isAuthPage) {
  //     return next({ name: 'dashboard' })
  //   }
  //   next()
  // } else {
  //   if (!isAuthPage) {
  //     return next({ name: 'login' })
  //   }
  //   next()
  // }

  next()
}
