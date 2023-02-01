<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const login = () => {
  router.push({
    path: "/",
  });
};

const join = () => {
  router.push({ path: "/join" });
};
</script>
<template>
  <div class="board">
    <h1>Together</h1>
    <input type="text" placeholder="ID" />
    <input type="password" placeholder="PASSWORD" />
    <button @click="login()">로그인</button>
    <button @click="join()">회원 가입</button>
  </div>
</template>
<style scoped>
.board {
  margin: 10% 30%;
}
</style>
