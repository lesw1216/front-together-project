<script setup>
import { useRouter } from "vue-router";
import { useNavBarStore } from "@/stores/navBar";

const router = useRouter();
const navBarStore = useNavBarStore();

const OnClickWritePageButton = () => {
  navBarStore.setIsMainDisplay(false);
  router.push({
    path: "/notice/write",
  });
};

const OnClickReadPageButton = () => {
  navBarStore.setIsMainDisplay(false);
  router.push({
    path: "/notice/read",
  });
};
</script>
<template>
  <main class="p-2 h-full">
    <div
      class="flex flex-col p-2 h-full shadow-xl border border-slate-300 rounded-2xl"
    >
      <header class="flex flex-col">
        <h1 class="text-6xl self-center">NOTICE</h1>
        <button
          class="flex border-2 w-auto self-end p-2 rounded-md outline-none hover:outline-none border-violet-600"
          v-on:click="OnClickWritePageButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>

          글쓰기
        </button>
        <button
          class="flex border-2 w-auto self-end p-2 rounded-md outline-none hover:outline-none border-violet-600"
          v-on:click="OnClickReadPageButton"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
            />
          </svg>

          글내용 보기 임시 버튼
        </button>
      </header>
      <!-- 리스트 -->
      <section class="basis-full h-96">
        <div class="h-full">
          <div class="h-full">
            <ul class="h-full overflow-y-auto">
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4"
              >
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 basis-20">운영자</div>
                <div class="mx-2 basis-52">2022-02-13 22:10</div>
                <div class="basis-20">10</div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer class="mt-2">
        <div class="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </footer>
    </div>
  </main>
</template>
<style></style>
