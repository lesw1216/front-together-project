import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

const login = (loginUser) => {
  return instance.post("/api/users", {
    loginUser: loginUser,
  });
};

const setUser = (joinUser) => {
  return instance.post("/api/user", {
    setUser: joinUser,
  });
};

export { setUser, login };
