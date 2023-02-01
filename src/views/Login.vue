<script setup>
import { ref } from "vue";

const isLogin = ref(false);

const login = () => {
  console.log("click before : " + isLogin.value);
  isLogin.value = !isLogin.value;
  console.log("click after : " + isLogin.value);
};
</script>
<template>
  <h1>LOGIN</h1>
  <button @click="login()">로그인</button>
</template>
<style scoped></style>
