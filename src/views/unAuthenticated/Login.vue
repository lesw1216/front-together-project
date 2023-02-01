<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const login = () => {
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
