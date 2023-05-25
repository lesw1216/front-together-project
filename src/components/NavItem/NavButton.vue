<script setup>
import { ref } from "vue";

/* Pinia */
import { useNavBarStore } from "@/stores/navBar";
import { useUserStore } from "@/stores/user";

/* instance */
const navBarStore = useNavBarStore();
const userStore = useUserStore();

/* props */
const props = defineProps({
  buttonName: String,
  currentPath: String,
});

/* Field */
const routePath = ref(props.currentPath);
const propsButtonName = ref(props.buttonName);
const hoverMyInfoButton = ref(false);

/* Func */
const log = () => {
  console.log(propsButtonName.value);
  console.log(userStore.userId);
};

const onMouseUp = () => {
  navBarStore.isNavBarOpen = false;
};
</script>
<template>
  <div
    class="flex text-white my-2 p-4 rounded-sm"
    v-bind:class="
      currentPath === navBarStore.currentPath ? 'bg-slate-600' : null
    "
    @click="onMouseUp"
  >
    <button @click="log">
      <slot></slot>
    </button>

    <!-- <div v-if="navBarStore.isNavBarOpen"> -->
    <div>
      <p class="self-center whitespace-nowrap ml-2">
        {{ buttonName }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
<!-- flex items-stretch  -->
