<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Address;
use App\Response\MyResponse;
use DB;
use Illuminate\Http\Request;
use Response;

class AddressController extends Controller
{
   public function __construct()
   {
      $this->middleware('auth:api');
   }

   public function view(Request $request)
   {
      $user = auth()->user();

      if ($user) {
         $user_id = $user->id;

         $result =
            DB::table('addresses')
            ->select([
               'addresses.id',
               'addresses.title',
               'addresses.phone_number',
               'provinces.name AS province',
               'districts.name AS district',
               'wards.prefix AS ward_prefix',
               'wards.name AS ward',
               'addresses.detail_address',
            ])
            ->join('provinces', 'provinces.id', '=', 'addresses.province_id')
            ->join('districts', 'districts.id', '=', 'addresses.district_id')
            ->join('wards', 'wards.id', '=', 'addresses.ward_id')
            ->where('customer_id', $user_id)
            ->where('deleted_at', null)
            ->get()->toArray();

         return (new Pagination)->pagination1($result, $request->input('page'), $request->input('pageSize'));
      } else {
         return (new MyResponse)->Response(
            Response::HTTP_FORBIDDEN,
            'User cần đăng nhập',
            null,
            null
         );
      }
   }

   public function create(Request $request)
   {
      $user = auth()->user();
      if ($user) {

         $customer_id = $user->id;
         $phone_number = $request->input('phone_number');
         $title = $user->name . ' ' . $phone_number;
         $province_id = $request->input('province_id');
         $district_id = $request->input('district_id');
         $ward_id = $request->input('ward_id');
         $detail_address = $request->input('detail_address');

         $address = new Address();
         $address->customer_id = $customer_id;
         $address->title = $title;
         $address->province_id = $province_id;
         $address->district_id = $district_id;
         $address->ward_id = $ward_id;
         $address->detail_address = $detail_address;
         $address->phone_number = $phone_number;

         $address->save();

         return (new MyResponse)->Response(
            200,
            'Thêm địa chỉ thành công'
         );
      } else {
         return (new MyResponse)->Response(
            Response::HTTP_FORBIDDEN,
            'User cần đăng nhập',
            null,
            null
         );
      }
   }

   public function update(Request $request)
   {
      $user = auth()->user();

      if ($user) {
         $address_id = $request->input('address_id');
         $phone_number = $request->input('phone_number');
         $title = $user->name . ' ' . $phone_number;
         $province_id = $request->input('province_id');
         $district_id = $request->input('district_id');
         $ward_id = $request->input('ward_id');
         $detail_address = $request->input('detail_address');

         $address = Address::where('id', $address_id)->first();

         $address->title = $title;
         $address->province_id = $province_id;
         $address->district_id = $district_id;
         $address->ward_id = $ward_id;
         $address->detail_address = $detail_address;
         $address->phone_number = $phone_number;

         $address->update();
         return (new MyResponse)->Response(
            200,
            'Update địa chỉ thành công'
         );
      } else {
         return (new MyResponse)->Response(
            Response::HTTP_FORBIDDEN,
            'User cần đăng nhập',
            null,
            null
         );
      }
   }

   public function delete(Request $request)
   {
      $user = auth()->user();

      if ($user) {
         $address = Address::where('id', $request->input('id'))->first();
         if (is_null($address)) {
            return (new MyResponse)->Response(
               200,
               'Địa chỉ không tồn tại',
               null,
               null
            );
         } else {
            $address->delete();
            return (new MyResponse)->Response(
               200,
               'Xoá địa chỉ thành công',
               $address,
               null
            );
         }
      } else {
         return (new MyResponse)->Response(
            Response::HTTP_FORBIDDEN,
            'User cần đăng nhập',
            null,
            null
         );
      }
   }
}
