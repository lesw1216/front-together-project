<script setup>
import axiosInstance from "@/api/index";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import { useDateStore } from "@/stores/date";
import { useUserStore } from "@/stores/user";
import { useJwtStore } from "@/stores/Jwt";
import { useTeamStore } from "@/stores/Team";

const dateStore = useDateStore();
const userStore = useUserStore();
const jwtStore = useJwtStore();
const teamStore = useTeamStore();

const router = useRouter();

// Field
const todoLists = ref([]);

// func
onMounted(() => {
  const today = dateStore.getTodayLocalDateISOString();

  axiosInstance
    .get("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
        "Content-Type": "text/plain",
      },
      params: {
        userPk: userStore.userPk,
        createdDate: today,
      },
    })
    .then((res) => {
      res.data.forEach((data) => {
        todoLists.value.push(data);
      });
    })
    .catch((err) => {});
});
</script>
<template>
  <!-- <div class="h-full p-2"> -->
  <main class="flex content-center h-full p-2">
    <section class="basis-1/3 mr-2">
      <article
        class="flex flex-col bg-white rounded-2xl w-full h-full shadow-xl p-2 border"
      >
        <!-- 날짜 -->
        <div class="basis-1/12">
          <div class="w-full h-full text-4xl mx-2">
            {{ dateStore.getCurrentDate() }}
          </div>
        </div>
        <div>
          <button
            class="text-slate-400 hover:text-violet-600 flex justify-center px-1 mb-1"
            @click="router.push('/TodoList')"
          >
            자세히
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
          </button>
        </div>

        <!-- 리스트 -->
        <div class="basis-full h-96">
          <div class="h-full">
            <ul class="h-full overflow-y-auto">
              <div class="" v-for="todoList in todoLists">
                <li
                  class="flex mb-2 border border-violet-300 rounded-md shadow-md p-4 mr-4"
                >
                  <div
                    class="w-full h-full rounded-md"
                    v-bind:class="[
                      todoList.isCompletion ? 'line-through' : null,
                    ]"
                  >
                    {{ todoList.content }}
                  </div>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </article>
      <!-- <div class="bg-white h-full rounded-2xl shadow-xl">
          <div class="p-2"></div>
        </div> -->
    </section>
    <section class="basis-1/3 mr-2 flex flex-col justify-start">
      <article class="basis-1/3 bg-white rounded-2xl mb-2 border">
        <div>공지사항</div>
      </article>
      <article class="basis-1/3 bg-white mb-2 rounded-2xl shadow-xl border">
        <div>제일 빠른 일정(달력)</div>
      </article>

      <article class="basis-1/3 bg-white rounded-2xl shadow-xl broder">
        <div>최근 공유된 파일(저장소)</div>
      </article>
    </section>
    <section class="basis-1/3 bg-white rounded-2xl shadow-xl border">
      최근 채팅
    </section>
  </main>
</template>
<style></style>
