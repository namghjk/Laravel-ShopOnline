import { LayoutHOC } from '../layouts/layout';
import createDashboard from './dashboard/Dashboard';
// User / Account
import UserList from './user/UserList';
import AddUser from './user/AddUser';
import EditUser from './user/EditUser';
// Products
import ProductManagement from './product/Management';
import CreateProduct from './product/CreateProduct';

// Permission
import PermissionConfig from './permission/PermissionConfig';
import UserRole from './permission/UserRole';
import AddRole from './permission/AddRole';

// Category
import CategoryList from './category/CategoryList';
import AddCategory from './category/AddCategory';

// Post
import PostManagement from './post/PostManagement';
import NewPost from './post/NewPost';

// Banner
import BannerManagement from './banner/BannerManagement';
import AddBanner from './banner/AddBanner';

// Partner
import ListPartner from './partner/ListPartner';
import AddPartner from './partner/AddPartner';

// import
import ListImport from './import/ListImport';
import AddImport from './import/NewImport';
import ImportDetails from './import/ImportDetail';

// Order
import OrderManagement from './order/ListOrder';

export function createPages(layout: LayoutHOC) {
    return {
        DashboardPage: layout(createDashboard),
        UserListPage: layout(UserList),
        AddUserPage: layout(AddUser),
        EditUserPage: layout(EditUser),
        ProductManagementPage: layout(ProductManagement),
        CreateProductPage: layout(CreateProduct),
        PermissionPage: layout(PermissionConfig),
        UserRolePage: layout(UserRole),
        AddRolePage: layout(AddRole),
        CategoryListPage: layout(CategoryList),
        AddCategoryPage: layout(AddCategory),
        PostManagementPage: layout(PostManagement),
        NewPostPage: layout(NewPost),
        BannerPage: layout(BannerManagement),
        AddBannerPage: layout(AddBanner),
        ListPartnerPage: layout(ListPartner),
        AddPartnerPage: layout(AddPartner),
        ListImportPage: layout(ListImport),
        NewImportPage: layout(AddImport),
        ImportDetailPage: layout(ImportDetails),
        ListOrderPage: layout(OrderManagement),
    };
}
