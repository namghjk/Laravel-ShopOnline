import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getBanners = async () => {
    try {
        const bannerResponse = (await get(`banners/view`)).data;
        return bannerResponse;
    } catch (err) {
        console.log(err);
    }
};

const createBanner = async (banner: any) => {
    try {
        const bannerResponse = (await post(`banners/create`, banner)).data;
        return bannerResponse;
    } catch (err) {
        console.log(err);
    }
};

const updateBanner = async (banner: any) => {
    try {
        const bannerResponse = (await post(`banners/update`, banner)).data;
        return bannerResponse;
    } catch (err) {
        console.log(err);
    }
};

export { getBanners, createBanner, updateBanner };
