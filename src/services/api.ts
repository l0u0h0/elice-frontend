import axios from "axios";

const BASE_URL = process.env.REACT_APP_SERVER_API;

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
