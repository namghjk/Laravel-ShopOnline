export interface APIResponse<T = {}> {
    // isSuccess: boolean;
    code: number;
    message: string;
    data?: T;
}
