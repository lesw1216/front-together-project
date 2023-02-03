<script setup>
import axios from "axios";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";

// const axios = require("axios");

const store = useUserStore();
const router = useRouter();

const login = () => {
  const { isLogin } = storeToRefs(store);

  console.log(isLogin.value);
  if (!isLogin.value) {
    isLogin.value = !isLogin.value;
  }

  console.log("click login button after : " + isLogin.value);

  axios
    .get("http://localhost:8080/user")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  router.push({
    path: "/",
  });
};

const join = () => {
  router.push({ path: "/join" });
};

const user = ref({
  name: "",
  passwrod: "",
});
</script>
<template>
  <div class="board">
    <h1>Together</h1>
    <input v-model="user.name" type="text" placeholder="ID" />
    <input v-model="user.password" type="password" placeholder="PASSWORD" />
    <button @click="login()">로그인</button>
    <button @click="join()">회원 가입</button>
    {{ user.name }}
    {{ user.password }}
    <div></div>
  </div>
</template>
<style scoped>
.board {
  margin: 10% 30%;
}
</style>
