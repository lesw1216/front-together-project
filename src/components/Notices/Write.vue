<script setup>
console.log("write");
</script>
<template>
  <div class="h-full w-full flex flex-col">
    <header>
      <input
        class="w-full border-black border-2 mt-4 p-2 focus:border-blue-500 focus:outline-none text-xl"
        placeholder="제목을 입력하세요..."
        autofocus
      />
    </header>
    <section class="my-4 basis-full">
      <textarea
        class="p-2 w-full h-full resize-none border-black border-2 focus:border-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-400 text-xl"
      ></textarea>
    </section>
    <footer class="flex">
      <button
        class="border-2 mb-2 mr-2 px-4 py-2 border-indigo-400 hover:bg-indigo-400 hover:text-white basis-1/2"
      >
        작성하기
      </button>
      <button
        class="border-2 px-4 py-1 mb-2 border-rose-400 hover:bg-rose-400 hover:text-white basis-1/2"
        @click="$router.push('/notice')"
      >
        돌아가기
      </button>
    </footer>
  </div>
</template>
<style lang=""></style>
