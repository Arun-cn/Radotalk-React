import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

export default axiosClient;
