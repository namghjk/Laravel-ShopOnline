import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getAllImport = async (page: number, pageSize: number) => {
    try {
        const response = (await get(`imports/view?page=${page}&pageSize=${pageSize}`)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};
const createImport = async (data: any) => {
    try {
        const response = (await post(`imports/create`, data)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};

const getDetail = async (id: string) => {
    try {
        const response = (await get(`imports/detail?import_id=${id}`)).data;
        return response;
    } catch (err) {
        console.log(err);
    }
};

export { getAllImport, createImport, getDetail };
