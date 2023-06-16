import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getOrders = async () => {
    try {
        const response = (await get(`orders/all`)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};

const getStatus = async () => {
    try {
        const response = (await get(`orders/getListOrderStatuses`)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};
const updateStatus = async (data: any) => {
    try {
        const response = (await post(`orders/updateStatus`, data)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};

const getOrderDetails = async (id: string) => {
    try {
        const response = (await get(`orders/detail?order_id=${id}`)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};

export { getOrders, getStatus, updateStatus, getOrderDetails };
