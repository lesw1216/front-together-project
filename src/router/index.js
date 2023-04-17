import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/unAuthenticated/Login.vue";
import Join from "@/views/unAuthenticated/Join.vue";

import Home from "@/views/authenticated/Home.vue";
import TodoList from "@/views/authenticated/TodoList.vue";
import Calendar from "@/views/authenticated/Calendar.vue";
import Talk from "@/views/authenticated/Talk.vue";
import Store from "@/views/authenticated/Store.vue";
import AuthenticatedView from "@/views/authenticated/AuthenticatedView.vue";
import MyInfo from "@/views/authenticated/MyInfo.vue";

// 공지사항 view
import NoticeView from "@/views/authenticated/notice/NoticeView.vue";
import NoticeMain from "@/components/Notices/NoticeMain.vue";
import NoticeWriter from "@/components/Notices/Write.vue";
import NoticeRead from "@/components/Notices/Read.vue";

// 팀 정보
import Team from "@/views/authenticated/TeamView.vue";
import TeamMain from "@/components/Teams/TeamMain.vue";

// pinia
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
          path: "todoList",
          component: TodoList,
        },
        {
          path: "calendar",
          component: Calendar,
        },
        {
          path: "notice",
          component: NoticeView,
          children: [
            {
              path: "",
              component: NoticeMain,
            },
            {
              path: "/notice/write",
              component: NoticeWriter,
            },
            {
              path: "/notice/read",
              component: NoticeRead,
            },
          ],
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
        {
          path: "team",
          component: Team,
          children: [
            {
              path: "",
              component: TeamMain,
            },
          ],
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
