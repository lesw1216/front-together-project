<script setup></script>
<template>
  <div class="w-full h-full p-2">
    <section
      class="flex flex-col bg-white rounded-3xl w-full h-full mb-4 shadow-xl"
    >
      <header class="flex flex-col mt-5 mx-5">
        <h1 class="text-6xl self-center">NOTICE</h1>
        <button
          class="flex border-2 w-auto self-end mr-5 p-1 mb-1 rounded-md outline-none hover:outline-none border-violet-600"
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
      <hr class="mx-5 border-2 border-black" />
      <div class="basis-full m-5 h-96">
        <div class="h-full">
          <ul class="h-full overflow-y-auto">
            <div class="">
              <li class="flex justify-end h-8 w-full mt-4"></li>
            </div>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<style></style>
