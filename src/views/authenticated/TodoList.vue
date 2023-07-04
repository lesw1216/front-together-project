<script setup>
import { reactive } from "vue";
import { ref, onMounted } from "vue";
import axiosInstance from "@/api/index";

// Pinia
import { useJwtStore } from "@/stores/Jwt";
import { useUserStore } from "@/stores/user";
import { useDateStore } from "@/stores/date";

const jwtStore = useJwtStore();
const userStore = useUserStore();
const dateStore = useDateStore();

// ========== Field, Object =============

// 할일 추가시 사용히는 객체
const addTodo = reactive({
  content: "",
  createdDate: null,
  isCompletion: false,
  userPk: userStore.userPk,
});

// 할일 삭제시 사용하는 객체
const deleteTodo = reactive({
  id: null,
  createdDate: null,
  userPk: userStore.userPk,
});

// 할일 수정시 사용하는 객체
const updateTodo = reactive({
  id: null,
  content: null,
  isCompletion: false,
});

// 전체 조회 JSON 리스트로 받기위한 객체
const todoLists = ref([]);

// ======= Function =========

// 할일 추가
const todoForm = () => {
  addTodo.createdDate = dateStore.getCurrentDate(); // 저장되는 날짜

  axiosInstance
    .post("/api/todoLists", JSON.stringify(addTodo), {
      headers: { Authorization: "Bearer " + jwtStore.token },
    })
    .then((response) => {
      if (response.status == 200) {
        todoLists.value.push(response.data);
        addTodo.content = "";
      }
    })
    .catch((err) => {});
};

// 할일 삭제
const deleteTodoForm = (todoId) => {
  deleteTodo.id = todoId;
  deleteTodo.createdDate = dateStore.getCurrentDate();
  axiosInstance
    .delete("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
      data: JSON.stringify(deleteTodo),
    })
    .then((res) => {
      console.log(res.data);
      ㅇㄴ;
      todoLists.value = res.data;
    })
    .catch((err) => {});
};

// 할일 전부 삭제
const deleteAllTodoForm = () => {
  deleteTodo.createdDate = dateStore.getCurrentDate();
  deleteTodo.id = null;

  axiosInstance
    .delete("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
      data: JSON.stringify(deleteTodo),
    })
    .then((res) => {
      console.log(res.data);
      todoLists.value = res.data;
    })
    .catch((err) => {});
};

// 할일 수정
const updateTodoForm = (todoList) => {
  updateTodo.id = todoList.id;
  updateTodo.isCompletion = todoList.isCompletion;

  axiosInstance
    .put("/api/todoLists", JSON.stringify(updateTodo), {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
    })
    .then((res) => {})
    .catch((err) => {});
};

// 완료 취소 버튼
const completionTodoForm = (todoList) => {
  updateTodo.content = todoList.content;
  updateTodo.id = todoList.id;
  updateTodo.isCompletion = !todoList.isCompletion;

  // todoLists.value.forEach((list) => {
  //   if (list.id === todoList.id) {
  //     // index.value = list.id;
  //   }
  // });

  axiosInstance
    .put("/api/todoLists", JSON.stringify(updateTodo), {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
    })
    .then((res) => {
      if (res.status === 200) {
        console.log(updateTodo.isCompletion);
        todoList.isCompletion = updateTodo.isCompletion;
      }
    })
    .catch((err) => {});
};

const beforeDate = () => {
  const beforeDate = dateStore.getYesterdayLocalDateISOString();

  axiosInstance
    .get("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
        "Content-Type": "text/plain",
      },
      params: {
        userPk: userStore.userPk,
        createdDate: beforeDate,
      },
    })
    .then((res) => {
      todoLists.value = res.data;
    })
    .catch((err) => {});
};

const OnClickTomorrow = () => {
  const nextDay = dateStore.getTomorrowLocalDateISOString();

  axiosInstance
    .get("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
        "Content-Type": "text/plain",
      },
      params: {
        userPk: userStore.userPk,
        createdDate: nextDay,
      },
    })
    .then((res) => {
      todoLists.value = res.data;
    })
    .catch((err) => {});
};

const onClickToday = () => {
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
      console.log(res.data);
      todoLists.value = res.data;
    })
    .catch((err) => {});
};

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
  <div class="w-full h-full p-2">
    <main
      class="flex flex-col bg-white rounded-3xl w-full h-full p-4 shadow-xl"
    >
      <!-- 날짜 -->
      <header class="basis-1/12 flex flex-col mb-2">
        <div class="flex justify-between items-center w-full h-full">
          <button class="h-full" @click="beforeDate">
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
          </button>
          <div class="mx-2 text-3xl">
            {{ dateStore.getCurrentDate() }}
          </div>

          <button class="h-full" @click="OnClickTomorrow">
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
        <div>
          <button
            class="rounded-md bg-slate-700 text-white outline-none p-2 mt-2 border text-2xl"
            @click="onClickToday"
          >
            오늘로 가기!
          </button>
        </div>
      </header>
      <section class="mb-2 flex flex-col">
        <!-- 입력창 -->
        <form v-on:submit.prevent="todoForm" class="basis-1/12">
          <div
            class="flex justify-end h-full border p-2 border-slate-700 rounded-md"
          >
            <div class="basis-full h-full">
              <input
                type="text"
                class="p-2 h-full w-full outline-none focus:outline-none"
                v-model="addTodo.content"
              />
            </div>
            <div class="ml-2">
              <button
                type="submit"
                class="border-gray-300 px-2 h-full outline-none focus:outline-none"
              >
                +
              </button>
            </div>
          </div>
        </form>
        <div class="mt-2">
          <button
            class="w-auto font-bold outline-none rounded-md p-1 border border-slate-500 text-slate-500 hover:border-red-600 hover:text-red-600"
            @click="deleteAllTodoForm"
          >
            전체 삭제
          </button>
        </div>
      </section>
      <!-- 리스트 -->
      <section class="basis-full h-96">
        <div class="h-full">
          <ul class="h-full overflow-y-auto">
            <div class="" v-for="todoList in todoLists">
              <li
                class="flex justify-end mt-4 border border-violet-300 rounded-md shadow-md p-4 mr-4"
              >
                <form
                  v-on:submit.prevent="updateTodoForm(todoList)"
                  class="basis-full"
                >
                  <input
                    class="hover:outline-none w-full h-full rounded-md outline-none focus:p-2 focus:outline-none focus:border-2 focus:border-violet-600"
                    v-bind:class="[
                      todoList.isCompletion ? 'line-through' : null,
                    ]"
                    v-bind:value="todoList.content"
                    v-on:input="
                      (event) => (updateTodo.content = event.target.value)
                    "
                  />
                </form>

                <div class="flex whitespace-nowrap">
                  <button
                    class="h-full border border-violet-600 rounded-md mx-2 p-2 hover:text-violet-900"
                    type="submit"
                    @click="completionTodoForm(todoList)"
                  >
                    <p v-if="todoList.isCompletion">취소</p>
                    <p v-else>완료</p>
                  </button>
                  <button
                    class="h-full rounded-md border-red-600 border p-2 hover:bg-red-600 hover:text-white"
                    type="submit"
                    @click="deleteTodoForm(todoList.id)"
                  >
                    삭제
                  </button>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </section>
    </main>
  </div>
</template>
<style></style>
