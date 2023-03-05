import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore("date", () => {
  // state
  const now = ref(new Date());
  const calDate = ref();

  // getter
  // const getBeforeDate = computed(
  //   () => (calDate.value = newDate(now.setDate(now.getDate() - 1)))
  // );
  // const getNextDate = computed(
  //   () => (calDate.value = newDate(now.setDate(now.getDate() - 1)))
  // );

  // action
});
