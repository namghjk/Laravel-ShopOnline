<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Response\MyResponse;
use File;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Str;

class BannerController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view']]);
    }

    public function view()
    {
        $banners = Banner::where('active', 1)->orderBy('order')->get();
        return (new MyResponse)->Response(
            200,
            'Lấy thông tin banner thành công',
            $banners,
            null
        );
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create banner')) {
            if ($file = $request->file('image')) {
                $fileName = Carbon::now()->timestamp . '_banner_' . Str::random('5') . '.' . $file->extension();
                $destinationPath = 'uploads/banners/';
                $file->move($destinationPath, $fileName);

                $banner = new Banner();
                $banner->image_url = $destinationPath . $fileName;
                $banner->order = (int) $request->input('order');
                $banner->active = true;
                $banner->save();

                return (new MyResponse)->Response(
                    200,
                    'Thêm mới "Banner" thành công!',
                    $banner
                );
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_BAD_REQUEST,
                    'Bắt buộc upload một ảnh'
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền tạo mới "Banner"'
            );
        }
    }

    public function update(Request $request)
    {
        if (auth()->user()->can('update banner')) {
            $id = $request->input('id');
            $active = $request->input('active');
            $order = (int)$request->input('order');
            if (Banner::where('id', $id)->exists()) {
                $banner = Banner::where('id', $id)->first();
                $banner->active = $active;
                $banner->order = $order;
                $banner->update();
                return (new MyResponse)->Response(200, 'Cập nhật trạng thái "Banner" thành công');
            } else {
                return (new MyResponse)->Response(404, 'Không tìm thấy "Banner"');
            }
        } else {
            return (new MyResponse)->Response(400, 'User không có quyền sửa "Banner"');
        }
    }

    public function delete(Request $request)
    {
        if (auth()->user()->can('delete banner')) {
            $id = $request->input('id');
            if (Banner::where('id', $id)->exists()) {
                $banner = Banner::where('id', $id)->first();
                // xoá file
                File::delete(public_path($banner->image_url));
                $banner->delete();
                return (new MyResponse)->Response(200, 'Xoá "Banner" thành công');
            } else {
                return (new MyResponse)->Response(404, 'Không tìm thấy "Banner"');
            }
        } else {
            return (new MyResponse)->Response(400, 'User không có quyền xoá "Banner"');
        }
    }
}
