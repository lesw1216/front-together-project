<script setup>
import searchComp from "../../components/SearchComp.vue";
</script>
<template>
  <div class="h-full border p-2 flex flex-col">
    <header class="flex">
      <searchComp class="basis-11/12"></searchComp>
      <button
        class="border basis-1/12 ml-4 rounded-md text-2xl bg-slate-700 text-white"
      >
        올리기
      </button>
    </header>
    <nav class="my-4 p-2 flex">
      <div>
        <button class="bg-slate-700 text-white p-2 rounded-2xl mr-2">
          음악
        </button>
      </div>
    </nav>
    <section>
      <article>
        <div></div>
      </article>
    </section>
  </div>
</template>
<style></style>
