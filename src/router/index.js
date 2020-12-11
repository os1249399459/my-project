import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import App from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  { path: "", component: Login },
  { path: "/home", component: App },
];

const router =  new VueRouter({
  routes,
});

export default router;