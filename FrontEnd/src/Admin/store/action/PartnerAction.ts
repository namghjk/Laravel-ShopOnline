import { CategoryModel } from '../../models/CategoryModel';
import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getAllPartner = async (page: number, pageSize: number) => {
    try {
        const categoryResponse = (await get(`partners/view?page=${page}&pageSize=${pageSize}`)).data;
        return categoryResponse;
    } catch (err) {
        console.log(err);
    }
};
const deletePartner = async (id: string) => {
    try {
        const categoryResponse = (await get(`partners/delete?id=${id}`)).data;
        return categoryResponse;
    } catch (err) {
        console.log(err);
    }
};
const createPartner = async (partner: any) => {
    try {
        const categoryResponse = (await post(`partners/create`, partner)).data;
        return categoryResponse;
    } catch (err) {
        console.log(err);
    }
};
const getPartnerDetail = async (id: string) => {
    try {
        const Response = (await get(`partners/detail?id=${id}`)).data;
        return Response;
    } catch (err) {
        console.log(err);
    }
};

const updatePartner = async (partner: any) => {
    try {
        const Response = (await post(`partners/update`, partner)).data;
        return Response;
    } catch (err) {
        console.log(err);
    }
};

export { getAllPartner, deletePartner, createPartner, getPartnerDetail, updatePartner };
