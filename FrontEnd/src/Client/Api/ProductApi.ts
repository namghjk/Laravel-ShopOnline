import axiosClient from "./axiosClient";


const ProductApi = {

    getAllProduct: async () => {
      const url = "/products/view?page=1&pageSize=20";
      const res = await axiosClient.get(url);
      return res;
    },

    getHighlightProduct: async () => {
      const url = "/products/highlightsProduct";
      const res = await axiosClient.get(url);
      return res;
    },

    getSearchProduct: async (category:any,page:number,pageSize:number) => {
      const url = `/products/relatedProduct?category=${category}&page=${page}&pageSize=${pageSize}`;
      const res = await axiosClient.get(url);
      return res;
    },

    getProductDetail:async (slug:any) => {
      const url = `/products/detailProduct?slug=${slug}`
      const res = await axiosClient.get(url);
      console.log(url)
      return res;
    }
  
    
    
  };
  
  export default  ProductApi;