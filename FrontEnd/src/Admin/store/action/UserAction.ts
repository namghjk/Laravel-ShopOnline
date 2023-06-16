import { get, post } from '../../utils/api';
import { setUserSession, getAccessToken } from '../../utils/localStorageHelper';
import { UserModel, UserDetailsModel } from '../../models/UserModel';
import { APIResponse } from '../../models/Response';
import { history } from '../../utils/common';

import React from 'react';

const login = async (setLoading: React.Dispatch<React.SetStateAction<boolean>>, data: any) => {
    try {
        setLoading(true);
        const currentUser: APIResponse<UserModel> = (await post(`auth/login`, data)).data;
        let isSuccess = false;
        let detail;
        if (currentUser.code === 200 && currentUser.data) {
            isSuccess = true;
            const userSession = {
                access_token: currentUser.data.access_token,
                token_expired: currentUser.data.token_expired,
                roles: currentUser.data.roles,
                permissions: currentUser.data.permissions,
            };
            setUserSession(userSession);
            // detail = (await post('auth/me', '')).data;
        }
        setLoading(false);
        return {
            type: 'LOGIN',
            payload: {
                data: currentUser,
                isSuccess: isSuccess,
                // userdetail: detail,
            },
        };
    } catch (err) {
        console.log(err);
    }
};

const getUserDetail = async (dispatch: React.Dispatch<any>) => {
    try {
        dispatch({
            type: 'USERS_FIND_STARTED',
        });
        const token = getAccessToken();
        let detail;
        if (token) {
            detail = (await post('auth/me', '')).data;
            dispatch({
                type: 'USERS_FIND_ENDED',
            });
        }
        detail && dispatch({ type: 'USER_DETAIL', payload: detail });
    } catch (err) {
        console.log(err);
    }
};

const signOut = () => {
    localStorage.removeItem('user_session');
    history.push('/admin/login');
    window.location.reload();
};

const getAllUsers = async () => {
    try {
        const userResponse = (await get(`users/all`)).data;
        return userResponse;
    } catch (err) {
        console.log(err);
    }
};

const createUser = async (user: any) => {
    try {
        const userResponse = (await post(`auth/create`, user)).data;
        return userResponse;
    } catch (err) {
        console.log(err);
    }
};

const giveRoleToUser = async (user: any) => {
    try {
        const userResponse = (await post(`roles/giveRoleToUse`, user)).data;
        return userResponse;
    } catch (err) {
        console.log(err);
    }
};

const lockUser = async (id: string) => {
    try {
        const userResponse = (await get(`users/lock?id=${id}`)).data;
        return userResponse;
    } catch (err) {
        console.log(err);
    }
};

const unlockUser = async (id: string) => {
    try {
        const userResponse = (await get(`users/unLockUser?id=${id}`)).data;
        return userResponse;
    } catch (err) {
        console.log(err);
    }
};

export { login, getUserDetail, signOut, getAllUsers, createUser, giveRoleToUser, lockUser, unlockUser };
