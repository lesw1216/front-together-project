<script setup>
import { ref } from "vue";

const message = ref("HOME");
</script>
<template>
  <section class="border-black vh-100 vw-100 grid-container grid-columns">
    <article class="border-black">할일</article>
    <article class="border-black">공지사항</article>
    <article class="border-black">제일 빠른 일정(달력)</article>
    <article class="border-black">최근 공유된 파일(저장소)</article>
    <article class="border-black">최근 채팅</article>
  </section>
</template>
<style></style>
