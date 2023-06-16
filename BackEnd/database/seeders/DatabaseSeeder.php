<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            OrderStatusesSeeder::class,
            PermissionsSeeder::class,
            CategoriesSeeder::class,
            ProvincesTableSeeder::class,
            DistrictsTableSeeder::class,
            WardsTableSeeder::class,
            DiscountSeeder::class
        ]);
        $this->call(BannersTableSeeder::class);
    }
}
