import axios from "axios";

const axiosWithConfig = axios.create();

let bearerToken = "";

export const setAxiosConfig = (token: string) => {
  bearerToken = token;
};

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  axiosConfig.baseURL = "http://54.169.185.156:8000";

  if (bearerToken) {
    axiosConfig.headers.Authorization = `Bearer ${bearerToken}`;
  }

  return axiosConfig;
});

export default axiosWithConfig;
