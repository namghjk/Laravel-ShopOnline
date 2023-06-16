<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('addresses', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id', 36);
            $table->string('title');
            $table->bigInteger('province_id')->length(20)->unsigned();
            $table->bigInteger('district_id')->length(20)->unsigned();
            $table->bigInteger('ward_id')->length(20)->unsigned();
            $table->string('detail_address');
            $table->string('phone_number', 15);
            $table->timestamp('priority');
            $table->timestamps();

            $table->foreign('province_id')->references('id')->on('provinces');
            $table->foreign('district_id')->references('id')->on('districts');
            $table->foreign('ward_id')->references('id')->on('wards');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('addresses');
    }
}
