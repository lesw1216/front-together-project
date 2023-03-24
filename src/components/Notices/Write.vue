<script setup>
// component
import Modal from "@/components/Modal.vue";

// vue
import { ref } from "vue";
import { useRouter } from "vue-router";

// pinia
import { useNavBarStore } from "@/stores/navBar";

const router = useRouter();
const navBarStore = useNavBarStore();

const isModal = ref(false);

const OnClickModal = () => {
  isModal.value = !isModal.value;
  console.log(isModal.value);
};

const OnClickModalOk = () => {
  navBarStore.setIsMainDisplay(true);
  router.push({
    path: "/notice",
  });
};
</script>
<template>
  <main class="h-full p-2">
    <div class="h-full shadow-xl rounded-2xl border border-slate-300 p-2">
      <div class="z-40" v-if="isModal">
        <Modal @modal-cancel="OnClickModal" @modal-ok="OnClickModalOk"></Modal>
      </div>
      <div class="h-full flex flex-col">
        <header>
          <input
            class="w-full mt-4 p-2 border-slate-300 border-2 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-xl"
            placeholder="제목을 입력하세요..."
            autofocus
          />
        </header>
        <section class="my-4 basis-full">
          <textarea
            class="p-2 w-full h-full resize-none border-slate-300 border-2 focus:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-300 text-xl"
          ></textarea>
        </section>
        <footer class="flex justify-end">
          <button
            class="w-52 mb-2 mr-2 px-4 py-2 text-white bg-violet-600 font-bold rounded-sm text-center text-xl"
          >
            작성하기
          </button>
          <button
            class="border w-52 px-4 py-1 mb-2 border-gray-600 hover:border-red-600 hover:text-red-600 font-bold rounded-sm text-xl"
            @click="OnClickModal"
          >
            나가기
          </button>
        </footer>
      </div>
    </div>
  </main>
</template>
<style lang=""></style>
