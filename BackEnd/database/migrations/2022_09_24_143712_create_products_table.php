<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->string('id', 36)->primary();
            $table->string('name');
            $table->text('description');
            $table->float('weight');
            $table->string('size');
            $table->string('unit');
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->decimal('price_sale', 10, 2);
            $table->string('category_id', 36);
            $table->string('thumbnail', 255);
            $table->string('slug');
            $table->timestamps();
            $table->string('modified_by', 36);
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
