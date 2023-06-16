import axiosClient from "./axiosClient";


const userInforApi = {

  getInfor: async () => {
    const url = "/auth/me";
    const res = await axiosClient.post(url, {  });
    return res;
  },

  updateAvatar :async (form:any)=>{
    const url ="/auth/updateAvatar";
    const res = axiosClient.post(url ,form,{headers: { "Content-Type": "multipart/form-data",}})
    return res;
  },

  updateBanner:async (form:any)=>{
    const url ="/banners/view";
    const res = axiosClient.post(url ,form,{headers: { "Content-Type": "multipart/form-data",}})
    return res;
  }

  
};

export default  userInforApi;