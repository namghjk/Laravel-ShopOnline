<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\OrderDetail;
use App\Response\MyResponse;
use DB;
use Illuminate\Http\Request;

class OrderDetailController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function view(Request $request)
    {
        $user = auth()->user();

        if ($user) {
            $order_id = $request->input('order_id');
            $result =
                DB::table('order_details')
                ->select([
                    'order_details.id',
                    'products.name AS product_name',
                    'products.thumbnail AS product_img',
                    'order_details.quantity',
                    'order_details.price',
                    'order_details.total_price',
                ])
                ->join('products', 'products.id', '=', 'order_details.product_id')
                ->where('order_id', $order_id)
                ->get()->toArray();
            return (new Pagination)->pagination1($result, $request->input('page'), $request->input('pageSize'));
        } else {
            return (new MyResponse)->Response(403, 'User chưa đăng nhập');
        }
    }
}
