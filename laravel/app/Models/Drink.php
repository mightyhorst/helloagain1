<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    
	public $table = 'drinks';
	public $guarded = [];
	public $fillable = [ 'id',  'title',  'price', ];

	/**
	*
	* ------------------------
	* Relationships
	* ------------------------
	*
	**/
	
}