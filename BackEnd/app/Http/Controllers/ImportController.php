<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Import;
use App\Models\ImportDetail;
use App\Models\Product;
use App\Response\MyResponse;
use DB;
use Illuminate\Http\Request;

class ImportController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function view(Request $request)
    {
        if (auth()->user()->can('view import')) {
            $result =
                DB::table('imports')
                ->select([
                    'imports.id',
                    'partners.name AS partner_name',
                    'users.name AS create_by_name',
                    'imports.note',
                    'imports.total',
                    'imports.created_at',
                    'imports.updated_at',
                ])
                ->join('partners', 'partners.id', '=', 'imports.partner_id')
                ->join('users', 'users.id', '=', 'imports.created_by')
                ->get()->toArray();
            return (new Pagination)->pagination1($result, $request->input('page'), $request->input('pageSize'));
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền xem danh sách "Nhập hàng"!');
        }
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create import')) {
            $import = new Import();
            $import->created_by = auth()->user()->id;
            $import->partner_id = $request->input('partner_id');
            $import->note = $request->input('note');
            $import->total = 0;
            $import->save();

            // loop danh sách sản phẩm gửi lên để lưu vào detail
            $listProducts = ($request->input('products'));
            $total = 0;
            foreach ($listProducts as $product) {
                $productModel = Product::where('id', $product['id'])->first();
                $productModel->quantity = $productModel->quantity + $product['quantity'];
                $productModel->update();

                $importDetail = new ImportDetail();
                $importDetail->import_id = $import->id;
                $importDetail->product_id = $product['id'];
                $importDetail->quantity = $product['quantity'];
                $importDetail->price = $productModel->price;
                $sum = $productModel->price * $product['quantity'];
                $importDetail->total = $sum;
                $importDetail->save();

                $total += $sum;
            }
            $import->total = $sum;
            $import->save();
            return (new MyResponse)->Response(200, 'Tạo mới "Phiếu nhập" thành công!');
        } else {
            return (new MyResponse)->Response(403, 'User không có quyền tạo mới "Phiếu nhập"');
        }
    }

    public function detail(Request $request)
    {
        $user = auth()->user();

        if ($user) {
            $import_id = $request->input('import_id');
            $result =
                DB::table('import_details')
                ->select([
                    'import_details.id',
                    'products.name AS product_name',
                    'products.thumbnail AS product_img',
                    'import_details.quantity',
                    'import_details.price',
                    'import_details.total',
                ])
                ->join('products', 'products.id', '=', 'import_details.product_id')
                ->where('import_id', $import_id)
                ->get()->toArray();
            return (new Pagination)->pagination1($result, $request->input('page'), $request->input('pageSize'));
        } else {
            return (new MyResponse)->Response(403, 'User chưa đăng nhập');
        }
    }
}
