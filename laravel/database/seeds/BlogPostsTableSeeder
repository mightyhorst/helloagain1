<?php

use Illuminate\Database\Seeder;
use Illuminate\Database\Eloquent\Model;

class BlogPostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return  void
     */
    public function run()
    {
		DB::table('blog_posts')->truncate();

		DB::table('blog_posts')->insert([
            'id'	=>	'1', 
            'title'	=>	'My First Blog', 
            'body'	=>	'I am writing my first ever blog post. Ever.', 
            'user_id'	=>	'1', 
            ]);


        
    }
}