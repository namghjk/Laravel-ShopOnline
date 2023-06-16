import axiosClient from "./axiosClient";


const bannerApi= {

  getBanner:async ()=>{
    const url ="/banners/view";
    const res = await axiosClient.get(url, {  });
    return res;
  }

  
};

export default  bannerApi;