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
  addTodo.createdDate = dateStore.getCurrentDate();

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
    <section
      class="flex flex-col bg-white rounded-3xl w-full h-full mb-4 shadow-xl"
    >
      <!-- 날짜 -->
      <div class="basis-1/12 m-5">
        <div class="flex justify-center items-center w-full h-full">
          <button
            class="border-2 rounded-md border-violet-600"
            @click="beforeDate"
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
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <div class="mx-2 text-3xl">
            {{ dateStore.getCurrentDate() }}
          </div>
          <button
            class="border-2 rounded-md mr-1 px-1 border-violet-600"
            @click="onClickToday"
          >
            TODAY
          </button>

          <button
            class="border-2 rounded-md border-violet-600"
            @click="OnClickTomorrow"
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
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <!-- 입력창 -->
      <form v-on:submit.prevent="todoForm" class="basis-1/12 m-5">
        <div class="flex justify-end h-full">
          <div class="basis-full h-full">
            <input
              type="text"
              class="border-solid border-2 rounded-xl border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 p-2 h-full w-full"
              v-model="addTodo.content"
            />
          </div>
          <div class="ml-2">
            <button
              type="submit"
              class="rounded-md border-gray-500 focus:ring-1 hover:border-gray-600 font-bold whitespace-nowrap px-2 h-full outline-none border-2"
            >
              추가
            </button>
          </div>
        </div>
      </form>
      <!-- 리스트 -->
      <hr class="mx-5 border-2 border-black" />
      <div class="basis-full m-5 h-96">
        <div class="h-full">
          <ul class="h-full overflow-y-auto">
            <div>
              <button
                class="w-full font-bold outline-none rounded-md p-2 border-red-600 border-2 hover:text-white hover:bg-red-600"
                @click="deleteAllTodoForm"
              >
                전체 삭제
              </button>
            </div>
            <div class="" v-for="todoList in todoLists">
              <li class="flex justify-end h-8 w-full mt-4">
                <form
                  v-on:submit.prevent="updateTodoForm(todoList)"
                  class="basis-full"
                >
                  <input
                    class="hover:border-2 hover:border-violet-600 hover:outline-none w-full h-full rounded-md p-2 outline-none focus:outline-none focus:border-2 focus:border-violet-600"
                    v-bind:class="[
                      todoList.isCompletion ? 'line-through' : null,
                    ]"
                    v-bind:value="todoList.content"
                    v-on:input="
                      (event) => (updateTodo.content = event.target.value)
                    "
                  />
                </form>

                <div class="flex h-full whitespace-nowrap">
                  <button
                    class="border-2 border-violet-600 rounded-md mx-2 px-3 hover:bg-violet-600 font-bold hover:text-white"
                    type="submit"
                    @click="completionTodoForm(todoList)"
                  >
                    <p v-if="todoList.isCompletion">취소</p>
                    <p v-else>완료</p>
                  </button>
                  <button
                    class="rounded-md border-red-600 border-2 px-3 font-bold hover:bg-red-600 hover:text-white"
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
      </div>
    </section>
  </div>
</template>
<style></style>
