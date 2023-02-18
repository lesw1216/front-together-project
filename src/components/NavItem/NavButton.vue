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
</script>
<template>
  <div
    class="flex rounded-tl-3xl rounded-bl-3xl p-2 hover:bg-violet-50 hover:text-violet-600 drop-shadow"
    v-bind:class="
      currentPath === navBarStore.currentPath
        ? 'bg-violet-100 text-violet-600'
        : null
    "
  >
    <button @click="log">
      <slot></slot>
    </button>

    <div v-if="navBarStore.isNavBarOpen">
      <p class="self-center whitespace-nowrap ml-2">
        {{ buttonName }}
      </p>
    </div>
  </div>
</template>
<style scoped></style>
<!-- flex items-stretch  -->
