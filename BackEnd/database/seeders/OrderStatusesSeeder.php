<?php

namespace Database\Seeders;

use App\Models\OrderStatus;
use Illuminate\Database\Seeder;

class OrderStatusesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // delete toàn bộ dữ liệu cũ tránh trùng lặp
        OrderStatus::query()->delete();
        //
        OrderStatus::insert([
            'code' => 'CB',
            'name' => 'Đang chuẩn bị hàng',
            'order' => 10,
            'is_completed' => false
        ]);
        //
        OrderStatus::insert([
            'code' => 'DVC',
            'name' => 'Đang vận chuyển',
            'order' => 20,
            'is_completed' => false
        ]);
        //
        OrderStatus::insert([
            'code' => 'DGH',
            'name' => 'Đang giao hàng',
            'order' => 30,
            'is_completed' => false
        ]);
        //
        OrderStatus::insert([
            'code' => 'GHTC',
            'name' => 'Giao hàng thành công',
            'order' => 40,
            'is_completed' => true
        ]);
        //
        OrderStatus::insert([
            'code' => 'DHD',
            'name' => 'Đã huỷ đơn',
            'order' => 100,
            'is_completed' => true
        ]);
    }
}
