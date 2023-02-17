import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useViewInfoStore = defineStore("viewInfo", () => {
  // state
  const isNavBarOpen = ref(false);

  // getter

  // action

  return { isNavBarOpen };
});
