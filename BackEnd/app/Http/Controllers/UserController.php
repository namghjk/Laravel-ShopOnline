<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\User;
use App\Response\MyResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getAllUser(Request $request)
    {
        $users = User::where('is_admin', true)
            ->where('id', '!=', auth()->user()->id)
            ->with('roles')
            ->withTrashed()
            ->get()->toArray();
        return (new Pagination)->pagination1($users, $request->input('page'), $request->input('pageSize'));
    }

    public function lockUser(Request $request)
    {
        $user = User::where('id', $request->input('id'))->first();
        if (is_null($user)) {
            return (new MyResponse)->Response(404, 'Không tìm thấy user!');
        } else {
            $user->delete();
            return (new MyResponse)->Response(200, 'Khoá user thành công!');
        }
    }

    public function unLockUser(Request $request)
    {
        $user = User::onlyTrashed()->where('id', $request->input('id'))->first();
        if (is_null($user)) {
            return (new MyResponse)->Response(404, 'Không tìm thấy user!');
        } else {
            $user->restore();
            return (new MyResponse)->Response(200, 'Khôi phục user thành công!');
        }
    }
}
