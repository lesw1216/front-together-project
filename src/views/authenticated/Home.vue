<script setup>
import { ref } from "vue";

const message = ref("HOME");
</script>
<template>
  <div class="h-full p-2">
    <section class="flex content-center h-full">
      <article class="basis-1/3 mr-2">
        <div class="bg-white h-full rounded-2xl shadow-xl">
          할일 - 오늘의 할일 목록을 보여주고, 오늘 등록한 목록이 없다면 없다고
          알려준다.
        </div>
      </article>
      <div class="basis-1/3 mr-2 flex flex-col justify-start shadow-xl">
        <div class="basis-1/3 bg-white rounded-2xl mb-2">
          <article>공지사항</article>
        </div>
        <div class="basis-1/3 bg-white mb-2 rounded-2xl shadow-xl">
          <article>제일 빠른 일정(달력)</article>
        </div>

        <div class="basis-1/3 bg-white rounded-2xl shadow-xl">
          <article>최근 공유된 파일(저장소)</article>
        </div>
      </div>
      <article class="basis-1/3 bg-white rounded-2xl shadow-xl">
        최근 채팅
      </article>
    </section>
  </div>
</template>
<style></style>
