export interface CategoryModel {
    id: string;
    name: string;
    parent_id: string;
    parent_name: string;
    slug: string;
    order: string;
    created_at?: Date;
    updated_at?: any;
    deleted_at?: any;
}
