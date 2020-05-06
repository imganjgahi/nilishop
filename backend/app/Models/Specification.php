<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Specification extends Model
{

    protected $fillable = [
        'product_id',
        'description',
        'title',
        'user_id'
    ];
    
    public function product()
    {        
        
        return $this->belongsTo(product::class);

    }
}