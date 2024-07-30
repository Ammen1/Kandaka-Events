import axios from "axios";

const baseURL = "http://127.0.0.1:8000/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;

// import axios from "axios";

// const baseURL = "https://api.gooderash.com/";

// const axiosInstance = axios.create({
//   baseURL: baseURL,
//   timeout: 5000,
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("access_token"),
//     "Content-Type": "application/json",
//     accept: "application/json",
//   },
// });
// export default axiosInstance;
