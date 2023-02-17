import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useNavBarStore = defineStore("navBar", () => {
  // state
  const isNavBarOpen = ref(false);
  const currentPath = ref("");

  // getter

  // action

  return { isNavBarOpen };
});
