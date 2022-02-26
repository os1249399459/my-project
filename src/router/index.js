import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import About from "../views/Main/About"
import User from "../views/Main/User"

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  {
    path: "/main", component: Main,
    children: [
        {
          path: "about",
          component: About
        },
        {
          path: "user",
          component: User
        }
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;