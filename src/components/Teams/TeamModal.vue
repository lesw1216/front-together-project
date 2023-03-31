<script setup>
import { ref } from "vue";
const props = defineProps({
  modalName: String,
});

const modalName = ref(props.modalName);
</script>
<template>
  <main class="flex flex-col h-full rounded-2xl">
    <div class="basis-full bg-white/30"></div>
    <!-- <div
    v-if="modalName === 'create'"
    class="flex flex-col absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 shadow-2xl rounded-md p-5 w-1/4"
  > -->
    <div class="flex">
      <div class="basis-full bg-white/30"></div>

      <div
        v-if="modalName === 'create'"
        class="flex flex-col rounded-md p-5 shadow-2xl w-1/3 border border-violet-100"
      >
        <h1 class="text-5xl mb-2">팀 생성</h1>
        <input
          placeholder="팀이름"
          class="mb-2 h-15 text-2xl p-2 outline-none focus:border-violet-600 focus:border"
        />
        <textarea
          placeholder="팀 소개"
          class="resize-none h-96 text-2xl p-2 outline-none focus:border-violet-600 focus:border mb-2"
        ></textarea>
        <button
          class="border p-2 text-xl rounded-md bg-violet-600 text-white mb-2"
        >
          생성
        </button>
        <button
          class="border p-2 text-xl rounded-md border-slate-600"
          @click="$emit('cancel')"
        >
          취소
        </button>
      </div>
      <!-- <div
      v-else-if="modalName === 'join'"
      class="flex flex-col absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 shadow-2xl rounded-md p-5 w-1/4"
    > -->
      <div
        v-if="modalName === 'join'"
        class="flex flex-col shadow-2xl w-1/3 rounded-md p-5 border border-violet-100"
      >
        <h1 class="text-5xl mb-2">팀 가입하기</h1>
        <input
          placeholder="추천 코드 입력"
          class="mb-2 h-15 text-2xl p-2 outline-none focus:border-violet-600 focus:border"
        />
        <button
          class="border p-2 text-xl rounded-md bg-violet-600 text-white mb-2"
        >
          가입
        </button>
        <button
          class="border p-2 text-xl rounded-md border-slate-600"
          @click="$emit('cancel')"
        >
          취소
        </button>
      </div>
      <div class="basis-full bg-white/30"></div>
    </div>
    <div class="bg-white/30 basis-full"></div>
  </main>
</template>
<style scoped></style>
