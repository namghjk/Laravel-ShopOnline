import axiosClient from "./axiosClient";


const authAPI = {
  login: async (username: string, password: string) => {
    const url = "/auth/login";
    const res = await axiosClient.post(url, { username, password });
    return res;
  },

  register: async (name: string, username: string, password: string) => {
    const url = "/auth/create";
    const res = await axiosClient.post(url, { name, username, password });
    return res;
  },
};

export default authAPI;