<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class BannersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('banners')->delete();
        
        \DB::table('banners')->insert(array (
            0 => 
            array (
                'id' => 1,
                'image_url' => 'uploads/banners/1667794549_banner_tply0.png',
                'order' => 10,
                'active' => 1,
                'created_at' => '2022-11-07 11:15:49',
                'updated_at' => '2022-11-07 11:15:49',
            ),
            1 => 
            array (
                'id' => 2,
                'image_url' => 'uploads/banners/1667794563_banner_eXdqi.png',
                'order' => 20,
                'active' => 1,
                'created_at' => '2022-11-07 11:16:03',
                'updated_at' => '2022-11-07 11:16:03',
            ),
            2 => 
            array (
                'id' => 3,
                'image_url' => 'uploads/banners/1667794573_banner_nFjlN.png',
                'order' => 30,
                'active' => 1,
                'created_at' => '2022-11-07 11:16:13',
                'updated_at' => '2022-11-07 11:16:13',
            ),
            3 => 
            array (
                'id' => 4,
                'image_url' => 'uploads/banners/1667794582_banner_Hf0Ys.png',
                'order' => 40,
                'active' => 1,
                'created_at' => '2022-11-07 11:16:22',
                'updated_at' => '2022-11-07 11:16:22',
            ),
        ));
        
        
    }
}