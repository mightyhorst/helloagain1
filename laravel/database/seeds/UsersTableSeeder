<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('users')->truncate();

		DB::table('users')->insert([
            'id'	=>	'1', 
            'email'	=>	'dom@kitset.io', 
            'pwd'	=>	'test1234', 
            'first_name'	=>	'Dominic', 
            'last_name'	=>	'Trang', 
            ]);


        DB::table('users')->insert([
            'id'	=>	'2', 
            'email'	=>	'nick@kitset.io', 
            'pwd'	=>	'1234test', 
            'first_name'	=>	'Nick', 
            'last_name'	=>	'Mitchell', 
            ]);


        
    }
}