import { ProductModel } from '../../models/ProductModels';

export type ProductImage = {
    img: string;
    title: string;
    file: File | string;
    deleted: boolean;
    updated: boolean;
};

export type ProductThumbnail = {
    url: string;
    file: File | null;
};

export type DetailProductResponse = {
    code: number;
    message: string;
    data: ProductModel;
    additionalData: ProductImageResponse[];
};

export type ProductImageResponse = {
    id: number;
    product_id: string;
    image_url: string;
};
