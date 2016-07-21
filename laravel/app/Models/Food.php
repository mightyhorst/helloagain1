<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    
	public $table = 'food';
	public $guarded = [];
	public $fillable = [ 'id',  'title',  'description',  'price',  'type', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}