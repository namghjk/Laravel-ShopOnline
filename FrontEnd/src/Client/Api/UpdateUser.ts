import axiosClient from "./axiosClient";
import userInforApi from "./UserInforApi";


const UpdateApi = {
  changePassword: async (old_password:string,new_password:string,confirm_password:string) => {
    const url = "/auth/update";
    const userInfor = await userInforApi.getInfor()
    console.log(userInfor)
    const userRes = userInfor.data.data
    const res = await axiosClient.post(url, {old_password,new_password,confirm_password,name:userRes.name,username:userRes.username });
    return res;
  },

  changeUserInfor: async (username:string,name:string,old_password:string) => {
    const url = "/auth/update";
    const res = await axiosClient.post(url, {username,name,confirm_password:old_password,old_password:old_password,new_password:old_password });
    return res;
  },

  

  
};

export default UpdateApi;