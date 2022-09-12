<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Product
 *
 * @property $id
 * @property $idiom
 * @property $name
 * @property $description_es
 * @property $description_en
 * @property $status
 * @property $created_at
 * @property $updated_at
 *
 * @property ProductImage[] $productImages
 * @package App
 * @mixin \Illuminate\Database\Eloquent\Builder
 */
class Product extends Model
{
    
    static $rules = [
		'idiom' => 'required',
		'name' => 'required',
		'description_es' => 'required',
		'description_en' => 'required',
		'status' => 'required',
    ];

    protected $perPage = 20;

    /**
     * Attributes that should be mass-assignable.
     *
     * @var array
     */
    protected $fillable = ['idiom','name','description_es','description_en','status'];


    /**
     * @return \Illuminate\Database\Eloquent\Relations\HasMany
     */
    public function productImages()
    {
        return $this->hasMany('App\Models\ProductImage', 'product_id', 'id');
    }
    

}
