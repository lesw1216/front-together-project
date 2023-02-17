<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axiosInstance from "@/api/index";

// 변수
const router = useRouter();

const signUpUser = reactive({
  userId: null,
  password: "",
  username: "",
  keyNum: null,
  keyValue: "",
});

const fieldErrorMessage = reactive({
  username: null,
  userId: null,
  password: null,
  keyNum: null,
  keyValue: null,
});

const selectInfo = reactive({
  isSelectClick: false,
  content: "선택하세요",
  isoptionSelectClick: false,
});

// func

// const params = new URLSearchParams();
// params.append("user", "signUpUser");

const signUpForm = () => {
  axiosInstance
    .post("/api/users", JSON.stringify(signUpUser))
    .then((response) => {
      console.log(response.data);

      // if (response.status === 200) {
      //   alert("회원 가입 성공!");
      //   router.push("/login");
      // } else {
      //   // JSON.parse(result.data, fieldErrorMessage);
      //   const fieldErrorUser = result.data;
      //   fieldErrorMessage.username = fieldErrorUser["username"];
      //   fieldErrorMessage.password = fieldErrorUser["password"];
      //   fieldErrorMessage.userId = fieldErrorUser["userId"];
      //   fieldErrorMessage.checkValid = true;
      // }
      const fieldErrorUser = response.data;
      fieldErrorMessage.username = fieldErrorUser["usernameRejectMsg"];
      fieldErrorMessage.password = fieldErrorUser["passwordRejectMsg"];
      fieldErrorMessage.userId = fieldErrorUser["userIdRejectMsg"];
      fieldErrorMessage.keyValue = fieldErrorUser["keyValueRejectMsg"];
      fieldErrorMessage.keyNum = fieldErrorUser["keyNumRejectMsg"];
      console.log("fieldErrorMessage=" + fieldErrorMessage.keyNum);
    })
    .catch((err) => {
      console.log(err);
    });
};

// 질문 선택 버튼 클릭시 작동
const onClickSelectButton = () => {
  selectInfo.isSelectClick = !selectInfo.isSelectClick;
};

// 질문 하나를 클릭시 작동
const onClickOptionSelectButton = (option, keyNum) => {
  signUpUser.keyNum = keyNum;
  selectInfo.content = option;
  selectInfo.isSelectClick = false;
  selectInfo.isoptionSelectClick = true;
};

// 로그인 페이지로 돌아가는 버튼
const onClickCancelButton = () => {
  router.push({
    path: "/login",
  });
};
</script>
<template>
  <div class="h-screen flex flex-col items-center justify-center">
    <form @submit.prevent="signUpForm" class="border-2 rounded-md p-10 w-2/5">
      <h1 class="text-center text-5xl mb-5">Sign Up</h1>
      <!--  ID 입력 Label  -->
      <label>
        <!-- ID 검증 실패시 알림 -->
        <div v-if="fieldErrorMessage.userId !== null" class="text-red-600">
          <p class="text-sm">{{ fieldErrorMessage.userId }}</p>
        </div>
        <!-- Finish, ID 검증 실패시 알림 -->
        <!-- ID input 태그 시작 -->
        <input
          v-model="signUpUser.userId"
          type="text"
          placeholder="ID"
          autofocus
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            fieldErrorMessage.userId === null
              ? 'focus:border-sky-500 ring-blue-100'
              : 'border-red-500 focus:border-red-500 ring-red-400'
          "
        />
        <!-- ID input 태그 종료 -->
      </label>
      <!-- ID 입력 Label 종료 -->
      <!-- PASSWORD 입력 Label 시작 -->
      <label>
        <!-- PASSWROD 검증 실패시 알림 시작 -->
        <div v-if="fieldErrorMessage.password !== null" class="text-red-500">
          <p class="text-sm">{{ fieldErrorMessage.password }}</p>
        </div>
        <!-- PASSWORD 검증 실패시 알림 종료 -->
        <!-- PASSWORD input 시작 -->
        <input
          v-model="signUpUser.password"
          type="password"
          placeholder="PASSWORD"
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            fieldErrorMessage.password === null
              ? 'focus:border-sky-500 ring-blue-100'
              : 'border-red-500 focus:border-red-500 ring-red-400'
          "
          v-bind:autofocus="fieldErrorMessage.keyValue !== null ? true : false"
        /><!-- PASSWORD input 종료 -->
      </label>
      <!-- PASSWORD 입력 Label 종료 -->
      <!-- username 입력 Label 시작 -->
      <label>
        <!-- username 검증 실패 알림 시작 -->
        <div v-if="fieldErrorMessage.username !== null" class="text-red-500">
          <p class="text-sm">{{ fieldErrorMessage.username }}</p>
        </div>
        <!-- username 검증 실패 알림 종료 -->
        <!-- username input 시작 -->
        <input
          v-bind:value="signUpUser.username"
          @input="
            (event) => {
              signUpUser.username = event.target.value;
            }
          "
          type="text"
          placeholder="이름"
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            fieldErrorMessage.username === null
              ? 'focus:border-sky-500 ring-blue-100'
              : 'border-red-500 focus:border-red-500 ring-red-400'
          "
        /><!-- username input 종료 -->
      </label>
      <!-- username 입력 Label 종료 -->

      <!-- 암호 찾기 질문 입력 시작-->
      <p v-if="fieldErrorMessage.keyNum !== null" class="text-red-500">
        {{ fieldErrorMessage.keyNum }}
      </p>
      <p v-else class="font-sans">아이디 / 암호 분실 키</p>

      <button
        type="button"
        class="border-solid border-2 focus:outline-none focus:ring-1 w-full p-1"
        v-bind:class="[
          selectInfo.isSelectClick ? 'rounded-t-md' : 'rounded-md',
          fieldErrorMessage.keyNum === null
            ? 'focus:border-sky-500 focus:ring-blue-100'
            : 'border-red-500 focus:border-red-500 ring-red-400',
        ]"
        @click="onClickSelectButton()"
      >
        {{ selectInfo.content }}
      </button>
      <div v-if="selectInfo.isSelectClick">
        <button
          type="button"
          class="border-sold border-l-2 border-r-2 hover:bg-lime-50 focus:bg-lime-200 w-full p-1"
          @click="onClickOptionSelectButton('어릴때 별명은?', 0)"
        >
          어릴때 별명은?
        </button>
        <button
          type="button"
          class="border-sold border-l-2 border-r-2 hover:bg-lime-50 focus:bg-lime-200 w-full p-1"
          @click="onClickOptionSelectButton('졸업한 학교는?', 1)"
        >
          졸업한 학교는?
        </button>
        <button
          type="button"
          class="rounded-b-md border-sold border-l-2 border-r-2 border-b-2 hover:bg-lime-50 focus:bg-lime-200 w-full p-1"
          @click="onClickOptionSelectButton('나의 보물 1호는?', 2)"
        >
          나의 보물 1호는?
        </button>
      </div>
      <label>
        <div
          v-if="fieldErrorMessage.keyValue !== null"
          class="text-red-500 mt-2"
        >
          <p class="text-sm">
            {{ fieldErrorMessage.keyValue }}
          </p>
        </div>
        <input
          v-bind:value="signUpUser.keyValue"
          @input="(event) => (signUpUser.keyValue = event.target.value)"
          type="text"
          placeholder="질문의 답"
          class="border-solid border-2 rounded-md focus:outline-none w-full focus:ring-1 mb-2 p-1"
          v-bind:class="
            fieldErrorMessage.keyValue === null
              ? 'focus:border-sky-500 ring-blue-100 mt-2'
              : 'border-red-500 focus:border-red-500 ring-red-400'
          "
        />
      </label>

      <!-- 버튼 입력 -->
      <div>
        <button
          type="submit"
          class="rounded-md bg-violet-600 hover:bg-violet-800 text-white w-full font-bold mb-2 p-2"
        >
          가입
        </button>
      </div>
      <button
        @click="onClickCancelButton()"
        class="rounded-md bg-red-600 hover:bg-red-700 text-white font-bold w-full p-2"
      >
        취소
      </button>
    </form>
  </div>
</template>
<style scoped>
.board {
  margin: 10% 30%;
}
</style>
