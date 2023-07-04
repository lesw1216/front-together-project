<script setup>
import { ref } from "vue";
import searchComp from "../../components/SearchComp.vue";
import uploadModalComp from "../../components/Modal/UpLoadComp.vue";
import buttonComp from "../../components/buttonComp.vue";

const showModal = ref(false);
</script>
<template>
  <div class="h-full w-full relative">
    <div class="absolute w-full h-full" v-if="showModal">
      <uploadModalComp
        :show="showModal"
        @cancel="showModal = false"
      ></uploadModalComp>
    </div>
    <div class="flex flex-col p-2">
      <header class="flex">
        <searchComp class="basis-11/12"></searchComp>
        <button
          class="border basis-1/12 ml-4 rounded-md text-2xl bg-slate-700 text-white"
          @click="showModal = true"
        >
          올리기
        </button>
      </header>
      <nav class="my-2 p-2">
        <div class="flex flex-wrap pb-4 justify-items-stretch border-2">
          <button
            class="bg-slate-200 py-2 px-4 rounded-md mr-2 hover:bg-slate-300 shadow-sm mb-2"
          >
            음악
          </button>
        </div>
      </nav>
      <article class="basis-full">
        <section class="h-full border-2 border-red-500">
          <li
            class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
          >
            <div class="basis-full text-start">Title</div>
            <div class="ml-2 basis-20">Poster</div>
            <div class="mx-2 basis-52">Date</div>
            <div class="basis-20">Download</div>
          </li>
          <div class="overflow-y-auto">
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
            <li
              class="flex justify-end mt-4 border border-slate-700 rounded-md shadow-md p-4"
            >
              <div class="basis-full text-start">Title</div>
              <div class="ml-2 basis-20">Poster</div>
              <div class="mx-2 basis-52">Date</div>
              <div class="basis-20">Download</div>
            </li>
          </div>
        </section>
      </article>
    </div>
  </div>
</template>
<style></style>
