import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("users", () => {
  // state
  const userId = ref();
  const username = ref();
  const userPk = ref();
  const isLogin = ref(false);
  const team = ref(null);
  const teamReader = ref(false);

  // getter

  // function
  function getTeam() {
    return team.value;
  }

  function setTeam(teamName) {
    teamName = team.value;
  }

  function getTeamReader() {
    return teamReader.value;
  }

  function setTeamReader(isReader) {
    teamReader.value = isReader;
  }

  return {
    userId,
    username,
    isLogin,
    userPk,
    getTeam,
    setTeam,
    getTeamReader,
    setTeamReader,
  };
});
