<script setup>
import axiosInstance from "@/api/index";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

const store = useUserStore();
const router = useRouter();

const loginUser = ref({
  name: "",
  password: "",
});

const loginClick = () => {
  const { isLogin } = storeToRefs(store);

  // login check 검증
  if (!isLogin.value) {
    isLogin.value = !isLogin.value;
  }

  router.push({
    path: "/",
  });
};

const join = () => {
  router.push({ path: "/signUp" });
};
</script>
<template>
  <div class="flex justisfy board">
    <h1>Together</h1>
    <label>
      아이디<br />
      <input v-model="loginUser.name" type="text" placeholder="ID" />
    </label>
    <!-- <input
      v-bind:value="user.name"
      v-on:input="(event) => (user.name = event.target.value)"
      placeholder="ID"
    /> -->
    <label>
      비밀번호<br />
      <input
        v-model="loginUser.password"
        type="password"
        placeholder="PASSWORD"
      />
    </label>

    <button @click="loginClick()">로그인</button>
    <button @click="join()">회원 가입</button>
  </div>
</template>
<style scoped>
.board {
  margin: 10% 30%;
}
</style>
