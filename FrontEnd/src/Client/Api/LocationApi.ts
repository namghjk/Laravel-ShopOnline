import axiosClient from "./axiosClient";


const LocationApi = {

  getProvice: async () => {
    const url = "/location/getAllProvinces";
    const res = await axiosClient.get(url);
    return res;
  },

  getDistrict: async (id: number) => {
    const url = `/location/getAllDistrictsByProvinceId?provinceId=${id}`;
    const res = await axiosClient.get(url);
    return res;
  },

  getWards:async (id:number) => {
    const url = `/location/getAllWardsByDistrictId?districtId=${id}`;
    const res = await axiosClient.get(url);
    return res;
  }
  
  
};

export default  LocationApi;