<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BlogPost extends Model
{
    
	public $table = 'blog_posts';
	public $guarded = [];
	public $fillable = [ 'id',  'title',  'body',  'user_id', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}