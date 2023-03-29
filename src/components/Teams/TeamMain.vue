<script setup>
import { useUserStore } from "@/stores/user";

// pinia
const userStore = useUserStore();
</script>
<template>
  <main class="p-2 h-full w-full">
    <div
      class="p-2 h-full shadow-xl border-slate-300 rounded-2xl w-full relative"
    >
      <div v-if="userStore.getTeam() === null" class="h-full">
        <div class="flex flex-col justify-center h-full items-center">
          <h1 class="text-center text-5xl mb-20">가입한 팀이 없습니다.ㅠㅠ</h1>

          <div class="">
            <button
              class="text-xl border rounded-md p-2 mb-2 bg-violet-600 text-white"
            >
              팀 생성
            </button>
          </div>
          <div>
            <button
              class="text-xl border rounded-md p-2 bg-violet-600 text-white"
            >
              팀 가입
            </button>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col h-full">
        <h1 class="text-3xl mb-2">팀 이름</h1>
        <div class="flex justify-between">
          <div>생성일</div>
          <button class="text-sm hover:text-red-600">탈퇴하기</button>
        </div>
        <div class="border basis-1/6 rounded-md border-violet-300 shadow-md">
          팀소개
        </div>
        <div class="basis-full h-96">
          <div class="h-full">
            <ul class="h-full overflow-y-auto">
              <li
                class="flex justify-end mt-2 border border-violet-300 rounded-md shadow-md p-2"
              >
                <div class="basis-full text-start">홍길동</div>
                <div class="ml-2 basis-20">리더</div>
                <div class="mx-2 basis-52">honggildong@naver.com</div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <button
            class="h-full w-full border p-2 rounded-md bg-violet-600 text-white text-lg"
          >
            추천 코드
          </button>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
