<script setup>
import { useTeamStore } from "@/stores/team";

const teamStore = useTeamStore();

const props = defineProps({
  requiredTeam: String,
});
</script>
<template>
  <main class="h-full rounded-md">
    <h1
      v-if="!teamStore.getTeam()"
      class="absolute right-1/2 top-1/2 -translate-y-1/2 translate-x-1/2 text-2xl z-10"
    >
      {{ requiredTeam }}
    </h1>
  </main>
</template>
<style scoped></style>
