import axios from "../../services/axiosClient";

export const authAPI = async (email: string, password: string) => {
  const response = await axios.post("/api/v1/auth/login", { email, password });
  return response.data;
};
