import axios from 'axios';
import { setAuthHeader, removeAuthHeader } from './common';
import { BASE_API_URL } from './config';

export const get = async (
    url: string,
    // params : string,
    shouldSetAuthHeader = true,
    shouldRemoveAuthHeader = false,
) => {
    if (shouldSetAuthHeader) {
        setAuthHeader();
    }
    if (shouldRemoveAuthHeader) {
        removeAuthHeader();
    }

    return await axios.get(BASE_API_URL + url);
};

export const post = async (url: string, params: string, shouldSetAuthHeader = true, shouldRemoveAuthHeader = false) => {
    if (shouldSetAuthHeader) {
        setAuthHeader();
    }
    if (shouldRemoveAuthHeader) {
        removeAuthHeader();
    }
    axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
    return await axios.post(BASE_API_URL + url, params).catch((e) => {
        if (e.response) {
            return e.response;
        }
    });
};
