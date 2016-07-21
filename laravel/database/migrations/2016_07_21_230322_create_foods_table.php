<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFoodsTable extends Migration
{
    /**
     * Run the migration.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create('foods', function (Blueprint $table) {
			$table->increments('id');
			$table->string('title');
			$table->text('description');
			$table->integer('price');
			$table->string('type');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migration.
     *
     * @return  void
     */
    public function down()
    {
        Schema::drop('foods');
    }
}