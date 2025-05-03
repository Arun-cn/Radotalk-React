import axios, { AxiosInstance } from "axios";

const axiosClient: AxiosInstance = axios.create({
  baseURL: "https://pitch-rich-canary.glitch.me",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
  withCredentials: true,
});

export default axiosClient;
