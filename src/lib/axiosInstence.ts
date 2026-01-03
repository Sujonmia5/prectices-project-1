import axios from "axios";
import envConfig from "../config";

export const axiosInstance = axios.create({
  baseURL: envConfig.fetchUrl,
});

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // 🔴 Server OFF / Network error
//     if (!error.response) {
//       return Promise.reject({
//         status: 500,
//         message: "Server unreachable. Please try again later.",
//       });
//     }

//     // 🔴 Backend error
//     const { status, data } = error.response;

//     return Promise.reject({
//       status,
//       message: data?.message || "Something went wrong",
//       errors: data?.errors || null,
//     });
//   }
// );
