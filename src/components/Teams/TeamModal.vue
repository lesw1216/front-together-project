<script setup>
import { ref } from "vue";
const props = defineProps({
  modalName: String,
});

const modalName = ref(props.modalName);
</script>
<template>
  <main class="flex flex-col h-full">
    <div class="basis-full bg-white/30"></div>
    <!-- <div
    v-if="modalName === 'create'"
    class="flex flex-col absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 shadow-2xl rounded-md p-5 w-1/4"
  > -->
    <div class="flex">
      <div class="basis-2/12 bg-white/30"></div>

      <div class="basis-8/12">
        <div
          v-if="modalName === 'create'"
          class="flex flex-col rounded-md p-5 shadow-2xl w-full"
        >
          <h1 class="text-5xl mb-5">팀 생성</h1>
          <input
            placeholder="팀이름"
            class="mb-2 h-15 text-2xl p-2 outline-none border focus:border-slate-700 focus:border focus:outline-none"
          />
          <textarea
            placeholder="팀 소개"
            class="resize-none h-96 text-2xl p-2 outline-none border focus:border-slate-700 focus:border focus:outline-none mb-2"
          ></textarea>
          <button
            class="border p-4 text-4xl rounded-md bg-slate-700 text-white mb-2"
          >
            생성
          </button>
          <button
            class="border p-4 text-4xl rounded-md border-slate-700"
            @click="$emit('cancel')"
          >
            취소
          </button>
        </div>
        <div
          v-if="modalName === 'join'"
          class="flex flex-col shadow-2xl w-full rounded-md p-5"
        >
          <h1 class="text-5xl mb-5">팀 가입하기</h1>
          <input
            placeholder="추천 코드 입력"
            class="mb-2 h-15 text-2xl p-2 outline-none border focus:outline-none focus:border-slate-700 focus:border"
          />
          <button
            class="border p-4 text-4xl rounded-md bg-slate-700 text-white mb-2"
          >
            가입
          </button>
          <button
            class="border p-4 text-4xl rounded-md border-slate-700"
            @click="$emit('cancel')"
          >
            취소
          </button>
        </div>
      </div>
      <div class="basis-2/12 bg-white/30"></div>
    </div>
    <div class="bg-white/30 basis-full pb-2"></div>
  </main>
</template>
<style scoped></style>
