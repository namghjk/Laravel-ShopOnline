<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class DiscountSeeder extends Seeder
{
  /**
   * Auto generated seed file
   *
   * @return void
   */
  public function run()
  {
    \DB::table('discounts')->delete();
    $sysadmin = User::where('username', 'sysadmin')->first();
    \DB::table('discounts')->insert([
      [
        'id' => 1,
        'name' => 'Không giảm giá',
        'discount_percent' => 0.0,
        'expired_date' => "2999-01-01",
        'modified_by' => $sysadmin->id
      ],
    ]);
  }
}
