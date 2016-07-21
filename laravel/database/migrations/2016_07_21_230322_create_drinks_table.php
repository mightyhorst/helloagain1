<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDrinksTable extends Migration
{
    /**
     * Run the migration.
     *
     * @return  void
     */
    public function up()
    {
        Schema::create('drinks', function (Blueprint $table) {
			$table->increments('id');
			$table->string('title');
			$table->integer('price');
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
        Schema::drop('drinks');
    }
}