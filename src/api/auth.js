import axios from "axios";

const API = axios.create({
  baseURL: "https://bestwishes.ng/api/",
  headers: { "Content-Type": "application/json" },
});

export const signUpUser = (data) => API.post("register.php", data);

export const signInUser = (data) => API.post("login.php", data);
