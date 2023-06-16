<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use App\Response\MyResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'create']]);
    }

    public function create(Request $request)
    {
        $user = new User();
        $user->id = Str::uuid();
        $user->name = $request->input('name');
        $user->username = $request->input('username');
        $user->password = bcrypt($request->input('password'));
        $user->is_admin = $request->input('is_admin') ? true : false;

        if (User::where('username', $user->username)->exists()) {
            return (new MyResponse)->Response(
                Response::HTTP_BAD_REQUEST,
                'Tài khoản đã tồn tại',
            );
        }

        $user->save();

        return (new MyResponse)->Response(
            Response::HTTP_OK,
            'Tạo mới user thành công',
            $user
        );
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        $user->name = $request->input('name');
        $user->username = $request->input('username');

        $old_password = $request->input('old_password');
        $new_password = $request->input('new_password');
        $confirm_password = $request->input('confirm_password');
        // check xem pass cũ user nhập có đúng không
        if (!Hash::check($old_password, $user->password)) {
            return (new MyResponse)->Response(
                Response::HTTP_BAD_REQUEST,
                'Sai mật khẩu',
            );
        }
        if ($new_password != $confirm_password) {
            return (new MyResponse)->Response(
                Response::HTTP_BAD_REQUEST,
                'Mật khẩu không khớp',
            );
        }
        $user->password = bcrypt($request->input('new_password'));

        if (User::where('username', $user->username)->exists()) {
            $userDuplicated = User::where('username', $user->username)->first();
            if ($userDuplicated->id != $user->id) {
                return (new MyResponse)->Response(
                    Response::HTTP_BAD_REQUEST,
                    'Tài khoản đã tồn tại',
                );
            }
        }

        $user->update();
        return (new MyResponse)->Response(
            Response::HTTP_OK,
            'Cập nhật thông tin thành công',
            $user
        );
    }

    public function login()
    {
        $credentials = request(['username', 'password']);
        if (!$token = auth()->attempt($credentials)) {
            return (new MyResponse)->Response(
                Response::HTTP_UNAUTHORIZED,
                'Sai thông tin đăng nhập',
            );
        }

        return (new MyResponse)->Response(
            Response::HTTP_OK,
            'Đăng nhập thành công',
            [
                'access_token' => $token,
                'token_expired' => Carbon::now()->subDays(1),
                'is_admin' => auth()->user()->is_admin == 1,
                'roles' => auth()->user()->getRoleNames(),
                'permissions' => auth()->user()->getAllPermissions()
            ]
        );
    }

    public function me()
    {
        $user = auth()->user();
        $userPermission = $user->getAllPermissions();
        return (new MyResponse)->Response(
            Response::HTTP_OK,
            '',
            $user,
            [
                'permissions' => $userPermission
            ]
        );
    }

    public function updateAvatar(Request $request)
    {
        if ($file = $request->file('avatar')) {
            $user = auth()->user();

            $fileName = Carbon::now()->timestamp . '.' . $file->extension();
            $destinationPath = 'uploads/avatars/';
            $file->move($destinationPath, $fileName);

            $user->avatar = $destinationPath . $fileName;

            $user->update();

            return (new MyResponse)->Response(
                400,
                'Upload ảnh đại diện thành công',
                auth()->user(),
                null
            );
        }
        return (new MyResponse)->Response(
            400,
            'Vui lòng upload một ảnh',
            null,
            null
        );
    }

    public function logout()
    {
        auth()->logout();
        return response()->json(['message' => 'Successfully logged out']);
    }
}
