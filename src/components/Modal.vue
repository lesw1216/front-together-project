<script setup></script>
<template>
  <div class="w-full h-screen fixed">
    <div
      class="border w-96 h-60 absolute top-1/4 left-1/3 rounded-md border-violet-600"
    >
      <p class="text-2xl text-center absolute top-1/3 inset-0">
        작성한 내용이 사라집니다. <br />
        취소하시겠습니까?
      </p>
      <div class="flex absolute inset-x-0 bottom-0">
        <button
          class="border m-2 border-violet-600 p-2 bg-violet-600 text-white basis-1/2"
          @click="$emit('modal-ok')"
        >
          확인
        </button>
        <button
          class="border m-2 border-gray-600 hover:border-rose-600 hover:text-rose-600 p-2 basis-1/2"
          @click="$emit('modal-cancel')"
        >
          취소
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
