<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DistrictsTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('districts')->delete();
        
        \DB::table('districts')->insert(array (
            0 => 
            array (
                'id' => 1,
                'prefix' => 'Huyện',
                'name' => 'Bình Chánh',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 2,
                'prefix' => 'Quận',
                'name' => 'Bình Tân',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 3,
                'prefix' => 'Quận',
                'name' => 'Bình Thạnh',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 4,
                'prefix' => 'Huyện',
                'name' => 'Cần Giờ',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 5,
                'prefix' => 'Huyện',
                'name' => 'Củ Chi',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 6,
                'prefix' => 'Quận',
                'name' => 'Gò Vấp',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 7,
                'prefix' => 'Huyện',
                'name' => 'Hóc Môn',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 8,
                'prefix' => 'Huyện',
                'name' => 'Nhà Bè',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 9,
                'prefix' => 'Quận',
                'name' => 'Phú Nhuận',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 10,
                'prefix' => '',
                'name' => 'Quận 1',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 11,
                'prefix' => '',
                'name' => 'Quận 10',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 12,
                'prefix' => '',
                'name' => 'Quận 11',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 13,
                'prefix' => '',
                'name' => 'Quận 12',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 14,
                'prefix' => '',
                'name' => 'Quận 2',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 15,
                'prefix' => '',
                'name' => 'Quận 3',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 16,
                'prefix' => '',
                'name' => 'Quận 4',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 17,
                'prefix' => '',
                'name' => 'Quận 5',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 18,
                'prefix' => '',
                'name' => 'Quận 6',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 19,
                'prefix' => '',
                'name' => 'Quận 7',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 20,
                'prefix' => '',
                'name' => 'Quận 8',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 21,
                'prefix' => '',
                'name' => 'Quận 9',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 22,
                'prefix' => 'Quận',
                'name' => 'Tân Bình',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 23,
                'prefix' => 'Quận',
                'name' => 'Tân Phú',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 24,
                'prefix' => 'Quận',
                'name' => 'Thủ Đức',
                'province_id' => 1,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 25,
                'prefix' => 'Quận',
                'name' => 'Ba Đình',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 26,
                'prefix' => 'Huyện',
                'name' => 'Ba Vì',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 27,
                'prefix' => 'Quận',
                'name' => 'Bắc Từ Liêm',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 28,
                'prefix' => 'Quận',
                'name' => 'Cầu Giấy',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 29,
                'prefix' => 'Huyện',
                'name' => 'Chương Mỹ',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 30,
                'prefix' => 'Huyện',
                'name' => 'Đan Phượng',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 31,
                'prefix' => 'Huyện',
                'name' => 'Đông Anh',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 32,
                'prefix' => 'Quận',
                'name' => 'Đống Đa',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 33,
                'prefix' => 'Huyện',
                'name' => 'Gia Lâm',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 34,
                'prefix' => 'Quận',
                'name' => 'Hà Đông',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 35,
                'prefix' => 'Quận',
                'name' => 'Hai Bà Trưng',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 36,
                'prefix' => 'Huyện',
                'name' => 'Hoài Đức',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 37,
                'prefix' => 'Quận',
                'name' => 'Hoàn Kiếm',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 38,
                'prefix' => 'Quận',
                'name' => 'Hoàng Mai',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 39,
                'prefix' => 'Quận',
                'name' => 'Long Biên',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 40,
                'prefix' => 'Huyện',
                'name' => 'Mê Linh',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 41,
                'prefix' => 'Huyện',
                'name' => 'Mỹ Đức',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 42,
                'prefix' => 'Quận',
                'name' => 'Nam Từ Liêm',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 43,
                'prefix' => 'Huyện',
                'name' => 'Phú Xuyên',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 44,
                'prefix' => 'Huyện',
                'name' => 'Phúc Thọ',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 45,
                'prefix' => 'Huyện',
                'name' => 'Quốc Oai',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 46,
                'prefix' => 'Huyện',
                'name' => 'Sóc Sơn',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 47,
                'prefix' => 'Thị xã',
                'name' => 'Sơn Tây',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 48,
                'prefix' => 'Quận',
                'name' => 'Tây Hồ',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 49,
                'prefix' => 'Huyện',
                'name' => 'Thạch Thất',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 50,
                'prefix' => 'Huyện',
                'name' => 'Thanh Oai',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 51,
                'prefix' => 'Huyện',
                'name' => 'Thanh Trì',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 52,
                'prefix' => 'Quận',
                'name' => 'Thanh Xuân',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 53,
                'prefix' => 'Huyện',
                'name' => 'Thường Tín',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 54,
                'prefix' => 'Huyện',
                'name' => 'Ứng Hòa',
                'province_id' => 2,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 55,
                'prefix' => 'Quận',
                'name' => 'Cẩm Lệ',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 56,
                'prefix' => 'Quận',
                'name' => 'Hải Châu',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 57,
                'prefix' => 'Huyện',
                'name' => 'Hòa Vang',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 58,
                'prefix' => 'Huyện',
                'name' => 'Hoàng Sa',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 59,
                'prefix' => 'Quận',
                'name' => 'Liên Chiểu',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 60,
                'prefix' => 'Quận',
                'name' => 'Ngũ Hành Sơn',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 61,
                'prefix' => 'Quận',
                'name' => 'Sơn Trà',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 62,
                'prefix' => 'Quận',
                'name' => 'Thanh Khê',
                'province_id' => 3,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 63,
                'prefix' => 'Huyện',
                'name' => 'Bàu Bàng',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 64,
                'prefix' => 'Thị xã',
                'name' => 'Bến Cát',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 65,
                'prefix' => 'Huyện',
                'name' => 'Dầu Tiếng',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 66,
                'prefix' => 'Thị xã',
                'name' => 'Dĩ An',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 67,
                'prefix' => 'Huyện',
                'name' => 'Phú Giáo',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 68,
                'prefix' => 'Huyện',
                'name' => 'Tân Uyên',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 69,
                'prefix' => 'Thị xã',
                'name' => 'Thủ Dầu Một',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 70,
                'prefix' => 'Huyện',
                'name' => 'Thuận An',
                'province_id' => 4,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 71,
                'prefix' => 'Thành phố',
                'name' => 'Biên Hòa',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 72,
                'prefix' => 'Huyện',
                'name' => 'Cẩm Mỹ',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 73,
                'prefix' => 'Huyện',
                'name' => 'Định Quán',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 74,
                'prefix' => 'Thị xã',
                'name' => 'Long Khánh',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 75,
                'prefix' => 'Huyện',
                'name' => 'Long Thành',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 76,
                'prefix' => 'Huyện',
                'name' => 'Nhơn Trạch',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 77,
                'prefix' => 'Quận',
                'name' => 'Tân Phú',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 78,
                'prefix' => 'Huyện',
                'name' => 'Thống Nhất',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 79,
                'prefix' => 'Huyện',
                'name' => 'Trảng Bom',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 80,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Cửu',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 81,
                'prefix' => 'Huyện',
                'name' => 'Xuân Lộc',
                'province_id' => 5,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 82,
                'prefix' => 'Huyện',
                'name' => 'Cam Lâm',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 83,
                'prefix' => 'Thành phố',
                'name' => 'Cam Ranh',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 84,
                'prefix' => 'Huyện',
                'name' => 'Diên Khánh',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 85,
                'prefix' => 'Huyện',
                'name' => 'Khánh Sơn',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 86,
                'prefix' => 'Huyện',
                'name' => 'Khánh Vĩnh',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 87,
                'prefix' => 'Thành phố',
                'name' => 'Nha Trang',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 88,
                'prefix' => 'Thị xã',
                'name' => 'Ninh Hòa',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 89,
                'prefix' => 'Huyện',
                'name' => 'Trường Sa',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 90,
                'prefix' => 'Huyện',
                'name' => 'Vạn Ninh',
                'province_id' => 6,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 91,
                'prefix' => 'Huyện',
                'name' => 'An Dương',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            91 => 
            array (
                'id' => 92,
                'prefix' => 'Huyện',
                'name' => 'An Lão',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            92 => 
            array (
                'id' => 93,
                'prefix' => 'Huyện',
                'name' => 'Bạch Long Vĩ',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            93 => 
            array (
                'id' => 94,
                'prefix' => 'Huyện',
                'name' => 'Cát Hải',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            94 => 
            array (
                'id' => 95,
                'prefix' => 'Quận',
                'name' => 'Đồ Sơn',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            95 => 
            array (
                'id' => 96,
                'prefix' => 'Quận',
                'name' => 'Dương Kinh',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            96 => 
            array (
                'id' => 97,
                'prefix' => 'Quận',
                'name' => 'Hải An',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            97 => 
            array (
                'id' => 98,
                'prefix' => 'Quận',
                'name' => 'Hồng Bàng',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            98 => 
            array (
                'id' => 99,
                'prefix' => 'Quận',
                'name' => 'Kiến An',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            99 => 
            array (
                'id' => 100,
                'prefix' => 'Huyện',
                'name' => 'Kiến Thụy',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            100 => 
            array (
                'id' => 101,
                'prefix' => 'Quận',
                'name' => 'Lê Chân',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            101 => 
            array (
                'id' => 102,
                'prefix' => 'Quận',
                'name' => 'Ngô Quyền',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            102 => 
            array (
                'id' => 103,
                'prefix' => 'Huyện',
                'name' => 'Thủy Nguyên',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            103 => 
            array (
                'id' => 104,
                'prefix' => 'Huyện',
                'name' => 'Tiên Lãng',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            104 => 
            array (
                'id' => 105,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Bảo',
                'province_id' => 7,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            105 => 
            array (
                'id' => 106,
                'prefix' => 'Huyện',
                'name' => 'Bến Lức',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            106 => 
            array (
                'id' => 107,
                'prefix' => 'Huyện',
                'name' => 'Cần Đước',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            107 => 
            array (
                'id' => 108,
                'prefix' => 'Huyện',
                'name' => 'Cần Giuộc',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            108 => 
            array (
                'id' => 109,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            109 => 
            array (
                'id' => 110,
                'prefix' => 'Huyện',
                'name' => 'Đức Hòa',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            110 => 
            array (
                'id' => 111,
                'prefix' => 'Huyện',
                'name' => 'Đức Huệ',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            111 => 
            array (
                'id' => 112,
                'prefix' => 'Thị xã',
                'name' => 'Kiến Tường',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            112 => 
            array (
                'id' => 113,
                'prefix' => 'Huyện',
                'name' => 'Mộc Hóa',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            113 => 
            array (
                'id' => 114,
                'prefix' => 'Thành phố',
                'name' => 'Tân An',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            114 => 
            array (
                'id' => 115,
                'prefix' => 'Huyện',
                'name' => 'Tân Hưng',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            115 => 
            array (
                'id' => 116,
                'prefix' => 'Huyện',
                'name' => 'Tân Thạnh',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            116 => 
            array (
                'id' => 117,
                'prefix' => 'Huyện',
                'name' => 'Tân Trụ',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            117 => 
            array (
                'id' => 118,
                'prefix' => 'Huyện',
                'name' => 'Thạnh Hóa',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            118 => 
            array (
                'id' => 119,
                'prefix' => 'Huyện',
                'name' => 'Thủ Thừa',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            119 => 
            array (
                'id' => 120,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Hưng',
                'province_id' => 8,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            120 => 
            array (
                'id' => 121,
                'prefix' => 'Huyện',
                'name' => 'Bắc Trà My',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            121 => 
            array (
                'id' => 122,
                'prefix' => 'Huyện',
                'name' => 'Đại Lộc',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            122 => 
            array (
                'id' => 123,
                'prefix' => 'Huyện',
                'name' => 'Điện Bàn',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            123 => 
            array (
                'id' => 124,
                'prefix' => 'Huyện',
                'name' => 'Đông Giang',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            124 => 
            array (
                'id' => 125,
                'prefix' => 'Huyện',
                'name' => 'Duy Xuyên',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            125 => 
            array (
                'id' => 126,
                'prefix' => 'Huyện',
                'name' => 'Hiệp Đức',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            126 => 
            array (
                'id' => 127,
                'prefix' => 'Thành phố',
                'name' => 'Hội An',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            127 => 
            array (
                'id' => 128,
                'prefix' => 'Huyện',
                'name' => 'Nam Giang',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            128 => 
            array (
                'id' => 129,
                'prefix' => 'Huyện',
                'name' => 'Nam Trà My',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            129 => 
            array (
                'id' => 130,
                'prefix' => 'Huyện',
                'name' => 'Nông Sơn',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            130 => 
            array (
                'id' => 131,
                'prefix' => 'Huyện',
                'name' => 'Núi Thành',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            131 => 
            array (
                'id' => 132,
                'prefix' => 'Huyện',
                'name' => 'Phú Ninh',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            132 => 
            array (
                'id' => 133,
                'prefix' => 'Huyện',
                'name' => 'Phước Sơn',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            133 => 
            array (
                'id' => 134,
                'prefix' => 'Huyện',
                'name' => 'Quế Sơn',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            134 => 
            array (
                'id' => 135,
                'prefix' => 'Thành phố',
                'name' => 'Tam Kỳ',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            135 => 
            array (
                'id' => 136,
                'prefix' => 'Huyện',
                'name' => 'Tây Giang',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            136 => 
            array (
                'id' => 137,
                'prefix' => 'Huyện',
                'name' => 'Thăng Bình',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            137 => 
            array (
                'id' => 138,
                'prefix' => 'Huyện',
                'name' => 'Tiên Phước',
                'province_id' => 9,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            138 => 
            array (
                'id' => 139,
                'prefix' => 'Thị xã',
                'name' => 'Bà Rịa',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            139 => 
            array (
                'id' => 140,
                'prefix' => 'Huyện',
                'name' => 'Châu Đức',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            140 => 
            array (
                'id' => 141,
                'prefix' => 'Huyện',
                'name' => 'Côn Đảo',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            141 => 
            array (
                'id' => 142,
                'prefix' => 'Huyện',
                'name' => 'Đất Đỏ',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            142 => 
            array (
                'id' => 143,
                'prefix' => 'Huyện',
                'name' => 'Long Điền',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            143 => 
            array (
                'id' => 144,
                'prefix' => 'Huyện',
                'name' => 'Tân Thành',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            144 => 
            array (
                'id' => 145,
                'prefix' => 'Thành phố',
                'name' => 'Vũng Tàu',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            145 => 
            array (
                'id' => 146,
                'prefix' => 'Huyện',
                'name' => 'Xuyên Mộc',
                'province_id' => 10,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            146 => 
            array (
                'id' => 147,
                'prefix' => 'Huyện',
                'name' => 'Buôn Đôn',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            147 => 
            array (
                'id' => 148,
                'prefix' => 'Thị xã',
                'name' => 'Buôn Hồ',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            148 => 
            array (
                'id' => 149,
                'prefix' => 'Thành phố',
                'name' => 'Buôn Ma Thuột',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            149 => 
            array (
                'id' => 150,
                'prefix' => 'Huyện',
                'name' => 'Cư Kuin',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            150 => 
            array (
                'id' => 151,
                'prefix' => 'Huyện',
                'name' => 'Cư M\'gar',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            151 => 
            array (
                'id' => 152,
                'prefix' => 'Huyện',
                'name' => 'Ea H\'Leo',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            152 => 
            array (
                'id' => 153,
                'prefix' => 'Huyện',
                'name' => 'Ea Kar',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            153 => 
            array (
                'id' => 154,
                'prefix' => 'Huyện',
                'name' => 'Ea Súp',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            154 => 
            array (
                'id' => 155,
                'prefix' => 'Huyện',
                'name' => 'Krông Ana',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            155 => 
            array (
                'id' => 156,
                'prefix' => 'Huyện',
                'name' => 'Krông Bông',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            156 => 
            array (
                'id' => 157,
                'prefix' => 'Huyện',
                'name' => 'Krông Buk',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            157 => 
            array (
                'id' => 158,
                'prefix' => 'Huyện',
                'name' => 'Krông Năng',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            158 => 
            array (
                'id' => 159,
                'prefix' => 'Huyện',
                'name' => 'Krông Pắc',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            159 => 
            array (
                'id' => 160,
                'prefix' => 'Huyện',
                'name' => 'Lăk',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            160 => 
            array (
                'id' => 161,
                'prefix' => 'Huyện',
                'name' => 'M\'Đrăk',
                'province_id' => 11,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            161 => 
            array (
                'id' => 162,
                'prefix' => 'Huyện',
                'name' => ' Thới Lai',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            162 => 
            array (
                'id' => 163,
                'prefix' => 'Quận',
                'name' => 'Bình Thủy',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            163 => 
            array (
                'id' => 164,
                'prefix' => 'Quận',
                'name' => 'Cái Răng',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            164 => 
            array (
                'id' => 165,
                'prefix' => 'Huyện',
                'name' => 'Cờ Đỏ',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            165 => 
            array (
                'id' => 166,
                'prefix' => 'Quận',
                'name' => 'Ninh Kiều',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            166 => 
            array (
                'id' => 167,
                'prefix' => 'Quận',
                'name' => 'Ô Môn',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            167 => 
            array (
                'id' => 168,
                'prefix' => 'Huyện',
                'name' => 'Phong Điền',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            168 => 
            array (
                'id' => 169,
                'prefix' => 'Quận',
                'name' => 'Thốt Nốt',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            169 => 
            array (
                'id' => 170,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Thạnh',
                'province_id' => 12,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            170 => 
            array (
                'id' => 171,
                'prefix' => 'Huyện',
                'name' => 'Bắc Bình',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            171 => 
            array (
                'id' => 172,
                'prefix' => 'Huyện',
                'name' => 'Đảo Phú Quý',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            172 => 
            array (
                'id' => 173,
                'prefix' => 'Huyện',
                'name' => 'Đức Linh',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            173 => 
            array (
                'id' => 174,
                'prefix' => 'Huyện',
                'name' => 'Hàm Tân',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            174 => 
            array (
                'id' => 175,
                'prefix' => 'Huyện',
                'name' => 'Hàm Thuận Bắc',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            175 => 
            array (
                'id' => 176,
                'prefix' => 'Huyện',
                'name' => 'Hàm Thuận Nam',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            176 => 
            array (
                'id' => 177,
                'prefix' => 'Thị xã',
                'name' => 'La Gi',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            177 => 
            array (
                'id' => 178,
                'prefix' => 'Thành phố',
                'name' => 'Phan Thiết',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            178 => 
            array (
                'id' => 179,
                'prefix' => 'Huyện',
                'name' => 'Tánh Linh',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            179 => 
            array (
                'id' => 180,
                'prefix' => 'Huyện',
                'name' => 'Tuy Phong',
                'province_id' => 13,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            180 => 
            array (
                'id' => 181,
                'prefix' => 'Huyện',
                'name' => 'Bảo Lâm',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            181 => 
            array (
                'id' => 182,
                'prefix' => 'Thành phố',
                'name' => 'Bảo Lộc',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            182 => 
            array (
                'id' => 183,
                'prefix' => 'Huyện',
                'name' => 'Cát Tiên',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            183 => 
            array (
                'id' => 184,
                'prefix' => 'Huyện',
                'name' => 'Đạ Huoai',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            184 => 
            array (
                'id' => 185,
                'prefix' => 'Thành phố',
                'name' => 'Đà Lạt',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            185 => 
            array (
                'id' => 186,
                'prefix' => 'Huyện',
                'name' => 'Đạ Tẻh',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            186 => 
            array (
                'id' => 187,
                'prefix' => 'Huyện',
                'name' => 'Đam Rông',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            187 => 
            array (
                'id' => 188,
                'prefix' => 'Huyện',
                'name' => 'Di Linh',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            188 => 
            array (
                'id' => 189,
                'prefix' => 'Huyện',
                'name' => 'Đơn Dương',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            189 => 
            array (
                'id' => 190,
                'prefix' => 'Huyện',
                'name' => 'Đức Trọng',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            190 => 
            array (
                'id' => 191,
                'prefix' => 'Huyện',
                'name' => 'Lạc Dương',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            191 => 
            array (
                'id' => 192,
                'prefix' => 'Huyện',
                'name' => 'Lâm Hà',
                'province_id' => 14,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            192 => 
            array (
                'id' => 193,
                'prefix' => 'Huyện',
                'name' => 'A Lưới',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            193 => 
            array (
                'id' => 194,
                'prefix' => 'Thành phố',
                'name' => 'Huế',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            194 => 
            array (
                'id' => 195,
                'prefix' => 'Thị xã',
                'name' => 'Hương Thủy',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            195 => 
            array (
                'id' => 196,
                'prefix' => 'Huyện',
                'name' => 'Hương Trà',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            196 => 
            array (
                'id' => 197,
                'prefix' => 'Huyện',
                'name' => 'Nam Đông',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            197 => 
            array (
                'id' => 198,
                'prefix' => 'Huyện',
                'name' => 'Phong Điền',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            198 => 
            array (
                'id' => 199,
                'prefix' => 'Huyện',
                'name' => 'Phú Lộc',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            199 => 
            array (
                'id' => 200,
                'prefix' => 'Huyện',
                'name' => 'Phú Vang',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            200 => 
            array (
                'id' => 201,
                'prefix' => 'Huyện',
                'name' => 'Quảng Điền',
                'province_id' => 15,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            201 => 
            array (
                'id' => 202,
                'prefix' => 'Huyện',
                'name' => 'An Biên',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            202 => 
            array (
                'id' => 203,
                'prefix' => 'Huyện',
                'name' => 'An Minh',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            203 => 
            array (
                'id' => 204,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            204 => 
            array (
                'id' => 205,
                'prefix' => 'Huyện',
                'name' => 'Giang Thành',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            205 => 
            array (
                'id' => 206,
                'prefix' => 'Huyện',
                'name' => 'Giồng Riềng',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            206 => 
            array (
                'id' => 207,
                'prefix' => 'Huyện',
                'name' => 'Gò Quao',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            207 => 
            array (
                'id' => 208,
                'prefix' => 'Thị xã',
                'name' => 'Hà Tiên',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            208 => 
            array (
                'id' => 209,
                'prefix' => 'Huyện',
                'name' => 'Hòn Đất',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            209 => 
            array (
                'id' => 210,
                'prefix' => 'Huyện',
                'name' => 'Kiên Hải',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            210 => 
            array (
                'id' => 211,
                'prefix' => 'Huyện',
                'name' => 'Kiên Lương',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            211 => 
            array (
                'id' => 212,
                'prefix' => 'Huyện',
                'name' => 'Phú Quốc',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            212 => 
            array (
                'id' => 213,
                'prefix' => 'Thành phố',
                'name' => 'Rạch Giá',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            213 => 
            array (
                'id' => 214,
                'prefix' => 'Huyện',
                'name' => 'Tân Hiệp',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            214 => 
            array (
                'id' => 215,
                'prefix' => 'Huyện',
                'name' => 'U minh Thượng',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            215 => 
            array (
                'id' => 216,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Thuận',
                'province_id' => 16,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            216 => 
            array (
                'id' => 217,
                'prefix' => 'Thành phố',
                'name' => 'Bắc Ninh',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            217 => 
            array (
                'id' => 218,
                'prefix' => 'Huyện',
                'name' => 'Gia Bình',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            218 => 
            array (
                'id' => 219,
                'prefix' => 'Huyện',
                'name' => 'Lương Tài',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            219 => 
            array (
                'id' => 220,
                'prefix' => 'Huyện',
                'name' => 'Quế Võ',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            220 => 
            array (
                'id' => 221,
                'prefix' => 'Huyện',
                'name' => 'Thuận Thành',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            221 => 
            array (
                'id' => 222,
                'prefix' => 'Huyện',
                'name' => 'Tiên Du',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            222 => 
            array (
                'id' => 223,
                'prefix' => 'Thị xã',
                'name' => 'Từ Sơn',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            223 => 
            array (
                'id' => 224,
                'prefix' => 'Huyện',
                'name' => 'Yên Phong',
                'province_id' => 17,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            224 => 
            array (
                'id' => 225,
                'prefix' => 'Huyện',
                'name' => 'Ba Chẽ',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            225 => 
            array (
                'id' => 226,
                'prefix' => 'Huyện',
                'name' => 'Bình Liêu',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            226 => 
            array (
                'id' => 227,
                'prefix' => 'Thành phố',
                'name' => 'Cẩm Phả',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            227 => 
            array (
                'id' => 228,
                'prefix' => 'Huyện',
                'name' => 'Cô Tô',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            228 => 
            array (
                'id' => 229,
                'prefix' => 'Huyện',
                'name' => 'Đầm Hà',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            229 => 
            array (
                'id' => 230,
                'prefix' => 'Huyện',
                'name' => 'Đông Triều',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            230 => 
            array (
                'id' => 231,
                'prefix' => 'Thành phố',
                'name' => 'Hạ Long',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            231 => 
            array (
                'id' => 232,
                'prefix' => 'Huyện',
                'name' => 'Hải Hà',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            232 => 
            array (
                'id' => 233,
                'prefix' => 'Huyện',
                'name' => 'Hoành Bồ',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            233 => 
            array (
                'id' => 234,
                'prefix' => 'Thành phố',
                'name' => 'Móng Cái',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            234 => 
            array (
                'id' => 235,
                'prefix' => 'Huyện',
                'name' => 'Quảng Yên',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            235 => 
            array (
                'id' => 236,
                'prefix' => 'Huyện',
                'name' => 'Tiên Yên',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            236 => 
            array (
                'id' => 237,
                'prefix' => 'Thị xã',
                'name' => 'Uông Bí',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            237 => 
            array (
                'id' => 238,
                'prefix' => 'Huyện',
                'name' => 'Vân Đồn',
                'province_id' => 18,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            238 => 
            array (
                'id' => 239,
                'prefix' => 'Huyện',
                'name' => 'Bá Thước',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            239 => 
            array (
                'id' => 240,
                'prefix' => 'Thị xã',
                'name' => 'Bỉm Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            240 => 
            array (
                'id' => 241,
                'prefix' => 'Huyện',
                'name' => 'Cẩm Thủy',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            241 => 
            array (
                'id' => 242,
                'prefix' => 'Huyện',
                'name' => 'Đông Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            242 => 
            array (
                'id' => 243,
                'prefix' => 'Huyện',
                'name' => 'Hà Trung',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            243 => 
            array (
                'id' => 244,
                'prefix' => 'Huyện',
                'name' => 'Hậu Lộc',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            244 => 
            array (
                'id' => 245,
                'prefix' => 'Huyện',
                'name' => 'Hoằng Hóa',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            245 => 
            array (
                'id' => 246,
                'prefix' => 'Huyện',
                'name' => 'Lang Chánh',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            246 => 
            array (
                'id' => 247,
                'prefix' => 'Huyện',
                'name' => 'Mường Lát',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            247 => 
            array (
                'id' => 248,
                'prefix' => 'Huyện',
                'name' => 'Nga Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            248 => 
            array (
                'id' => 249,
                'prefix' => 'Huyện',
                'name' => 'Ngọc Lặc',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            249 => 
            array (
                'id' => 250,
                'prefix' => 'Huyện',
                'name' => 'Như Thanh',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            250 => 
            array (
                'id' => 251,
                'prefix' => 'Huyện',
                'name' => 'Như Xuân',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            251 => 
            array (
                'id' => 252,
                'prefix' => 'Huyện',
                'name' => 'Nông Cống',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            252 => 
            array (
                'id' => 253,
                'prefix' => 'Huyện',
                'name' => 'Quan Hóa',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            253 => 
            array (
                'id' => 254,
                'prefix' => 'Huyện',
                'name' => 'Quan Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            254 => 
            array (
                'id' => 255,
                'prefix' => 'Huyện',
                'name' => 'Quảng Xương',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            255 => 
            array (
                'id' => 256,
                'prefix' => 'Thị xã',
                'name' => 'Sầm Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            256 => 
            array (
                'id' => 257,
                'prefix' => 'Huyện',
                'name' => 'Thạch Thành',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            257 => 
            array (
                'id' => 258,
                'prefix' => 'Thành phố',
                'name' => 'Thanh Hóa',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            258 => 
            array (
                'id' => 259,
                'prefix' => 'Huyện',
                'name' => 'Thiệu Hóa',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            259 => 
            array (
                'id' => 260,
                'prefix' => 'Huyện',
                'name' => 'Thọ Xuân',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            260 => 
            array (
                'id' => 261,
                'prefix' => 'Huyện',
                'name' => 'Thường Xuân',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            261 => 
            array (
                'id' => 262,
                'prefix' => 'Huyện',
                'name' => 'Tĩnh Gia',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            262 => 
            array (
                'id' => 263,
                'prefix' => 'Huyện',
                'name' => 'Triệu Sơn',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            263 => 
            array (
                'id' => 264,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Lộc',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            264 => 
            array (
                'id' => 265,
                'prefix' => 'Huyện',
                'name' => 'Yên Định',
                'province_id' => 19,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            265 => 
            array (
                'id' => 266,
                'prefix' => 'Huyện',
                'name' => 'Anh Sơn',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            266 => 
            array (
                'id' => 267,
                'prefix' => 'Huyện',
                'name' => 'Con Cuông',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            267 => 
            array (
                'id' => 268,
                'prefix' => 'Thị xã',
                'name' => 'Cửa Lò',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            268 => 
            array (
                'id' => 269,
                'prefix' => 'Huyện',
                'name' => 'Diễn Châu',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            269 => 
            array (
                'id' => 270,
                'prefix' => 'Huyện',
                'name' => 'Đô Lương',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            270 => 
            array (
                'id' => 271,
                'prefix' => 'Thị xã',
                'name' => 'Hoàng Mai',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            271 => 
            array (
                'id' => 272,
                'prefix' => 'Huyện',
                'name' => 'Hưng Nguyên',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            272 => 
            array (
                'id' => 273,
                'prefix' => 'Huyện',
                'name' => 'Kỳ Sơn',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            273 => 
            array (
                'id' => 274,
                'prefix' => 'Huyện',
                'name' => 'Nam Đàn',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            274 => 
            array (
                'id' => 275,
                'prefix' => 'Huyện',
                'name' => 'Nghi Lộc',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            275 => 
            array (
                'id' => 276,
                'prefix' => 'Huyện',
                'name' => 'Nghĩa Đàn',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            276 => 
            array (
                'id' => 277,
                'prefix' => 'Huyện',
                'name' => 'Quế Phong',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            277 => 
            array (
                'id' => 278,
                'prefix' => 'Huyện',
                'name' => 'Quỳ Châu',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            278 => 
            array (
                'id' => 279,
                'prefix' => 'Huyện',
                'name' => 'Quỳ Hợp',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            279 => 
            array (
                'id' => 280,
                'prefix' => 'Huyện',
                'name' => 'Quỳnh Lưu',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            280 => 
            array (
                'id' => 281,
                'prefix' => 'Huyện',
                'name' => 'Tân Kỳ',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            281 => 
            array (
                'id' => 282,
                'prefix' => 'Thị xã',
                'name' => 'Thái Hòa',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            282 => 
            array (
                'id' => 283,
                'prefix' => 'Huyện',
                'name' => 'Thanh Chương',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            283 => 
            array (
                'id' => 284,
                'prefix' => 'Huyện',
                'name' => 'Tương Dương',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            284 => 
            array (
                'id' => 285,
                'prefix' => 'Thành phố',
                'name' => 'Vinh',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            285 => 
            array (
                'id' => 286,
                'prefix' => 'Huyện',
                'name' => 'Yên Thành',
                'province_id' => 20,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            286 => 
            array (
                'id' => 287,
                'prefix' => 'Huyện',
                'name' => 'Bình Giang',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            287 => 
            array (
                'id' => 288,
                'prefix' => 'Huyện',
                'name' => 'Cẩm Giàng',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            288 => 
            array (
                'id' => 289,
                'prefix' => 'Thị xã',
                'name' => 'Chí Linh',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            289 => 
            array (
                'id' => 290,
                'prefix' => 'Huyện',
                'name' => 'Gia Lộc',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            290 => 
            array (
                'id' => 291,
                'prefix' => 'Thành phố',
                'name' => 'Hải Dương',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            291 => 
            array (
                'id' => 292,
                'prefix' => 'Huyện',
                'name' => 'Kim Thành',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            292 => 
            array (
                'id' => 293,
                'prefix' => 'Huyện',
                'name' => 'Kinh Môn',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            293 => 
            array (
                'id' => 294,
                'prefix' => 'Huyện',
                'name' => 'Nam Sách',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            294 => 
            array (
                'id' => 295,
                'prefix' => 'Huyện',
                'name' => 'Ninh Giang',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            295 => 
            array (
                'id' => 296,
                'prefix' => 'Huyện',
                'name' => 'Thanh Hà',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            296 => 
            array (
                'id' => 297,
                'prefix' => 'Huyện',
                'name' => 'Thanh Miện',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            297 => 
            array (
                'id' => 298,
                'prefix' => 'Huyện',
                'name' => 'Tứ Kỳ',
                'province_id' => 21,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            298 => 
            array (
                'id' => 299,
                'prefix' => 'Thị xã',
                'name' => 'An Khê',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            299 => 
            array (
                'id' => 300,
                'prefix' => 'Thị xã',
                'name' => 'AYun Pa',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            300 => 
            array (
                'id' => 301,
                'prefix' => 'Huyện',
                'name' => 'Chư Păh',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            301 => 
            array (
                'id' => 302,
                'prefix' => 'Huyện',
                'name' => 'Chư Pưh',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            302 => 
            array (
                'id' => 303,
                'prefix' => 'Huyện',
                'name' => 'Chư Sê',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            303 => 
            array (
                'id' => 304,
                'prefix' => 'Huyện',
                'name' => 'ChưPRông',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            304 => 
            array (
                'id' => 305,
                'prefix' => 'Huyện',
                'name' => 'Đăk Đoa',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            305 => 
            array (
                'id' => 306,
                'prefix' => 'Huyện',
                'name' => 'Đăk Pơ',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            306 => 
            array (
                'id' => 307,
                'prefix' => 'Huyện',
                'name' => 'Đức Cơ',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            307 => 
            array (
                'id' => 308,
                'prefix' => 'Huyện',
                'name' => 'Ia Grai',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            308 => 
            array (
                'id' => 309,
                'prefix' => 'Huyện',
                'name' => 'Ia Pa',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            309 => 
            array (
                'id' => 310,
                'prefix' => 'Huyện',
                'name' => 'KBang',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            310 => 
            array (
                'id' => 311,
                'prefix' => 'Huyện',
                'name' => 'Kông Chro',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            311 => 
            array (
                'id' => 312,
                'prefix' => 'Huyện',
                'name' => 'Krông Pa',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            312 => 
            array (
                'id' => 313,
                'prefix' => 'Huyện',
                'name' => 'Mang Yang',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            313 => 
            array (
                'id' => 314,
                'prefix' => 'Huyện',
                'name' => 'Phú Thiện',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            314 => 
            array (
                'id' => 315,
                'prefix' => 'Thành phố',
                'name' => 'Plei Ku',
                'province_id' => 22,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            315 => 
            array (
                'id' => 316,
                'prefix' => 'Thị xã',
                'name' => 'Bình Long',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            316 => 
            array (
                'id' => 317,
                'prefix' => 'Huyện',
                'name' => 'Bù Đăng',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            317 => 
            array (
                'id' => 318,
                'prefix' => 'Huyện',
                'name' => 'Bù Đốp',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            318 => 
            array (
                'id' => 319,
                'prefix' => 'Huyện',
                'name' => 'Bù Gia Mập',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            319 => 
            array (
                'id' => 320,
                'prefix' => 'Huyện',
                'name' => 'Chơn Thành',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            320 => 
            array (
                'id' => 321,
                'prefix' => 'Huyện',
                'name' => 'Đồng Phú',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            321 => 
            array (
                'id' => 322,
                'prefix' => 'Thị xã',
                'name' => 'Đồng Xoài',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            322 => 
            array (
                'id' => 323,
                'prefix' => 'Huyện',
                'name' => 'Hớn Quản',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            323 => 
            array (
                'id' => 324,
                'prefix' => 'Huyện',
                'name' => 'Lộc Ninh',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            324 => 
            array (
                'id' => 325,
                'prefix' => 'Huyện',
                'name' => 'Phú Riềng',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            325 => 
            array (
                'id' => 326,
                'prefix' => 'Thị xã',
                'name' => 'Phước Long',
                'province_id' => 23,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            326 => 
            array (
                'id' => 327,
                'prefix' => 'Huyện',
                'name' => 'Ân Thi',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            327 => 
            array (
                'id' => 328,
                'prefix' => 'Thành phố',
                'name' => 'Hưng Yên',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            328 => 
            array (
                'id' => 329,
                'prefix' => 'Huyện',
                'name' => 'Khoái Châu',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            329 => 
            array (
                'id' => 330,
                'prefix' => 'Huyện',
                'name' => 'Kim Động',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            330 => 
            array (
                'id' => 331,
                'prefix' => 'Huyện',
                'name' => 'Mỹ Hào',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            331 => 
            array (
                'id' => 332,
                'prefix' => 'Huyện',
                'name' => 'Phù Cừ',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            332 => 
            array (
                'id' => 333,
                'prefix' => 'Huyện',
                'name' => 'Tiên Lữ',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            333 => 
            array (
                'id' => 334,
                'prefix' => 'Huyện',
                'name' => 'Văn Giang',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            334 => 
            array (
                'id' => 335,
                'prefix' => 'Huyện',
                'name' => 'Văn Lâm',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            335 => 
            array (
                'id' => 336,
                'prefix' => 'Huyện',
                'name' => 'Yên Mỹ',
                'province_id' => 24,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            336 => 
            array (
                'id' => 337,
                'prefix' => 'Huyện',
                'name' => 'An Lão',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            337 => 
            array (
                'id' => 338,
                'prefix' => 'Huyện',
                'name' => 'An Nhơn',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            338 => 
            array (
                'id' => 339,
                'prefix' => 'Huyện',
                'name' => 'Hoài Ân',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            339 => 
            array (
                'id' => 340,
                'prefix' => 'Huyện',
                'name' => 'Hoài Nhơn',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            340 => 
            array (
                'id' => 341,
                'prefix' => 'Huyện',
                'name' => 'Phù Cát',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            341 => 
            array (
                'id' => 342,
                'prefix' => 'Huyện',
                'name' => 'Phù Mỹ',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            342 => 
            array (
                'id' => 343,
                'prefix' => 'Thành phố',
                'name' => 'Quy Nhơn',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            343 => 
            array (
                'id' => 344,
                'prefix' => 'Huyện',
                'name' => 'Tây Sơn',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            344 => 
            array (
                'id' => 345,
                'prefix' => 'Huyện',
                'name' => 'Tuy Phước',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            345 => 
            array (
                'id' => 346,
                'prefix' => 'Huyện',
                'name' => 'Vân Canh',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            346 => 
            array (
                'id' => 347,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Thạnh',
                'province_id' => 25,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            347 => 
            array (
                'id' => 348,
                'prefix' => 'Huyện',
                'name' => 'Cái Bè',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            348 => 
            array (
                'id' => 349,
                'prefix' => 'Thị xã',
                'name' => 'Cai Lậy',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            349 => 
            array (
                'id' => 350,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            350 => 
            array (
                'id' => 351,
                'prefix' => 'Huyện',
                'name' => 'Chợ Gạo',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            351 => 
            array (
                'id' => 352,
                'prefix' => 'Thị xã',
                'name' => 'Gò Công',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            352 => 
            array (
                'id' => 353,
                'prefix' => 'Huyện',
                'name' => 'Gò Công Đông',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            353 => 
            array (
                'id' => 354,
                'prefix' => 'Huyện',
                'name' => 'Gò Công Tây',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            354 => 
            array (
                'id' => 355,
                'prefix' => 'Huyện',
                'name' => 'Huyện Cai Lậy',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            355 => 
            array (
                'id' => 356,
                'prefix' => 'Thành phố',
                'name' => 'Mỹ Tho',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            356 => 
            array (
                'id' => 357,
                'prefix' => 'Huyện',
                'name' => 'Tân Phú Đông',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            357 => 
            array (
                'id' => 358,
                'prefix' => 'Huyện',
                'name' => 'Tân Phước',
                'province_id' => 26,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            358 => 
            array (
                'id' => 359,
                'prefix' => 'Huyện',
                'name' => 'Đông Hưng',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            359 => 
            array (
                'id' => 360,
                'prefix' => 'Huyện',
                'name' => 'Hưng Hà',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            360 => 
            array (
                'id' => 361,
                'prefix' => 'Huyện',
                'name' => 'Kiến Xương',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            361 => 
            array (
                'id' => 362,
                'prefix' => 'Huyện',
                'name' => 'Quỳnh Phụ',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            362 => 
            array (
                'id' => 363,
                'prefix' => 'Thành phố',
                'name' => 'Thái Bình',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            363 => 
            array (
                'id' => 364,
                'prefix' => 'Huyện',
                'name' => 'Thái Thuỵ',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            364 => 
            array (
                'id' => 365,
                'prefix' => 'Huyện',
                'name' => 'Tiền Hải',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            365 => 
            array (
                'id' => 366,
                'prefix' => 'Huyện',
                'name' => 'Vũ Thư',
                'province_id' => 27,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            366 => 
            array (
                'id' => 367,
                'prefix' => 'Thành phố',
                'name' => 'Bắc Giang',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            367 => 
            array (
                'id' => 368,
                'prefix' => 'Huyện',
                'name' => 'Hiệp Hòa',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            368 => 
            array (
                'id' => 369,
                'prefix' => 'Huyện',
                'name' => 'Lạng Giang',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            369 => 
            array (
                'id' => 370,
                'prefix' => 'Huyện',
                'name' => 'Lục Nam',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            370 => 
            array (
                'id' => 371,
                'prefix' => 'Huyện',
                'name' => 'Lục Ngạn',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            371 => 
            array (
                'id' => 372,
                'prefix' => 'Huyện',
                'name' => 'Sơn Động',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            372 => 
            array (
                'id' => 373,
                'prefix' => 'Huyện',
                'name' => 'Tân Yên',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            373 => 
            array (
                'id' => 374,
                'prefix' => 'Huyện',
                'name' => 'Việt Yên',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            374 => 
            array (
                'id' => 375,
                'prefix' => 'Huyện',
                'name' => 'Yên Dũng',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            375 => 
            array (
                'id' => 376,
                'prefix' => 'Huyện',
                'name' => 'Yên Thế',
                'province_id' => 28,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            376 => 
            array (
                'id' => 377,
                'prefix' => 'Huyện',
                'name' => 'Cao Phong',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            377 => 
            array (
                'id' => 378,
                'prefix' => 'Huyện',
                'name' => 'Đà Bắc',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            378 => 
            array (
                'id' => 379,
                'prefix' => 'Thành phố',
                'name' => 'Hòa Bình',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            379 => 
            array (
                'id' => 380,
                'prefix' => 'Huyện',
                'name' => 'Kim Bôi',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            380 => 
            array (
                'id' => 381,
                'prefix' => 'Huyện',
                'name' => 'Kỳ Sơn',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            381 => 
            array (
                'id' => 382,
                'prefix' => 'Huyện',
                'name' => 'Lạc Sơn',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            382 => 
            array (
                'id' => 383,
                'prefix' => 'Huyện',
                'name' => 'Lạc Thủy',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            383 => 
            array (
                'id' => 384,
                'prefix' => 'Huyện',
                'name' => 'Lương Sơn',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            384 => 
            array (
                'id' => 385,
                'prefix' => 'Huyện',
                'name' => 'Mai Châu',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            385 => 
            array (
                'id' => 386,
                'prefix' => 'Huyện',
                'name' => 'Tân Lạc',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            386 => 
            array (
                'id' => 387,
                'prefix' => 'Huyện',
                'name' => 'Yên Thủy',
                'province_id' => 29,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            387 => 
            array (
                'id' => 388,
                'prefix' => 'Huyện',
                'name' => 'An Phú',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            388 => 
            array (
                'id' => 389,
                'prefix' => 'Thị xã',
                'name' => 'Châu Đốc',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            389 => 
            array (
                'id' => 390,
                'prefix' => 'Huyện',
                'name' => 'Châu Phú',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            390 => 
            array (
                'id' => 391,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            391 => 
            array (
                'id' => 392,
                'prefix' => 'Huyện',
                'name' => 'Chợ Mới',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            392 => 
            array (
                'id' => 393,
                'prefix' => 'Thành phố',
                'name' => 'Long Xuyên',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            393 => 
            array (
                'id' => 394,
                'prefix' => 'Huyện',
                'name' => 'Phú Tân',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            394 => 
            array (
                'id' => 395,
                'prefix' => 'Thị xã',
                'name' => 'Tân Châu',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            395 => 
            array (
                'id' => 396,
                'prefix' => 'Huyện',
                'name' => 'Thoại Sơn',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            396 => 
            array (
                'id' => 397,
                'prefix' => 'Huyện',
                'name' => 'Tịnh Biên',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            397 => 
            array (
                'id' => 398,
                'prefix' => 'Huyện',
                'name' => 'Tri Tôn',
                'province_id' => 30,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            398 => 
            array (
                'id' => 399,
                'prefix' => 'Huyện',
                'name' => 'Bình Xuyên',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            399 => 
            array (
                'id' => 400,
                'prefix' => 'Huyện',
                'name' => 'Lập Thạch',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            400 => 
            array (
                'id' => 401,
                'prefix' => 'Thị xã',
                'name' => 'Phúc Yên',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            401 => 
            array (
                'id' => 402,
                'prefix' => 'Huyện',
                'name' => 'Sông Lô',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            402 => 
            array (
                'id' => 403,
                'prefix' => 'Huyện',
                'name' => 'Tam Đảo',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            403 => 
            array (
                'id' => 404,
                'prefix' => 'Huyện',
                'name' => 'Tam Dương',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            404 => 
            array (
                'id' => 405,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Tường',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            405 => 
            array (
                'id' => 406,
                'prefix' => 'Thành phố',
                'name' => 'Vĩnh Yên',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            406 => 
            array (
                'id' => 407,
                'prefix' => 'Huyện',
                'name' => 'Yên Lạc',
                'province_id' => 31,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            407 => 
            array (
                'id' => 408,
                'prefix' => 'Huyện',
                'name' => 'Bến Cầu',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            408 => 
            array (
                'id' => 409,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            409 => 
            array (
                'id' => 410,
                'prefix' => 'Huyện',
                'name' => 'Dương Minh Châu',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            410 => 
            array (
                'id' => 411,
                'prefix' => 'Huyện',
                'name' => 'Gò Dầu',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            411 => 
            array (
                'id' => 412,
                'prefix' => 'Huyện',
                'name' => 'Hòa Thành',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            412 => 
            array (
                'id' => 413,
                'prefix' => 'Huyện',
                'name' => 'Tân Biên',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            413 => 
            array (
                'id' => 414,
                'prefix' => 'Huyện',
                'name' => 'Tân Châu',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            414 => 
            array (
                'id' => 415,
                'prefix' => 'Thị xã',
                'name' => 'Tây Ninh',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            415 => 
            array (
                'id' => 416,
                'prefix' => 'Huyện',
                'name' => 'Trảng Bàng',
                'province_id' => 32,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            416 => 
            array (
                'id' => 417,
                'prefix' => 'Huyện',
                'name' => 'Đại Từ',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            417 => 
            array (
                'id' => 418,
                'prefix' => 'Huyện',
                'name' => 'Định Hóa',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            418 => 
            array (
                'id' => 419,
                'prefix' => 'Huyện',
                'name' => 'Đồng Hỷ',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            419 => 
            array (
                'id' => 420,
                'prefix' => 'Huyện',
                'name' => 'Phổ Yên',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            420 => 
            array (
                'id' => 421,
                'prefix' => 'Huyện',
                'name' => 'Phú Bình',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            421 => 
            array (
                'id' => 422,
                'prefix' => 'Huyện',
                'name' => 'Phú Lương',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            422 => 
            array (
                'id' => 423,
                'prefix' => 'Thị xã',
                'name' => 'Sông Công',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            423 => 
            array (
                'id' => 424,
                'prefix' => 'Thành phố',
                'name' => 'Thái Nguyên',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            424 => 
            array (
                'id' => 425,
                'prefix' => 'Huyện',
                'name' => 'Võ Nhai',
                'province_id' => 33,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            425 => 
            array (
                'id' => 426,
                'prefix' => 'Huyện',
                'name' => 'Bắc Hà',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            426 => 
            array (
                'id' => 427,
                'prefix' => 'Huyện',
                'name' => 'Bảo Thắng',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            427 => 
            array (
                'id' => 428,
                'prefix' => 'Huyện',
                'name' => 'Bảo Yên',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            428 => 
            array (
                'id' => 429,
                'prefix' => 'Huyện',
                'name' => 'Bát Xát',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            429 => 
            array (
                'id' => 430,
                'prefix' => 'Thành phố',
                'name' => 'Lào Cai',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            430 => 
            array (
                'id' => 431,
                'prefix' => 'Huyện',
                'name' => 'Mường Khương',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            431 => 
            array (
                'id' => 432,
                'prefix' => 'Huyện',
                'name' => 'Sa Pa',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            432 => 
            array (
                'id' => 433,
                'prefix' => 'Huyện',
                'name' => 'Văn Bàn',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            433 => 
            array (
                'id' => 434,
                'prefix' => 'Huyện',
                'name' => 'Xi Ma Cai',
                'province_id' => 34,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            434 => 
            array (
                'id' => 435,
                'prefix' => 'Huyện',
                'name' => 'Giao Thủy',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            435 => 
            array (
                'id' => 436,
                'prefix' => 'Huyện',
                'name' => 'Hải Hậu',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            436 => 
            array (
                'id' => 437,
                'prefix' => 'Huyện',
                'name' => 'Mỹ Lộc',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            437 => 
            array (
                'id' => 438,
                'prefix' => 'Thành phố',
                'name' => 'Nam Định',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            438 => 
            array (
                'id' => 439,
                'prefix' => 'Huyện',
                'name' => 'Nam Trực',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            439 => 
            array (
                'id' => 440,
                'prefix' => 'Huyện',
                'name' => 'Nghĩa Hưng',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            440 => 
            array (
                'id' => 441,
                'prefix' => 'Huyện',
                'name' => 'Trực Ninh',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            441 => 
            array (
                'id' => 442,
                'prefix' => 'Huyện',
                'name' => 'Vụ Bản',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            442 => 
            array (
                'id' => 443,
                'prefix' => 'Huyện',
                'name' => 'Xuân Trường',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            443 => 
            array (
                'id' => 444,
                'prefix' => 'Huyện',
                'name' => 'Ý Yên',
                'province_id' => 35,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            444 => 
            array (
                'id' => 445,
                'prefix' => 'Huyện',
                'name' => 'Ba Tơ',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            445 => 
            array (
                'id' => 446,
                'prefix' => 'Huyện',
                'name' => 'Bình Sơn',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            446 => 
            array (
                'id' => 447,
                'prefix' => 'Huyện',
                'name' => 'Đức Phổ',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            447 => 
            array (
                'id' => 448,
                'prefix' => 'Huyện',
                'name' => 'Lý Sơn',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            448 => 
            array (
                'id' => 449,
                'prefix' => 'Huyện',
                'name' => 'Minh Long',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            449 => 
            array (
                'id' => 450,
                'prefix' => 'Huyện',
                'name' => 'Mộ Đức',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            450 => 
            array (
                'id' => 451,
                'prefix' => 'Huyện',
                'name' => 'Nghĩa Hành',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            451 => 
            array (
                'id' => 452,
                'prefix' => 'Thành phố',
                'name' => 'Quảng Ngãi',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            452 => 
            array (
                'id' => 453,
                'prefix' => 'Huyện',
                'name' => 'Sơn Hà',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            453 => 
            array (
                'id' => 454,
                'prefix' => 'Huyện',
                'name' => 'Sơn Tây',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            454 => 
            array (
                'id' => 455,
                'prefix' => 'Huyện',
                'name' => 'Sơn Tịnh',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            455 => 
            array (
                'id' => 456,
                'prefix' => 'Huyện',
                'name' => 'Tây Trà',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            456 => 
            array (
                'id' => 457,
                'prefix' => 'Huyện',
                'name' => 'Trà Bồng',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            457 => 
            array (
                'id' => 458,
                'prefix' => 'Huyện',
                'name' => 'Tư Nghĩa',
                'province_id' => 36,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            458 => 
            array (
                'id' => 459,
                'prefix' => 'Huyện',
                'name' => 'Ba Tri',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            459 => 
            array (
                'id' => 460,
                'prefix' => 'Thành phố',
                'name' => 'Bến Tre',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            460 => 
            array (
                'id' => 461,
                'prefix' => 'Huyện',
                'name' => 'Bình Đại',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            461 => 
            array (
                'id' => 462,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            462 => 
            array (
                'id' => 463,
                'prefix' => 'Huyện',
                'name' => 'Chợ Lách',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            463 => 
            array (
                'id' => 464,
                'prefix' => 'Huyện',
                'name' => 'Giồng Trôm',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            464 => 
            array (
                'id' => 465,
                'prefix' => 'Huyện',
                'name' => 'Mỏ Cày Bắc',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            465 => 
            array (
                'id' => 466,
                'prefix' => 'Huyện',
                'name' => 'Mỏ Cày Nam',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            466 => 
            array (
                'id' => 467,
                'prefix' => 'Huyện',
                'name' => 'Thạnh Phú',
                'province_id' => 37,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            467 => 
            array (
                'id' => 468,
                'prefix' => 'Huyện',
                'name' => 'Cư Jút',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            468 => 
            array (
                'id' => 469,
                'prefix' => 'Huyện',
                'name' => 'Dăk GLong',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            469 => 
            array (
                'id' => 470,
                'prefix' => 'Huyện',
                'name' => 'Dăk Mil',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            470 => 
            array (
                'id' => 471,
                'prefix' => 'Huyện',
                'name' => 'Dăk R\'Lấp',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            471 => 
            array (
                'id' => 472,
                'prefix' => 'Huyện',
                'name' => 'Dăk Song',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            472 => 
            array (
                'id' => 473,
                'prefix' => 'Thị xã',
                'name' => 'Gia Nghĩa',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            473 => 
            array (
                'id' => 474,
                'prefix' => 'Huyện',
                'name' => 'Krông Nô',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            474 => 
            array (
                'id' => 475,
                'prefix' => 'Huyện',
                'name' => 'Tuy Đức',
                'province_id' => 38,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            475 => 
            array (
                'id' => 476,
                'prefix' => 'Thành phố',
                'name' => 'Cà Mau',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            476 => 
            array (
                'id' => 477,
                'prefix' => 'Huyện',
                'name' => 'Cái Nước',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            477 => 
            array (
                'id' => 478,
                'prefix' => 'Huyện',
                'name' => 'Đầm Dơi',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            478 => 
            array (
                'id' => 479,
                'prefix' => 'Huyện',
                'name' => 'Năm Căn',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            479 => 
            array (
                'id' => 480,
                'prefix' => 'Huyện',
                'name' => 'Ngọc Hiển',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            480 => 
            array (
                'id' => 481,
                'prefix' => 'Huyện',
                'name' => 'Phú Tân',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            481 => 
            array (
                'id' => 482,
                'prefix' => 'Huyện',
                'name' => 'Thới Bình',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            482 => 
            array (
                'id' => 483,
                'prefix' => 'Huyện',
                'name' => 'Trần Văn Thời',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            483 => 
            array (
                'id' => 484,
                'prefix' => 'Huyện',
                'name' => 'U Minh',
                'province_id' => 39,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            484 => 
            array (
                'id' => 485,
                'prefix' => 'Huyện',
                'name' => 'Bình Minh',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            485 => 
            array (
                'id' => 486,
                'prefix' => 'Quận',
                'name' => 'Bình Tân',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            486 => 
            array (
                'id' => 487,
                'prefix' => 'Huyện',
                'name' => 'Long Hồ',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            487 => 
            array (
                'id' => 488,
                'prefix' => 'Huyện',
                'name' => 'Mang Thít',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            488 => 
            array (
                'id' => 489,
                'prefix' => 'Huyện',
                'name' => 'Tam Bình',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            489 => 
            array (
                'id' => 490,
                'prefix' => 'Huyện',
                'name' => 'Trà Ôn',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            490 => 
            array (
                'id' => 491,
                'prefix' => 'Thành phố',
                'name' => 'Vĩnh Long',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            491 => 
            array (
                'id' => 492,
                'prefix' => 'Huyện',
                'name' => 'Vũng Liêm',
                'province_id' => 40,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            492 => 
            array (
                'id' => 493,
                'prefix' => 'Huyện',
                'name' => 'Gia Viễn',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            493 => 
            array (
                'id' => 494,
                'prefix' => 'Huyện',
                'name' => 'Hoa Lư',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            494 => 
            array (
                'id' => 495,
                'prefix' => 'Huyện',
                'name' => 'Kim Sơn',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            495 => 
            array (
                'id' => 496,
                'prefix' => 'Huyện',
                'name' => 'Nho Quan',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            496 => 
            array (
                'id' => 497,
                'prefix' => 'Thành phố',
                'name' => 'Ninh Bình',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            497 => 
            array (
                'id' => 498,
                'prefix' => 'Thị xã',
                'name' => 'Tam Điệp',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            498 => 
            array (
                'id' => 499,
                'prefix' => 'Huyện',
                'name' => 'Yên Khánh',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            499 => 
            array (
                'id' => 500,
                'prefix' => 'Huyện',
                'name' => 'Yên Mô',
                'province_id' => 41,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        \DB::table('districts')->insert(array (
            0 => 
            array (
                'id' => 501,
                'prefix' => 'Huyện',
                'name' => 'Cẩm Khê',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            1 => 
            array (
                'id' => 502,
                'prefix' => 'Huyện',
                'name' => 'Đoan Hùng',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            2 => 
            array (
                'id' => 503,
                'prefix' => 'Huyện',
                'name' => 'Hạ Hòa',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            3 => 
            array (
                'id' => 504,
                'prefix' => 'Huyện',
                'name' => 'Lâm Thao',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            4 => 
            array (
                'id' => 505,
                'prefix' => 'Huyện',
                'name' => 'Phù Ninh',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            5 => 
            array (
                'id' => 506,
                'prefix' => 'Thị xã',
                'name' => 'Phú Thọ',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            6 => 
            array (
                'id' => 507,
                'prefix' => 'Huyện',
                'name' => 'Tam Nông',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            7 => 
            array (
                'id' => 508,
                'prefix' => 'Huyện',
                'name' => 'Tân Sơn',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            8 => 
            array (
                'id' => 509,
                'prefix' => 'Huyện',
                'name' => 'Thanh Ba',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            9 => 
            array (
                'id' => 510,
                'prefix' => 'Huyện',
                'name' => 'Thanh Sơn',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            10 => 
            array (
                'id' => 511,
                'prefix' => 'Huyện',
                'name' => 'Thanh Thủy',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            11 => 
            array (
                'id' => 512,
                'prefix' => 'Thành phố',
                'name' => 'Việt Trì',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            12 => 
            array (
                'id' => 513,
                'prefix' => 'Huyện',
                'name' => 'Yên Lập',
                'province_id' => 42,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            13 => 
            array (
                'id' => 514,
                'prefix' => 'Huyện',
                'name' => 'Bác Ái',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            14 => 
            array (
                'id' => 515,
                'prefix' => 'Huyện',
                'name' => 'Ninh Hải',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            15 => 
            array (
                'id' => 516,
                'prefix' => 'Huyện',
                'name' => 'Ninh Phước',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            16 => 
            array (
                'id' => 517,
                'prefix' => 'Huyện',
                'name' => 'Ninh Sơn',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            17 => 
            array (
                'id' => 518,
                'prefix' => 'Thành phố',
                'name' => 'Phan Rang - Tháp Chàm',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            18 => 
            array (
                'id' => 519,
                'prefix' => 'Huyện',
                'name' => 'Thuận Bắc',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            19 => 
            array (
                'id' => 520,
                'prefix' => 'Huyện',
                'name' => 'Thuận Nam',
                'province_id' => 43,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            20 => 
            array (
                'id' => 521,
                'prefix' => 'Huyện',
                'name' => 'Đông Hòa',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            21 => 
            array (
                'id' => 522,
                'prefix' => 'Huyện',
                'name' => 'Đồng Xuân',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            22 => 
            array (
                'id' => 523,
                'prefix' => 'Huyện',
                'name' => 'Phú Hòa',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            23 => 
            array (
                'id' => 524,
                'prefix' => 'Huyện',
                'name' => 'Sơn Hòa',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            24 => 
            array (
                'id' => 525,
                'prefix' => 'Thị xã',
                'name' => 'Sông Cầu',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            25 => 
            array (
                'id' => 526,
                'prefix' => 'Huyện',
                'name' => 'Sông Hinh',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            26 => 
            array (
                'id' => 527,
                'prefix' => 'Huyện',
                'name' => 'Tây Hòa',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            27 => 
            array (
                'id' => 528,
                'prefix' => 'Huyện',
                'name' => 'Tuy An',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            28 => 
            array (
                'id' => 529,
                'prefix' => 'Thành phố',
                'name' => 'Tuy Hòa',
                'province_id' => 44,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            29 => 
            array (
                'id' => 530,
                'prefix' => 'Huyện',
                'name' => 'Bình Lục',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            30 => 
            array (
                'id' => 531,
                'prefix' => 'Huyện',
                'name' => 'Duy Tiên',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            31 => 
            array (
                'id' => 532,
                'prefix' => 'Huyện',
                'name' => 'Kim Bảng',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            32 => 
            array (
                'id' => 533,
                'prefix' => 'Huyện',
                'name' => 'Lý Nhân',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            33 => 
            array (
                'id' => 534,
                'prefix' => 'Thành phố',
                'name' => 'Phủ Lý',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            34 => 
            array (
                'id' => 535,
                'prefix' => 'Huyện',
                'name' => 'Thanh Liêm',
                'province_id' => 45,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            35 => 
            array (
                'id' => 536,
                'prefix' => 'Huyện',
                'name' => 'Cẩm Xuyên',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            36 => 
            array (
                'id' => 537,
                'prefix' => 'Huyện',
                'name' => 'Can Lộc',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            37 => 
            array (
                'id' => 538,
                'prefix' => 'Huyện',
                'name' => 'Đức Thọ',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            38 => 
            array (
                'id' => 539,
                'prefix' => 'Thành phố',
                'name' => 'Hà Tĩnh',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            39 => 
            array (
                'id' => 540,
                'prefix' => 'Thị xã',
                'name' => 'Hồng Lĩnh',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            40 => 
            array (
                'id' => 541,
                'prefix' => 'Huyện',
                'name' => 'Hương Khê',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            41 => 
            array (
                'id' => 542,
                'prefix' => 'Huyện',
                'name' => 'Hương Sơn',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            42 => 
            array (
                'id' => 543,
                'prefix' => 'Huyện',
                'name' => 'Kỳ Anh',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            43 => 
            array (
                'id' => 544,
                'prefix' => 'Huyện',
                'name' => 'Lộc Hà',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            44 => 
            array (
                'id' => 545,
                'prefix' => 'Huyện',
                'name' => 'Nghi Xuân',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            45 => 
            array (
                'id' => 546,
                'prefix' => 'Huyện',
                'name' => 'Thạch Hà',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            46 => 
            array (
                'id' => 547,
                'prefix' => 'Huyện',
                'name' => 'Vũ Quang',
                'province_id' => 46,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            47 => 
            array (
                'id' => 548,
                'prefix' => 'Thành phố',
                'name' => 'Cao Lãnh',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            48 => 
            array (
                'id' => 549,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            49 => 
            array (
                'id' => 550,
                'prefix' => 'Thị xã',
                'name' => 'Hồng Ngự',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            50 => 
            array (
                'id' => 551,
                'prefix' => 'Huyện',
                'name' => 'Huyện Cao Lãnh',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            51 => 
            array (
                'id' => 552,
                'prefix' => 'Huyện',
                'name' => 'Huyện Hồng Ngự',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            52 => 
            array (
                'id' => 553,
                'prefix' => 'Huyện',
                'name' => 'Lai Vung',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            53 => 
            array (
                'id' => 554,
                'prefix' => 'Huyện',
                'name' => 'Lấp Vò',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            54 => 
            array (
                'id' => 555,
                'prefix' => 'Thị xã',
                'name' => 'Sa Đéc',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            55 => 
            array (
                'id' => 556,
                'prefix' => 'Huyện',
                'name' => 'Tam Nông',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            56 => 
            array (
                'id' => 557,
                'prefix' => 'Huyện',
                'name' => 'Tân Hồng',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            57 => 
            array (
                'id' => 558,
                'prefix' => 'Huyện',
                'name' => 'Thanh Bình',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            58 => 
            array (
                'id' => 559,
                'prefix' => 'Huyện',
                'name' => 'Tháp Mười',
                'province_id' => 47,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            59 => 
            array (
                'id' => 560,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            60 => 
            array (
                'id' => 561,
                'prefix' => 'Huyện',
                'name' => 'Cù Lao Dung',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            61 => 
            array (
                'id' => 562,
                'prefix' => 'Huyện',
                'name' => 'Kế Sách',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            62 => 
            array (
                'id' => 563,
                'prefix' => 'Huyện',
                'name' => 'Long Phú',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            63 => 
            array (
                'id' => 564,
                'prefix' => 'Huyện',
                'name' => 'Mỹ Tú',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            64 => 
            array (
                'id' => 565,
                'prefix' => 'Huyện',
                'name' => 'Mỹ Xuyên',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            65 => 
            array (
                'id' => 566,
                'prefix' => 'Huyện',
                'name' => 'Ngã Năm',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            66 => 
            array (
                'id' => 567,
                'prefix' => 'Thành phố',
                'name' => 'Sóc Trăng',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            67 => 
            array (
                'id' => 568,
                'prefix' => 'Huyện',
                'name' => 'Thạnh Trị',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            68 => 
            array (
                'id' => 569,
                'prefix' => 'Huyện',
                'name' => 'Trần Đề',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            69 => 
            array (
                'id' => 570,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Châu',
                'province_id' => 48,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            70 => 
            array (
                'id' => 571,
                'prefix' => 'Huyện',
                'name' => 'Đăk Glei',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            71 => 
            array (
                'id' => 572,
                'prefix' => 'Huyện',
                'name' => 'Đăk Hà',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            72 => 
            array (
                'id' => 573,
                'prefix' => 'Huyện',
                'name' => 'Đăk Tô',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            73 => 
            array (
                'id' => 574,
                'prefix' => 'Huyện',
                'name' => 'Ia H\'Drai',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            74 => 
            array (
                'id' => 575,
                'prefix' => 'Huyện',
                'name' => 'Kon Plông',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            75 => 
            array (
                'id' => 576,
                'prefix' => 'Huyện',
                'name' => 'Kon Rẫy',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            76 => 
            array (
                'id' => 577,
                'prefix' => 'Thành phố',
                'name' => 'KonTum',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            77 => 
            array (
                'id' => 578,
                'prefix' => 'Huyện',
                'name' => 'Ngọc Hồi',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            78 => 
            array (
                'id' => 579,
                'prefix' => 'Huyện',
                'name' => 'Sa Thầy',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            79 => 
            array (
                'id' => 580,
                'prefix' => 'Huyện',
                'name' => 'Tu Mơ Rông',
                'province_id' => 49,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            80 => 
            array (
                'id' => 581,
                'prefix' => 'Thị xã',
                'name' => 'Ba Đồn',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            81 => 
            array (
                'id' => 582,
                'prefix' => 'Huyện',
                'name' => 'Bố Trạch',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            82 => 
            array (
                'id' => 583,
                'prefix' => 'Thành phố',
                'name' => 'Đồng Hới',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            83 => 
            array (
                'id' => 584,
                'prefix' => 'Huyện',
                'name' => 'Lệ Thủy',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            84 => 
            array (
                'id' => 585,
                'prefix' => 'Huyện',
                'name' => 'Minh Hóa',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            85 => 
            array (
                'id' => 586,
                'prefix' => 'Huyện',
                'name' => 'Quảng Ninh',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            86 => 
            array (
                'id' => 587,
                'prefix' => 'Huyện',
                'name' => 'Quảng Trạch',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            87 => 
            array (
                'id' => 588,
                'prefix' => 'Huyện',
                'name' => 'Tuyên Hóa',
                'province_id' => 50,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            88 => 
            array (
                'id' => 589,
                'prefix' => 'Huyện',
                'name' => 'Cam Lộ',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            89 => 
            array (
                'id' => 590,
                'prefix' => 'Huyện',
                'name' => 'Đa Krông',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            90 => 
            array (
                'id' => 591,
                'prefix' => 'Huyện',
                'name' => 'Đảo Cồn cỏ',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            91 => 
            array (
                'id' => 592,
                'prefix' => 'Thành phố',
                'name' => 'Đông Hà',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            92 => 
            array (
                'id' => 593,
                'prefix' => 'Huyện',
                'name' => 'Gio Linh',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            93 => 
            array (
                'id' => 594,
                'prefix' => 'Huyện',
                'name' => 'Hải Lăng',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            94 => 
            array (
                'id' => 595,
                'prefix' => 'Huyện',
                'name' => 'Hướng Hóa',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            95 => 
            array (
                'id' => 596,
                'prefix' => 'Thị xã',
                'name' => 'Quảng Trị',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            96 => 
            array (
                'id' => 597,
                'prefix' => 'Huyện',
                'name' => 'Triệu Phong',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            97 => 
            array (
                'id' => 598,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Linh',
                'province_id' => 51,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            98 => 
            array (
                'id' => 599,
                'prefix' => 'Huyện',
                'name' => 'Càng Long',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            99 => 
            array (
                'id' => 600,
                'prefix' => 'Huyện',
                'name' => 'Cầu Kè',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            100 => 
            array (
                'id' => 601,
                'prefix' => 'Huyện',
                'name' => 'Cầu Ngang',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            101 => 
            array (
                'id' => 602,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            102 => 
            array (
                'id' => 603,
                'prefix' => 'Huyện',
                'name' => 'Duyên Hải',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            103 => 
            array (
                'id' => 604,
                'prefix' => 'Huyện',
                'name' => 'Tiểu Cần',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            104 => 
            array (
                'id' => 605,
                'prefix' => 'Huyện',
                'name' => 'Trà Cú',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            105 => 
            array (
                'id' => 606,
                'prefix' => 'Thành phố',
                'name' => 'Trà Vinh',
                'province_id' => 52,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            106 => 
            array (
                'id' => 607,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            107 => 
            array (
                'id' => 608,
                'prefix' => 'Huyện',
                'name' => 'Châu Thành A',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            108 => 
            array (
                'id' => 609,
                'prefix' => 'Huyện',
                'name' => 'Long Mỹ',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            109 => 
            array (
                'id' => 610,
                'prefix' => 'Thị xã',
                'name' => 'Ngã Bảy',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            110 => 
            array (
                'id' => 611,
                'prefix' => 'Huyện',
                'name' => 'Phụng Hiệp',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            111 => 
            array (
                'id' => 612,
                'prefix' => 'Thành phố',
                'name' => 'Vị Thanh',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            112 => 
            array (
                'id' => 613,
                'prefix' => 'Huyện',
                'name' => 'Vị Thủy',
                'province_id' => 53,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            113 => 
            array (
                'id' => 614,
                'prefix' => 'Huyện',
                'name' => 'Bắc Yên',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            114 => 
            array (
                'id' => 615,
                'prefix' => 'Huyện',
                'name' => 'Mai Sơn',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            115 => 
            array (
                'id' => 616,
                'prefix' => 'Huyện',
                'name' => 'Mộc Châu',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            116 => 
            array (
                'id' => 617,
                'prefix' => 'Huyện',
                'name' => 'Mường La',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            117 => 
            array (
                'id' => 618,
                'prefix' => 'Huyện',
                'name' => 'Phù Yên',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            118 => 
            array (
                'id' => 619,
                'prefix' => 'Huyện',
                'name' => 'Quỳnh Nhai',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            119 => 
            array (
                'id' => 620,
                'prefix' => 'Thành phố',
                'name' => 'Sơn La',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            120 => 
            array (
                'id' => 621,
                'prefix' => 'Huyện',
                'name' => 'Sông Mã',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            121 => 
            array (
                'id' => 622,
                'prefix' => 'Huyện',
                'name' => 'Sốp Cộp',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            122 => 
            array (
                'id' => 623,
                'prefix' => 'Huyện',
                'name' => 'Thuận Châu',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            123 => 
            array (
                'id' => 624,
                'prefix' => 'Huyện',
                'name' => 'Vân Hồ',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            124 => 
            array (
                'id' => 625,
                'prefix' => 'Huyện',
                'name' => 'Yên Châu',
                'province_id' => 54,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            125 => 
            array (
                'id' => 626,
                'prefix' => 'Thành phố',
                'name' => 'Bạc Liêu',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            126 => 
            array (
                'id' => 627,
                'prefix' => 'Huyện',
                'name' => 'Đông Hải',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            127 => 
            array (
                'id' => 628,
                'prefix' => 'Huyện',
                'name' => 'Giá Rai',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            128 => 
            array (
                'id' => 629,
                'prefix' => 'Huyện',
                'name' => 'Hòa Bình',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            129 => 
            array (
                'id' => 630,
                'prefix' => 'Huyện',
                'name' => 'Hồng Dân',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            130 => 
            array (
                'id' => 631,
                'prefix' => 'Huyện',
                'name' => 'Phước Long',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            131 => 
            array (
                'id' => 632,
                'prefix' => 'Huyện',
                'name' => 'Vĩnh Lợi',
                'province_id' => 55,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            132 => 
            array (
                'id' => 633,
                'prefix' => 'Huyện',
                'name' => 'Lục Yên',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            133 => 
            array (
                'id' => 634,
                'prefix' => 'Huyện',
                'name' => 'Mù Cang Chải',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            134 => 
            array (
                'id' => 635,
                'prefix' => 'Thị xã',
                'name' => 'Nghĩa Lộ',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            135 => 
            array (
                'id' => 636,
                'prefix' => 'Huyện',
                'name' => 'Trạm Tấu',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            136 => 
            array (
                'id' => 637,
                'prefix' => 'Huyện',
                'name' => 'Trấn Yên',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            137 => 
            array (
                'id' => 638,
                'prefix' => 'Huyện',
                'name' => 'Văn Chấn',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            138 => 
            array (
                'id' => 639,
                'prefix' => 'Huyện',
                'name' => 'Văn Yên',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            139 => 
            array (
                'id' => 640,
                'prefix' => 'Thành phố',
                'name' => 'Yên Bái',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            140 => 
            array (
                'id' => 641,
                'prefix' => 'Huyện',
                'name' => 'Yên Bình',
                'province_id' => 56,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            141 => 
            array (
                'id' => 642,
                'prefix' => 'Huyện',
                'name' => 'Chiêm Hóa',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            142 => 
            array (
                'id' => 643,
                'prefix' => 'Huyện',
                'name' => 'Hàm Yên',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            143 => 
            array (
                'id' => 644,
                'prefix' => 'Huyện',
                'name' => 'Lâm Bình',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            144 => 
            array (
                'id' => 645,
                'prefix' => 'Huyện',
                'name' => 'Na Hang',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            145 => 
            array (
                'id' => 646,
                'prefix' => 'Huyện',
                'name' => 'Sơn Dương',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            146 => 
            array (
                'id' => 647,
                'prefix' => 'Thành phố',
                'name' => 'Tuyên Quang',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            147 => 
            array (
                'id' => 648,
                'prefix' => 'Huyện',
                'name' => 'Yên Sơn',
                'province_id' => 57,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            148 => 
            array (
                'id' => 649,
                'prefix' => 'Huyện',
                'name' => 'Điện Biên',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            149 => 
            array (
                'id' => 650,
                'prefix' => 'Huyện',
                'name' => 'Điện Biên Đông',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            150 => 
            array (
                'id' => 651,
                'prefix' => 'Thành phố',
                'name' => 'Điện Biên Phủ',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            151 => 
            array (
                'id' => 652,
                'prefix' => 'Huyện',
                'name' => 'Mường Ảng',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            152 => 
            array (
                'id' => 653,
                'prefix' => 'Huyện',
                'name' => 'Mường Chà',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            153 => 
            array (
                'id' => 654,
                'prefix' => 'Thị xã',
                'name' => 'Mường Lay',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            154 => 
            array (
                'id' => 655,
                'prefix' => 'Huyện',
                'name' => 'Mường Nhé',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            155 => 
            array (
                'id' => 656,
                'prefix' => 'Huyện',
                'name' => 'Nậm Pồ',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            156 => 
            array (
                'id' => 657,
                'prefix' => 'Huyện',
                'name' => 'Tủa Chùa',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            157 => 
            array (
                'id' => 658,
                'prefix' => 'Huyện',
                'name' => 'Tuần Giáo',
                'province_id' => 58,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            158 => 
            array (
                'id' => 659,
                'prefix' => 'Thị xã',
                'name' => 'Lai Châu',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            159 => 
            array (
                'id' => 660,
                'prefix' => 'Huyện',
                'name' => 'Mường Tè',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            160 => 
            array (
                'id' => 661,
                'prefix' => 'Huyện',
                'name' => 'Nậm Nhùn',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            161 => 
            array (
                'id' => 662,
                'prefix' => 'Huyện',
                'name' => 'Phong Thổ',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            162 => 
            array (
                'id' => 663,
                'prefix' => 'Huyện',
                'name' => 'Sìn Hồ',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            163 => 
            array (
                'id' => 664,
                'prefix' => 'Huyện',
                'name' => 'Tam Đường',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            164 => 
            array (
                'id' => 665,
                'prefix' => 'Huyện',
                'name' => 'Tân Uyên',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            165 => 
            array (
                'id' => 666,
                'prefix' => 'Huyện',
                'name' => 'Than Uyên',
                'province_id' => 59,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            166 => 
            array (
                'id' => 667,
                'prefix' => 'Huyện',
                'name' => 'Bắc Sơn',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            167 => 
            array (
                'id' => 668,
                'prefix' => 'Huyện',
                'name' => 'Bình Gia',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            168 => 
            array (
                'id' => 669,
                'prefix' => 'Huyện',
                'name' => 'Cao Lộc',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            169 => 
            array (
                'id' => 670,
                'prefix' => 'Huyện',
                'name' => 'Chi Lăng',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            170 => 
            array (
                'id' => 671,
                'prefix' => 'Huyện',
                'name' => 'Đình Lập',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            171 => 
            array (
                'id' => 672,
                'prefix' => 'Huyện',
                'name' => 'Hữu Lũng',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            172 => 
            array (
                'id' => 673,
                'prefix' => 'Thành phố',
                'name' => 'Lạng Sơn',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            173 => 
            array (
                'id' => 674,
                'prefix' => 'Huyện',
                'name' => 'Lộc Bình',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            174 => 
            array (
                'id' => 675,
                'prefix' => 'Huyện',
                'name' => 'Tràng Định',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            175 => 
            array (
                'id' => 676,
                'prefix' => 'Huyện',
                'name' => 'Văn Lãng',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            176 => 
            array (
                'id' => 677,
                'prefix' => 'Huyện',
                'name' => 'Văn Quan',
                'province_id' => 60,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            177 => 
            array (
                'id' => 678,
                'prefix' => 'Huyện',
                'name' => 'Bắc Mê',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            178 => 
            array (
                'id' => 679,
                'prefix' => 'Huyện',
                'name' => 'Bắc Quang',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            179 => 
            array (
                'id' => 680,
                'prefix' => 'Huyện',
                'name' => 'Đồng Văn',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            180 => 
            array (
                'id' => 681,
                'prefix' => 'Thành phố',
                'name' => 'Hà Giang',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            181 => 
            array (
                'id' => 682,
                'prefix' => 'Huyện',
                'name' => 'Hoàng Su Phì',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            182 => 
            array (
                'id' => 683,
                'prefix' => 'Huyện',
                'name' => 'Mèo Vạc',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            183 => 
            array (
                'id' => 684,
                'prefix' => 'Huyện',
                'name' => 'Quản Bạ',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            184 => 
            array (
                'id' => 685,
                'prefix' => 'Huyện',
                'name' => 'Quang Bình',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            185 => 
            array (
                'id' => 686,
                'prefix' => 'Huyện',
                'name' => 'Vị Xuyên',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            186 => 
            array (
                'id' => 687,
                'prefix' => 'Huyện',
                'name' => 'Xín Mần',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            187 => 
            array (
                'id' => 688,
                'prefix' => 'Huyện',
                'name' => 'Yên Minh',
                'province_id' => 61,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            188 => 
            array (
                'id' => 689,
                'prefix' => 'Huyện',
                'name' => 'Ba Bể',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            189 => 
            array (
                'id' => 690,
                'prefix' => 'Thị xã',
                'name' => 'Bắc Kạn',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            190 => 
            array (
                'id' => 691,
                'prefix' => 'Huyện',
                'name' => 'Bạch Thông',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            191 => 
            array (
                'id' => 692,
                'prefix' => 'Huyện',
                'name' => 'Chợ Đồn',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            192 => 
            array (
                'id' => 693,
                'prefix' => 'Huyện',
                'name' => 'Chợ Mới',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            193 => 
            array (
                'id' => 694,
                'prefix' => 'Huyện',
                'name' => 'Na Rì',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            194 => 
            array (
                'id' => 695,
                'prefix' => 'Huyện',
                'name' => 'Ngân Sơn',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            195 => 
            array (
                'id' => 696,
                'prefix' => 'Huyện',
                'name' => 'Pác Nặm',
                'province_id' => 62,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            196 => 
            array (
                'id' => 697,
                'prefix' => 'Huyện',
                'name' => 'Bảo Lạc',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            197 => 
            array (
                'id' => 698,
                'prefix' => 'Huyện',
                'name' => 'Bảo Lâm',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            198 => 
            array (
                'id' => 699,
                'prefix' => 'Thị xã',
                'name' => 'Cao Bằng',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            199 => 
            array (
                'id' => 700,
                'prefix' => 'Huyện',
                'name' => 'Hạ Lang',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            200 => 
            array (
                'id' => 701,
                'prefix' => 'Huyện',
                'name' => 'Hà Quảng',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            201 => 
            array (
                'id' => 702,
                'prefix' => 'Huyện',
                'name' => 'Hòa An',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            202 => 
            array (
                'id' => 703,
                'prefix' => 'Huyện',
                'name' => 'Nguyên Bình',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            203 => 
            array (
                'id' => 704,
                'prefix' => 'Huyện',
                'name' => 'Phục Hòa',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            204 => 
            array (
                'id' => 705,
                'prefix' => 'Huyện',
                'name' => 'Quảng Uyên',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            205 => 
            array (
                'id' => 706,
                'prefix' => 'Huyện',
                'name' => 'Thạch An',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            206 => 
            array (
                'id' => 707,
                'prefix' => 'Huyện',
                'name' => 'Thông Nông',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            207 => 
            array (
                'id' => 708,
                'prefix' => 'Huyện',
                'name' => 'Trà Lĩnh',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
            208 => 
            array (
                'id' => 709,
                'prefix' => 'Huyện',
                'name' => 'Trùng Khánh',
                'province_id' => 63,
                'created_at' => NULL,
                'updated_at' => NULL,
            ),
        ));
        
        
    }
}