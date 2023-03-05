<script setup>
import { reactive } from "vue";
import { ref, onMounted } from "vue";
import axiosInstance from "@/api/index";

// Pinia
import { useJwtStore } from "@/stores/Jwt";
import { useUserStore } from "@/stores/user";

const jwtStore = useJwtStore();
const userStore = useUserStore();

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
  isCompletion: false,
  content: null,
});

// 전체 조회 JSON 리스트로 받기위한 객체
const todoLists = ref();

// ======= Function =========

// 할일 추가
const todoForm = () => {
  addTodo.createdDate = new Date();

  console.log(addTodo.createdDate);
  axiosInstance
    .post("/api/todoLists", JSON.stringify(addTodo), {
      headers: { Authorization: "Bearer " + jwtStore.token },
    })
    .then((response) => {
      todoLists.value = response.data;
    })
    .catch((err) => {});
};

// 할일 삭제
const deleteTodoForm = (todoId) => {
  deleteTodo.id = todoId;
  deleteTodo.createdDate = new Date();
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
  deleteTodo.createdDate = new Date();

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
  console.log("update");
  console.log("update.content=", updateTodo.content);
  updateTodo.id = todoList.id;
  updateTodo.isCompletion = todoList.isCompletion;

  axiosInstance
    .put("api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
      data: JSON.stringify(updateTodo),
    })
    .then((res) => {})
    .catch((err) => {});
};

// 완료 취소 버튼
const completionTodoForm = (todoList) => {
  updateTodo.content = todoList.content;
  updateTodo.id = todoList.id;
  updateTodo.isCompletion = !updateTodo.isCompletion;
  axiosInstance
    .put("api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
      },
      data: JSON.stringify(updateTodo),
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {});
};

onMounted(() => {
  axiosInstance
    .get("/api/todoLists", {
      headers: {
        Authorization: "Bearer " + jwtStore.token,
        "Content-Type": "text/plain",
      },
      params: {
        userPk: userStore.userPk,
        createdDate: new Date(),
      },
    })
    .then((res) => {
      todoLists.value = res.data;
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
          <div>왼쪽 화살표</div>
          <div class="mx-2 text-3xl">
            {{ new Date().toLocaleDateString() }}
          </div>
          <div>오른쪽 화살표</div>
        </div>
      </div>
      <!-- 입력창 -->
      <form v-on:submit.prevent="todoForm" class="basis-1/12 m-5">
        <div class="flex justify-end h-full">
          <div class="basis-full h-full">
            <input
              type="text"
              class="border-solid border-2 rounded-xl border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-400 p-4 h-full w-full"
              v-model="addTodo.content"
            />
          </div>
          <div class="ml-2">
            <button
              type="submit"
              class="rounded-xl hover:bg-violet-600 hover:text-white font-bold whitespace-nowrap p-2 h-full outline-none border-2"
            >
              할일 추가
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
                    v-bind:class="todoList.isCompletion ? 'line-through' : null"
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
