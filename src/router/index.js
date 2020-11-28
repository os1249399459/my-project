import Vue from 'vue'
import VueRouter from "vue-router";
import App from "../components/Login.vue";
import HelloWorld from "../components/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", component: App },
  { path: "/home", component: HelloWorld },
];

export default new VueRouter({
  routes,
});
