import axiosClient from "./axiosClient";

const addressApi = {
    getAddress: async () => {
        const url = "/addresses/view";
        const res = await axiosClient.get(url, {  });
        return res;
      },

      addAddress: async (phone_number:string,province_id:string,district_id:string,ward_id:string,detail_address:string) => {
        const url = "/addresses/create";
        const res = await axiosClient.post(url, {phone_number,province_id,district_id,ward_id,detail_address  });
        return res;
      },

      deleteAddress: async (id:string) => {
        const url = `/addresses/delete?id=${id}`;
        const res = await axiosClient.get(url);
        return res;
      },
}
export default addressApi;