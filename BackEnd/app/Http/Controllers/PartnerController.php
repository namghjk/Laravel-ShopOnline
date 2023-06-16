<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Partner;
use App\Response\MyResponse;
use Illuminate\Http\Request;
use Str;

use function PHPUnit\Framework\isNull;

class PartnerController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view']]);
    }

    public function view(Request $request)
    {
        $result = Partner::all()->toArray();
        return (new Pagination)->pagination1($result, $request->input('page'), $request->input('pageSize'));
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create partner')) {
            $partner = new Partner();
            $partner->id = Str::uuid();
            $partner->name = $request->input('name');
            $partner->phone_number = $request->input('phone_number');
            $partner->address = $request->input('address');
            $partner->save();

            return (new MyResponse)->Response(200, 'Tạo mới "Đối tác" thành công!', $partner);
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền tạo mới "Đối tác"');
        }
    }

    public function update(Request $request)
    {
        if (auth()->user()->can('update partner')) {
            $partner = Partner::where('id', $request->input('id'))->first();
            if (is_null($partner)) {
                return (new MyResponse)->Response(404, 'Không tìm thấy "Đối tác"!');
            } else {
                $partner->name = $request->input('name');
                $partner->phone_number = $request->input('phone_number');
                $partner->address = $request->input('address');
                $partner->update();
                return (new MyResponse)->Response(200, 'Cập nhật "Đối tác" thành công!', $partner);
            }
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền cập nhật "Đối tác"');
        }
    }

    public function delete(Request $request)
    {
        if (auth()->user()->can('delete partner')) {
            $partner = Partner::where('id', $request->input('id'))->first();
            if (is_null($partner)) {
                return (new MyResponse)->Response(404, 'Không tìm thấy "Đối tác"!');
            } else {
                $partner->delete();
                return (new MyResponse)->Response(200, 'Xoá "Đối tác" thành công!');
            }
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền xoá "Đối tác"');
        }
    }

    public function detail(Request $request)
    {
        $partner = Partner::where('id', $request->input('id'))->first();
        if (is_null($partner)) {
            return (new MyResponse)->Response(404, 'Không tìm thấy đối tác này!');
        } else {
            return (new MyResponse)->Response(200, 'Lấy thông tin thành công!', $partner);
        }
    }
}
