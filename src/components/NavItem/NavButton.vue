<script setup>
const props = defineProps({
  buttonName: String,
});
</script>
<template>
  <div class="flex rounded-md p-2 hover:bg-violet-50">
    <button>
      <slot></slot>
    </button>
    <p class="self-center whitespace-nowrap ml-2 hover:text-violet-600">
      {{ buttonName }}
    </p>
  </div>
</template>
<style scoped></style>
<!-- flex items-stretch  -->
