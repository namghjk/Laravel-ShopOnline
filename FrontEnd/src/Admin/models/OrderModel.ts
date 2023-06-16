export interface OrderModel {
    id: string;
    customer_id: string;
    staff_id: string;
    total_price: string;
    total_pay: string;
    status: string;
    note: string;
    address_id: string;
    discount_id: string;
    total_quantity: string;
    created_at: string;
    updated_at: string;
    status_name: string;
    customer_name: string;
}

export interface StatusModel {
    code: string;
    name: string;
    order: string;
    is_completed: string;
}
export interface OrderDetailModel {
    id: string;
    product_name: string;
    product_img: string;
    quantity: string;
    price: string;
    total_price: string;
}
