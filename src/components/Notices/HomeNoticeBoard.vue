<script setup>
import { useTeamStore } from "@/stores/team";

const teamStore = useTeamStore();

const props = defineProps({
  requiredTeam: String,
});

// field
const isTeam = ref(teamStore.getTeam());
console.log(isTeam);
</script>
<template>
  <main class="h-full">
    <h1
      v-if="isTeam"
      class="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl"
    >
      {{ requiredTeam }}
    </h1>
  </main>
</template>
<style scoped></style>
