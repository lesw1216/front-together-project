<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const cancel = () => {
  router.push({
    path: "/login",
  });
};
</script>
<template>
  <h1>회원가입</h1>
  <button @click="cancel()">취소</button>
</template>
<style></style>
