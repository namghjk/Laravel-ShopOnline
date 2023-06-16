import axios from "axios";


const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_URL_BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("userToken");
    if (accessToken && config.headers) {
      config.headers["Authorization"] = "Bearer "+accessToken;
    }
       return config;
  },
  async (error: any) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  async (res) => {
    return res;
  },
  async (error) => {
    const { message, name } = error.response.data;

    return Promise.reject(error.response ? error.response.data : {});
  }
);

export default axiosClient;
