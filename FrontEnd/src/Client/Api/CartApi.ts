import axiosClient from "./axiosClient";


const CartApi = {

    getCartList: async () => {
      const url = "/carts/view";
      const res = await axiosClient.get(url);
      return res;
    },
  
    AddProductToCart: async (id:string,quantity:number) => {
      const url = `/carts/addToCart?product_id=${id}&quantity=${quantity}`;
      const res = await axiosClient.post(url);
      return res;
    },

    DeleteProductFromCart: async (id:string) => {
      const url = `/carts/delete?product_id=${id}`;
      const res = await axiosClient.post(url);
      return res;
    },

    UpdateProductQuantity: async (id:string,quantity:number) => {
      const url = `/carts/updateQty?product_id=${id}&quantity=${quantity}`;
      const res = await axiosClient.post(url);
      return res;
    },
    
    
  };
  
  export default  CartApi;