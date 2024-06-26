<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

     /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

     protected $fillable = [
        'judul',
        'tgl_terbit',
        'nama_penulis',
        'nama_penerbit',
    ];


     public function detil_peminjaman(){
        return $this->hasMany(detil_peminjaman::class);
     }
}
