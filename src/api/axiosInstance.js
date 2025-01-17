import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// Add a request interceptor to include Authorization headers

// This ensures that every request includes an Access Token. You do not have to manually retrieve it in other components

/* axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // Retrieve token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}); */

export default axiosInstance;
