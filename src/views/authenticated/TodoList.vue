<script setup>
import { reactive } from "vue";

// Field, Object
const todoList = reactive({
  content: null,
  isCompletion: false,
});
var date = new Date();

const todayDate = reactive({
  hour: date.getHours(),
  year: date.getFullYear(),
  month: date.getDate(),
  day: date.getMonth(),
  full: date.getDate(),
});

// Function
</script>
<template>
  <div class="w-full h-full p-2">
    <section class="flex flex-col bg-white rounded-3xl w-full h-full mb-4">
      <!-- 날짜 -->
      <div class="basis-1/12 m-5">
        <div class="flex justify-center items-center w-full h-full">
          <div>왼쪽 화살표</div>
          <div class="mx-2 text-3xl">2023-02-19</div>
          <div>오른쪽 화살표</div>
        </div>
      </div>
      <!-- 입력창 -->
      <div class="basis-1/12 m-5">
        <div class="flex justify-end h-full">
          <div class="basis-full h-full">
            <input
              type="text"
              class="border-solid border-2 rounded-xl border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400 p-4 h-full w-full"
            />
          </div>
          <div class="ml-2">
            <button
              type="button"
              class="rounded-xl bg-violet-600 text-white font-bold whitespace-nowrap p-2 h-full"
            >
              추가하기
            </button>
          </div>
        </div>
      </div>
      <!-- 리스트 -->
      <hr class="mx-5 border-2 border-violet-800" />
      <div class="basis-full m-5 h-96">
        <div class="h-full">
          <ul class="h-full overflow-y-auto">
            <div class="" v-for="list in todoLists">
              <li class="flex justify-end h-8 w-full">
                <div class="basis-full">내용 {{ list.content }}</div>
                <div class="flex h-full whitespace-nowrap">
                  <button class="rounded-md bg-rose-50 mx-2 p-1">체크</button>
                  <button class="rounded-md bg-red-200 p-1">삭제</button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
