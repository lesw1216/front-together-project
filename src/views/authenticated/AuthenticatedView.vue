<script setup>
import NavigatorBar from "../../components/NavItem/NavBar.vue";

/* Pinia */
import { useNavBarStore } from "@/stores/navBar";

/* instance */
const navBarStore = useNavBarStore();

/* Field */

/* Func */
const onMouseUp = () => {
  navBarStore.isNavBarOpen = false;
};
</script>

<template>
  <div class="flex h-screen w-screen">
    <NavigatorBar></NavigatorBar>
    <div
      class="rounded-3xl h-screen w-screen drop-shadow"
      v-on:mouseup="onMouseUp"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
