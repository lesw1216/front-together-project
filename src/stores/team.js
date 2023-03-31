import { defineStore } from "pinia";
import { ref } from "vue";

export const useTeamStore = defineStore("team", () => {
  // state
  const isTeam = ref(false);

  // getter

  // function
  function getTeam() {
    return isTeam.value;
  }

  function setTeam() {
    isTeam.value = !isTeam.value;
  }

  return { getTeam, setTeam };
});
