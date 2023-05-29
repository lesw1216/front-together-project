<script setup>
import { ref, reactive } from "vue";
const props = defineProps({
  show: Boolean,
});

const image = ref("");

const fileMeta = reactive({
  file_src: "",
  name: "",
  type: "",
});

const uploadState = reactive({
  isDarkMode: false,
  isZoom: 0,
  zoomBtn: "X2 확대",
});

const onDarkMode = () => {
  uploadState.isDarkMode = !uploadState.isDarkMode;
};

const onClickZoom = () => {
  uploadState.isZoom = ++uploadState.isZoom;

  if (uploadState.isZoom > 2) {
    uploadState.isZoom = 0;
    uploadState.zoomBtn = "X2 확대";
  }

  if (uploadState.isZoom == 1) {
    uploadState.zoomBtn = "X4 확대";
  } else if (uploadState.isZoom == 2) {
    uploadState.zoomBtn = "초기화";
  }
};

const uploadFile = (e) => {
  var files = e.target.files;
  var file = files[0];
  let file_src = URL.createObjectURL(file);

  // file 정보 저장
  fileMeta.file_src = file_src;
  fileMeta.name = file.name;
  fileMeta.type = file.type;
};
</script>
<template>
  <main class="h-full bg-white w-full" v-if="show">
    <form class="absolute flex flex-col w-1/2 left-1/2 -translate-x-1/2 mt-10">
      <h1 class="text-5xl mb-5">FILE UPLOAD</h1>
      <div class="border-slate-700 border-2 self-center h-full w-full mb-2">
        <input
          v-model="filePostName"
          class="w-full h-full p-4 focus:outline-none outline-none border-none text-xl"
          placeholder="제목"
        />
      </div>
      <!-- <input type="file" class="border border-red-600" /> -->
      <div class="flex mb-2">
        <button
          class="p-2 text-lg bg-slate-700 text-white rounded-md mr-2"
          type="button"
          @click="onDarkMode"
        >
          다크 모드
        </button>
        <button
          class="p-2 text-lg bg-slate-700 text-white rounded-md"
          type="button"
          @click="onClickZoom"
        >
          {{ uploadState.zoomBtn }}
        </button>
      </div>
      <div
        class="relative w-full h-96 mb-2"
        :class="uploadState.isDarkMode ? 'bg-black' : ''"
      >
        <img
          :src="fileMeta.file_src"
          class="w-auto h-auto max-w-full max-h-full mb-2 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
          :class="
            uploadState.isZoom == 0
              ? ''
              : uploadState.isZoom == 1
              ? 'scale-200'
              : 'scale-400'
          "
        />
      </div>

      <div class="flex mb-2">
        <div class="border-slate-700 border-2 self-center h-full w-full mr-2">
          <input
            :value="fileMeta.name"
            class="w-full h-full p-4 focus:outline-none outline-none border-none text-xl"
            readonly
          />
        </div>
        <label
          for="file"
          class="p-4 cursor-pointer bg-slate-700 rounded-md text-white text-center text-lg w-36"
          >파일 찾기</label
        >
        <input type="file" id="file" class="hidden" @change="uploadFile" />
      </div>
      <button
        class="border p-4 text-4xl rounded-md bg-slate-700 text-white mb-2"
      >
        올리기
      </button>
      <button
        class="border p-4 text-4xl rounded-md border-slate-700"
        @click="$emit('cancel')"
      >
        취소
      </button>
    </form>
  </main>
</template>
<style scoped></style>
