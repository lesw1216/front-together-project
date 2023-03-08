import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore("date", () => {
  // state
  const utc = ref();
  const date = ref();
  const localDate = ref();
  const currentDate = ref();

  // getter

  // action

  // General Date
  function setTodayLocalDateTime() {
    utc.value =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000 * -1;

    date.value = new Date(utc.value);
  }

  // Date Format yyyy-MM-dd
  function setTodayLocalDateISOString() {
    // yyyy-mm-ddThh:mm:ssZ
    utc.value =
      new Date().getTime() + new Date().getTimezoneOffset() * 60000 * -1;

    const dateISOString = new Date(utc.value).toISOString();
    currentDate.value = dateISOString.slice(0, 10);

    // yyyy-mm-dd
    localDate.value = dateISOString.slice(0, 10);
  }

  // Date Format yyyy-mm-dd
  function setTomorrowLocalDateISOString() {
    new Date(date.value.setDate(date.getDate() + 1));
  }

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
    const temp = new Date();
    // currentDate.value.setDate(currentDate.value.getDate() + 1)

    return temp.toISOString.slice(0, 10);
  }

  return {
    setTodayLocalDateISOString,
    setTodayLocalDateTime,
    localDate,
    date,
    getTodayLocalDateISOString,
    getTomorrowLocalDateISOString,
  };
});
