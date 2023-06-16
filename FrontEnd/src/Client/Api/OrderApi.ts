import axiosClient from "./axiosClient";

const OrderApi ={
    addOrder:async(address_id:any,note:any,product:any) =>{
        const url = "orders/create"
        const params =JSON.stringify({
            address_id: address_id,
            note: note? note : "",
            products: product.map((item: any) => {
                return {
                    id: item.product.id,
                    quantity: item.quantity
                }
            })
        })

       const res = await axiosClient.post(url,params);
       return res     
    },

    getListOrder:async () => {
        const url = "orders/getList"
        const res = await axiosClient.get(url);
        return res
    }
}

 export default  OrderApi;