<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class SocialNetwork
 *
 * @property $id
 * @property $name
 * @property $url
 * @property $logo
 * @property $created_at
 * @property $updated_at
 *
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class SocialNetwork extends Model
{
    
    static $rules = [
		'name' => 'required',
		'url' => 'required',
		'logo' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['name','url','logo'];



}
