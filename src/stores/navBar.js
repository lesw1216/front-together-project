import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useNavBarStore = defineStore("navBar", () => {
  // state
  const isNavBarOpen = ref(false);
  const currentPath = ref("");
  const isMainDisplay = ref(true);

  // getter

  // action
  function setIsMainDisplay(isValue) {
    isMainDisplay.value = isValue;
  }

  function getIsMainDisplay() {
    return isMainDisplay.value;
  }

  return { isNavBarOpen, setIsMainDisplay, getIsMainDisplay };
});
