import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import Todolist from "@/views/TodoList.vue";
import Calendar from "@/views/Calendar.vue";
import Notice from "@/views/Notice.vue";
import Talk from "@/views/Talk.vue";
import Store from "@/views/Store.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/todolist",
      name: "todolist",
      component: Todolist,
    },
    {
      path: "/calendar",
      name: "calendar",
      component: Calendar,
    },
    {
      path: "/notice",
      name: "notice",
      component: Notice,
    },
    {
      path: "/talk",
      name: "talk",
      component: Talk,
    },
    {
      path: "/store",
      name: "store",
      component: Store,
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("to" + to);
  console.log("to.name=" + to.name);

  console.log("from = " + from);
  console.log("from.name=" + from.name);
  next();
});

export default router;
