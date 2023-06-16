<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateImportDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('import_details', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('import_id')->length(20)->unsigned();
            $table->string('product_id', 36);
            $table->integer('quantity');
            $table->decimal('price', 10, 2);
            $table->decimal('total', 10, 2);

            $table->foreign('import_id')->references('id')->on('imports');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('import_details');
    }
}
