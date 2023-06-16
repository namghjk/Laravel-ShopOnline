export type Pivot = {
    role_id: string;
    permission_id?: string;
    model_id?: string;
    model_type?: string;
};

export type Permission = {
    id: number;
    name: string;
    guard_name: string;
    created_at: Date;
    updated_at: Date;
    pivot: Pivot;
};

export type Role = {
    id: number;
    name: string;
    guard_name: string;
    created_at: Date;
    updated_at: Date;
    pivot: Pivot;
    permissions: Permission[];
};

export interface UserModel {
    access_token: string;
    token_expired: Date;
    is_admin: boolean;
    roles: string[];
    permissions?: Permission[];
}

export interface UserDetailsModel {
    id: string;
    name: string;
    username: string;
    created_at: Date;
    updated_at: Date;
    is_admin: string;
    avatar: string;
    deleted_at?: any;
    permissions?: any[];
    roles?: Role[];
}
