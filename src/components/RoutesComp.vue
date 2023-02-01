<script setup>
import NavigatorBar from "./NavigatorBar.vue";
import Login from "../views/Login.vue";

const isLogin = Login.isLogin;
console.log(isLogin);
</script>
<template>
  <div>
    <NavigatorBar></NavigatorBar>
    <RouterView></RouterView>
  </div>
</template>
<style scoped></style>
