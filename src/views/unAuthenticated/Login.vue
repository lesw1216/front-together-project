<script setup>
import axiosInstance from "@/api/index";

// VUE 관련 설정
import { useRouter } from "vue-router";
import { ref } from "vue";
import { reactive } from "vue";

// Pinia 관련 설정
import { useUserStore } from "@/stores/user";
import { useJwtStore } from "@/stores/Jwt";
import { storeToRefs } from "pinia";

const userStore = useUserStore();
const jwtStore = useJwtStore();
const router = useRouter();

const loginUser = reactive({
  userId: "",
  password: "",
});

const validErrorMessage = reactive({
  username: "",
  userId: "",
  password: "",
});

const loginForm = () => {
  const { isLogin } = storeToRefs(userStore);
  console.log(loginUser.userId);
  console.log(loginUser.password);
  axiosInstance
    .post("/api/auth/authentication", JSON.stringify(loginUser))
    .then((response) => {
      console.log(response.data);
      if (response.status === 200) {
        jwtStore.token = response.data["token"];
        userStore.userId = response.data["userId"];
        userStore.userPk = response.data["userPk"];
        userStore.username = response.data["username"];
        console.log(jwtStore.token);
        console.log(userStore.userId);
        console.log(userStore.userPk);
        console.log(userStore.username);

        router.push({
          path: "/",
        });
      }
    })
    .catch((err) => {});

  // login check 검증
  if (!isLogin.value) {
    isLogin.value = !isLogin.value;
  }
};

const onClickJoinButton = () => {
  router.push({ path: "/signUp" });
};
</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form @submit.prevent="loginForm" class="border-2 rounded-md p-10 w-2/5">
      <h1 class="text-center text-5xl mb-5">Together</h1>
      <!--  ID, PASSWORD, 이름 입력  -->
      <label>
        <div v-if="validErrorMessage.userId !== ''" class="text-red-600">
          <p class="text-sm"></p>
          {{ validErrorMessage.userId }}
        </div>
        <input
          v-model="loginUser.userId"
          type="text"
          placeholder="ID"
          autofocus
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            validErrorMessage.userId === ''
              ? 'focus:border-sky-500 ring-blue-100'
              : 'focus:border-red-500 ring-red-400'
          "
        />
      </label>
      <label class="">
        <div v-if="validErrorMessage.password !== null">
          {{ validErrorMessage.password }}
        </div>
        <input
          v-model="loginUser.password"
          type="password"
          placeholder="PASSWORD"
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            validErrorMessage.password === ''
              ? 'focus:border-sky-500 ring-blue-100'
              : 'focus:border-red-500 ring-red-400'
          "
        />
      </label>

      <!-- 버튼 입력 -->
      <div>
        <button
          type="submit"
          class="rounded-md bg-violet-600 hover:bg-violet-800 text-white w-full font-bold mb-2 mt-2 p-2"
        >
          로그인
        </button>
      </div>
      <button
        @click="onClickJoinButton"
        class="rounded-md bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold w-full p-2"
      >
        회원 가입
      </button>
    </form>
  </div>
</template>
<style scoped></style>
