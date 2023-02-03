import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useUserStore = defineStore("users", () => {
  const user = reactive({
    name: "",
    password: "",
  });

  const isLogin = ref(false);

  return { user, isLogin };
});
