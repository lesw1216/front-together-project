<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
const router = useRouter();
const userStore = useUserStore();

const logout = () => {
  const { isLogin } = storeToRefs(userStore);
  if (isLogin.value) {
    isLogin.value = !isLogin.value;
  }
  console.log("click logout button after isLogin : " + isLogin.value);
  router.push("/login");
};
</script>
<template>
  <ul>
    <li><routerLink to="/">Home</routerLink></li>
    <li><router-link to="/notice">공지사항</router-link></li>
    <li><router-link to="/calendar">달력</router-link></li>
    <li><router-link to="/todolist">할일</router-link></li>
    <li><router-link to="/store">저장소</router-link></li>
    <li><router-link to="/talk">채팅</router-link></li>
  </ul>
  <button v-on:click="logout()">로그아웃</button>
</template>
<style></style>
