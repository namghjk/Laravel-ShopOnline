<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // delete toàn bộ dữ liệu cũ tránh trùng lặp
        Category::query()->forceDelete();

        // parents category
        DB::table('categories')->insert([
            [
                'id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'name' => 'Shop cho chó',
                'slug' => Str::slug('Shop cho chó'),
                'created_at' => date("Y-m-d H:i:s"),
                'order' => 10
            ],
            [
                'id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'name' => 'Shop cho mèo',
                'slug' => Str::slug('Shop cho mèo'),
                'created_at' => date("Y-m-d H:i:s"),
                'order' => 20
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Chó cảnh',
                'slug' => Str::slug('Chó cảnh'),
                'created_at' => date("Y-m-d H:i:s"),
                'order' => 30
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Mèo cảnh',
                'slug' => Str::slug('Mèo cảnh'),
                'created_at' => date("Y-m-d H:i:s"),
                'order' => 40
            ],
        ]);

        // child category của "Shop cho chó"
        DB::table('categories')->insert([
            [
                'id' => Str::uuid(),
                'name' => 'Thức ăn cho chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Thức ăn cho chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Pate cho chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Pate cho chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Bát ăn & bình uống nước cho chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Bát ăn & bình uống nước cho chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Vòng cổ, dây dắt, rọ mõm',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Vòng cổ, dây dắt, rọ mõm'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Vệ sinh & chăm sóc chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Vệ sinh & chăm sóc chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Đồ chơi & huấn luyện chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Đồ chơi & huấn luyện chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Y tế & thuốc cho chó',
                'parent_id' => '0465aae3-138f-46cf-94f0-0f3f4ca86a78',
                'slug' => Str::slug('Y tế & thuốc cho chó'),
                'created_at' => date("Y-m-d H:i:s")
            ],
        ]);

        // child category của "Shop cho mèo"
        DB::table('categories')->insert([
            [
                'id' => Str::uuid(),
                'name' => 'Thức ăn cho mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Thức ăn cho mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Pate cho mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Shop cho mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Cát vệ sinh cho mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Cát vệ sinh cho mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Đồ dùng vệ sinh, tắm, sấy cho mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Đồ dùng vệ sinh, tắm, sấy cho mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Quần áo, vòng cổ, dây dắt mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Quần áo, vòng cổ, dây dắt mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Đồ chơi & huấn luyện mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Đồ chơi & huấn luyện mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
            [
                'id' => Str::uuid(),
                'name' => 'Y tế & thuốc cho mèo',
                'parent_id' => 'f1c1ccdd-09c9-497b-b3df-124135c20fc2',
                'slug' => Str::slug('Y tế & thuốc cho mèo'),
                'created_at' => date("Y-m-d H:i:s")
            ],
        ]);
    }
}
