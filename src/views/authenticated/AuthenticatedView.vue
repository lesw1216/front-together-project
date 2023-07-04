<script setup>
import NavigatorBar from "../../components/NavItem/NavBar.vue";

/* Pinia */
import { useNavBarStore } from "@/stores/navBar";

/* instance */
const navBarStore = useNavBarStore();

/* Field */

/* Func */
// const onMouseUp = () => {
//   navBarStore.isNavBarOpen = false;
// };
</script>

<template>
  <div class="flex w-screen">
    <NavigatorBar class="h-full"></NavigatorBar>
    <!-- <NavigatorBar v-if="navBarStore.getIsMainDisplay()"></NavigatorBar> -->
    <!-- <div class="rounded-2xl drop-shadow w-full" v-on:mouseup="onMouseUp"> -->
    <div class="flex-grow overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
