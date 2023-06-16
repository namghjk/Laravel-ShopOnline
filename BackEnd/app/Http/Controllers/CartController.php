<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Cart;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Response\MyResponse;
use Illuminate\Http\Response;


class CartController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function view(Request $request)
    {
        $user = auth()->user();
        if ($user) {
            $userId = $user->id;
            $carts = Cart::where('user_id', $userId)->get()->toArray();
            $result = [];
            foreach ($carts as $item) {
                $product = Product::withTrashed()->where('id', $item['product_id'])->first();
                $result[] = [
                    'id' => $item['id'],
                    'product' => $product,
                    'quantity' => $item['quantity'],
                    'price' => $item['quantity'] * $product->price,
                    'price_sale' => $item['quantity'] * $product->price_sale
                ];
            }
            return (new Pagination())->pagination1($result, $request->input('page'), $request->input('pageSize'));
        } else return (new MyResponse)->Response(
            Response::HTTP_FORBIDDEN,
            'Fail'
        );
    }

    public function addToCart(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('product_id');
        $product = Product::where('id', $productId)->first();

        if ($user) {
            $userId = $user->id;
            $contains = Cart::where('user_id', $userId)->where('product_id', $productId)->first();
            if ($contains) {
                $cart = $contains;
                $realQty = $cart->quantity + $request->input('quantity');
                if ($product->quantity > $realQty) {
                    $cart->quantity = $realQty;
                    $cart->update();
                    return (new MyResponse)->Response(
                        200,
                        'Thêm vào giỏ hàng thành công',
                        $cart
                    );
                } else {
                    return (new MyResponse)->Response(
                        Response::HTTP_BAD_REQUEST,
                        'Số lượng sản phẩm trong kho không đủ',
                    );
                }
            } else {
                if ((int) $product->quantity > (int) $request->input('quantity')) {
                    $cart = new Cart();
                    $cart->user_id = $userId;
                    $cart->product_id = $product->id;
                    $cart->quantity = $request->input('quantity');
                    $cart->save();
                    return (new MyResponse)->Response(
                        200,
                        'Thêm vào giỏ hàng thành công',
                        $cart
                    );
                }
                return (new MyResponse)->Response(
                    Response::HTTP_BAD_REQUEST,
                    'Số lượng sản phẩm trong kho không đủ',
                );
            }
        }
    }

    public function updateQty(Request $request)
    {
        $user = auth()->user();
        $productId = $request->input('product_id');
        if ($user) {
            $userId = $user->id;
            $product = Product::where('id', $productId)->first();
            $cart = Cart::where('user_id', $userId)->where('product_id', $productId)->first();
            $realQty = $request->input('quantity');
            $quantity = $request->input('quantity');
            if ($quantity < 0) {
                return (new MyResponse)->Response(
                    Response::HTTP_BAD_REQUEST,
                    'Số lượng không hợp lệ',
                );
            } else if ($quantity == 0) {
                $cart->delete();
                return (new MyResponse)->Response(
                    200,
                    'Xóa sản phẩm thành công',
                );
            } else {
                if ($product->quantity > $quantity) {
                    $cart->quantity = $realQty;
                    $cart->update();
                    return (new MyResponse)->Response(
                        200,
                        'Thêm vào giỏ hàng thành công',
                        $cart
                    );
                } else {
                    return (new MyResponse)->Response(
                        Response::HTTP_BAD_REQUEST,
                        'Số lượng sản phẩm trong kho không đủ',
                    );
                }
            }
        }
    }

    public function delete(Request $request)
    {
        $user = auth()->user();
        if ($user) {
            $userId = $user->id;
            $cart = Cart::where('user_id', $userId)->where('product_id', $request->input('product_id'))->first();
            if ($cart) {
                $cart->delete();
                return (new MyResponse)->Response(
                    200,
                    'Xoá thành công',
                    null,
                    null
                );
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_BAD_REQUEST,
                    'Fail'
                );
            }
        }
    }
}
