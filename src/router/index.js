import { createRouter, createWebHistory } from "vue-router";
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

export default router;
