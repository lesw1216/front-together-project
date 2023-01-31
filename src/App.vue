<script setup>
import NavigatorVar from "./components/NavigatorVar.vue";
</script>
<template>
  <div class="flex">
    <NavigatorVar></NavigatorVar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
@import "./assets/main.css";

body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
