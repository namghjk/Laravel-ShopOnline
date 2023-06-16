<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Cart;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\OrderStatus;
use App\Models\Product;
use App\Models\User;
use App\Response\MyResponse;
use DB;
use Illuminate\Http\Request;
use Response;

class OrderController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    // for admin, view all orders list
    public function all(Request $request)
    {
        if (auth()->user()->can('view order')) {
            $orders = Order::all()->toArray();
            $orders = DB::table('orders')
                ->select([
                    'orders.*',
                    'order_statuses.name AS status_name',
                    'users.name AS customer_name',
                ])
                ->join('order_statuses', 'orders.status', '=', 'order_statuses.code')
                ->join('users', 'orders.customer_id', '=', 'users.id')
                ->orderBy('created_at', 'DESC')
                ->get()->toArray();
            return (new Pagination)->pagination1($orders, $request->input('page'), $request->input('pageSize'));
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền thực hiện thao tác này!');
        }
    }

    // for admin, change status of order
    public function updateStatus(Request $request)
    {
        if (auth()->user()->can('update order')) {
            $order = Order::where('id', $request->input('id'))->first();
            if (is_null($order)) {
                return (new MyResponse)->Response(404, 'Không tìm thấy đơn hàng này');
            } else {
                $status = $request->input('status');
                // if 'Giao hàng thành công' => only shipper can do it
                if ($status == 'GHTC' || $status == 'DGH') {
                    if (!auth()->user()->hasRole('Shipper')) {
                        return (new MyResponse)->Response(403, 'Chỉ shipper mới có quyền xác nhận giao hàng');
                    }
                }
                $order->staff_id = auth()->user()->id;
                $order->status = $status;
                $order->save();
                return (new MyResponse)->Response(200, 'Cập nhật trạng thái đơn hàng thành công!');
            }
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền thực hiện thao tác này!');
        }
    }

    // get list orders statuses
    public function getListOrderStatuses()
    {
        $result = OrderStatus::orderBy('order')->get();
        return (new MyResponse)->Response(200, 'Lấy danh sách trạng thái thành công!', $result);
    }

    public function getList(Request $request)
    {
        $user = auth()->user();
        if ($user) {
            $user_id = $user->id;
            $orders = Order::where('customer_id', $user_id)->get()->toArray();
            return (new Pagination)->pagination1($orders, $request->input('page'), $request->input('pageSize'));
        } else {
            return (new MyResponse)->Response(403, 'User chưa đăng nhập không có quyền xem danh sách Order');
        }
    }

    public function create(Request $request)
    {
        $user = auth()->user();
        $stt = DB::table('order_statuses')->select('code')->orderBy('order')->first();
        $staff = User::where('is_admin', 1)->first();
        $discount = DB::table('discounts')->select('id')->orderBy('id')->first();
        //$discount_percent = $discount->discount_percent;

        if ($user) {
            $order = new Order();
            $order->customer_id = auth()->user()->id;
            $order->staff_id = $staff->id;
            $order->note = $request->input('note') ?  $request->input('note') : "";
            $order->total_price = 0;
            $order->total_pay = 0;
            $order->status = $stt->code;
            $order->address_id = $request->input('address_id');
            $order->discount_id = $discount->id;
            $order->total_quantity = 0;
            $order->save();

            $listProducts = ($request->input('products'));
            $total_price = 0;
            $quantity = 0;

            foreach ($listProducts as $product) {
                $productModel = Product::where('id', $product['id'])->first();
                if ($productModel->quantity > $product['quantity']) {
                    $productModel->quantity = $productModel->quantity - $product['quantity'];
                    $productModel->update();

                    $orderDetail = new OrderDetail();
                    $orderDetail->order_id = $order->id;
                    $orderDetail->product_id = $product['id'];
                    $orderDetail->quantity = $product['quantity'];
                    $orderDetail->price = $productModel->price;
                    $sum = $productModel->price * $product['quantity'];
                    $orderDetail->total_price = $sum;
                    $orderDetail->save();

                    $total_price += $sum;
                    $quantity += $product['quantity'];
                } else {
                    return (new MyResponse)->Response(
                        Response::HTTP_BAD_REQUEST,
                        'Số lượng sản phẩm trong kho không đủ',
                    );
                }
            }
            $order->total_price = $total_price;
            $order->total_quantity = $quantity;
            //$order->total_pay = $total_price - ($total_price * $discount_percent) ;
            $order->total_pay = $total_price;
            $order->save();

            Cart::where('user_id', $user->id)->delete();

            return (new MyResponse)->Response(200, 'Order thành công');
        } else {
            return (new MyResponse)->Response(403, 'User chưa đăng nhập không thể Order');
        }
    }
}
