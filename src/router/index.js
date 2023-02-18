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
import MyInfo from "@/views/authenticated/MyInfo.vue";

import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import { useNavBarStore } from "@/stores/navBar";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signUp",
      name: "signUp",
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
        {
          path: "myInfo",
          component: MyInfo,
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const navBarStore = useNavBarStore();

  const { isLogin, userId, username } = storeToRefs(userStore);

  userId.value = "test";
  username.value = "이름테스트";
  navBarStore.currentPath = to.path;

  if (to.name !== "login" && !isLogin.value) {
    if (to.name === "signUp") {
      next();
    } else {
      next({ name: "login" });
    }
  } else {
    next();
  }
});

export default router;
