import axios from 'axios';
import { getAccessToken } from './localStorageHelper';
import { createBrowserHistory } from 'history';

export const setAuthHeader = () => {
    const token = getAccessToken();

    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        // addRefreshToken();
    }
};
export const removeAuthHeader = () => {
    delete axios.defaults.headers.common['Authorization'];
};

export const history = createBrowserHistory();
