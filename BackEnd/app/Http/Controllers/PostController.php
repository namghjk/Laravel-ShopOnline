<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Response\MyResponse;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use App\Helpers\Pagination;
use DB;
use Illuminate\Support\Facades\File;

class PostController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['view', 'detail', 'homepagePost']]);
    }

    public function view(Request $request)
    {
    }

    public function detail(Request $request)
    {
        if (Post::where('slug', $request->input('slug'))->exists()) {
            $posts = Post::where('slug', $request->input('slug'))->first();
            return (new MyResponse)->Response(
                200,
                'Lấy thông tin thành công',
                $posts
            );
        } else {
            return (new MyResponse)->Response(
                404,
                'Không tìm thấy Post',
                null,
                null
            );
        }
    }

    public function create(Request $request)
    {
        if (auth()->user()->can('create post')) {
            if ($file = $request->file('thumbnail')) {
                $title = $request->input('title');
                $content = $request->input('content');
                $slug = Str::slug($title);

                $fileName = Carbon::now()->timestamp . '_' . $slug . '.' . $file->extension();
                $destinationPath = 'uploads/posts/';
                $file->move($destinationPath, $fileName);

                $post = new Post();
                $post->title = $title;
                $post->content = $content;
                $post->slug = $slug;
                $post->thumbnail = $destinationPath . $fileName;
                $post->created_by = auth()->user()->id;
                $post->updated_by = auth()->user()->id;

                $post->save();

                return (new MyResponse())->Response(200, 'Thêm mới bài viết thành công', $post, null);
            } else {
                return (new MyResponse)->Response(
                    Response::HTTP_FORBIDDEN,
                    'File không tồn tại',
                    null,
                    null
                );
            }
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền tạo mới "Bài viết"',
                null,
                null
            );
        }
    }

    public function update(Request $request)
    {
        if (auth()->user()->can('update post')) {
            $slug = $request->input('slug');
            if (!Post::where('slug', $slug)->exists()) {
                return (new MyResponse)->Response(
                    404,
                    'Không tìm thấy bài viết',
                    null,
                    null
                );
            }
            $title = $request->input('title');
            $content = $request->input('content');
            $slug = Str::slug($title);

            $post = Post::where('slug', $slug)->first();
            $post->title = $title;
            $post->content = $content;
            $post->slug = $slug;
            $post->updated_by = auth()->user()->id;

            // nếu có file thì thực hiện upload lên và thay đường dẫn trong db
            if ($file = $request->file('thumbnail')) {
                // xoá file cũ đi
                File::delete(public_path($post->thumbnail));

                $fileName = Carbon::now()->timestamp . '_' . $slug . '.' . $file->extension();
                $destinationPath = 'uploads/posts/';
                $file->move($destinationPath, $fileName);

                $post->thumbnail = $destinationPath . $fileName;
            }

            $post->update();
            return (new MyResponse())->Response(200, 'Cập nhật bài viết thành công', $post, null);
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền sửa "Bài viết"',
                null,
                null
            );
        }
    }

    public function delete(Request $request)
    {
        if (auth()->user()->can('delete post')) {
            $slug = $request->input('slug');
            if (Post::where('slug', $slug)->exists()) {
                $post = Post::where('slug', $slug)->first();
                // xoá ảnh
                File::delete(public_path($post->thumbnail));
                // xoá dữ liệu trong db
                $post->delete();
                return (new MyResponse)->Response(
                    200,
                    'Xoá "Bài viết" thành công!',
                    null,
                    null
                );
            }
            return (new MyResponse)->Response(
                404,
                'Không tìm thấy bài viết',
                null,
                null
            );
        } else {
            return (new MyResponse)->Response(
                Response::HTTP_FORBIDDEN,
                'User không có quyền xoá "Bài viết"',
                null,
                null
            );
        }
    }

    // post list for homepage
    public function homepagePost(Request $request)
    {
        // $posts = Post::orderBy('created_at', 'asc')->get()->toArray();
        $posts =
            DB::table('posts')
            ->select(['posts.*', 'users.name AS author_name'])
            ->join('users', 'users.id', '=', 'posts.created_by')
            ->get()->toArray();
        return (new Pagination())->pagination1($posts, $request->input('page'), $request->input('pageSize'));
    }
}
