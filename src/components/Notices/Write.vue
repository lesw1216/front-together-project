<script setup>
import Modal from "@/components/Modal.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const isModal = ref(false);

const OnClickModal = () => {
  isModal.value = !isModal.value;
  console.log(isModal.value);
};

const OnClickModalOk = () => {
  router.push({
    path: "/notice",
  });
};
</script>
<template>
  <div class="z-40" v-if="isModal">
    <Modal @modal-cancel="OnClickModal" @modal-ok="OnClickModalOk"></Modal>
  </div>
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
    <footer class="flex justify-end">
      <button
        class="border-2 mb-2 mr-2 px-4 py-2 border-violet-600 bg-violet-600 text-white font-bold rounded-sm text-xl"
      >
        작성하기
      </button>
      <button
        class="border-2 px-4 py-1 mb-2 border-gray-600 font-bold rounded-sm text-xl"
        @click="OnClickModal"
      >
        돌아가기
      </button>
    </footer>
  </div>
</template>
<style lang=""></style>
