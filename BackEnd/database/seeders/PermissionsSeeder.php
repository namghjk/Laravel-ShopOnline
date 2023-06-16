<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();
        Permission::query()->delete();
        Role::query()->delete();
        User::query()->forceDelete();

        // ====================================================
        //                 DEFINE ALL PERMISSIONS
        // ====================================================

        // Banner Permissions
        $viewBanner = 'view banner';
        $createBanner = 'create banner';
        $updateBanner = 'update banner';
        $deleteBanner = 'delete banner';

        // Category Permissions
        $viewCategory = 'view category';
        $createCategory = 'create category';
        $updateCategory = 'update category';
        $deleteCategory = 'delete category';

        // Product Permissions
        $viewProduct = 'view product';
        $createProduct = 'create product';
        $updateProduct = 'update product';
        $deleteProduct = 'delete product';

        // Post Permission
        $viewPost = 'view post';
        $createPost = 'create post';
        $updatePost = 'update post';
        $deletePost = 'delete post';

        // User Permissions
        $viewUser = 'view user';
        $createUser = 'create user';
        $blockUser = 'block user';
        $deleteUser = 'delete user';

        // Role Permission
        $viewRole = 'view role';
        $createRole = 'create role';
        $updateRole = 'update role';
        $deleteRole = 'delete role';

        // Discount Permission
        $viewDiscount = 'view discount';
        $createDiscount = 'create discount';
        $updateDiscount = 'update discount';
        $deleteDiscount = 'delete discount';

        // Partner Permission
        $createPartner = 'create partner';
        $updatePartner = 'update partner';
        $deletePartner = 'delete partner';

        // Import Permission
        $viewImport = 'view import';
        $createImport = 'create import';
        $updateImport = 'update import';
        $deleteImport = 'delete import';

        // Order Permission
        $viewOrder = 'view order';
        $updateOrder = 'update order';

        // Create Permissons
        Permission::create(['name' => $viewBanner]);
        Permission::create(['name' => $createBanner]);
        Permission::create(['name' => $updateBanner]);
        Permission::create(['name' => $deleteBanner]);
        Permission::create(['name' => $viewCategory]);
        Permission::create(['name' => $createCategory]);
        Permission::create(['name' => $updateCategory]);
        Permission::create(['name' => $deleteCategory]);
        Permission::create(['name' => $viewProduct]);
        Permission::create(['name' => $createProduct]);
        Permission::create(['name' => $updateProduct]);
        Permission::create(['name' => $deleteProduct]);
        Permission::create(['name' => $viewPost]);
        Permission::create(['name' => $createPost]);
        Permission::create(['name' => $updatePost]);
        Permission::create(['name' => $deletePost]);
        Permission::create(['name' => $viewUser]);
        Permission::create(['name' => $createUser]);
        Permission::create(['name' => $blockUser]);
        Permission::create(['name' => $deleteUser]);
        Permission::create(['name' => $viewRole]);
        Permission::create(['name' => $createRole]);
        Permission::create(['name' => $updateRole]);
        Permission::create(['name' => $deleteRole]);
        Permission::create(['name' => $viewDiscount]);
        Permission::create(['name' => $createDiscount]);
        Permission::create(['name' => $updateDiscount]);
        Permission::create(['name' => $deleteDiscount]);
        Permission::create(['name' => $createPartner]);
        Permission::create(['name' => $updatePartner]);
        Permission::create(['name' => $deletePartner]);
        Permission::create(['name' => $viewImport]);
        Permission::create(['name' => $createImport]);
        Permission::create(['name' => $updateImport]);
        Permission::create(['name' => $deleteImport]);
        Permission::create(['name' => $viewOrder]);
        Permission::create(['name' => $updateOrder]);

        // ====================================================
        //                 DEFINE ALL ROLES
        // ====================================================
        $SysAdmin = 'System Admin';
        $Admin = 'Admin';
        $Manager = 'Quản lý cửa hàng';
        $SaleEmployee = 'Nhân viên bán hàng';
        $Shipper = 'Shipper';

        $roleSysAdmin = Role::create(['name' => $SysAdmin]);
        $roleAdmin = Role::create(['name' => $Admin]);
        $roleManager = Role::create(['name' => $Manager]);
        $roleSaleEmployee = Role::create(['name' => $SaleEmployee]);
        $roleShipper = Role::create(['name' => $Shipper]);

        // Give permissions to role
        $roleSysAdmin->givePermissionTo(Permission::all());

        // admin
        $roleAdmin->givePermissionTo([
            $viewBanner,
            $createBanner,
            $updateBanner,
            $deleteBanner,
            $viewCategory,
            $createCategory,
            $updateCategory,
            $deleteCategory,
            $viewProduct,
            $createProduct,
            $updateProduct,
            $deleteProduct,
            $viewUser,
            $createUser,
            $blockUser,
            $deleteUser
        ]);

        // manager
        $roleManager->givePermissionTo([
            $viewBanner,
            $createBanner,
            $updateBanner,
            $deleteBanner,
            $viewCategory,
            $createCategory,
            $updateCategory,
            $deleteCategory,
            $viewProduct,
            $createProduct,
            $updateProduct,
            $deleteProduct,
            $viewPost,
            $createPost,
            $updatePost,
            $deletePost
        ]);

        // manager
        $roleManager->givePermissionTo([
            $viewProduct,
            $createProduct,
            $updateProduct,
            $deleteProduct
        ]);

        // shipper
        $roleShipper->givePermissionTo([
            $viewOrder,
            $updateOrder
        ]);

        // ====================================================
        //              CREATE USERS AND GIVE ROLE
        // ====================================================

        // user sysadmin
        $sysadmin = new User();
        $sysadmin->id = Str::uuid();
        $sysadmin->name = 'System Admin';
        $sysadmin->username = 'sysadmin';
        $sysadmin->password  = bcrypt('123@abcd');
        $sysadmin->is_admin = true;
        $sysadmin->save();
        $sysadmin->assignRole($SysAdmin);

        // user admin
        $admin = new User();
        $admin->id = Str::uuid();
        $admin->name = 'Admin';
        $admin->username = 'admin';
        $admin->password  = bcrypt('123@abcd');
        $admin->is_admin = true;
        $admin->save();
        $admin->assignRole($Admin);

        // user manager 1
        $manager_1 = new User();
        $manager_1->id = Str::uuid();
        $manager_1->name = 'Lục Duy Khiêm';
        $manager_1->username = 'khiem.ld';
        $manager_1->password  = bcrypt('123@abcd');
        $manager_1->is_admin = true;
        $manager_1->save();
        $manager_1->assignRole($Manager);

        // user manager 2
        $manager_2 = new User();
        $manager_2->id = Str::uuid();
        $manager_2->name = 'Nguyễn Huyền Trang';
        $manager_2->username = 'trang.nh';
        $manager_2->password  = bcrypt('123@abcd');
        $manager_2->is_admin = true;
        $manager_2->save();
        $manager_2->assignRole($Manager);

        // user sale 1
        $sale_1 = new User();
        $sale_1->id = Str::uuid();
        $sale_1->name = 'Vũ Thuý Nga';
        $sale_1->username = 'nga.vt';
        $sale_1->password  = bcrypt('123@abcd');
        $sale_1->is_admin = true;
        $sale_1->save();
        $sale_1->assignRole($SaleEmployee);

        // user sale 2
        $sale_2 = new User();
        $sale_2->id = Str::uuid();
        $sale_2->name = 'Ngô Nhật Thịnh';
        $sale_2->username = 'thinh.nt';
        $sale_2->password  = bcrypt('123@abcd');
        $sale_2->is_admin = true;
        $sale_2->save();
        $sale_2->assignRole($SaleEmployee);

        // User shipper
        $manager_1 = new User();
        $manager_1->id = Str::uuid();
        $manager_1->name = 'Shipper 01';
        $manager_1->username = 'shipper01';
        $manager_1->password  = bcrypt('123@abcd');
        $manager_1->is_admin = true;
        $manager_1->save();
        $manager_1->assignRole($Shipper);
    }
}
