<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('customer_id', 36);
            $table->string('staff_id', 36);
            $table->decimal('total_price', 10, 2);
            $table->decimal('total_pay', 10, 2);
            $table->string('status', 50);
            $table->string('address', 36);
            $table->text('note');
            $table->integer('discount_id');
            $table->integer('total_quantity');
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('users');
            $table->foreign('staff_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('orders');
    }
}
