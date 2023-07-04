<script setup>
import { ref } from "vue";
const props = defineProps({
  buttonType: String,
  buttonName: String,
});

const buttonType = props.buttonType;
</script>
<template>
  <button :type="buttonType">{{ buttonName }}</button>
</template>
<style scoped></style>
