<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Section
 *
 * @property $id
 * @property $name
 * @property $idiom
 * @property $text
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Section extends Model
{
    
    static $rules = [
		'name' => 'required',
		'idiom' => 'required',
		'text' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name','idiom','text'];



}
