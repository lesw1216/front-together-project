<script setup>
import { ref } from "vue";
import searchComp from "../../components/SearchComp.vue";
import uploadModalComp from "../../components/Modal/UpLoadComp.vue";

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
        <div class="flex flex-wrap pb-4 justify-items-stretch">
          <button
            class="bg-slate-200 py-2 px-4 rounded-md mr-2 hover:bg-slate-300 shadow-sm mb-2"
          >
            음악
          </button>
        </div>
      </nav>
      <section class="mt-4 overflow-y-auto">
        <article>
          <div class="flex flex-wrap ml-12">
            <div
              class="border h-80 flex flex-col items-center pt-4 mr-4 mb-4 w-48"
            >
              <img class="border border-red-500 w-36 h-36" />
              <div>제목</div>
              <div>작성자</div>
              <div>저장일</div>
              <div>다운로드 수</div>
              <div class="flex mt-2">
                <button
                  class="mr-2 bg-slate-700 p-2 border border-slate-600 text-white rounded-md shadow-slate-500"
                >
                  저장
                </button>
                <button
                  class="bg-slate-300 p-2 border border-slate-300 rounded-md"
                >
                  삭제
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  </div>
</template>
<style></style>
