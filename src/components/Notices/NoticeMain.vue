<script setup></script>
<template>
  <div class="w-full h-full p-2 border-red-600 border">
    <section
      class="flex flex-col bg-white rounded-3xl w-full h-full mb-4 shadow-xl"
    >
      <header class="flex flex-col mt-5 mx-5">
        <h1 class="text-6xl self-center">NOTICE</h1>
        <button
          class="flex border-2 w-auto self-end mr-5 p-1 mb-1 rounded-md outline-none hover:outline-none border-violet-600"
          v-on:click="$router.push('/notice/write')"
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
      </header>
      <!-- 리스트 -->
      <article>
        <div class="m-5 border-2">
          <div>
            <ul>
              <li class="flex justify-end whitespace-nowrap mb-2 text-center">
                <div class="basis-full">제목</div>
                <div class="ml-2 w-40">작성자</div>
                <div class="mx-2 w-60">작성일자</div>
                <div class="w-40">조회수</div>
              </li>
              <hr class="border-2 border-black mb-5" />

              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
              <li class="flex justify-end whitespace-nowrap text-center mb-3">
                <div class="basis-full text-start">업데이트 공지</div>
                <div class="ml-2 w-40">운영자</div>
                <div class="mx-2 w-60">2022-02-13 22:10</div>
                <div class="w-40">10</div>
              </li>
              <hr class="mb-3" />
            </ul>
          </div>
        </div>
      </article>
      <footer class="absolute inset-x-0 bottom-0">
        <div class="flex m-5 p-3 justify-center border">
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
    </section>
  </div>
</template>
<style></style>
