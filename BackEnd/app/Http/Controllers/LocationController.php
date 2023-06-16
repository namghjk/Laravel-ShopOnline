<?php

namespace App\Http\Controllers;

use App\Models\District;
use App\Models\Province;
use App\Models\Ward;
use App\Response\MyResponse;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    public function getAllProvinces()
    {
        $data = Province::all();
        return (new MyResponse)->Response(200, 'Lấy danh sách tỉnh thành công', $data);
    }

    public function getAllDistrictsByProvinceId(Request $request)
    {
        $provinceId = $request->input('provinceId');
        $data = District::where('province_id', $provinceId)->get();
        return (new MyResponse)->Response(200, 'Lấy danh sách quận/huyện thành công', $data);
    }

    public function getAllWardsByDistrictId(Request $request)
    {
        $districtId = $request->input('districtId');
        $data = Ward::where('district_id', $districtId)->get();
        return (new MyResponse)->Response(200, 'Lấy danh sách phường/xã thành công', $data);
    }
}
