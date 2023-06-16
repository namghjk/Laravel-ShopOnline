<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Category;
use App\Models\ProductImage;
use App\Response\MyResponse;
use Carbon\Carbon;
use DB;
use File;
use Illuminate\Support\Str;
use Response;

class ProductController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view', 'relatedProduct', 'highlightsProduct', 'detailProduct', 'searchByKeyword', 'sortASC', 'sortDESC', 'filterPrice', 'search']]);
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create product')) {
            $id = Str::uuid();
            $name = $request->input('name');
            $description = $request->input('description');
            $weight = $request->input('weight');
            $size = $request->input('size');
            $unit = $request->input('unit');
            $quantity = $request->input('quantity');
            $price = $request->input('price');
            $price_sale = $request->input('price_sale');
            $category_id = $request->input('category_id');
            $slug = Str::slug($name) . '_' . Str::random(10);
            $modify_by = auth()->user()->id;

            // Upload main image
            $thumbnail = '';
            $destinationPath = 'uploads/products/';
            if ($file = $request->file('thumbnail')) {
                $fileName = Carbon::now()->timestamp . '_' . $slug . '_1.' . $file->extension();
                $file->move($destinationPath, $fileName);
                $thumbnail = $destinationPath . $fileName;
            }

            $product = new Product();
            $product->id = $id;
            $product->name = $name;
            $product->description = $description;
            $product->weight = $weight;
            $product->size = $size;
            $product->unit = $unit;
            $product->quantity = $quantity;
            $product->price = $price;
            $product->price_sale = $price_sale;
            $product->category_id = $category_id;
            $product->thumbnail = $thumbnail;
            $product->slug = $slug;
            $product->modified_by = $modify_by;
            $product->save();

            // Upload array image (if any)
            $i = 2;
            $images = [];
            if ($files = $request->file('images')) {
                foreach ($files as $file) {
                    $fileName = Carbon::now()->timestamp . '_' . $slug . '_' . $i . '.' . $file->extension();
                    $file->move($destinationPath, $fileName);
                    $image_url = $destinationPath . $fileName;
                    $i++;
                    // insert to db
                    $productImage = new ProductImage();
                    $productImage->product_id = $id;
                    $productImage->image_url = $image_url;
                    $productImage->save();

                    $images[] = $productImage;
                }
            }

            return (new MyResponse)->Response(
                200,
                'Thêm mới "Sản phẩm" thành công',
                $product,
                $images
            );
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền thêm "Sản phẩm"',
                null,
                null
            );
        }
    }

    public function update(Request $request)
    {
        if (auth()->user()->can('update product')) {
            // kiểm tra tồn tại theo id
            $slug = $request->input('slug');
            $product = null;
            if (Product::where('slug', $slug)->exists()) {
                $product = Product::where('slug', $slug)->first();
            } else {
                return (new MyResponse)->Response(
                    404,
                    'Không tìm thấy sản phẩm có slug "' . $slug . '"',
                    null,
                    null
                );
            }

            $name = $request->input('name');
            $description = $request->input('description');
            $weight = $request->input('weight');
            $size = $request->input('size');
            $unit = $request->input('unit');
            $quantity = $request->input('quantity');
            $price = $request->input('price');
            $price_sale = $request->input('price_sale');
            $category_id = $request->input('category_id');
            $slug = Str::slug($name) . '_' . Str::random(10);
            $modify_by = auth()->user()->id;

            // Upload main image
            $thumbnail = '';
            $destinationPath = 'uploads/products/';
            if ($file = $request->file('thumbnail')) {
                // Delete old
                File::delete(public_path($product->thumbnail));
                $fileName = Carbon::now()->timestamp . '_' . $slug . '_1.' . $file->extension();
                $file->move($destinationPath, $fileName);
                $thumbnail = $destinationPath . $fileName;
                $product->thumbnail = $thumbnail;
            }

            $product->name = $name;
            $product->description = $description;
            $product->weight = $weight;
            $product->size = $size;
            $product->unit = $unit;
            $product->quantity = $quantity;
            $product->price = $price;
            $product->price_sale = $price_sale;
            $product->category_id = $category_id;
            $product->slug = $slug;
            $product->modified_by = $modify_by;
            $product->update();

            // Upload array image (if any)
            $i = 2;
            $images = [];
            if ($files = $request->file('images')) {
                foreach ($files as $file) {
                    $fileName = Carbon::now()->timestamp . '_' . $slug . '_' . $i . '.' . $file->extension();
                    $file->move($destinationPath, $fileName);
                    $image_url = $destinationPath . $fileName;
                    $i++;
                    // insert to db
                    $productImage = new ProductImage();
                    $productImage->product_id =  $product->id;
                    $productImage->image_url = $image_url;
                    $productImage->save();

                    $images[] = $productImage;
                }
            }

            // delete old images (if any)
            $deletedFileString = $request->input('deleted_images');
            $deleted_files  = explode('|', $deletedFileString);
            foreach ($deleted_files as $file) {
                // xoá file cũ đi
                File::delete(public_path($file));
                // xoá file trong db
                if (ProductImage::where('image_url', $file)->exists()) {
                    $imageMapping = ProductImage::where('image_url', $file)->first();
                    $imageMapping->delete();
                }
            }

            return (new MyResponse)->Response(
                200,
                'Cập nhật "Sản phẩm" thành công',
                $product,
                $images
            );
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền sửa "Sản phẩm"',
                null,
                null
            );
        }
    }

    public function delete(Request $request)
    {
        if (auth()->user()->can('delete product')) {
            $id = $request->input('id');
            if (Product::where('id', $id)->exists()) {
                $product = Product::where('id', $id)->first();
                $product->delete();
                return (new MyResponse)->Response(
                    200,
                    'Xoá thành công',
                    null,
                    null
                );
            } else {
                return (new MyResponse)->Response(
                    404,
                    'Không tìm thấy sản phẩm',
                    null,
                    null
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền xoá "Sản phẩm"',
                null,
                null
            );
        }
    }

    public function view(Request $request)
    {
        $result =
            DB::table('products')
            ->where('products.deleted_at', null)
            ->select(['products.*', 'categories.name AS category_name'])
            ->join('categories', 'categories.id', '=', 'products.category_id')
            ->get()->toArray();
        // Lấy danh sách sản phẩm có phân trang (truyền page, pageSize)
        return (new Pagination())->pagination1(
            $result,
            $request->input('page'),
            $request->input('pageSize')
        );
    }

    // get product detail
    public function detailProduct(Request $request)
    {
        $slug = $request->input('slug');
        if (Product::where('slug', $slug)->exists()) {
            $product = Product::where('slug', $slug)->first();
            $images = ProductImage::where('product_id', $product->id)->get();

            return (new MyResponse)->Response(
                200,
                'Lấy thông tin thành công',
                $product,
                $images
            );
        } else {
            return (new MyResponse)->Response(
                404,
                'Không tìm thấy Sản phẩm',
                null,
                null
            );
        }
    }

    // get a list of products with the same category
    public function relatedProduct(Request $request)
    {
        $products = Product::where('category_id', $request->input('category'))->get()->toArray();
        return (new Pagination())->pagination1($products, $request->input('page'), $request->input('pageSize'));
    }

    // get a list of newly added products (when the data is available, it will change to the most sold products)
    public function highlightsProduct(Request $request)
    {
        $products = Product::orderBy('created_at', 'asc')->get()->toArray();
        return (new Pagination())->pagination1($products, $request->input('page'), $request->input('pageSize'));
    }

    public function search(Request $request)
    {
        $keyword = $request->input('keyword');
        $categories = $request->input('categories');
        $min_price = $request->input('min_price');
        $max_price = $request->input('max_price');
        $sort = $request->input('sort'); //asc desc

        $products = Product::where('slug', 'LIKE', "%$keyword%");

        if ($min_price && $max_price) {
            $products = $products->whereBetween('price', [$min_price, $max_price]);
        }

        if (count($categories) > 0) {
            $products = $products->whereIn('category_id', $categories);
        }

        if ($sort) {
            $products = $products->orderBy('price', 'asc');
        }

        $products = $products->get()->toArray();
        
        return (new Pagination)->pagination1($products, $request->input('page'), $request->input('pageSize'));
    }
}
