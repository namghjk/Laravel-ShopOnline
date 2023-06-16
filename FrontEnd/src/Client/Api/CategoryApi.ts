import axiosClient from "./axiosClient";

const CategoryApi = {

    getMenu:async () => {
        const url = "/categories/getMenu";
        const res = await axiosClient.get(url);
        return res
    },


   
    getCategory:async () => {
        const url = "/categories/view?page=1&pageSize=200";
        const res = await axiosClient.get(url);
        return res
    },

    searchApi:async (keyword:any,max_price:any,min_price:any,categories:any,sort:any) => {
        const url = "/products/search";
        const params = JSON.stringify({keyword:keyword,max_price:max_price,min_price:min_price,categories:categories,sort:sort})
        const res = await axiosClient.post(url,params);
        console.log(params)
        return res
        
    }

}

export default CategoryApi;