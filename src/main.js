import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  router
}).$mount('#app')
