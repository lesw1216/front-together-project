import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore("date", () => {
  // state
  const utc = ref();
  const currentDate = ref(
    new Date().getTime() + new Date().getTimezoneOffset() * 60000 * -1
  );

  // getter

  // action

  function getTodayLocalDateISOString() {
    // yyyy-mm-ddThh:mm:ssZ
    utc.value =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000 * -1;
    currentDate.value = new Date(utc.value);

    const dateISOString = new Date(utc.value).toISOString();

    // yyyy-mm-dd
    return dateISOString.slice(0, 10);
  }

  function getTomorrowLocalDateISOString() {
    const convertDate = new Date(currentDate.value);
    const tomorrow = new Date(convertDate.setDate(convertDate.getDate() + 1));
    currentDate.value = tomorrow.toISOString().slice(0, 10);
    return currentDate.value;
  }

  function getCurrentDate() {
    return new Date(currentDate.value).toISOString().slice(0, 10);
  }

  function getYesterdayLocalDateISOString() {
    const convertDate = new Date(currentDate.value);
    const yesterday = new Date(convertDate.setDate(convertDate.getDate() - 1));
    currentDate.value = yesterday.toISOString().slice(0, 10);
    return currentDate.value;
  }

  return {
    getTodayLocalDateISOString,
    getTomorrowLocalDateISOString,
    getCurrentDate,
    getYesterdayLocalDateISOString,
  };
});
