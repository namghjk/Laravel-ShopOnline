<?php

namespace App\Http\Controllers;

use App\Helpers\Pagination;
use App\Models\Category;
use App\Response\MyResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view', 'getMenu', 'detail']]);
    }

    public function view(Request $request)
    {
        // Lấy danh sách categories có phân trang (truyền page, pageSize)
        // return (new Pagination())->Pagination('categories', 'parent_id', 'asc', $request);
        $categories = Category::orderBy('order', 'asc')->get()->toArray();
        $result = [];
        foreach ($categories as $cate) {
            $parent = Category::where('id', $cate['parent_id'])->first();
            $result[] = [
                'id' => $cate['id'],
                'name' => $cate['name'],
                'slug' => $cate['slug'],
                'parent_id' => $cate['parent_id'],
                'parent_name' => $parent ? $parent->name : '',
                'order' => $cate['order'],
                'created_at' => $cate['created_at'],
                'updated_at' => $cate['updated_at']
            ];
        }
        return (new Pagination())->pagination1($result, $request->input('page'), $request->input('pageSize'));
    }

    public function getMenu()
    {
        $categoriesRoot =
            Category::where('parent_id', null)->orderBy('order', 'asc')->get();
        $categoriesResult = [];

        foreach ($categoriesRoot as $cate) {
            $item = [
                'id' => $cate->id,
                'name' => $cate->name,
                'slug' => $cate->slug,
                'order' => $cate->order,
                'childrens' => Category::where('parent_id', $cate->id)->orderBy('order', 'asc')->get(['id', 'name', 'slug', 'order'])
            ];
            $categoriesResult[] = $item;
        }

        return (new MyResponse())->Response(200, null, $categoriesResult, null);
    }

    public function detail(Request $request)
    {
        $category = Category::where('slug', $request->input('slug'))->first();
        if (is_null($category)) {
            return (new MyResponse)->Response(
                Response::HTTP_OK,
                'Danh mục không tồn tại',
                null,
                null
            );
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_OK,
                'Lấy thông tin Danh mục thành công',
                $category,
                null
            );
        }
    }

    public function create(Request $request)
    {
        $user = auth()->user();
        if ($user->can('create category')) {

            $category = new Category();
            $category->id = Str::uuid();
            $category->name = $request->input('name');
            $category->slug = Str::slug($category->name) . '_' . Str::random(10);;
            $category->parent_id = $request->input('parent_id');

            if ($request->input('order')) {
                $category->order = $request->input('order');
            } else {
                $category->order = 0;
            }

            if (Category::where('slug', $category->slug)->exists()) {
                return (new MyResponse)->Response(
                    Response::HTTP_CONFLICT,
                    'Danh mục đã tồn tại',
                    $category,
                    null
                );
            }

            $category->save();

            return (new MyResponse)->Response(
                Response::HTTP_OK,
                'Tạo mới Danh mục thành công',
                $category,
                null
            );
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền tạo mới "Danh mục"',
                null,
                null
            );
        }
    }

    public function update(Request $request)
    {
        $user = auth()->user();
        if ($user->can('update category')) {
            // tìm kiếm danh mục theo id
            $category = Category::where('slug', $request->input('slug'))->first();

            if (is_null($category)) {
                return (new MyResponse)->Response(
                    Response::HTTP_OK,
                    'Danh mục không tồn tại',
                    null,
                    null
                );
            } else {
                $category->name = $request->input('name');
                $category->slug = Str::slug($category->name) . '_' . Str::random(10);
                $category->parent_id = $request->input('parent_id');

                if ($request->input('order')) {
                    $category->order = $request->input('order');
                } else {
                    $category->order = 0;
                }

                if (Category::where('slug', $category->slug)->where('slug', '!=', $request->input('slug'))->exists()) {
                    return (new MyResponse)->Response(
                        Response::HTTP_CONFLICT,
                        'Danh mục đã tồn tại',
                        $category,
                        null
                    );
                }

                $category->update();

                return (new MyResponse)->Response(
                    Response::HTTP_OK,
                    'Cập nhật Danh mục thành công',
                    $category,
                    null
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền chỉnh sửa "Danh mục"',
                null,
                null
            );
        }
    }

    public function delete(Request $request)
    {
        $user = auth()->user();
        if ($user->can('delete category')) {
            // tìm kiếm danh mục theo id
            $category = Category::where('id', $request->input('id'))->first();
            if (is_null($category)) {
                return (new MyResponse)->Response(
                    Response::HTTP_OK,
                    'Danh mục không tồn tại',
                    null,
                    null
                );
            } else {
                $category->delete();
                return (new MyResponse)->Response(
                    Response::HTTP_OK,
                    'Xoá Danh mục thành công',
                    $category,
                    null
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền chỉnh sửa "Danh mục"',
                null,
                null
            );
        }
    }
}
