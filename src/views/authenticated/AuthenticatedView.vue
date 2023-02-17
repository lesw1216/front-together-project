<script setup>
import NavigatorBar from "../../components/NavItem/NavBar.vue";
import { useViewInfoStore } from "@/stores/viewInfo";
import { reactive } from "vue";

// // store Import
// import { storeToRefs } from "pinia";

// // store 설정
const viewInfoStore = useViewInfoStore();

// const { isNavBarOpen } = storeToRefs(viewInfoStore);

const onMouseUp = () => {
  // isNavBarOpen.value = false;
  // console.log(isNavBarOpen.value);
  // console.log("viewInfoStore.isNavBarOpen=" + viewInfoStore.isNavBarOpen);
  console.log("AuthencatedPage = " + viewInfoStore.isNavBarOpen);
};

const onMouseOver = () => {};
</script>
<template>
  <div class="flex h-screen">
    <NavigatorBar></NavigatorBar>
    <div
      class="border-solid border-2 border-yellow-500 w-screen"
      v-on:mouseup="onMouseUp"
    >
      <router-view></router-view>
    </div>
  </div>
</template>
<style></style>
