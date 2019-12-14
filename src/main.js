import Vue from 'vue'
import VueWait from 'vue-wait'
import App from './app.vue'
import router from './router'
import store from '@/store'

import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

const wait = new VueWait({
  registerComponent: false,
  registerDirective: false
})

Vue.use(VueWait)
Vue.use(Antd)
Vue.config.productionTip = false
Vue.prototype.$wait = wait

const init = async () => {
  try {
    await store.$actions.tokenCheck()
  } catch (err) {
    console.log(err)
  }

  const app = new Vue({
    router,
    stator: store,
    wait,
    render: h => h(App)
  })

  console.log('init app', app)
  app.$mount('#app')
}

init()
