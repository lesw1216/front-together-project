<script setup>
import { ref } from "vue";

/* Pinia */
import { useNavBarStore } from "@/stores/navBar";

/* instance */
const navBarStore = useNavBarStore();

/* props */
const props = defineProps({
  buttonName: String,
  currentPath: String,
});

/* Field */
const routePath = ref(props.currentPath);

/* Func */
const log = () => {
  console.log("props currentPath  = " + routePath.value);
};
</script>
<template>
  <div
    class="flex rounded-tl-3xl rounded-bl-3xl p-2 hover:bg-violet-50 hover:text-violet-600 drop-shadow"
    v-bind:class="
      currentPath === navBarStore.currentPath
        ? 'bg-violet-50 text-violet-600'
        : null
    "
  >
    <button @click="log">
      <slot></slot>
    </button>
    <p
      class="self-center whitespace-nowrap ml-2"
      v-if="navBarStore.isNavBarOpen"
    >
      {{ buttonName }}
    </p>
  </div>
</template>
<style scoped></style>
<!-- flex items-stretch  -->
