<script setup>
import { useNavBarStore } from "@/stores/navBar";
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const useNavBar = useNavBarStore();

const isUpdate = ref(false);

const OnClickToListButton = () => {
  useNavBar.setIsMainDisplay(true);
  router.push({
    path: "/notice",
  });
};

const OnClickUpdateButton = () => {
  isUpdate.value = true;
  console.log(isUpdate.value);
};
</script>
<template>
  <main class="h-full w-full p-2">
    <div
      class="flex flex-col p-4 rounded-md shadow-lg border h-full border-slate-300"
    >
      <header>
        <div>
          <h1 class="text-5xl">게시글 제목</h1>
        </div>
        <div class="mt-10 flex justify-between">
          <div>작성자</div>
          <div class="flex items-end">
            <button class="mr-2" @click="OnClickUpdateButton">수정</button>
            <div class="mr-2">작성일자</div>
            <div>조회수</div>
          </div>
        </div>
      </header>
      <section class="basis-full mb-2">
        <textarea
          class="w-full h-full resize-none focus:outline-none read-only:border-2 read-only:border-violet-200 shadow-sm text-2xl"
          v-bind:readonly="!isUpdate"
        >
sdfsdfsdf</textarea
        >
      </section>
      <footer class="basis-auto flex flex-col">
        <button
          @click="OnClickToListButton"
          class="border border-blue-600 text-blue-700 w-full p-2 text-center mb-2"
          v-if="isUpdate"
        >
          완료
        </button>
        <button
          @click="OnClickToListButton"
          class="border border-slate-500 hover:border-emerald-500 hover:text-emerald-600 w-full p-2 text-center"
        >
          글 목록
        </button>
      </footer>
    </div>
  </main>
</template>
<style scoped></style>
