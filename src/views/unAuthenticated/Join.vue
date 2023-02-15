<script setup>
import { useRouter } from "vue-router";
import { reactive } from "vue";
import axiosInstance from "@/api/index";

const router = useRouter();

const joinUser = reactive({
  userId: "",
  password: "",
  username: "",
  userKeyNumber: "",
  userKeyValue: "",
});

const validErrorMessage = reactive({
  username: "",
  userId: "",
  password: "",
});

const params = new URLSearchParams();
params.append("user", "joinUser");

const joinForm = () => {
  axiosInstance
    .post("/api/users", JSON.stringify(joinUser))
    .then((result) => {
      // if (result.status === 200) {
      //   alert("회원 가입 성공!");
      //   router.push("/login");
      // }
      console.log(result.data);
      // JSON.parse(result.data, validErrorMessage);
      const rejectUser = result.data;
      validErrorMessage.username = rejectUser["username"];
      validErrorMessage.password = rejectUser["password"];
      validErrorMessage.userId = rejectUser["userId"];
      validErrorMessage.checkValid = true;
    })
    .catch((err) => {
      console.log(err);
    });
};

const cancel = () => {
  router.push({
    path: "/login",
  });
};
</script>
<template>
  <div>
    <form
      @submit.prevent="joinForm"
      class="flex justisfy board border-black border-round align-items-center"
    >
      <h1>가입 하기</h1>
      <label class="md-md">
        아이디
        <br />
        <div v-if="validErrorMessage.userId !== null">
          {{ validErrorMessage.userId }}
        </div>
        <input
          v-model="joinUser.userId"
          type="text"
          placeholder="ID"
          autofocus
        />
      </label>
      <label class="md-md">
        비밀번호
        <br />
        <div v-if="validErrorMessage.password !== null">
          {{ validErrorMessage.password }}
        </div>
        <input
          v-model="joinUser.password"
          type="password"
          placeholder="PASSWORD"
        />
      </label>
      <label class="md-md">
        이름
        <br />
        <div v-if="validErrorMessage.username !== null">
          {{ validErrorMessage.username }}
        </div>
        <input v-model="joinUser.username" type="text" />
      </label>
      <label>
        아이디 / 암호 분실 시 키
        <br />

        <select class="mr-5 md-lg">
          <option selected disabled>
            아이디 또는 비밀번호를 잊어버렸을 때 찾기 위한 키
          </option>
          <option>어릴때 별명은?</option>
          <option>졸업한 학교는?</option>
          <option>나의 보물 1호는?</option>
        </select>
        <input type="text" />
      </label>
      <div>
        <button type="submit">가입</button>
      </div>
    </form>
    <button @click="cancel()">취소</button>
  </div>
</template>
<style scoped>
.board {
  margin: 10% 30%;
}
</style>
