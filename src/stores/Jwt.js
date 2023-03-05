import { defineStore } from "pinia";
import { ref } from "vue";

export const useJwtStore = defineStore("jwts", () => {
  // state
  const token = ref("");

  // getter

  // function

  return { token };
});
