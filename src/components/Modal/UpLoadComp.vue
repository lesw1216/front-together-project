<script setup>
import { ref, reactive } from "vue";
import buttonComp from "../buttonComp.vue";
const props = defineProps({
  show: Boolean,
});

const fileMeta = reactive({
  file_src: "",
  name: "",
  type: "",
});

const audioMeta = reactive({
  audio: new Audio(),
  isPlaying: false,
  currentTime: {
    min: 0,
    sec: 0,
  },
  duration: {
    min: 0,
    sec: 0,
  },
});

const time = reactive({
  min: 0,
  sec: 0,
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
  fileMeta.type = "";

  console.log(fileMeta.file_src);

  extractFileType(file.type);

  if (fileMeta.type === "audio") {
    audioMeta.audio.src = fileMeta.file_src;
  }
};

// Event Listener
audioMeta.audio.addEventListener("timeupdate", () => {
  console.log("실행중");
  var tempCurrentTime = Math.floor(audioMeta.audio.currentTime);
  if (tempCurrentTime % 60 == 0) {
    audioMeta.currentTime.min = parseInt(tempCurrentTime / 60);
    audioMeta.currentTime.sec = 0;
  } else {
    audioMeta.currentTime.sec = parseInt(tempCurrentTime % 60);
    audioMeta.currentTime.min = parseInt(tempCurrentTime / 60);
  }

  timeTemplate(audioMeta.currentTime);
});

audioMeta.audio.addEventListener("play", () => {
  audioMeta.isPlaying = true;
});

audioMeta.audio.addEventListener("canplaythrough", () => {
  var duration = audioMeta.audio.duration;
  if (duration % 60 == 0) {
    audioMeta.duration.min = parseInt(duration / 60);
    audioMeta.duration.sec = 0;
  } else if (duration / 60 == 0) {
    audioMeta.duration.min = 1;
    audioMeta.duration.sec = parseInt(duration % 60);
  } else {
    audioMeta.duration.min = parseInt(duration / 60);
    audioMeta.duration.sec = parseInt(duration % 60);
  }
  timeTemplate(audioMeta.duration);
});

audioMeta.audio.addEventListener("pause", () => {
  audioMeta.isPlaying = false;
});

// custom Method
const timeTemplate = (time) => {
  if (time.sec < 10) {
    time.sec = "0" + time.sec;
  }

  if (time.min < 10) {
    time.min = "0" + time.min;
  }
};

// 어떤 파일이 들어오는지 체크 (image, audio...)
const extractFileType = (fileType) => {
  for (var i = 0; i < fileType.length; i++) {
    if (fileType.charAt(i) === "/") break;

    fileMeta.type += fileType.charAt(i);
  }
};

const audioCtrl = () => {
  if (audioMeta.isPlaying) {
    audioMeta.audio.pause();
  } else {
    audioMeta.audio.play();
  }
};

const play = () => {
  audioMeta.audio.play();
};

const pause = () => {
  audioMeta.audio.pause();
};

const replay = () => {
  audioMeta.audio.currentTime = 0;
  audioMeta.audio.play();
};
</script>
<template>
  <main class="h-full bg-white w-full" v-if="show">
    <form class="absolute flex flex-col w-1/2 left-1/2 -translate-x-1/2 mt-10">
      <h1 class="text-5xl mb-5">FILE UPLOAD</h1>
      <div class="border-slate-700 border-2 self-center h-full w-full mb-2">
        <input
          class="w-full h-full p-4 focus:outline-none outline-none border-none text-xl"
          placeholder="제목"
        />
      </div>

      <!-- 이미지 파일 -->
      <!-- <div v-if="fileMeta.type === 'image'">
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
      </div> -->

      <!-- 오디오 파일 -->
      <!-- <div v-if="fileMeta.type === 'audio'"> -->
      <!-- <div class="border flex flex-col items-center">
        <img src="../../../images/icons/headphones.svg" class="w-1/2 h-1/2" />
       
        <div>
          {{ audioMeta.currentTime.min }}:{{ audioMeta.currentTime.sec }} /
          {{ audioMeta.duration.min }}:{{ audioMeta.duration.sec }}
        </div>
        <div>
          
          <div>
            <div id="progress-bar" class="border bg-slate-400 h-5">
              <div id="progress-value" class="bg-slate-100 h-5 w-3"></div>
            </div>
          </div>
        </div>
        <audio controls="controls">
          <source :src="fileMeta.file_src" type="audio/wav" />
          <source :src="fileMeta.file_src" type="audio/ogg" />
          <source :src="fileMeta.file_src" type="audio/mp3" />
        </audio>
        <div class="flex justify-center w-full h-full">
          <button @click="audioCtrl" type="button">
            <img
              src="../../../images/icons/play_arrow.svg"
              draggable="false"
              v-if="!audioMeta.isPlaying"
            />
            <img
              v-else
              src="../../../images/icons/pause.svg"
              draggable="false"
            />
          </button>

          <button @click="replay" type="button">
            <img src="../../../images/icons/replay.svg" draggable="false" />
          </button>
        </div>
      </div> -->

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
