import Vue from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login";
import Main from "../views/Main";
import Mall from "../views/Main/Mall"
import User from "../views/Main/User"
import Home from "../views/Main/Home"

Vue.use(VueRouter);

const routes = [
  { path: "/", component: Login },
  {
    path: "/main", component: Main,
    children: [
      {
        name: "home",
        path: "home",
        component: Home
      },
      {
        name: "mall",
        path: "mall",
        component: Mall
      },
      {
        name: "user",
        path: "user",
        component: User
      },
    ]
  },
];

const router = new VueRouter({
  routes,
});

export default router;