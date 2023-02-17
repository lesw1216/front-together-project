import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  // state
  const userId = ref("");
  const username = ref("");
  const isLogin = ref(false);

  // getter

  // function

  return { userId, username, isLogin };
});
