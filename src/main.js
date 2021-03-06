import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import store from './store'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  store,
  router
}).$mount('#app')
