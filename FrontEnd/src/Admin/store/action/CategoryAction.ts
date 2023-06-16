import { CategoryModel } from '../../models/CategoryModel';
import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getCategories = async (dispatch: React.Dispatch<any>, page: number, pageSize: number) => {
    try {
        dispatch({ type: 'LOADING_STARTED' });
        const categoryResponse = (await get(`categories/view?page=${page}&pageSize=${pageSize}`)).data;
        if (categoryResponse.code === 200) {
            dispatch({ type: 'GET_CATEGORIES', payload: categoryResponse });
        }
    } catch (err) {
        console.log(err);
    }
};

const ceateCategory = async (dispatch: React.Dispatch<any>, category: any) => {
    try {
        dispatch({ type: 'LOADING_STARTED' });
        let issuccess = false;
        let data = undefined;
        const categoryResponse = (await post(`categories/create`, category)).data;
        if (categoryResponse.code === 200) {
            issuccess = true;
            data = categoryResponse.data;
        }
        dispatch({
            type: 'CREATE_CATEGORY',
            payload: { message: categoryResponse.message, data: data, issuccess: issuccess },
        });
    } catch (err) {
        console.log(err);
    }
};

const detailCategory = async (dispatch: React.Dispatch<any>, slug: string) => {
    try {
        dispatch({ type: 'LOADING_STARTED' });
        let issuccess = false;
        let data = null;
        const categoryResponse = (await get(`categories/detail?slug=${slug}`)).data;
        if (categoryResponse.code === 200) {
            issuccess = true;
            data = categoryResponse.data;
            dispatch({ type: 'LOADING_STOP' });
        }
        return data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

const updateCategory = async (dispatch: React.Dispatch<any>, category: any) => {
    try {
        dispatch({ type: 'LOADING_STARTED' });
        const categoryResponse: APIResponse<CategoryModel> = (await post(`categories/update`, category)).data;
        dispatch({ type: 'LOADING_STOP' });
        return categoryResponse;
    } catch (err) {
        console.log(err);
    }
};

const deleteCategory = async (dispatch: React.Dispatch<any>, id: string) => {
    try {
        const categoryResponse: APIResponse<CategoryModel> = (await get(`categories/delete?id=${id}`)).data;
        return categoryResponse;
    } catch (err) {
        console.log(err);
    }
};

export { getCategories, ceateCategory, detailCategory, updateCategory, deleteCategory };
