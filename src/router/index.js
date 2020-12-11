import Vue from 'vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import App from "../views/Login.vue";
import Home from "../views/Home.vue";

Vue.use(VueRouter);
Vue.use(ElementUI)

const routes = [
  { path: "", component: App },
  { path: "/home", component: Home },
];

export default new VueRouter({
  routes,
});
