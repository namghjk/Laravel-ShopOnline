import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getListPost = async () => {
    try {
        const postResponse = (await get(`posts/homepagePost`)).data;
        return postResponse;
    } catch (err) {
        console.log(err);
    }
};

const createNewPost = async (data: any) => {
    try {
        const postResponse = (await post(`posts/create`, data)).data;
        return postResponse;
    } catch (err) {
        console.log(err);
    }
};
const updatePost = async (data: any) => {
    try {
        const postResponse = (await post(`posts/update`, data)).data;
        return postResponse;
    } catch (err) {
        console.log(err);
    }
};

const getPostDetails = async (slug: string) => {
    try {
        const postResponse = (await get(`posts/detail?slug=${slug}`)).data;
        return postResponse;
    } catch (err) {
        console.log(err);
    }
};
const deletePost = async (id: number) => {
    try {
        const postResponse = (await get(`posts/delete?id=${id}`)).data;
        return postResponse;
    } catch (err) {
        console.log(err);
    }
};

export { getListPost, createNewPost, updatePost, getPostDetails, deletePost };
