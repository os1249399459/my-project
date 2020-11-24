import Vue from 'vue'
import ElementUI from 'element-ui'
import router from './router'
import App from './components/Login.vue'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
