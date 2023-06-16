import React, { useEffect } from 'react';
import { Navigate, Route, Routes, Router } from 'react-router-dom';
import { createDefaultLayout, createLoginLayout } from '../Admin/layouts/layout';
import { getAccessToken } from '../Admin/utils/localStorageHelper';
// layout
import { createPages } from '../Admin/pages/createPages';
import CssBaseline from '@mui/material/CssBaseline';

// context
import { LayoutProvider } from '../Admin/store/context/LayoutContext';
import { StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as ThemeChangeProvider, ThemeStateContext } from '../Admin/store/context/ThemeContext';
import { ThemeProvider as ThemeProviderV5 } from '@mui/material/styles';
import { UserProvider, useUserState } from '../Admin/store/context/UserContext';
import { ProductProvider } from '../Admin/store/context/ProductContext';
import { CategoryProvider } from '../Admin/store/context/CategoryContext';
// components
import Login from '../Admin/pages/login/Login';
import Header from '../Admin/layouts/header/Header';
import structure from '../Admin/layouts/sidebar/SidebarStructure';
import Sidebar from '../Admin/layouts/sidebar/Sidebar';

const Redirect = (props: { url: string }) => {
    useEffect(() => window.location.replace(props.url));
    return <span>Redirecting...</span>;
};

const AdminRoute = () => {
    const userState = useUserState();
    const SidebarView = () => <Sidebar structure={structure} />;
    const defaultLayout = createDefaultLayout(Header, SidebarView);
    const loginLayout = createLoginLayout();
    const {
        DashboardPage,
        UserListPage,
        AddUserPage,
        EditUserPage,
        ProductManagementPage,
        CreateProductPage,
        PermissionPage,
        UserRolePage,
        AddRolePage,
        CategoryListPage,
        AddCategoryPage,
        PostManagementPage,
        NewPostPage,
        BannerPage,
        AddBannerPage,
        ListPartnerPage,
        AddPartnerPage,
        ListImportPage,
        NewImportPage,
        ImportDetailPage,
        ListOrderPage,
    } = createPages(defaultLayout);
    const isAuthenticated = getAccessToken() ? true : false;
    const defaultPublicRoute: Omit<RouteProps, 'outlet'> = {
        isAuthenticated: isAuthenticated,
        authenticationPath: '/admin/dashboard',
    };
    const defaultPrivateRoute: Omit<RouteProps, 'outlet'> = {
        isAuthenticated: isAuthenticated,
        authenticationPath: '/admin/login',
    };
    return (
        // <LayoutProvider>
        <UserProvider>
            <StyledEngineProvider injectFirst>
                <ThemeChangeProvider>
                    <ThemeStateContext.Consumer>
                        {(them) => (
                            <ThemeProviderV5 theme={them}>
                                <CssBaseline />
                                {/* <Routes>
                                    <Route path="/*" element={<DashboardPage />} />
                                    <Route
                                        path="/login"
                                        element={<PublicRoute {...defaultPublicRoute} outlet={<Login />} />}
                                    />
                                    <Route
                                        path="/dashboard"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<DashboardPage />} />}
                                    />
                                    <Route path="/user" element={<Navigate to="/admin/users" replace />} />
                                    <Route
                                        path="/users"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<UserListPage />} />}
                                    />
                                    <Route
                                        path="/user/new"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddUserPage />} />}
                                    />
                                    <Route
                                        path="/user/edit"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<EditUserPage />} />}
                                    />
                                    <Route
                                        path="/product"
                                        element={
                                            <PrivateRoute
                                                {...defaultPrivateRoute}
                                                outlet={<Navigate to="/admin/product/management" replace />}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/product/management"
                                        element={
                                            <PrivateRoute
                                                {...defaultPrivateRoute}
                                                outlet={
                                                    <ProductProvider>
                                                        <ProductManagementPage />
                                                    </ProductProvider>
                                                }
                                            />
                                        }
                                    />
                                    <Route
                                        path="/product/edit/:slug"
                                        element={
                                            <PrivateRoute
                                                {...defaultPrivateRoute}
                                                outlet={
                                                    <ProductProvider>
                                                        <CreateProductPage />
                                                    </ProductProvider>
                                                }
                                            />
                                        }
                                    />
                                    <Route
                                        path="/product/create"
                                        element={
                                            <PrivateRoute {...defaultPrivateRoute} outlet={<CreateProductPage />} />
                                        }
                                    />
                                    <Route
                                        path="/permission"
                                        element={
                                            <PrivateRoute
                                                {...defaultPrivateRoute}
                                                outlet={<Navigate to="/admin/permission/access" replace />}
                                            />
                                        }
                                    />
                                    <Route
                                        path="/permission/access"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<PermissionPage />} />}
                                    />
                                    <Route
                                        path="/permission/roles"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<UserRolePage />} />}
                                    />
                                    <Route
                                        path="/permission/roles/create"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddRolePage />} />}
                                    />
                                    <Route
                                        path="/category"
                                        element={
                                            <PrivateRoute
                                                {...defaultPrivateRoute}
                                                outlet={
                                                    <CategoryProvider>
                                                        <CategoryListPage />
                                                    </CategoryProvider>
                                                }
                                            />
                                        }
                                    />
                                    <Route
                                        path="/category/create"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddCategoryPage />} />}
                                    />
                                    <Route
                                        path="/post"
                                        element={
                                            <PrivateRoute {...defaultPrivateRoute} outlet={<PostManagementPage />} />
                                        }
                                    />
                                    <Route
                                        path="/post/new"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<NewPostPage />} />}
                                    />
                                </Routes> */}
                                <Routes>
                                    <Route path="/*" element={<DashboardPage />} />
                                    <Route
                                        path="/login"
                                        element={<PublicRoute {...defaultPublicRoute} outlet={<Login />} />}
                                    />
                                    <Route
                                        path="/dashboard"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<DashboardPage />} />}
                                    />
                                    <Route path="/user" element={<UserListPage />} />
                                    <Route path="/user/new" element={<AddUserPage />} />
                                    <Route path="/user/edit" element={<AddUserPage />} />
                                    <Route
                                        path="/product"
                                        element={
                                            <ProductProvider>
                                                <ProductManagementPage />
                                            </ProductProvider>
                                        }
                                    />
                                    <Route
                                        path="/product/edit/:slug"
                                        element={
                                            <CategoryProvider>
                                                <ProductProvider>
                                                    <CreateProductPage />
                                                </ProductProvider>
                                            </CategoryProvider>
                                        }
                                    />
                                    <Route
                                        path="/product/create"
                                        element={
                                            <CategoryProvider>
                                                <ProductProvider>
                                                    <CreateProductPage />
                                                </ProductProvider>
                                            </CategoryProvider>
                                        }
                                    />
                                    <Route
                                        path="/permission"
                                        element={<Navigate to="/admin/permission/access" replace />}
                                    />
                                    <Route path="/permission/access" element={<PermissionPage />} />
                                    <Route path="/permission/roles" element={<UserRolePage />} />
                                    <Route path="/permission/roles/create" element={<AddRolePage />} />
                                    <Route
                                        path="/category"
                                        element={
                                            <CategoryProvider>
                                                <CategoryListPage />
                                            </CategoryProvider>
                                        }
                                    />
                                    <Route
                                        path="/category/create"
                                        element={
                                            <CategoryProvider>
                                                <AddCategoryPage />
                                            </CategoryProvider>
                                        }
                                    />
                                    <Route
                                        path="/category/edit/:slug"
                                        element={
                                            <CategoryProvider>
                                                <AddCategoryPage />
                                            </CategoryProvider>
                                        }
                                    />
                                    <Route
                                        path="/post"
                                        element={
                                            <PrivateRoute {...defaultPrivateRoute} outlet={<PostManagementPage />} />
                                        }
                                    />
                                    <Route
                                        path="/post/new"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<NewPostPage />} />}
                                    />
                                    <Route
                                        path="/post/edit/:slug"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<NewPostPage />} />}
                                    />
                                    <Route
                                        path="/banner"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<BannerPage />} />}
                                    />
                                    <Route
                                        path="/banner/add"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddBannerPage />} />}
                                    />
                                    <Route
                                        path="/banner/edit"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddBannerPage />} />}
                                    />
                                    <Route
                                        path="/partner"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<ListPartnerPage />} />}
                                    />
                                    <Route
                                        path="/partner/new"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddPartnerPage />} />}
                                    />
                                    <Route
                                        path="/partner/edit/:id"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<AddPartnerPage />} />}
                                    />
                                    <Route
                                        path="/import"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<ListImportPage />} />}
                                    />
                                    <Route
                                        path="/import/new"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<NewImportPage />} />}
                                    />
                                    <Route
                                        path="/import/detail"
                                        element={
                                            <PrivateRoute {...defaultPrivateRoute} outlet={<ImportDetailPage />} />
                                        }
                                    />
                                    <Route
                                        path="/order"
                                        element={<PrivateRoute {...defaultPrivateRoute} outlet={<ListOrderPage />} />}
                                    />
                                </Routes>
                            </ThemeProviderV5>
                        )}
                    </ThemeStateContext.Consumer>
                </ThemeChangeProvider>
            </StyledEngineProvider>
        </UserProvider>
        // </LayoutProvider>
    );
};

export type RouteProps = {
    isAuthenticated: boolean;
    authenticationPath: string;
    outlet: JSX.Element;
};

export function PrivateRoute({ isAuthenticated, authenticationPath, outlet }: RouteProps) {
    if (isAuthenticated) {
        return outlet;
    } else {
        return <Navigate to={{ pathname: authenticationPath }} />;
    }
}
export function PublicRoute({ isAuthenticated, authenticationPath, outlet }: RouteProps) {
    if (isAuthenticated) {
        return <Navigate to={{ pathname: authenticationPath }} />;
    } else {
        return outlet;
    }
}

export default AdminRoute;
