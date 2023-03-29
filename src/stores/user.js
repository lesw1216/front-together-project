import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  // state
  const userId = ref();
  const username = ref();
  const userPk = ref();
  const isLogin = ref(false);
  const team = ref(null);

  // getter

  // function
  function getTeam() {
    return team.value;
  }

  function setTeam(teamName) {
    teamName = team.value;
  }

  return { userId, username, isLogin, userPk, getTeam, setTeam };
});
