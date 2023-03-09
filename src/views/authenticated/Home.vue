<script setup>
import axiosInstance from "@/api/index";
import { useRouter } from "vue-router";
import { ref, onMounted } from "vue";

import { useDateStore } from "@/stores/date";
import { useUserStore } from "@/stores/user";
import { useJwtStore } from "@/stores/Jwt";

const dateStore = useDateStore();
const userStore = useUserStore();
const jwtStore = useJwtStore();
const router = useRouter();

const message = ref("HOME");

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
  <div class="h-full p-2">
    <section class="flex content-center h-full">
      <article class="basis-1/3 mr-2">
        <div class="bg-white h-full rounded-2xl shadow-xl">
          <div class="w-full h-full p-2">
            <section
              class="flex flex-col bg-white rounded-3xl w-full h-full mb-4 shadow-xl"
            >
              <!-- 날짜 -->
              <div class="basis-1/12 m-5">
                <div class="flex justify-center items-center w-full h-full">
                  <div class="mx-2 text-3xl">
                    {{ dateStore.getCurrentDate() }}
                  </div>
                  <button
                    class="border-2 rounded-md border-violet-600 flex justify-center p-1"
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
              </div>

              <!-- 리스트 -->
              <hr class="mx-5 border-2 border-black" />
              <div class="basis-full m-5 h-96">
                <div class="h-full">
                  <ul class="h-full overflow-y-auto">
                    <div class="" v-for="todoList in todoLists">
                      <li class="flex justify-end h-8 w-full mt-4">
                        <div
                          class="w-full h-full rounded-md p-2"
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
            </section>
          </div>
        </div>
      </article>
      <div class="basis-1/3 mr-2 flex flex-col justify-start shadow-xl">
        <div class="basis-1/3 bg-white rounded-2xl mb-2">
          <article>공지사항</article>
        </div>
        <div class="basis-1/3 bg-white mb-2 rounded-2xl shadow-xl">
          <article>제일 빠른 일정(달력)</article>
        </div>

        <div class="basis-1/3 bg-white rounded-2xl shadow-xl">
          <article>최근 공유된 파일(저장소)</article>
        </div>
      </div>
      <article class="basis-1/3 bg-white rounded-2xl shadow-xl">
        최근 채팅
      </article>
    </section>
  </div>
</template>
<style></style>
