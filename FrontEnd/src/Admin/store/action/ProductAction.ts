import { get, post } from '../../utils/api';

const getProducts = async (dispatch: React.Dispatch<any>, page: number, pageSize: number) => {
    try {
        dispatch({ type: 'LOADING_STARTED' });
        const productResponse = (await get(`products/view?page=${page}&pageSize=${pageSize}`)).data;
        if (productResponse.code === 200) {
            dispatch({ type: 'GET_PRODUCTS', payload: productResponse });
        }
    } catch (err) {
        console.log(err);
    }
};
const getAllProducts = async (page: number, pageSize: number) => {
    try {
        const productResponse = (await get(`products/view?page=${page}&pageSize=${pageSize}`)).data;
        return productResponse;
    } catch (err) {
        console.log(err);
    }
};

const createProduct = async (dispatch: React.Dispatch<any>, product: any) => {
    try {
        const productResponse = (await post(`products/create`, product)).data;
        return productResponse;
    } catch (err) {
        console.log(err);
    }
};

const getDetail = async (dispatch: React.Dispatch<any>, slug: string) => {
    try {
        const productResponse = (await get(`products/detailProduct?slug=${slug}`)).data;
        return productResponse;
    } catch (err) {
        console.log(err);
    }
};

const updateProduct = async (dispatch: React.Dispatch<any>, product: any) => {
    try {
        const productResponse = (await post(`products/update`, product)).data;
        return productResponse;
    } catch (err) {
        console.log(err);
    }
};

const deleteProduct = async (dispatch: React.Dispatch<any>, id: string) => {
    try {
        const productResponse = (await get(`products/delete?id=${id}`)).data;
        return productResponse;
    } catch (err) {
        console.log(err);
    }
};

export { getProducts, createProduct, getDetail, updateProduct, deleteProduct, getAllProducts };
