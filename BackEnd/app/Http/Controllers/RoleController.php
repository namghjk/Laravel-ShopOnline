<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Response\MyResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view', 'getAllPermissions']]);
    }

    public function view()
    {
        $roles = Role::all();
        return (new MyResponse)->Response(
            200,
            'Lấy danh sách "Nhóm quyền" thành công',
            $roles
        );
    }

    public function getAllPermissions()
    {
        $permissions = Permission::all();
        return (new MyResponse)->Response(
            200,
            'Lấy danh sách "Quyền" thành công',
            $permissions
        );
    }

    public function getDetailRole(Request $request)
    {
        $role = Role::where('name', $request->input('role'))->first();
        if (is_null($role)) {
            return (new MyResponse)->Response(
                404,
                'Không tìm thấy nhóm quyền này'
            );
        } else {
            $permissions = $role->getAllPermissions();
            return (new MyResponse)->Response(
                200,
                'Lấy thông tin thành công',
                $permissions
            );
        }
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create role')) {
            $name = $request->input('name');
            $permissions = explode('|', $request->input('permissions'));

            $role = new Role();
            $role->name = $name;
            $role->guard_name = 'api';

            foreach ($permissions as $permiss) {
                $role->givePermissionTo($permiss);
            }

            $role->save();

            $role = Role::where('name', $name)->first();

            return (new MyResponse)->Response(200, 'Tạo mới "Nhóm quyền" thành công!', $role);
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền tạo mới "Nhóm quyền"'
            );
        }
    }

    public function update(Request $request)
    {
        if (auth()->user()->can('create role')) {
            $id = $request->input('id');
            $name = $request->input('name');
            $permissions = explode('|', $request->input('permissions'));

            if (Role::where('id', $id)->exists()) {
                $role = Role::where('id', $id)->first();
                $role->name = $name;

                $role->syncPermissions();

                foreach ($permissions as $permiss) {
                    $role->givePermissionTo($permiss);
                }

                $role->update();

                $role = Role::where('name', $name)->first();
                return (new MyResponse)->Response(200, 'Sửa thông tin "Nhóm quyền" thành công!', $role);
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_NOT_FOUND,
                    'Không tìm thấy "Nhóm quyền" này'
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền chỉnh sửa "Nhóm quyền"'
            );
        }
    }

    public function delete(Request $request)
    {
        if (auth()->user()->can('delete role')) {
            $id = $request->input('id');

            if (Role::where('id', $id)->exists()) {
                $role = Role::where('id', $id)->first();
                $role->syncPermissions();

                // xoá hết liên kết giữa nhóm quyền này với các users
                $users = User::all()->toArray();
                foreach ($users as $user) {
                    $userThis = User::where('id', $user['id'])->first();
                    $userThis->removeRole($role->name);
                }
                $role->delete();

                return (new MyResponse)->Response(200, 'Xoá "Nhóm quyền" thành công!', $role);
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_NOT_FOUND,
                    'Không tìm thấy "Nhóm quyền" này'
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền xoá "Nhóm quyền"'
            );
        }
    }

    public function giveRoleToUser(Request $request)
    {
        if (auth()->user()->can('update role')) {
            $userId = $request->input('user_id');
            $roleName = $request->input('role_name');

            if (Role::where('name', $roleName)->exists()) {
                if (User::where('id', $userId)->exists()) {
                    $user = User::where('id', $userId)->first();
                    $user->assignRole($roleName);
                    return (new MyResponse)->Response(200, 'Cấp quyền thành công!');
                } else {
                    return (new MyResponse)->Response(
                        Response::HTTP_NOT_FOUND,
                        'Không tìm thấy "User" này'
                    );
                }
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_NOT_FOUND,
                    'Không tìm thấy "Nhóm quyền" này'
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không được phép cấp quyền'
            );
        }
    }

    public function removeRoleFromUser(Request $request)
    {
        if (auth()->user()->can('update role')) {
            $userId = $request->input('user_id');
            $roleName = $request->input('role_name');

            if (Role::where('name', $roleName)->exists()) {
                if (User::where('id', $userId)->exists()) {
                    $user = User::where('id', $userId)->first();
                    $user->removeRole($roleName);
                    return (new MyResponse)->Response(200, 'Thu hồi quyền thành công!');
                } else {
                    return (new MyResponse)->Response(
                        Response::HTTP_NOT_FOUND,
                        'Không tìm thấy "User" này'
                    );
                }
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_NOT_FOUND,
                    'Không tìm thấy "Nhóm quyền" này'
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không được phép thu hồi quyền'
            );
        }
    }
}
