import { APIResponse } from '../../models/Response';
import { get, post } from '../../utils/api';

const getAllRoles = async () => {
    try {
        const roleResponse = (await get(`roles/view`)).data;
        return roleResponse;
    } catch (err) {
        console.log(err);
    }
};

const createRole = async (data: any) => {
    try {
        const roleResponse = (await post(`roles/create`, data)).data;
        return roleResponse;
    } catch (err) {
        console.log(err);
    }
};
const updateRole = async (data: any) => {
    try {
        const roleResponse = (await post(`roles/update`, data)).data;
        return roleResponse;
    } catch (err) {
        console.log(err);
    }
};
const deleteRole = async (id: number) => {
    try {
        const roleResponse = (await get(`roles/delete?id=${id}`)).data;
        return roleResponse;
    } catch (err) {
        console.log(err);
    }
};

const getAllPermissions = async () => {
    try {
        const permission = (await get(`roles/getAllPermissions`)).data;
        return permission;
    } catch (err) {
        console.log(err);
    }
};

const getDetailRole = async (roleName: string) => {
    try {
        const roleResponse = (await get(`roles/getDetailRole?role=${roleName}`)).data;
        return roleResponse;
    } catch (err) {
        console.log(err);
    }
};

export { getAllRoles, createRole, updateRole, deleteRole, getAllPermissions, getDetailRole };
