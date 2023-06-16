import React from 'react';
import {
    Home as HomeIcon,
    FilterNone as UIElementsIcon,
    BorderAll as TableIcon,
    QuestionAnswer as SupportIcon,
    LibraryBooks as LibraryIcon,
    HelpOutline as FAQIcon,
    BarChart as ChartIcon,
    Map as MapIcon,
    Apps as CoreIcon,
    Description as DescriptionIcon,
    ShoppingCart as ShoppingCartIcon,
    StarBorder as ExtraIcon,
    AddCircle as AddSectionIcon,
    FolderOpen as FolderIcon,
    Description as DocumentationIcon,
    Person as PersonIcon,
    AccountCircle as ProfileIcon,
} from '@mui/icons-material';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import FactoryIcon from '@mui/icons-material/Factory';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import ChatIcon from '@mui/icons-material/Chat';
import ViewCompactRoundedIcon from '@mui/icons-material/ViewCompactRounded';

// components
import Dot from './components/Dot';

const structure = [
    { id: 100, label: 'Trang cá nhân', link: '/app/profile', icon: <ProfileIcon />, pagePermission: 'base' },
    { id: 0, label: 'Dashboard', link: '/admin/dashboard', icon: <HomeIcon />, pagePermission: 'base' },

    { id: 3, type: 'divider', pagePermission: 'base' },
    { id: 4, type: 'title', label: 'QUẢN LÝ', pagePermission: 'base' },
    {
        id: 1,
        label: 'Sản phẩm',
        // badge: 'NodeJS',
        // badgeColor: 'success',
        link: '/admin/product',
        icon: <ShoppingCartIcon />,
        pagePermission: 'view product',
    },
    {
        id: 2,
        label: 'Tài khoản',
        link: '/admin/user',
        icon: <PersonIcon />,
        pagePermission: 'view user',
        // children: [
        //     {
        //         label: 'User List',
        //         link: '/admin/users',
        //     },
        //     {
        //         label: 'User Add',
        //         link: '/admin/user/new',
        //     },
        //     {
        //         label: 'User Edit',
        //         link: '/admin/user/edit',
        //     },
        // ],
    },
    {
        id: 5,
        label: 'Danh mục',
        link: '/admin/category',
        icon: <CoreIcon />,
        pagePermission: 'view category',
    },
    {
        id: 6,
        label: 'Phân quyền',
        link: '/admin/permission',
        // badge: 'New',
        // badgeColor: 'secondary',
        icon: <SettingsSuggestIcon />,
        pagePermission: 'view category',
        children: [
            { label: 'Cấu hình', link: '/admin/permission/access' },
            {
                label: 'Nhóm quyền',
                link: '/admin/permission/roles',
            },
        ],
    },
    {
        id: 8,
        label: 'Bài viết',
        link: '/admin/post',
        icon: <UIElementsIcon />,
        pagePermission: 'view post',
    },
    {
        id: 9,
        label: 'Banner',
        link: '/admin/banner',
        icon: <PhotoSizeSelectActualIcon />,
        pagePermission: 'view banner',
    },
    {
        id: 10,
        label: 'Nhà cung cấp',
        link: '/admin/partner',
        icon: <FactoryIcon />,
        pagePermission: 'create partner',
    },
    {
        id: 11,
        label: 'Nhập kho',
        link: '/admin/import',
        icon: <WarehouseIcon />,
        pagePermission: 'view import',
    },
    {
        id: 12,
        label: 'Đơn hàng',
        link: '/admin/order',
        icon: <FactCheckIcon />,
        pagePermission: 'view order',
    },

    { id: 24, type: 'divider', pagePermission: 'base' },

    { id: 27, type: 'margin', pagePermission: 'base' },
    { id: 28, type: 'divider', pagePermission: 'base' },
    {
        id: 29,
        label: 'Chat',
        icon: <ChatIcon />,
        click: function (event: any, ...rest: any) {
            const name = 'chatSetOpen';
            rest.forEach((c: any) => {
                if (c.clickName === name) {
                    return c(event);
                }
                return false;
            });
        },

        pagePermission: 'base',
    },
];

export default structure;
