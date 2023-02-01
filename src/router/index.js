import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/unAuthenticated/Login.vue";
import Join from "@/views/unAuthenticated/Join.vue";

import Home from "@/views/authenticated/Home.vue";
import Todolist from "@/views/authenticated/TodoList.vue";
import Calendar from "@/views/authenticated/Calendar.vue";
import Notice from "@/views/authenticated/Notice.vue";
import Talk from "@/views/authenticated/Talk.vue";
import Store from "@/views/authenticated/Store.vue";
import AuthenticatedView from "@/views/authenticated/AuthenticatedView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/join",
      name: "join",
      component: Join,
    },
    {
      path: "/",
      component: AuthenticatedView,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          path: "todolist",
          component: Todolist,
        },
        {
          path: "calendar",
          component: Calendar,
        },
        {
          path: "notice",
          component: Notice,
        },
        {
          path: "talk",
          component: Talk,
        },
        {
          path: "store",
          component: Store,
        },
      ],
    },
  ],
});

// router.beforeEach((to, from, next) => {
//   console.log("to" + to);
//   console.log("to.name=" + to.name);

//   console.log("from = " + from);
//   console.log("from.name=" + from.name);
//   next();
// });

export default router;
