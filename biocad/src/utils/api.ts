import axios, { type AxiosInstance } from "axios";
import { getItem } from "../services/storage";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    return await Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (config) => config,
  async (error) => {
    if (error?.response?.status == 401) {
      let url = error?.response?.config?.url || "";

      // if (!url.includes("/login") && !url.includes("/signin")) {
      //   navigationRef.navigate("Unauthorized" as never);
      // }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
